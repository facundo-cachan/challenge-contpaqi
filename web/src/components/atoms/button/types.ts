import type { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: string | boolean;
  children?: ReactElement | ReactElement[] | string;
  className?: string;
  onClick?: () => void;
}

export default ButtonProps;
