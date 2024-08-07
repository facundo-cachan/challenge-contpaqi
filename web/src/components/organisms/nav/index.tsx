// import { Button } from '@repo/ui'

import { Link } from "../.."
import { NavProps } from "./types"

const Nav = ({ items, className }: NavProps) => (<nav className={className}>
  <div className="hidden md:block">
    <ul className="flex items-baseline ml-10 space-x-4">
      {items.map(({ path, label }, i: number) => (<li key={path.replace('/', '')}>
        <Link to={path} className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">{label}</Link>
      </li>))}
    </ul>
  </div>
</nav>)

export default Nav