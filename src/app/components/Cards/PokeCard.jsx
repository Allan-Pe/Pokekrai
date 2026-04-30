import BaseCard from '@/app/components/Cards/BaseCard';

const PokeCard = ({ pokemon, onClick }) => {
  return (
    <BaseCard
      onClick={onClick}
      className="cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-neutral-700"
    >
      <div className="flex justify-center">
        <img
          src={pokemon.sprites.regular}
          alt={pokemon.name.fr}
          className="h-14 mt-[-15px]"
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
    </BaseCard>
  );
};

export default PokeCard;
