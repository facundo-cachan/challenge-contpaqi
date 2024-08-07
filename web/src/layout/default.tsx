import { Button, Link } from '../components';
import { Outlet } from 'react-router-dom';

const Layout = (): JSX.Element => (
  <div className="flex flex-col">
    <h1>Auth Example using RouterProvider</h1>
    {/* <h3 className='py-6'>Hi, {user?.name}</h3> */}
    <div className="flex flex-row w-full justify-between py-4">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/logout" className="text-4xl">Logout</Link>
      <Button $primary className="border-2 border-red-500">Primary</Button>
    </div>
    <Outlet />
  </div>
);

export default Layout;