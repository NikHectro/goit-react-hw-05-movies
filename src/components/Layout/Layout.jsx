import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movie</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
