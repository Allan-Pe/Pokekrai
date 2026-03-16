import { useEffect, useState } from 'react';
import BaseCard from '@/app/components/Cards/BaseCard';
import { getEvolution } from '@/app/services/Api';

const EvolutionBranch = ({ node }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {node.condition && (
        <div className="w-full flex flex-col gap-2">
          <hr className="border-t-2 border-neutral-700 w-full" />
          <span className="text-xs text-gray-500">{node.condition}</span>
          <hr className="border-t-2 border-neutral-700 w-full" />
        </div>
      )}

      <img src={node.sprite} alt={node.name} className="w-16 h-16" />
      <span className="font-bold">{node.name}</span>

      {node.children?.length > 0 && (
        <div
          className={
            node.children.length === 1
              ? 'flex flex-col items-center mt-2'
              : node.children.length > 4
                ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2'
                : 'grid grid-cols-2 gap-4 mt-2'
          }
        >
          {node.children.map((child, index) => (
            <EvolutionBranch key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const EvolutionCard = ({ pokemon, className = '' }) => {
  const [evolutionData, setEvolutionData] = useState([]);

  useEffect(() => {
    const fetchEvolution = async () => {
      try {
        const data = await getEvolution(pokemon.pokedex_id);
        setEvolutionData(data);
      } catch (err) {
        console.error('Erreur getEvolution:', err);
      }
    };

    if (pokemon?.pokedex_id) {
      fetchEvolution();
    }
  }, [pokemon?.pokedex_id]);

  if (!evolutionData.length) return null;

  return (
    <BaseCard className={className} title="Évolution">
      <div className="flex flex-wrap gap-4 justify-center">
        {evolutionData.map((root, index) => (
          <EvolutionBranch key={index} node={root} />
        ))}
      </div>
    </BaseCard>
  );
};

export default EvolutionCard;
