export const useMultiplierColor = (multiplier) => {
  switch (multiplier) {
    case 0:
    case 0.25:
    case 0.5:
      return 'text-green-500 border border-green-500';
    case 1:
      return 'text-white border border-white';
    case 2:
      return 'text-red-600 border border-red-600';
    case 4:
      return 'text-red-800 border border-red-800';
    default:
      return 'text-neutral-600 border border-neutral-600';
  }
};
