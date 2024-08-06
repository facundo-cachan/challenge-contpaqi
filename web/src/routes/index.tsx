import Layout from '../layout/default';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
// import login from '@/services/auth/login';
// import { getRecoil } from '../services/recoil/nexus';
// import selectorSession from '../services/recoil/session';

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      // function to provide data to the route element before it renders.
      const session = { user: null };
      // const session = getRecoil(selectorSession);
      console.log('Root loader', { session });

      return session
    },
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        action: async ({ request }) => {
          let formData = await request.formData();
          // let username = formData.get("username") as string | null;
          console.log('action login page', formData);
          return 'Puto el que lee';
        },
        loader: async () => {
          console.log('loader login page');
          return null;
        },
        Component: Login,
      },
      {
        path: "dashboard",
        loader: async ({ request }) => {
          // const session = getRecoil(selectorSession);
          const session = { user: null };
          console.log('Dashboard loader', { session, request });
          if (!session.user) {
            return redirect("/login");
          }
          return null;
        },
        Component: Dashboard,
      },
    ],
  },
  {
    path: "/logout",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      return null;
    },
  },
]);

export default router