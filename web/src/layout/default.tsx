import React from 'react';

import { useAuth } from '@/services/context/auth';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { loggedIn, user } = useAuth();

  return (
    <body>
      {children}
    </body>
  )

}

export default DefaultLayout;