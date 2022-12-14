import Pokemon from 'asset/pokemon.png';
import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';


export const SwiperCard = ({name, avatar}) => {
return (
    <CardWrapper>
      {avatar ? 
        <Poster src={avatar} alt="poster"/>
        : <Poster src={Pokemon} alt={name}/>}    
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
border-radius: ${p => p.theme.radii.normal};
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
background: transparent;
padding: ${p => p.theme.space[1]}px;
border-radius: ${p => p.theme.radii.small};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 2px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0px 0px 8px 6px ${p => p.theme.colors.accent};
  };
`;
const Poster = styled.img`
width: 50px;
height: 80px;
border-radius: ${p => p.theme.radii.normal};
@media (${breakpoints.tablet}) {
  width: 120px;
height: 150px;
    }
    @media (${breakpoints.laptop}) {
  width: 180px;
height: 200px;
    }
`;
