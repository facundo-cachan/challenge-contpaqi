import type { MenuItemProps } from "../../organisms/nav/types";

type HeaderProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  items?: MenuItemProps[];
};

export default HeaderProps;
