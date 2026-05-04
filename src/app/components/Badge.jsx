const Badge = ({ label, colorClass = '', className = '' }) => {
  return (
    <span
      className={`text-xs rounded-sm py-1 px-2 flex justify-center ${colorClass} ${className}`}
    >
      {label}
    </span>
  );
};

export default Badge;
