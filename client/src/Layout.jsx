import {
  Link,
  Outlet,
} from "react-router-dom";

function Layout() {
  return (
    <>
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
