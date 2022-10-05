import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getTrend } from '../../services/api';
import MoviesList from '../../components/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  // console.log('getTrend: ', getTrend());

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const trendData = await getTrend();
      setMovies(trendData.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h2>Tranding today</h2>
      <MoviesList movies={movies} state={location} />
      <Outlet />
    </>
  );
};

export default HomePage;
