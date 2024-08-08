import { useState } from 'react';
import { Aside, Header, Image, VCard, ShoppingCart, Link } from '../..';
import selectorUser from '../../../services/recoil/user';
import { useRecoilValue } from 'recoil';

import type HeaderProps from "./types";
import type { User } from '../../../services/context/auth';

const HeaderResponsive = ({ children, items = [], className, ...props }: HeaderProps) => {
  const user = useRecoilValue<User | null>(selectorUser);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(true);

  console.log(user);
  

  return (<>
    {/* <Header className={`flex flex-row items-center justify-between m-w-full align-middle md:max-h-32 ${className}`}> */}
    <Header className={`m-w-full ${className} grid grid-cols-12`}>
      <div className="col-span-2 cell">
        <Image src="/images/logo.png" alt="Logo" className="hidden w-24 md:block" />
      </div>
      <div className="flex-col col-span-7 cell">{children}</div>
      <div className="col-span-3 grid grid-cols-4">
        <div className="col-span-3 cell"><ShoppingCart className={user ? 'block' : 'hidden'} /></div>
        <div className="cell">
          {user ?
            (<VCard {...user} className="" />) :
            (<Link to="/login" className="">Login</Link>)
          }
        </div>
        {/* <Button
          className="text-gray-800 md:hidden hover:text-blue-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Image src="/images/logo.png" alt="Logo" className="block w-16 md:hidden" />
        </Button> */}
      </div>
    </Header>
    <Aside items={items} className="mt-20 md:hidden bg-blue" isOpen={isMobileMenuOpen} dir="col" />
  </>
  )
}

export default HeaderResponsive;