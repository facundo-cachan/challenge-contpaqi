import { Link } from "../..";

import type AsideProps from "./types";

const Aside = ({ children, className, items, isOpen = true }: AsideProps) => (<aside className={`bg-blue ${className}`}>
  {!items && children ? children : (
    <ul className="flex flex-col items-baseline ml-10 space-x-4 md:ui-flex-row">
      {items?.map(({ path, label }, i: number) => (<li key={path.replace('/', '')}>
        <Link href={path === '' ? '/#!' : path} aria-description={`Item Menu ${label}`}>{label}</Link>
      </li>))}
    </ul>
  )}
</aside>
)

export default Aside;