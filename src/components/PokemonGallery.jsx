import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { PokemonCard } from './PokemonCard';

const PokemonList = styled.ul`
  display: grid;
  max-width: calc(100vw - 32px);
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-gap: ${p => p.theme.space[5]}px;
  margin: 0 auto ${p => p.theme.space[4]}px;
  padding: 0;
`;
const Item = styled.li`
  padding: 0;
  border-radius: ${p => p.theme.radii.small};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 2px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const PokemonGallery = ({ pokemons }) => {
  const location = useLocation();
  return (
    <PokemonList>
      {pokemons.map((pokemon, index) => (
        <Item key={index}>
          <Link to={`/pokemons/${pokemon.id}`} state={{ from: location }}>
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
            />
          </Link>
        </Item>
      ))}
    </PokemonList>
  );
};

// PokemonGallery.propTypes = {
//   pokemons: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       image: PropTypes.string,
//       type: PropTypes.string,
//     })
//   ),
// };
