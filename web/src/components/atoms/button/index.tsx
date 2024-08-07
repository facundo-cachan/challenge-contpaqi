import styled from "styled-components";

import type ButtonProps from "./types";

const Button = ({ children, onClick = () => console.log('Click', children), ...props }: ButtonProps) => {
  props.type = props.type ?? 'button';
  props.role = props.role ?? 'button';

  return (
    <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" {...props}>{children}</button>
  );
}

const StyledButton = styled(Button)`
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

export default StyledButton;