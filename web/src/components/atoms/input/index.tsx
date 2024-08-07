import type InputProps from "./types";

const Input = ({type, ...props}: InputProps) => (
  <input type={type ?? 'text'} {...props} />
);

export default Input;