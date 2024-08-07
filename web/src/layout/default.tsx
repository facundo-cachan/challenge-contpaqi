import { HeaderResponsive, Link } from '../components';
import { Outlet } from 'react-router-dom';

import type { MenuItemProps } from '../components/organisms/nav/types';

const items: MenuItemProps[] = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: null,
  },
  {
    path: '/logout',
    label: 'Logout',
    icon: null,
  }
]
const Layout = (): JSX.Element => (
  <main className="flex flex-col">
    {/* <h3 className='py-6'>Hi, {user?.name}</h3> */}
    <HeaderResponsive items={items} />
    <Outlet />
  </main>
);

export default Layout;