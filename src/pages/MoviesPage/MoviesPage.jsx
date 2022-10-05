import { Outlet, Link, useLocation } from 'react-router-dom';

const MoviesPage = () => {
  // const location = useLocation();

  return (
    <>
      <h2>It's Movies Page</h2>
      <Outlet />
    </>
  );
};

export default MoviesPage;
