import { MdBackspace } from "react-icons/md";
import type { CalculatorButton } from "../types/calculator";

export const calculatorData: CalculatorButton[] = [
  { action: "backspace", icon: MdBackspace, className: "bg-[#5b5b5d] text-[27px]" },
  { label: "AC", className: "bg-[#5b5b5d]" },
  { label: "%", className: "bg-[#5b5b5d]" },
  { label: "÷", className: "bg-[#ff9f0a] text-[34px]" },
  { label: "7", className: "bg-[#292929]" },
  { label: "8", className: "bg-[#292929]" },
  { label: "9", className: "bg-[#292929]" },
  { label: "×", className: "bg-[#ff9f0a] text-[33px]" },
  { label: "4", className: "bg-[#292929]" },
  { label: "5", className: "bg-[#292929]" },
  { label: "6", className: "bg-[#292929]" },
  { label: "−", className: "bg-[#ff9f0a] text-[33px]" },
  { label: "1", className: "bg-[#292929]" },
  { label: "2", className: "bg-[#292929]" },
  { label: "3", className: "bg-[#292929]" },
  { label: "+", className: "bg-[#ff9f0a] text-[33px]" },
  { label: "+/−", className: "bg-[#292929] text-[23px]" },
  { label: "0", className: "bg-[#292929]" },
  { label: ".", className: "bg-[#292929]" },
  { label: "=", className: "bg-[#ff9f0a] text-[33px]" },
];
