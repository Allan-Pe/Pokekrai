const typeColors = {
  fire: 'text-orange-500 border border-orange-500',
  water: 'text-blue-500 border border-blue-500',
  grass: 'text-green-500 border border-green-500',
  electric: 'text-yellow-400 border border-yellow-400',
  ice: 'text-cyan-300 border border-cyan-300',
  fighting: 'text-red-700 border border-red-700',
  poison: 'text-purple-600 border border-purple-600',
  ground: 'text-yellow-700 border border-yellow-700',
  flying: 'text-sky-400 border border-sky-400',
  psychic: 'text-pink-500 border border-pink-500',
  bug: 'text-lime-600 border border-lime-600',
  rock: 'text-yellow-800 border border-yellow-800',
  ghost: 'text-indigo-700 border border-indigo-700',
  dragon: 'text-indigo-500 border border-indigo-500',
  dark: 'text-gray-700 border border-gray-700',
  steel: 'text-gray-500 border border-gray-500',
  fairy: 'text-pink-300 border border-pink-300',
  normal: 'text-gray-300 border border-gray-300',
};

export const useTypeColor = (typeName) => {
  const colorClass = typeColors[typeName.toLowerCase()];
  return colorClass || 'text-white border-neutral-700';
};
