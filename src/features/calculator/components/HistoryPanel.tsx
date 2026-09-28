import type { HistoryPanelProps } from "../types/calculator";

function HistoryPanel({ history, onClear }: HistoryPanelProps) {
  return (
    <div className="absolute left-5 right-5 top-20 z-10 rounded-2xl border border-[#3a3a3a] bg-[#171717] p-3 shadow-xl">
      <div className="mb-2 flex items-center justify-between text-xs text-[#aaa]">
        <span>History</span>
        <button className="text-[#ff9f0a]" onClick={onClear} type="button">
          Clear
        </button>
      </div>
      <div className="max-h-32 overflow-y-auto text-right text-sm">
        {history.length > 0 ? (
          history.map((item, index) => (
            <div className="border-t border-[#303030] py-1.5" key={`${item}-${index}`}>
              {item}
            </div>
          ))
        ) : (
          <div className="border-t border-[#303030] py-2 text-[#777]">
            No calculations
          </div>
        )}
      </div>
    </div>
  );
}

export default HistoryPanel;
