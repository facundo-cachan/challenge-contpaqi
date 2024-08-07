import styled from "styled-components";

import type ButtonProps from "./types";

const Button = ({ children, onClick = () => console.log('Click', children), ...props }: ButtonProps) => {
  props.type = props.type ?? 'button';
  props.role = props.role ?? 'button';

  return (
    <button className="transition duration-300 ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500" {...props} onClick={onClick}>{children}</button>
  );
}

const StyledButton = styled(Button)`
  background: ${props => props.$primary ? "blue" : "gray-light"};
  color: ${props => props.$primary ? "purple" : "gray-dark"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export default StyledButton;