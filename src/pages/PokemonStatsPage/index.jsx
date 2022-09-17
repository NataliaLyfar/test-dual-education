import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner';
import { Container } from "components/ui/Container";
import { BackButton } from 'components/ui/buttons';
import { Section } from 'components/ui/Section';


const PokemonStatsPage = () => {
const { pokemonId } = useParams();
const [movie, setMovie] =useState({});
const [isLoading, setIsLoading] = useState(false);
const [backLocation, setBackLocation] = useState(null);
const location = useLocation();
const navigate = useNavigate();

useEffect(() => {
  if (backLocation === null) {
    setBackLocation(location?.state?.from ?? '/');
  }
}, [backLocation, location?.state?.from]);


const onGoBack = () => {
  navigate(backLocation);
};

// useEffect(() => {
//   (async () => {
//     try {
//       setIsLoading(true);
//       const {...data} = await getMovieDetails(movieId);
//       setMovie(dataSelectedMovie(data));
//     } catch (error) {
//       toast.info(`Something went wrong ${error}`);
//     } finally {setIsLoading(false)};
// })()
// }, [movieId]);
    
return(
  <Container>
    <Section>
      {/* {isLoading && <ThreeDots color="#eead71" height={60} width={60} />} */}
      <BackButton onClick={onGoBack}/>
      {/* <MovieDetails {...movie} id={movieId} location={location}/> */}
      <h4>{pokemonId}</h4> 
    </Section>
  </Container>
  );
};

export default PokemonStatsPage;