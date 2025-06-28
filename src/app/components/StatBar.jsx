const StatBar = ({ label, value, max = 255 }) => {
  const percent = Math.min((value / max) * 100, 100);

  const getBarColor = (val) => {
    if (val <= 29) return 'bg-red-500';
    if (val <= 59) return 'bg-orange-500';
    if (val <= 89) return 'bg-yellow-400';
    if (val <= 119) return 'bg-green-500';
    if (val <= 149) return 'bg-green-700';
    return 'bg-blue-500';
  };

  return (
    <div className="mb-1 flex flex-row">
      <div className="w-2/12 flex justify-between text-xs mb-1">
        <span>{label}</span>
      </div>
      <div className="w-10/12 bg-neutral-700 h-4 rounded-full overflow-hidden relative">
        <div
          className={`h-full ${getBarColor(value)} rounded-full transition-all duration-300 flex items-center px-2 text-xs font-semibold text-white`}
          style={{ width: `${percent}%` }}
        >
          <span className="text-xs">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default StatBar;
