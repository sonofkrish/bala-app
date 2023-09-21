import { Link, Outlet } from 'react-router-dom';
import { Header } from '../../components/header';

function Layout() {
  return (
    <>
      <Header />
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
