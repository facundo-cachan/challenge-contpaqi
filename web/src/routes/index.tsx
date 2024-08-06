import Home from '../pages/home';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }
]);

export default routes