import { getRecoil } from '../services/recoil/nexus';
import selectorSession from '../services/recoil/session';
import { Link, Outlet } from 'react-router-dom';

const Layout = (): JSX.Element => {
  // const user = getRecoil(selectorSession);

  return (
    <div className="flex flex-col">
      <h1>Auth Example using RouterProvider</h1>
      {/* <h3 className='py-6'>Hi, {user?.name}</h3> */}
      <div className="flex flex-row w-full justify-between py-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/logout">Logout</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;