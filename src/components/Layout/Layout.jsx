import { Suspense } from 'react';
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
      <Suspense
        fallback={<h2>Please, wait a second more... minnions are working!</h2>}
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
