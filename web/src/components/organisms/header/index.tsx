type HeaderProps = {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const Header = ({ children, className }: HeaderProps) => (<header className={`min-w-full ${className}`}>{children}</header>)

export default Header