import { render, screen } from "@testing-library/react";
import Input from "../../../src/components/atoms/input";

const verify = (inputElement: HTMLElement, type: string) => {
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("type", type);
};
describe("Input component", () => {
  test("renders input element with default type as text", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    verify(inputElement, "text");
  });
  test("renders input element with search icon when type is search", () => {
    const type = "search";
    const { container } = render(<Input type={type} data-testid={type} />);
    const inputElement = screen.getByTestId(type);
    const searchIcon = container.getElementsByClassName(`bx-${type}`)[0];
    verify(inputElement, "search");
    expect(searchIcon).toBeInTheDocument();
  });
  test("applies the provided className to the input container", () => {
    const className = "custom-class";
    render(<Input className={className} />);
    const inputContainer = screen.getByRole("textbox").parentElement;
    expect(inputContainer).toHaveClass(className);
  });
});
