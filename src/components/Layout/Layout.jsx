import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <div style={{ margin: '16px 0px' }}>
          <NavLink to="/" end>
            <button type="button">Home</button>
          </NavLink>
          <NavLink to="/movies">
            <button type="button">Movie</button>
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
