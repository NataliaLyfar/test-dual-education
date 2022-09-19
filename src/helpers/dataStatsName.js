export const dataStatsName = name => {
  switch (name) {
    case 'hp':
      name = 'HP';
      break;
    case 'attack':
      name = 'Atk';
      break;
    case 'defense':
      name = 'Def';
      break;
    case 'special-attack':
      name = 'Sp.Atk';
      break;
    case 'special-defense':
      name = 'Sp.Def';
      break;
    case 'speed':
      name = 'Speed';
      break;
    default:
      break;
  }
 return name;
};
