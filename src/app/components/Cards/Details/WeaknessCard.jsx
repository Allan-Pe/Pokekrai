import BaseCard from '@/app/components/Cards/BaseCard';
import { useTypeColor } from '@/app/composables/useTypeColors';
import { useMultiplierColor } from '@/app/composables/useMultipliersColors';
import Badge from '@/app/components/Badge';

const WeaknessCard = ({ pokemon, className = '' }) => {
  if (!pokemon?.types || !pokemon?.resistances) return null;

  return (
    <BaseCard
      title="Type"
      secondTitle={`Faiblesses de ${pokemon.name?.fr} aux attaques de type ...`}
      className={className}
    >
      <div className="flex">
        {/* Types column */}
        <div className="flex flex-col gap-2 pt-1">
          {pokemon.types.map((type) => (
            <Badge
              key={type.name}
              label={type.name}
              colorClass={useTypeColor(type.name)}
            />
          ))}
        </div>

        {/* Weaknesses column */}
        <div className="flex-1 flex justify-end">
          <div className="grid grid-cols-6 divide-x divide-neutral-700 text-sm w-max right-0">
            {[0, 1, 2, 3, 4, 5].map((colIndex) => (
              <div key={colIndex} className=" px-2 w-max">
                {pokemon.resistances
                  .filter((_, i) => i % 6 === colIndex)
                  .map((res) => (
                    <div
                      key={res.name + colIndex}
                      className="flex justify-between items-center py-1 w-full gap-2"
                    >
                      <Badge
                        label={res.name}
                        colorClass={useTypeColor(res.name)}
                        className="w-3/4"
                      />
                      <Badge
                        label={res.multiplier}
                        colorClass={useMultiplierColor(res.multiplier)}
                        className="w-1/4"
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default WeaknessCard;
