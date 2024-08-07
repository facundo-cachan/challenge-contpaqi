import { Link } from "../..";

import type AsideProps from "./types";

const Aside = ({ children, className, items, isOpen = true }: AsideProps) => (<aside className={`${isOpen ? 'block' : 'ui-hidden'} px-6 py-4 bg-white shadow-md ${className}`}>
  {!items && children ? children : (<ul className="flex ui-flex-col items-baseline ml-10 space-x-4">
    <li>
      <Link href="/" aria-current="page">Home</Link>
    </li>
    {items?.map(({ path, label }, i: number) => (<li key={path.replace('/', '')}>
      <Link href={path === '' ? '/#!' : path} aria-description={`Item Menu ${label}`}>{label}</Link>
    </li>))}
  </ul>)}
</aside>
)

export default Aside;