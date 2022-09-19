
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  getPokemons,
  getPokemonData,
  getPokemonBySearch,
  getPokemonByType,
} from 'api';
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';
import { dataPokemon, dataSelectedPoko  } from 'helpers';
import { Section } from 'components/ui/Containers/Section';
import { SearchBar } from 'components/SearchBar';
import { PokemonGallery } from 'components/PokemonGallery';
import { PokemonInfo } from 'components/PokemonInfo';
import { Pagination } from 'components/Pagination';
import { PlayingPokemon } from 'components/PlayingPokemon/PlayingPokemon';


const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemon, setPokemon] = useState();
  const [pokemonsByType, setPokemonsByType] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [queryParam, setQueryParam] = useSearchParams({});
  const [perPage, setPerPage] = useState(10);

  const query = queryParam.get('query') ?? '';
  const type = queryParam.get('type') ?? '';

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getPokemons(perPage, offset);
        const promises = data.results.map(async pokemon => {
          return await getPokemonData(pokemon.url);
        });
        const results = await Promise.all(promises);
        setAllPokemons(dataPokemon(results));
        setPageCount(Math.ceil(data.count / perPage));
        setCount(data.count);
      } catch (error) {
        toast.info(`Something went wrong ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [offset, pageCount, perPage]);

  useEffect(() => {
    if (!query) {
      return;
    }
    (async () => {
      try {
        setIsLoading(true);
        const { ...data } = await getPokemonBySearch(query);
        setPokemon(dataSelectedPoko(data));
      } catch (error) {
        toast.info(`Something went wrong ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  useEffect(() => {
    if (!type) {
      return;
    }
    (async () => {
      try {
        setIsLoading(true);
        const { ...data } = await getPokemonByType(type);
        const promises = data.pokemon.map(async ({ pokemon }) => {
          return await getPokemonBySearch(pokemon.name);
        });
        const results = await Promise.all(promises);
        setPokemonsByType(dataPokemon(results));
      } catch (error) {
        toast.info(`Something went wrong ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [type, perPage, offset]);

  const handlePageClick = event => {
    const newOffset = (event.selected * perPage) % count;
    setOffset(newOffset);
  };

  const handleFormSearch = query => {
    const nextParams = query !== '' ? { query: query } : {};
    setQueryParam(nextParams);
    if (!query) {
      toast.info('There is nothing to search!');
    }
  };
  const handleChoicePerPage = e => setPerPage(e.value);
  const handleTypeFilter = (e, type) => {
    const newType = e.value;
    const nextParams = type !== '' ? { type: newType } : {};
    setQueryParam(nextParams);
  };

  return (
    <Section>
      {isLoading && <ThreeDots color="#eead71" height="60" width="60" />}
      {query.length === 0 && (
        <>
          <SearchBar
            onSearch={handleFormSearch}
            onSelectChange={handleChoicePerPage}
            onSelectFilter={handleTypeFilter}
            type={type}
          />
          {!type && allPokemons.length > 0 && (
            <>
              <PokemonGallery pokemons={allPokemons} />
              <Pagination
                pageCount={pageCount}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                previousLabel="<"
                nextLabel=">"
              />
            </>
          )}
        </>
      )}
      {type && pokemonsByType.length > 0 && (
        <PokemonGallery pokemons={pokemonsByType} />
      )}
      {pokemon && query.length > 0 && <PokemonInfo {...pokemon} />}
      {allPokemons.length !== 0 && <PlayingPokemon pokemons={allPokemons}/>}
    </Section>
  );
};
export default HomePage;


