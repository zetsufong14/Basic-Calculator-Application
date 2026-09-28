import type { CalculatorDisplayProps } from "../types/calculator";

function CalculatorDisplay({ display, expression }: CalculatorDisplayProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col justify-end pb-4.25 text-right">
      <div className="min-h-[1.2em] text-[clamp(24px,7vw,31px)] tracking-[-1px] text-[#8c8c91]">
        {expression || "\u00a0"}
      </div>
      <div
        className="mt-2.5 text-[clamp(52px,14vw,66px)] font-light leading-[0.95] tracking-[-3px]"
        aria-live="polite"
      >
        {display}
      </div>
    </div>
  );
}

export default CalculatorDisplay;
