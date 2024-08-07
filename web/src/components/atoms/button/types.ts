import type { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactElement | ReactElement[] | string;
  className?: string;
  onClick?: () => void;
 }

export default ButtonProps;