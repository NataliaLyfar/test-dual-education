import { Virtual, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { SwiperCard } from './SwiperCard';


export const Slider = ({pokemons}) => {
  const location = useLocation();

  return(
    <SwiperWrapper>
      <Swiper modules={[Virtual, Autoplay, Navigation]}
        spaceBetween={5}
        slidesPerView={6}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          }}
        navigation={true}
        virtual>
        {pokemons.filter(pokemon => pokemon.avatar).map(pokemon => {
          return (
            <SwiperSlide key={pokemon.name} virtualIndex={pokemon.name}>
              <Link to={`/pokemons/${pokemon.name}`} state={{from: location}}>
                <SwiperCard {...pokemon}/>
              </Link>
            </SwiperSlide>
          );
        })}  
    </Swiper>
    </SwiperWrapper>
  );
};

Swiper.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    })
  ),
};

const SwiperWrapper = styled.div`
margin-top: ${p => p.theme.space[4]}px;
box-shadow: 0px 0px 0px 0px #eead71, inset 0px 10px 27px -8px #141414,
    inset 0px -10px 27px -8px #eead71, 5px 5px 15px 5px rgba(181, 181, 181, 0);
`;