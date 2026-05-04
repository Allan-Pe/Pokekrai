import BaseCard from '@/app/components/Cards/BaseCard';

const GeneralInfoCard = ({ pokemon, className = '' }) => {
  if (!pokemon?.category || !pokemon?.sexe) return null;

  return (
    <BaseCard className={className} title="Statistiques de base">
      <div className="flex flex-col gap-2 text-sm">
        <div className="w-full justify-between flex">
          <span>Espèce : </span> <span> {pokemon.category}</span>
        </div>

        <div className="w-full justify-between flex">
          <span>Genre : </span>
          <span>
            ♂{pokemon.sexe.male}% ♀{pokemon.sexe.female}%
          </span>
        </div>

        <div className="w-full justify-between flex">
          <span>Taux de capture : </span> <span> {pokemon.capture_rate}%</span>
        </div>

        <div className="w-full justify-between flex">
          <span>Taille : </span> <span> {pokemon.height}m</span>
        </div>

        <div className="w-full justify-between flex">
          <span>Poids : </span> <span> {pokemon.weight}kg</span>
        </div>
      </div>
    </BaseCard>
  );
};

export default GeneralInfoCard;
