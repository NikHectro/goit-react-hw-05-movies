import { useEffect, useState, useParams } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getMovieDetailes } from '../../services/api';

const MovieData = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieData] = useState([]);
  //   const location = useLocation();
  console.log('movieId', movieId);

  useEffect(() => {
    fetchMovieData(movieId);
  }, [movieId]);

  const fetchMovieData = async () => {
    try {
      const movieData = await getMovieDetailes(movieId);
      setMovieData(movieData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h2>It's Movie DATA</h2>
      <p>{movieInfo.title}</p>
      <Outlet />
    </>
  );
};

export default MovieData;
