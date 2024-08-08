import React, { useEffect, useState, createContext, useContext, useCallback, useMemo } from 'react';
import _fecth from '../fetch';

export type User = {
  name: string;
  role: string;
  picture: string;
}
type ContextProps = {
  user: User | null;
  loggedIn: boolean | null;
  checkLoginState: () => Promise<void>
};

const AuthContext = createContext<ContextProps>(undefined!);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const checkLoginState = useCallback(async () => {
    try {
      const response = await _fecth({ method: 'post', url: 'auth/login/', data: { email: 'yo@facundo-cachan.dev', password: '1q2w3e4r' } });
      const user = response?.data?.user;

      if (user) {
        setLoggedIn(true);
        setUser(user);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  const values = useMemo(() => ({ loggedIn, checkLoginState, user }), [loggedIn, checkLoginState, user]);

  useEffect(() => {
    checkLoginState();
  }, [checkLoginState]);

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
}

export { AuthContextProvider, useAuth };