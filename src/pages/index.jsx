// import { useEffect, useState } from "react";
// import { toast } from 'react-toastify';
// import { ThreeDots } from  'react-loader-spinner';
// import { TiArrowSync } from "react-icons/ti";
// import * as API from 'api';
// import { dataMovie } from "utils/dataMovie";
// import { MoviesGallery } from "components/MoviesGallery";
// import { Container } from "components/ui/Container";
// import { Section } from "components/ui/Section";
// import { Button } from "components/ui/buttons";
// import { Slider } from "components/Swiper";
// import { Title } from "components/ui/Title";

// export function getPokemon({ url }) {
//   return new Promise((resolve, reject) => {
//       fetch(url).then(res => res.json())
//           .then(data => {
//               resolve(data)
//           })
//   });
// }

// export async function getAllPokemon(url) {
//   return new Promise((resolve, reject) => {
//       fetch(url).then(res => res.json())
//           .then(data => {
//               resolve(data)
//           })
//   });
// }
// const HomePage = () => {
//   const [pokemonData, setPokemonData] = useState([])
//   const [nextUrl, setNextUrl] = useState('');
//   const [prevUrl, setPrevUrl] = useState('');
//   const [loading, setLoading] = useState(true);
//   const initialURL = 'https://pokeapi.co/api/v2/pokemon'

//   useEffect(() => {
//     async function fetchData() {
//       let response = await getAllPokemon(initialURL)
//       setNextUrl(response.next);
//       setPrevUrl(response.previous);
//       await loadPokemon(response.results);
//       setLoading(false);
//     }
//     fetchData();
//   }, [])

//   const next = async () => {
//     setLoading(true);
//     let data = await getAllPokemon(nextUrl);
//     await loadPokemon(data.results);
//     setNextUrl(data.next);
//     setPrevUrl(data.previous);
//     setLoading(false);
//   }

//   const prev = async () => {
//     if (!prevUrl) return;
//     setLoading(true);
//     let data = await getAllPokemon(prevUrl);
//     await loadPokemon(data.results);
//     setNextUrl(data.next);
//     setPrevUrl(data.previous);
//     setLoading(false);
//   }

//   const loadPokemon = async (data) => {
//     let _pokemonData = await Promise.all(data.map(async pokemon => {
//       let pokemonRecord = await getPokemon(pokemon)
//       return pokemonRecord
//     }))
//     setPokemonData(_pokemonData);
//   }

// //   return (
// //     <>
// //       <Navbar />
// //       <div>
// //         {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
// //           <>
// //             <div className="btn">
// //               <button onClick={prev}>Prev</button>
// //               <button onClick={next}>Next</button>
// //             </div>
// //             <div className="grid-container">
// //               {pokemonData.map((pokemon, i) => {
// //                 return <Card key={i} pokemon={pokemon} />
// //               })}
// //             </div>
// //             <div className="btn">
// //               <button onClick={prev}>Prev</button>
// //               <button onClick={next}>Next</button>
// //             </div>
// //           </>
// //         )}
// //       </div>
// //     </>
// //   );
// // }

// return (
//   <Container>
//     {/* {isLoading && <ThreeDots color="#eead71" height={60} width={60} />} */}
//     <Section>      
//       {/* {swipeMovies.length !== 0 && (
//         <>
//           <Title>Upcoming</Title>
//           <Slider movies={swipeMovies}/>
//         </>)} */}
//       {pokemonData.length !== 0 &&(
//         <>
//           {pokemonData.map((pokemon, i) => {
//                 return <div key={i} pokemon={pokemon}>{pokemon}</div>
//               })}
//         </>)}
//       {/* {!isLoading && movies.length >= 20 && 
//         <Button onClick={handleLoadMore} icon={<TiArrowSync/>}>
//           Load more
//         </Button>} */}
//     </Section>
//   </Container>
//   );
// };

import { PokemonGallery } from "components/PokemonGallery";
import { useState, useEffect } from "react";
import { getPokemons, getPokemonData } from "api";

const HomePage = () => {
const [allPokemons, setAllPokemons] = useState([]);
// const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');



useEffect(() => {
  (async () => {
    const {data} = await getPokemons(10,0);
    //  setLoadMore(data.next);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.name)
      })
      const results = await Promise.all(promises);
     setAllPokemons(prev => [...prev, ...results]);
  })()
 },[])

 return (
  
        <div>
          {<PokemonGallery pokemons={allPokemons}/>}
         
        <button type="button">Load more</button>
      
    </div>
      );
    };
export default HomePage;