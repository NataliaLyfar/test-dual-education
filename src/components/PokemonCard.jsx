import styled from 'styled-components';
import { colorTypes } from 'helpers/colorTypes';


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.radii.normal};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${p => p.theme.space[3]}px;
  background-color: ${({type})=>colorTypes[type]};
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px 6px ${p => p.theme.colors.accent};
  }
`;
const Avatar = styled.img`
  width: 170px;
  height: 150px;
  border-radius: ${p => p.theme.radii.normal};
`;
const PokemonTitle = styled.h3`
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.l};
margin-top: ${p => p.theme.space[0]}px;
`;
const PokemonType = styled.p`
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.semibold};
font-size: ${p => p.theme.fontSizes.m};
margin-top: ${p => p.theme.space[0]}px;
`;


export const PokemonCard = ({ id, name, image, type }) => {
  return (
    <CardWrapper type={type}>
      <Avatar src={image} alt={name} />
        <PokemonTitle>{name}</PokemonTitle>
        <PokemonType type={type}>Type: {type}</PokemonType>
    </CardWrapper>
  );
};
