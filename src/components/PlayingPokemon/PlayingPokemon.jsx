import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Pokemon } from './Pokemon';

export const PlayingPokemon = ({ pokemons }) => {
  const location = useLocation();
  const count = pokemons.length;

  return (
    <>
      {pokemons && (
        <>
          <FirstPokemon>
            <Link
              to={`/pokemons/${
                pokemons[Math.floor(Math.random() * count)].name
              }`}
              state={{ from: location }}
            >
              <Pokemon {...pokemons[Math.floor(Math.random() * count)]} />
            </Link>
          </FirstPokemon>
          <SecondPokemon>
            <Link
              to={`/pokemons/${
                pokemons[Math.floor(Math.random() * count)].name
              }`}
              state={{ from: location }}
            >
              <Pokemon {...pokemons[Math.floor(Math.random() * count)]} />
            </Link>
          </SecondPokemon>
          <ThirdPokemon>
            <Link
              to={`/pokemons/${
                pokemons[Math.floor(Math.random() * count)].name
              }`}
              state={{ from: location }}
            >
              <Pokemon {...pokemons[Math.floor(Math.random() * count)]} />
            </Link>
          </ThirdPokemon>
        </>
      )}
    </>
  );
};

PlayingPokemon.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    })
  ),
};

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 200px; width: 200px; opacity: 1 }
 40% { height: 205px; width: 205px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;
const FirstPokemon = styled.div`
  position: absolute;
  bottom: 0;
  left: 10%;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: 0.5;
`;

const SecondPokemon = styled.div`
  position: absolute;
  top: 2%;
  right: 20%;
  width: 100px;
  animation-name: ${breatheAnimation};
  animation-duration: 5s;
  animation-iteration-count: 1;
`;
const ThirdPokemon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  animation-name: ${breatheAnimation};
  animation-duration: 6s;
  animation-iteration-count: 0.5;
`;
