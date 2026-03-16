import BaseCard from '@/app/components/Cards/BaseCard';

const DexNumber = ({ pokemon, className = '' }) => {
  if (!pokemon?.pokedex_id || !pokemon?.pokedex_id) return null;

  return (
    <BaseCard className={className} title="Numéro de Pokédex">
      <div className="flex flex-col gap-2 text-sm">
        <span>National: #{pokemon.pokedex_id}</span>
      </div>
    </BaseCard>
  );
};

export default DexNumber;
