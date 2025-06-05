export default function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
}) {
  const baseStyles =
    'px-4 py-2 rounded-lg font-semibold text-sm transition duration-200';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-700 hover:bg-gray-800 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
