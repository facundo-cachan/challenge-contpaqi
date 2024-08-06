import Login from './login';
import Dashboard from './dashboard';
import { useAuth } from '../services/context/auth';

const Home = () => {
  const { loggedIn } = useAuth();
  if (loggedIn === true) return <Dashboard />;
  if (loggedIn === false) return <Login />
  return <h3>Hi</h3>
}

export default Home