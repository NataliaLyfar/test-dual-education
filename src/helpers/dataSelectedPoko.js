export const dataSelectedPoko = pokemon => {
  return {
    name: pokemon.name,
    base_experience: pokemon.base_experience,
    avatar: pokemon.sprites.other.dream_world.front_default,
    abilities: pokemon.abilities.map(poke => poke.ability.name).join(', '),
    stats: pokemon.stats,
  };
};
