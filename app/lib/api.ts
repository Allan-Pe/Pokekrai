import axios from "axios";

export interface Pokemon {
    pokedex_id: number;
    name: string;
    type: {
      name: string;
      image: string;
    }[];
    icon: string;
    url: string;
  }
  

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await axios.get("https://tyradex.vercel.app/api/v1/pokemon");
  const data = Object.values(response.data);

  return data.map((pokemon: any) => ({
    pokedex_id: pokemon.pokedex_id,
    name: pokemon.name.fr,
    type: pokemon.types,
    icon: pokemon.sprites.regular,
    url: `https://tyradex.vercel.app/api/v1/pokemon/${pokemon.id}`,
  }));
}
