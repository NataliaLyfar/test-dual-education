import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CenteredBox, Container } from 'components/ui/Containers';


export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <LogoWrapper>
          <LogoLink to="/">Pokemons</LogoLink>
        </LogoWrapper>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  z-index: 100;
  background: ${p => p.theme.colors.background};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;
const LogoWrapper = styled(CenteredBox)`
  margin: 0 auto;
  justify-content: flex-start;
`;
const LogoLink = styled(NavLink)`
padding: ${p => p.theme.space[3]}px 0;
display: flex;
align-items: center;
color: ${p => p.theme.colors.accent};
font-family: ${p => p.theme.fonts.accent};
font-size: ${p => p.theme.fontSizes.xxl};
font-weight: ${p => p.theme.fontWeights.bold};
  &:hover {
    color: ${p => p.theme.colors.accent};
    cursor: pointer;
  };
`;