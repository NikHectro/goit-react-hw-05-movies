import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
import MovieData from './MovieData';
// import CastData from './CastData';
// import ReviewsData from './ReviewsData';

const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const ReviewsData = lazy(() => import('./ReviewsData'));
const CastData = lazy(() => import('./CastData'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieData />}>
            <Route path="cast" element={<CastData />} />
            <Route path="reviews" element={<ReviewsData />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};
