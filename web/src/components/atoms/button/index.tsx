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
  color: ${({primary}) => primary ? 'rgb(0 58 113)' : 'rgb(250 250 250)'};
  background: ${({primary}) => primary ? 'rgb(250 250 250)' : 'rgb(0 58 113)'};
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export default StyledButton;