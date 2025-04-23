import { useEffect, useState } from "react";
import axios from "axios";

// Interface pour un Pokémon
interface Pokemon {
  name: string;
  url: string;
}

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Récupération des Pokémon depuis l'API Tyradex
  const fetchPokemons = async () => {
    try {
      const response = await axios.get("https://tyradex.vercel.app/api/v1/pokemon");
      const data = Object.values(response.data); // Convertir l'objet en tableau

      const formatted = data.map((pokemon: any) => ({
        name: pokemon.name.fr,
        url: `https://tyradex.vercel.app/api/v1/pokemon/${pokemon.id}`,
      }));

      setPokemons(formatted);
      setFilteredPokemons(formatted);
    } catch (error) {
      console.error("Erreur lors de la récupération des Pokémon", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  // Filtrer les Pokémon en fonction de la recherche
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (!pokemons) return;

    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  // Affichage conditionnel pour éviter les problèmes de hydration
  if (!pokemons) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl">Chargement des Pokémon...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Liste des Pokémon</h1>

      {/* Barre de recherche */}
      <div className="mt-4 text-center">
        <input
          type="text"
          placeholder="Rechercher un Pokémon..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border rounded-lg w-full max-w-md mx-auto"
        />
      </div>

      {/* Liste des Pokémon */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <div key={pokemon.name} className="p-4 border rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-semibold">{pokemon.name}</h2>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">Aucun Pokémon trouvé</p>
        )}
      </div>
    </div>
  );
}
