import { Link, Outlet } from 'react-router-dom';
import Logo from './assets/logo.svg';

function Layout() {
  return (
    <>
      <img src={Logo} width="24" height="24" alt="Tracker" />
      <nav>
        <Link to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  );
}
export default Layout;
