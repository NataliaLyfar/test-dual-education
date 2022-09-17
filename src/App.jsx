import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { MainLayout } from 'layout';

const HomePage = lazy(() => import('pages'));
const PokemonStatsPage = lazy(() => import('pages/PokemonStatsPage'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />}/>
        <Route path='pokemons/:pokemonId/*' element={<PokemonStatsPage/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
