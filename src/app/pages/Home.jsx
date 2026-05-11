import { useEffect, useState } from 'react';
import { getPokemonsByGen } from '@/app/services/Api';
import PokeCard from '@/app/components/Cards/PokeCard';
import Select from '@/app/components/Select';
import { useNavigate } from 'react-router';

export const Home = () => {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [gen, setGen] = useState('0');
  const [search, setSearch] = useState('');

  const generations = [{ value: '0', label: 'Toutes générations' }];

  for (let i = 1; i <= 9; i++) {
    generations.push({
      value: String(i),
      label: `Génération ${i}`,
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonsByGen(gen);
      setPokemons(data);
    };
    fetchData();
  }, [gen]);

  const filteredPokemons = pokemons.filter((p) =>
    p.name.fr.toLowerCase().includes(search.toLowerCase())
  );

  const handleCardClick = (pokemon) => {
    navigate(`/detail/${pokemon.pokedex_id}`);
  };

  return (
    <div className="min-h-screen">
      <div className="w-3/4 mx-auto">
        <div className="sticky top-0 z-20 bg-neutral-900/80 backdrop-blur-sm py-4 flex items-center gap-4">
          <input
            type="text"
            placeholder="Rechercher"
            className="flex-1 p-2 rounded-md bg-zinc-900 text-white border border-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Select
            options={generations}
            value={gen}
            onChange={setGen}
            className="w-min"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredPokemons.map((pokemon) => (
            <PokeCard
              key={pokemon.pokedex_id}
              pokemon={pokemon}
              onClick={() => handleCardClick(pokemon)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
