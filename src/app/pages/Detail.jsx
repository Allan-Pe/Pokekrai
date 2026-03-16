import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPokemonsById } from '@/app/services/api';
import BaseCard from '@/app/components/Cards/BaseCard';
import StatsCard from '@/app/components/Cards/Details/StatsCard';
import WeaknessCard from '@/app/components/Cards/Details/WeaknessCard';
import EvolutionCard from '@/app/components/Cards/Details/EvolutionCard';
import GeneralInfoCard from '@/app/components/Cards/Details/GeneralInfoCard';
import DexNumber from '../components/Cards/Details/DexNumber';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

export const Detail = () => {
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonsById(id);
      setPokemon(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="w-3/4 justify-self-center py-10">
      <div className="w-full fixed top-0 left-0 flex justify-between p-4">
        <Button onClick={() => navigate('/')}>Accueil</Button>
        <div className="flex gap-2">
          <Button onClick={() => navigate(`/detail/${pokemon.pokedex_id - 1}`)}>
            {pokemon.pokedex_id - 1}
          </Button>
          <Button onClick={() => navigate(`/detail/${pokemon.pokedex_id + 1}`)}>
            {pokemon.pokedex_id + 1}
          </Button>
        </div>
      </div>
      {pokemon.name ? (
        <h1 className="text-white text-3xl mb-5">
          {pokemon.name.fr} #{pokemon.pokedex_id}
        </h1>
      ) : (
        <h1 className="text-white">Chargement...</h1>
      )}
      <div className="grid grid-cols-8 gap-5">
        <BaseCard className="col-span-2 content-center">
          <img src={pokemon.sprites?.regular} alt={pokemon.name?.fr} />
        </BaseCard>
        <BaseCard className="col-span-2 content-center">
          <img src={pokemon.sprites?.shiny} alt={pokemon.name?.fr} />
        </BaseCard>
        <StatsCard pokemon={pokemon} className="col-span-4"></StatsCard>
        <WeaknessCard pokemon={pokemon} className="col-span-8"></WeaknessCard>
        <EvolutionCard pokemon={pokemon} className="col-span-3"></EvolutionCard>
        <GeneralInfoCard
          pokemon={pokemon}
          className="col-span-3 h-min"
        ></GeneralInfoCard>
        <DexNumber pokemon={pokemon} className="col-span-2 h-min"></DexNumber>
      </div>
    </div>
  );
};
