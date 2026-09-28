export type Operator = "+" | "−" | "×" | "÷";

export const operators: Operator[] = ["+", "−", "×", "÷"];

export function calculate(left: number, right: number, operator: Operator) {
  switch (operator) {
    case "+":
      return left + right;
    case "−":
      return left - right;
    case "×":
      return left * right;
    case "÷":
      return right === 0 ? null : left / right;
  }
}

export function formatResult(value: number) {
  return Number(value.toFixed(10)).toString();
}
