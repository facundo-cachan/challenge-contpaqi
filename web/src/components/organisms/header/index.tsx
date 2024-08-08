import HeaderProps from "./types"

const Header = ({ children, className }: HeaderProps) => (<header className={`px-6 py-4 bg-white shadow-md bg-[#003a71] ${className} min-w-screen`}>{children}</header>)

export default Header