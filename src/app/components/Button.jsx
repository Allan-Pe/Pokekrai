export default function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
}) {
  const baseStyles =
    'px-4 py-2 rounded-lg font-semibold text-sm transition duration-200 hover:cursor-pointer';
  const variants = {
    primary: 'bg-red-700 hover:bg-red-800 text-white',
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
