import styled from 'styled-components';
import { colorTypes } from 'helpers/colorTypes';
import Pokemon from 'asset/pokemon.png';
import { CenteredBox } from 'components/ui/Containers';

export const PokemonCard = ({ name, avatar, types }) => {
  return (
    <CardWrapper>
      {avatar ? (
        <Avatar src={avatar} alt={name} />
      ) : (
        <Avatar src={Pokemon} alt={name} />
      )}
      <PokemonTitle>{name}</PokemonTitle>
      {types && (
        <PokoTypes>
          {types.map(({ type }, i) => {
            return (
              <PokemonType key={i} type={type.name}>
                {type.name}
              </PokemonType>
            );
          })}
        </PokoTypes>
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled(CenteredBox)`
  height: 100%;
  flex-direction: column;
  border-radius: ${p => p.theme.radii.normal};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${p => p.theme.space[3]}px;
  background-color: ${({ type }) => colorTypes[type]};
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px 6px ${p => p.theme.colors.accent};
  }
`;
const Avatar = styled.img`
  width: 200px;
  height: 150px;
  border-radius: ${p => p.theme.radii.normal};
`;
const PokemonTitle = styled.h3`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  margin-top: ${p => p.theme.space[0]}px;
`;
const PokoTypes = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[1]}px;
`;
const PokemonType = styled.li`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${({ type }) => colorTypes[type]};
`;
