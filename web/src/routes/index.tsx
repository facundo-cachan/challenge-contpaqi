import Layout from "../layout/default";
import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import login from "../services/auth/login";
import logout from "../services/auth/logout";
import signIn from "../services/auth/signIn";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
        action: async ({ request }) => {
          const formData = await request.formData();
          const { redirectTo, message } = await login({
            email: formData.get("email") as string,
            password: formData.get("password") as string,
          });

          console.log({ redirectTo, message });

          return redirectTo ? redirect(redirectTo) : message;
        },
        loader: async (props) => {
          console.log("Login page loader", props);

          return null;
        },
      },
      {
        path: "dashboard",
        Component: Dashboard,
        loader: async () => {
          const isLogged = await signIn();

          if (!isLogged) {
            return redirect("/login");
          }

          return null;
        },
      },
    ],
  },
  {
    path: "/logout",
    loader: async () => {
      const service = await logout();

      return service ? redirect("/") : null;
    },
  },
  {
    path: "/admin",
    loader: async () => {
      return redirect("/dashboard");
    },
  },
]);

export default router;
