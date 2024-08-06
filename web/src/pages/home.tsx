import selectorSession from '../services/recoil/session';
import { useRecoilValue } from 'recoil';

const Home = () => {
  const { token } = useRecoilValue(selectorSession);
  
  return (
    <div>
      <h3>Home Page</h3>
      <pre>{JSON.stringify(token)}</pre>
    </div>
  )
}

export default Home