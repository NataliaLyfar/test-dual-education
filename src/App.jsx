import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import { PokemonGallery } from "components/PokemonGallery";



export const App = () => {
  const init = 'https://pokeapi.co/api/v2/pokemon?limit=10'
const [allPokemons, setAllPokemons] = useState([]);
const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');

useEffect(() => {
  
  getAllPokemons()
 },[])

function createPokemonObject (results) {
  results.forEach(async (pokemon) => {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
  setAllPokemons(prev => [...prev, data]);
  allPokemons.sort((a, b) => a.id - b.id)
  })
 }
 async function getAllPokemons () {
  const {data} = await axios.get(loadMore);
console.log(data);
   setLoadMore(data.next);
createPokemonObject(data.results);
}

  return (
<div>
  <h1>Pokemon Evolution</h1>
  <div>
    <div>
      {<PokemonGallery pokemons={allPokemons}/>}
     
    </div>
    <button type="button"onClick={()=>getAllPokemons()}>Load more</button>
  </div>
</div>
  );
};
