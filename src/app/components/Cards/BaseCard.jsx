const BaseCard = ({
  title,
  secondTitle,
  children,
  onClick,
  className = '',
}) => {
  return (
    <div
      className={`bg-neutral-800 text-white rounded-2xl px-4 pb-4 shadow-xl w-full ${className}`}
      onClick={onClick}
    >
      {title && (
        <div className="text-lg font-semibold pt-4">
          <div className="flex flex-row justify-between w-full">
            <span className="px-4 w-full">{title}</span>
            {secondTitle && (
              <span className="w-3/4 text-right">{secondTitle}</span>
            )}
          </div>
          <hr className="mt-4 border-t-2 border-neutral-700 w-full" />
        </div>
      )}
      <div className="px-4 mt-2">{children}</div>
    </div>
  );
};

export default BaseCard;
