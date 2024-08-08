import { render } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import Button from '../../../src/components/atoms/button';
import { vitest } from 'vitest';

const onClickMock = vitest.fn();

describe('Button component', () => {
  test('renders the button with the provided text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  test('calls the onClick function when clicked', async () => {
    render(<Button onClick={onClickMock}>Click me</Button>);
    await fireEvent.click(screen.getByText('Click me'));
    expect(onClickMock).toHaveBeenCalled();
  });
  test('has the default type and role attributes', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toHaveAttribute('type', 'button');
  });
  test('applies the primary styles when primary prop is true', () => {
    render(<Button primary="true">Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    // TODO: Implement jest-styled-components to test the styles
    expect(buttonElement).toHaveClass('sc-braxZu');
    expect(buttonElement).toHaveClass('bfZjMc');
  });
});