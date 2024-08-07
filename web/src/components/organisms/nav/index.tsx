// import { Button } from '@repo/ui'

type MenuItemProps = {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

type NavProps = {
  className?: string;
  items: MenuItemProps[];
}

const Nav = ({ items, className }: NavProps) => (<nav className={className}>
  <div className="hidden md:block">
    <ul className="flex items-baseline ml-10 space-x-4">
      <li>
        <a href="/#!" className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md" aria-current="page">Dashboard</a>
      </li>
      {items.map(({ path, label }, i: number) => (<li key={path.replace('/', '')}>
        <a href={path === '' ? '/#!' : path} className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">{label}</a>
      </li>))}
    </ul>
  </div>
</nav>)

export default Nav