import { Link } from "../..";

import type AsideProps from "./types";

const Aside = ({ children, className, items, dir, isOpen = true }: AsideProps) => (<aside className={`transition-transform duration-300 ease-in-out transform lg:-translate-x-0 w-screen h-screen absolute overflow-visible z-10 ${isOpen ? 'translate-x-full' : '-translate-x-0'} ${className}`}>
  {!items && children ? children : (
    <ul className={`flex ${dir === 'col'? 'flex-col' : 'flex-row'} items-baseline p-2 space-x-4 md:ui-flex-row`}>
      {items?.map(({ path, label }, i: number) => (<li key={path.replace('/', '')}>
        <Link href={path === '' ? '/#!' : path} aria-description={`Item Menu ${label}`}>{label}</Link>
      </li>))}
    </ul>
  )}
</aside>
)

export default Aside;