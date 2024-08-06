import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';

// import { AuthContextProvider } from '@/services/context/auth';
// import router from '@/routes/';

import './App.css';
import { AuthContextProvider } from './services/context/auth';
import routes from './routes';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AuthContextProvider>
          <RouterProvider router={routes} />
        </AuthContextProvider>
      </header>
    </div>
  );
}

export default App;