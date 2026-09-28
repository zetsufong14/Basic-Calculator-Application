import type { IconType } from "react-icons";

export type CalculatorButton = {
  label?: string;
  action?: string;
  icon?: IconType;
  className: string;
  type?: "number" | "operator" | "action";
};

export type CalculatorDisplayProps = {
  display: string;
  expression: string;
};

export type CalculatorKeypadProps = {
  onButtonClick: (label: string) => void;
};

export type CalculatorToolbarProps = {
  isHistoryOpen: boolean;
  onHistoryToggle: () => void;
};

export type HistoryPanelProps = {
  history: string[];
  onClear: () => void;
};
