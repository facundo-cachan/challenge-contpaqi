import { render, screen } from '@testing-library/react';
import Input from '../../../src/components/atoms/input';

describe('Input component', () => {
  test('renders input element with the provided type', () => {
    render(<Input type="text" />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test.skip('renders input element with default type as text', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test.skip('renders input element with search icon when type is search', () => {
    render(<Input type="search" />);
    const inputElement = screen.getByRole('textbox');
    const searchIcon = screen.getByTestId('search-icon');
    expect(inputElement).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  test.skip('applies the provided className to the input container', () => {
    const className = 'custom-class';
    render(<Input className={className} />);
    const inputContainer = screen.getByRole('textbox').parentElement;
    expect(inputContainer).toHaveClass(className);
  });
});