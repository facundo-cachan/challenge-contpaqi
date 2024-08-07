import HeaderProps from "./types"

const Header = ({ children, className }: HeaderProps) => (<header className={`min-w-full ${className}`}>{children}</header>)

export default Header