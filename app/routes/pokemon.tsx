import { useEffect, useState } from "react";
import { PokemonCard } from "~/components/PokemonCard";
import { SearchBar } from "~/components/SearchBar";
import { fetchPokemons, type Pokemon } from "~/lib/api";

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPokemons()
      .then((data) => {
        setPokemons(data);
        setFilteredPokemons(data);
      })
      .catch((err) => console.error("Erreur API", err));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setSearchQuery(q);

    if (!pokemons) return;

    const filtered = pokemons.filter((p) =>
      p.name.toLowerCase().includes(q.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

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
      <SearchBar query={searchQuery} onSearch={handleSearch} />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((p) =>  <PokemonCard key={p.pokedex_id} pokemon={p} />)
        ) : (
          <p className="text-center col-span-full">Aucun Pokémon trouvé</p>
        )}
      </div>
    </div>
  );
}
