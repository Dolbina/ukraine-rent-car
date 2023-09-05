import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyle';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDatails/MoviesDatails')
);
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
