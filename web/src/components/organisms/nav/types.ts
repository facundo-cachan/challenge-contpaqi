export type MenuItemProps = {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

export type NavProps = {
  className?: string;
  items: MenuItemProps[];
}