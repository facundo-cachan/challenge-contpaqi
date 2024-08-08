import Icon from "../icon";

import type InputProps from "./types";

const Input = ({ type, className, ...props }: InputProps) => (
  <div
    className={`rounded-full border ${className} p-0 static flex flex-row items-center w-full m-h-full align-middle`}
  >
    {type === "search" && (
      <Icon name="search" size="xs" className="absolute ml-2 border-0" />
    )}
    <input
      type={type ?? "text"}
      {...props}
      className="inline-block w-full pl-10 border-0 rounded-full m-h-full"
    />
  </div>
);

export default Input;
