import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { MainLayout } from 'layout';

const HomePage = lazy(() => import('pages'));
const PokemonPage = lazy(() => import('pages/PokemonPage'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />}/>
        <Route path='pokemons/:pokemonName/*' element={<PokemonPage/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
