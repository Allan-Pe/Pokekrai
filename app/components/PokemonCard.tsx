import type { Pokemon } from "~/lib/api";

interface Props {
    pokemon: Pokemon;
  }
  
  export function PokemonCard({ pokemon }: Props) {
    return (
      <div className="p-4 border rounded-lg shadow-lg text-center">
        <img
          src={pokemon.icon}
          alt={pokemon.name}
          className="mx-auto h-24 w-24 object-contain"
        />
        <h2 className="text-xl font-semibold mt-2">{pokemon.name}</h2>
        <p className="text-sm text-gray-500">#{pokemon.pokedex_id}</p>
        <div className="mt-1 flex justify-center gap-2 flex-wrap">
  {pokemon.type?.map((t) => (
    <div key={t.name} className="flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
      <img src={t.image} alt={t.name} className="h-4 w-4" />
      <span>{t.name}</span>
    </div>
  ))}
</div>

      </div>
    );
  }
  