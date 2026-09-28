import { useState } from "react";
import {
  calculate,
  formatResult,
  operators,
  type Operator,
} from "../utils/calculatorOperations";

export function useCalculator() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [pendingOperator, setPendingOperator] = useState<Operator | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const resetCalculator = () => {
    setDisplay("0");
    setExpression("");
    setPreviousValue(null);
    setPendingOperator(null);
    setWaitingForOperand(false);
  };

  const handleButtonClick = (label: string) => {
    if (/^\d$/.test(label)) {
      setDisplay((currentDisplay) => {
        if (waitingForOperand || currentDisplay === "0" || currentDisplay === "Error") {
          return label;
        }

        return `${currentDisplay}${label}`;
      });
      setWaitingForOperand(false);
      return;
    }

    if (label === "." && !display.includes(".") && display !== "Error") {
      setDisplay((currentDisplay) =>
        waitingForOperand ? "0." : `${currentDisplay}.`,
      );
      setWaitingForOperand(false);
      return;
    }

    if (label === "AC") {
      resetCalculator();
      return;
    }

    if (label === "backspace") {
      setDisplay((currentDisplay) =>
        currentDisplay.length > 1 && currentDisplay !== "Error"
          ? currentDisplay.slice(0, -1)
          : "0",
      );
      return;
    }

    if (label === "%" && display !== "Error") {
      const currentValue = Number(display);

      if (Number.isNaN(currentValue)) {
        return;
      }

      const percentage =
        previousValue !== null && pendingOperator
          ? pendingOperator === "+" || pendingOperator === "−"
            ? (previousValue * currentValue) / 100
            : currentValue / 100
          : currentValue / 100;

      setDisplay(formatResult(percentage));
      setWaitingForOperand(false);
      return;
    }

    if (label === "+/−" && display !== "Error" && display !== "0") {
      setDisplay((currentDisplay) =>
        currentDisplay.startsWith("-")
          ? currentDisplay.slice(1)
          : `-${currentDisplay}`,
      );
      return;
    }

    if (operators.includes(label as Operator)) {
      const selectedOperator = label as Operator;
      const currentValue = Number(display);

      if (Number.isNaN(currentValue) || display === "Error") {
        return;
      }

      if (pendingOperator && previousValue !== null && !waitingForOperand) {
        const result = calculate(previousValue, currentValue, pendingOperator);

        if (result === null) {
          setDisplay("Error");
          setPreviousValue(null);
          setPendingOperator(null);
          return;
        }

        setDisplay(formatResult(result));
        setPreviousValue(result);
        setExpression(`${formatResult(result)} ${selectedOperator}`);
      } else {
        setPreviousValue(currentValue);
        setExpression(`${display} ${selectedOperator}`);
      }

      setPendingOperator(selectedOperator);
      setWaitingForOperand(true);
      return;
    }

    if (label === "=" && pendingOperator && previousValue !== null) {
      const currentValue = Number(display);
      const result = calculate(previousValue, currentValue, pendingOperator);

      if (result === null) {
        setDisplay("Error");
        setExpression(`${previousValue} ${pendingOperator} ${display}`);
      } else {
        const formattedResult = formatResult(result);
        const completedExpression = `${previousValue} ${pendingOperator} ${display} = ${formattedResult}`;

        setDisplay(formattedResult);
        setExpression(`${previousValue} ${pendingOperator} ${display} =`);
        setHistory((currentHistory) => [completedExpression, ...currentHistory]);
      }

      setPreviousValue(null);
      setPendingOperator(null);
      setWaitingForOperand(true);
    }
  };

  const clearHistory = () => setHistory([]);

  return { display, expression, history, clearHistory, handleButtonClick };
}
