export const dataPokemon = pokemons => {
  return pokemons.map(pokemon => ({
    name: pokemon.name,
    avatar: pokemon.sprites.other.dream_world.front_default,
    types: pokemon.types,
  }));
};
