import PokemonExtra from 'asset/pokemon.png';
import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';


export const Pokemon = ({name, avatar}) => {
return (
    <CardWrapper>
      {avatar ? 
        <Poster src={avatar} alt="poster"/>
        : <Poster src={PokemonExtra} alt={name}/>}    
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
background: transparent;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  };
`;
const Poster = styled.img`
width: 50px;
height: 80px;
@media (${breakpoints.tablet}) {
  width: 120px;
height: 150px;
    }
    @media (${breakpoints.laptop}) {
  width: 180px;
height: 200px;
    }
`;
