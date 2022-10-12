import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearch } from '../../services/api';
import MoviesList from '../../components/MoviesList';

const MoviesPage = () => {
  const location = useLocation();
  const [searchMovies, setSearchMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const queryParam = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryParam) {
      const fetchSearch = async () => {
        try {
          const searchData = await getSearch(queryParam);
          if (!searchData.length) {
            setNotFound(true);
          }
          setSearchMovies(searchData);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchSearch();
    }
  }, [queryParam]);

  const handleSubmitClick = event => {
    event.preventDefault();
    setSearchParams({
      query: event.target.elements.query.value.toLowerCase(),
    });
    event.target.reset();
  };

  console.log('location :>> ', location);

  return (
    <>
      <form onSubmit={handleSubmitClick}>
        <input type="text" name="query" autoFocus />
        <button type="submit">Search</button>
      </form>
      {searchMovies.length && queryParam ? (
        <MoviesList movies={searchMovies} state={location} />
      ) : (
        notFound && <p>Could not find "{queryParam}"</p>
      )}
    </>
  );
};

export default MoviesPage;
