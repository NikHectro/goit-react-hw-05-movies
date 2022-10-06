import { Outlet, Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearch } from '../../services/api';

const MoviesPage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useSearchParams({});
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const queryMovie = searchParams.get('query');

  const handleSubmitClick = event => {
    event.preventDefault();
    setSearchQuery({
      query: event.currentTarget.elements.query.value.toLowerCase(),
    });
    // console.log(
    //   'searchQuery :>> ',
    //   event.currentTarget.elements.query.value.toLowerCase()
    // );
  };

  useEffect(() => {}, []);

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
