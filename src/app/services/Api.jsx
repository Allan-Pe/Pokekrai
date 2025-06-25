import axios from 'axios';

const BASE_URL = 'https://tyradex.vercel.app/api/v1';

export const getPokemonsByGen = async (gen = '0') => {
  try {
    const url = gen === '0' ? `${BASE_URL}/pokemon` : `${BASE_URL}/gen/${gen}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error('Erreur lors du chargement des Pokémon:', error);
    return [];
  }
};
