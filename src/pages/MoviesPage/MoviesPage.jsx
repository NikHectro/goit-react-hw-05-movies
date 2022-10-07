import { Outlet, Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearch } from '../../services/api';

const MoviesPage = () => {
  const location = useLocation();
  // const [searchQuery, setSearchQuery] = useSearchParams({});
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const queryMovie = searchParams.get('query');

  const handleSubmitClick = event => {
    event.preventDefault();
    setSearchParams({
      query: event.currentTarget.elements.query.value.toLowerCase(),
    });
    // console.log(
    //   'searchQuery :>> ',
    //   event.currentTarget.elements.query.value.toLowerCase()
    // );
  };

  // useEffect(() => {
  //   const fetchSearch = async () => {
  //     try {
  //       const searchData = await getSearch(queryMovie);
  //       console.log('searchQuery: ', searchQuery);

  //       setSearchQuery(searchData);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    if (queryMovie) {
      const onSearchMovie = async () => {
        setLoading(true);
        try {
          const searchMovie = await getSearch(queryMovie);
          setSearchFilms(searchMovie);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      onSearchMovie();
    }
  }, [queryMovie]);

  return (
    <>
      <form onSubmit={handleSubmitClick}>
        <input type="text" name="query" autoFocus />
        <button type="submit">Search</button>
      </form>
      {/* {loading && <Loader />} */}
      {/* {searchFilms && <EditorList films={searchFilms} state={location} />} */}
      <h2>It's Movies Page</h2>
      <Outlet />
    </>
  );
};

export default MoviesPage;
