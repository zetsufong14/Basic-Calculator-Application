import {
  MdBatteryFull,
  MdCalculate,
  MdHistory,
  MdSignalCellularAlt,
  MdWifi,
} from "react-icons/md";
import type { CalculatorToolbarProps } from "../types/calculator";

function CalculatorToolbar({
  isHistoryOpen,
  onHistoryToggle,
}: CalculatorToolbarProps) {
  return (
    <>
      <div className="flex items-center justify-between px-5 text-[13px] font-bold">
        <span>9:41</span>
        <div className="flex items-center gap-2 text-[15px]" aria-hidden="true">
          <MdSignalCellularAlt />
          <MdWifi className="text-[17px]" />
          <MdBatteryFull className="text-[19px]" />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <button
          className="grid h-9 w-9 place-content-center rounded-full border border-[#343434] bg-[#181818]"
          aria-label="History"
          aria-expanded={isHistoryOpen}
          onClick={onHistoryToggle}
          type="button"
        >
          <MdHistory className="text-[21px] text-[#ddd]" aria-hidden="true" />
        </button>
        <button
          className="grid h-9 w-9 place-content-center rounded-full border border-[#343434] bg-[#181818]"
          aria-label="Calculator mode"
          type="button"
        >
          <MdCalculate className="text-[20px] text-[#ddd]" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}

export default CalculatorToolbar;
