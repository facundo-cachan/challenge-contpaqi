// import { AuthStatus } from '../components';
import { Link, Outlet } from 'react-router-dom';

const Layout = (props: any): JSX.Element => (
  <div>
    <h1>Auth Example using RouterProvider</h1>
    <h4>Layout Page Props</h4>
    <pre>{JSON.stringify(props, null, 2)}</pre>

    {/* <AuthStatus /> */}

    <Link to="/dashboard">Dashboard</Link>

    <Outlet />

  </div>
);

export default Layout;