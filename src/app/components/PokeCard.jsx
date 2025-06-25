import { Card, CardContent, Typography, Chip } from '@mui/material';

const PokeCard = ({ pokemon }) => {
  return (
    <div className="bg-neutral-800 text-white rounded-2xl px-4 pb-4 shadow-xl">
      <div className="flex justify-center">
        <img
          src={pokemon.sprites.regular}
          alt={pokemon.name.fr}
          className="h-12 mt-[-15px]"
        />
      </div>
      <div className="text-center mt-2">
        <p className="text-xs text-gray-400">N°{pokemon.pokedex_id}</p>
        <h2 className="text-sm font-semibold">{pokemon.name.fr}</h2>
        <div className="mt-2 flex justify-center gap-2">
        {(pokemon.types || []).map((t) => ( 
            <span
              key={t.name}
              className="bg-orange-600 text-xs px-2 py-1 rounded-full uppercase tracking-wide"
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
