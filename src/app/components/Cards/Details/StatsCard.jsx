import BaseCard from '@/app/components/Cards/BaseCard';
import StatBar from '@/app/components/StatBar';

const StatsCard = ({ pokemon, className = '' }) => {
  if (!pokemon?.stats) return null;

  const stats = pokemon.stats;

  return (
    <BaseCard className={className} title="Statistiques de base">
      <div className="flex flex-col gap-2 text-sm">
        <StatBar label="PV" value={stats.hp} />
        <StatBar label="ATK" value={stats.atk} />
        <StatBar label="DEF" value={stats.def} />
        <StatBar label="ATK SPE" value={stats.spe_atk} />
        <StatBar label="DEF SPE" value={stats.spe_def} />
        <StatBar label="VIT" value={stats.vit} />
      </div>
    </BaseCard>
  );
};

export default StatsCard;
