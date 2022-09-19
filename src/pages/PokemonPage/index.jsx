import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';
import { getPokemonBySearch, getPokemons, getPokemonData } from 'api';
import { Section } from 'components/ui/Containers';
import { BackButton } from 'components/ui/buttons';
import { PokemonInfo } from 'components/PokemonInfo';
import { dataSelectedPoko, dataPokemon } from 'helpers';
import { Slider } from 'components/Swiper';
import { PlayingPokemon } from 'components/PlayingPokemon';

const PokemonPage = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState();
  const [allPokemons, setAllPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [backLocation, setBackLocation] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (backLocation === null) {
      setBackLocation(location?.state?.from ?? '/');
    }
  }, [backLocation, location?.state?.from]);

  const onGoBack = () => {
    navigate(backLocation);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { ...data } = await getPokemonBySearch(pokemonName);
        setPokemon(dataSelectedPoko(data));
      } catch (error) {
        toast.info(`Something went wrong ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [pokemonName]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getPokemons(50, 0);
        const promises = data.results.map(async pokemon => {
          return await getPokemonData(pokemon.url);
        });
        const results = await Promise.all(promises);
        setAllPokemons(dataPokemon(results));
      } catch (error) {
        toast.info(`Something went wrong ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Section>
      {isLoading && <ThreeDots color="#eead71" height="60" width="60" />}
      <BackButton onClick={onGoBack} />
      <PokemonInfo {...pokemon} />
      {allPokemons.length !== 0 && <Slider pokemons={allPokemons} />}
      {allPokemons.length !== 0 && <PlayingPokemon pokemons={allPokemons} />}
    </Section>
  );
};


export default PokemonPage;
