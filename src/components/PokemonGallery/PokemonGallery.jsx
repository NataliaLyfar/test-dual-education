import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PokemonCard } from './PokemonCard';

export const PokemonGallery = ({ pokemons }) => {
  const location = useLocation();

  return (
    <PokemonList>
      {pokemons.map(pokemon => (
        <Item key={pokemon.name}>
          <Link to={`/pokemons/${pokemon.name}`} state={{ from: location }}>
            <PokemonCard {...pokemon} />
          </Link>
        </Item>
      ))}
    </PokemonList>
  );
};

PokemonGallery.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      types: PropTypes.any,
    })
  ),
};

const PokemonList = styled.ul`
  display: grid;
  max-width: calc(100vw - 24px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${p => p.theme.space[5]}px;
  margin: ${p => p.theme.space[4]}px auto;
  padding: 0;
`;
const Item = styled.li`
  height: 100%;
  padding: 0;
  border-radius: ${p => p.theme.radii.small};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 2px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
