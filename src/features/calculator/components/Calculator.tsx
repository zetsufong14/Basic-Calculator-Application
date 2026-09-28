
import { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeypad from "./CalculatorKeypad";
import CalculatorToolbar from "./CalculatorToolbar";
import HistoryPanel from "./HistoryPanel";
import { useCalculator } from "../hooks/useCalculator";

const Calculator = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const { display, expression, history, clearHistory, handleButtonClick } = useCalculator();

  return (
    <div className="calculator-page grid min-h-dvh place-items-center bg-[#d9d9d9] p-3">
      <section className="calculator-shell relative flex flex-col overflow-hidden border-[5px] border-[#c8c8cb] bg-black px-5 pb-5 pt-6 text-white shadow-2xl">
        <CalculatorToolbar
          isHistoryOpen={isHistoryOpen}
          onHistoryToggle={() => setIsHistoryOpen((isOpen) => !isOpen)}
        />

        {isHistoryOpen && (
          <HistoryPanel history={history} onClear={clearHistory} />
        )}

        <CalculatorDisplay display={display} expression={expression} />
        <CalculatorKeypad onButtonClick={handleButtonClick} />
      </section>
    </div>
  );
};

export default Calculator;
