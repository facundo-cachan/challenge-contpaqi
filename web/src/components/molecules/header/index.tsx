import { useState } from 'react';
import { Button, Image, Nav } from '../..';

import type HeaderProps from "./types";

const Header = ({ children, ...props }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (<header className="px-6 py-4 bg-white shadow-md">
    <div className="container flex items-center justify-between mx-auto">
      {/* Logo */}
      <Image src="/logo.png" alt="Logo" className="h-8" />

      {/* Navegación de Escritorio */}
      <Nav className="hidden space-x-6 md:flex" items={[]} />

      {/* Icono de Menú Hamburguesa (Móvil) */}
      <Button 
        className="text-gray-800 md:hidden hover:text-blue-500"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Image src="/logo.png" alt="Logo" className="h-8" />
      </Button>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="absolute right-0 w-full bg-white shadow-md md:hidden top-full">
          {/* Enlaces del menú móvil */}
        </div>
      )}

      {/* Otros elementos del header (carrito, búsqueda, etc.) */}
    </div>
  </header>)
}

export default Header;