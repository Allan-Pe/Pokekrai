const typeColors = {
  feu: 'text-orange-500 border border-orange-500',
  eau: 'text-blue-500 border border-blue-500',
  plante: 'text-green-500 border border-green-500',
  électrik: 'text-yellow-400 border border-yellow-400',
  glace: 'text-cyan-300 border border-cyan-300',
  combat: 'text-red-700 border border-red-700',
  poison: 'text-purple-600 border border-purple-600',
  sol: 'text-yellow-700 border border-yellow-700',
  vol: 'text-sky-400 border border-sky-400',
  psy: 'text-pink-500 border border-pink-500',
  insecte: 'text-lime-600 border border-lime-600',
  roche: 'text-yellow-800 border border-yellow-800',
  spectre: 'text-indigo-700 border border-indigo-700',
  dragon: 'text-indigo-500 border border-indigo-500',
  ténèbres: 'text-gray-700 border border-gray-700',
  acier: 'text-gray-500 border border-gray-500',
  fée: 'text-pink-300 border border-pink-300',
  normal: 'text-gray-300 border border-gray-300',
};

export const useTypeColor = (typeName) => {
  const colorClass = typeColors[typeName.toLowerCase()];
  return colorClass || 'text-white border-neutral-700';
};
