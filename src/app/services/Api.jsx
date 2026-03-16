import axios from 'axios';

const BASE_URL = 'https://tyradex.app/api/v1';

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

export const getPokemonsById = async (id) => {
  try {
    const url = `${BASE_URL}/pokemon/${id}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error('Erreur lors du chargement des Pokémon:', error);
    return [];
  }
};

export const getEvolution = async (pokemonId) => {
  const BASE_URL = 'https://tyradex.app/api/v1/pokemon/';
  const visited = new Set();

  const buildNode = (name, sprite, condition = null, type = 'normal') => ({
    name,
    sprite,
    condition,
    type,
    children: [],
  });

  const fetchData = async (id) => {
    const res = await fetch(`${BASE_URL}${id}`);
    if (!res.ok) return null;
    return res.json();
  };

  const findRootPokemonId = async (id) => {
    let currentId = id;
    let data = await fetchData(currentId);
    if (!data) return id;

    while (data.evolution?.pre?.length) {
      currentId = data.evolution.pre[0].pokedex_id;
      data = await fetchData(currentId);
    }

    return currentId;
  };

  const buildTreeFrom = async (id, fromCondition = null) => {
    if (visited.has(id)) return null;
    visited.add(id);

    const data = await fetchData(id);
    if (!data) return null;

    const current = buildNode(
      data.name.fr,
      data.sprites.regular,
      fromCondition
    );

    if (data.evolution?.next?.length) {
      for (const next of data.evolution.next) {
        const child = await buildTreeFrom(next.pokedex_id, next.condition);
        if (child) current.children.push(child);
      }
    }

    if (data.evolution?.mega?.length) {
      const megas = data.evolution.mega.map((m) =>
        buildNode(
          `${data.name.fr} ${m.orbe}`,
          m.sprites.regular,
          `Méga-Évolution (${m.orbe})`,
          'mega'
        )
      );
      current.children.push(...megas);
    }

    return current;
  };

  const rootId = await findRootPokemonId(pokemonId);

  const tree = await buildTreeFrom(rootId);

  return tree ? [tree] : [];
};
