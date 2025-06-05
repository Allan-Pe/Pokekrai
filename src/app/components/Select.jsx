export default function Select({
  label,
  options = [],
  value,
  onChange,
  className = '',
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-red-800 text-sm text-white rounded-lg px-3 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 hover:cursor-pointer hover:border-white">
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
