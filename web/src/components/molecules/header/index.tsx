import { useState } from 'react';
import { Aside, Button, Image, Nav } from '../..';

import type HeaderProps from "./types";

const Header = ({ children, items, ...props }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (<header className="px-6 py-4 bg-white shadow-md bg-[#003a71]">
    <div className="container flex items-center justify-between mx-auto">
      <Image src="/images/logo.png" alt="Logo" className="hidden w-24 md:block" />

      {/* Navegación de Escritorio */}
      <Nav className="hidden space-x-6 md:flex" items={items} />

      {/* Icono de Menú Hamburguesa (Móvil) */}
      <Button 
        className="text-gray-800 md:hidden hover:text-blue-500"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Image src="/images/logo.png" alt="Logo" className="block w-16 md:hidden" />
      </Button>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <Aside items={items} className="h-screen w-screen z-10 overflow-hidden transition-all duration-300 ease-in-out" />
      )}

      {/* Otros elementos del header (carrito, búsqueda, etc.) */}
    </div>
  </header>)
}

export default Header;