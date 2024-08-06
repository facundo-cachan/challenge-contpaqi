import Home from '../../src/pages/home';
import { render, screen } from '@testing-library/react';

describe('Home component', () => {
  it('renders Dashboard when loggedIn is true', () => {
    // Mock the useAuth hook to return loggedIn as true
    jest.mock('../services/context/auth', () => ({
      useAuth: () => ({ loggedIn: true }),
    }));

    render(<Home />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders Login when loggedIn is false', () => {
    // Mock the useAuth hook to return loggedIn as false
    jest.mock('../services/context/auth', () => ({
      useAuth: () => ({ loggedIn: false }),
    }));

    render(<Home />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders "Hi" when loggedIn is undefined', () => {
    // Mock the useAuth hook to return loggedIn as undefined
    jest.mock('../services/context/auth', () => ({
      useAuth: () => ({ loggedIn: undefined }),
    }));

    render(<Home />);
    expect(screen.getByText('Hi')).toBeInTheDocument();
  });
});