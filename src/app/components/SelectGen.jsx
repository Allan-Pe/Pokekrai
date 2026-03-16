import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const SelectGen = ({ options = [], value, onChange, className = '' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 text-white border border-gray-700 hover:border-gray-500 transition-colors w-full"
      >
        <span className="whitespace-nowrap">
          {selected?.label ?? 'Sélectionner'}
        </span>
        <ChevronDown
          size={16}
          className={`ml-auto transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full min-w-max rounded-md bg-zinc-900 border border-gray-700 shadow-lg overflow-hidden">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer text-white hover:bg-zinc-700 transition-colors ${
                option.value === value ? 'bg-zinc-700 font-medium' : ''
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectGen;
