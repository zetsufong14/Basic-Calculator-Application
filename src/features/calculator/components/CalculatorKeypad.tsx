import { calculatorData } from "../data/calculatorData";
import type { CalculatorKeypadProps } from "../types/calculator";

function CalculatorKeypad({ onButtonClick }: CalculatorKeypadProps) {
  return (
    <div className="grid shrink-0 grid-cols-4 gap-2.25 max-sm:gap-1.25">
      {calculatorData.map((button, index) => {
        const Icon = button.icon;
        const buttonValue = button.action ?? button.label ?? "";

        return (
          <button
            className={`grid aspect-square place-items-center rounded-full border border-[#454545] text-[27px] font-light transition hover:brightness-125 ${button.className}`}
            key={`${buttonValue}-${index}`}
            onClick={() => onButtonClick(buttonValue)}
            type="button"
          >
            {Icon ? <Icon aria-hidden="true" /> : button.label}
          </button>
        );
      })}
    </div>
  );
}

export default CalculatorKeypad;
