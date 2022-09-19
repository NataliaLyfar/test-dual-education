import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';
import PropTypes from 'prop-types';
import { dataStatsName } from 'helpers/dataStatsName';
import { CenteredBox } from 'components/ui/Containers';

export const PokemonInfo = ({
  name,
  avatar,
  base_experience,
  abilities,
  stats,
}) => {
  return (
    <Wrapper>
      {avatar && <Avatar src={avatar} alt={name} />}
      <Information>
        <PokoTitle>{name}</PokoTitle>
        {base_experience && (
          <InfoBox>
            <TagTitle>Base experience: {base_experience}</TagTitle>
          </InfoBox>
        )}
        {abilities && (
          <InfoBox>
            <TagTitle>Abilities:</TagTitle>&nbsp;
            <DataText>{abilities}</DataText>
          </InfoBox>
        )}
        {stats && (
          <InfoBox>
            {stats.map((poke, i) => {
              return (
                <PokoStats key={i}>
                  <StatsTitle>{dataStatsName(poke.stat.name)}</StatsTitle>
                  <DataText>{poke.base_stat}</DataText>
                </PokoStats>
              );
            })}
          </InfoBox>
        )}
      </Information>
    </Wrapper>
  );
};

PokemonInfo.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      base_experience: PropTypes.number,
      avatar: PropTypes.string,
      abilities: PropTypes.string,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          base_stat: PropTypes.number,
        })
      ),
    })
  ),
};

const PokoStats = styled(CenteredBox)`
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-family: ${p => p.theme.fonts.accent};
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[2]}px;
  }
`;
const Avatar = styled.img`
  width: 250px;
  @media (${breakpoints.tablet}) {
    width: 300px;
  } ;
`;
const Wrapper = styled.div`
  padding: ${p => p.theme.space[3]}px;
  @media (${breakpoints.tablet}) {
    display: flex;
    padding: ${p => p.theme.space[6]}px;
  }
  border-radius: ${p => p.theme.radii.large};
  box-shadow: 0px 0px 0px 0px #eead71, inset 0px 10px 27px -8px #141414,
    inset 0px -10px 27px -8px #eead71, 5px 5px 15px 5px rgba(181, 181, 181, 0);
`;

const Information = styled.div`
  margin-left: 0;
  @media (${breakpoints.tablet}) {
    margin-left: ${p => p.theme.space[4]}px;
  }
  @media (${breakpoints.laptop}) {
    margin-left: ${p => p.theme.space[8]}px;
  } ;
`;
const PokoTitle = styled.h2`
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.semibold};
  color: ${p => p.theme.colors.tertiary};
  @media ${breakpoints.laptop} {
    font-size: ${p => p.theme.fontSizes.xl};
  } ;
`;
const TagTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semibold};
  color: ${p => p.theme.colors.tertiary};
  @media ${breakpoints.laptop} {
    font-size: ${p => p.theme.fontSizes.xl};
  } ;
`;
const InfoBox = styled.div`
  margin-top: ${p => p.theme.space[3]}px;
  display: flex;
  align-items: center;
`;
const StatsTitle = styled.p`
  padding-bottom: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semibold};
  color: ${p => p.theme.colors.tertiary};
`;
const DataText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  @media (${breakpoints.laptop}) {
    font-size: ${p => p.theme.fontSizes.l};
  } ;
`;
