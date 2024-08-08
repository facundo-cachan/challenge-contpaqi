import { render } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import Button from '../../../src/components/atoms/button';

describe('Button component', () => {
  it('renders the button with the provided text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('has the default type and role attributes', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toHaveAttribute('type', 'button');
    expect(buttonElement).toHaveAttribute('role', 'button');
  });

  it('applies the primary styles when primary prop is true', () => {
    render(<Button primary>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toHaveStyle('color: rgb(0 58 113)');
    expect(buttonElement).toHaveStyle('background: rgb(250 250 250)');
  });

  it('applies the default styles when primary prop is false', () => {
    render(<Button primary={false}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toHaveStyle('color: rgb(250 250 250)');
    expect(buttonElement).toHaveStyle('background: rgb(0 58 113)');
  });
});