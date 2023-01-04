import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'components/App.styled';


const Layout = lazy(() => import('components/Layout/Layout'));
const Home = lazy(() => import('page/Home/Home'));
const Movies = lazy(() => import('page/Movies/Movies'));
const MovieDetails = lazy(() => import('page/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/CastList/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reiwers" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};