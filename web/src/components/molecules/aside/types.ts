import type { HTMLAttributes } from "react";

// TODO: Normalize items props in navbar & aside

type MenuItemProps = {
  path: string;
  label: string;
  icon?: React.ReactNode;
};
interface AsideProps extends HTMLAttributes<HTMLElement> {
  dir?: "row" | "col";
  isOpen?: boolean;
  items?: MenuItemProps[];
}

export default AsideProps;
