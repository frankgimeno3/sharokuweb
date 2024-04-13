import React, { FC, useState } from 'react';
import Image from 'next/image';

interface BottomBarProps {
    currentLeftBarElement: any
    setCurrentLeftBarElement: any;
}

const BottomBar: FC<BottomBarProps> = ({ currentLeftBarElement, setCurrentLeftBarElement }) => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const handleHover = (value: string | null) => { // Modificado para aceptar null
    setHoveredElement(value);
  };

  const handleClick = (value: string) => {
    setCurrentLeftBarElement(value);
  };

  return (
    <nav className='flex flex-col justify-center align-center items-center bg-amber-100 h-screen text-gray-600'>
      <div
        className={`flex flex-col items-center p-3 py-12 text-center w-full ${
          hoveredElement === 'Mi Piso' || currentLeftBarElement === 'Mi Piso' ? 'bg-amber-200' : ''
        }`}
        onMouseEnter={() => handleHover('Mi Piso')}
        onMouseLeave={() => handleHover(null)} // Pasamos null aquí cuando el mouse sale del elemento
        onClick={() => handleClick('Mi Piso')}
      >
        <Image src={'/homicon.png'} alt={'homeIcon'} width={20} height={20} />
        <p>Mi Piso</p>
      </div>
      <div
        className={`flex flex-col items-center p-3 py-12 text-center w-full ${
          hoveredElement === 'Encontrar' || currentLeftBarElement === 'Encontrar' ? 'bg-amber-200' : ''
        }`}
        onMouseEnter={() => handleHover('Encontrar')}
        onMouseLeave={() => handleHover(null)}
        onClick={() => handleClick('Encontrar')}
      >
        <Image src={'/homicon.png'} alt={'Encontrar'} width={20} height={20} />
        <p>Encontrar</p>
      </div>
      <div
        className={`flex flex-col items-center p-3 py-12 text-center w-full ${
          hoveredElement === 'Mis Contactos' || currentLeftBarElement === 'Mis Contactos' ? 'bg-amber-200' : ''
        }`}
        onMouseEnter={() => handleHover('Mis Contactos')}
        onMouseLeave={() => handleHover(null)}
        onClick={() => handleClick('Mis Contactos')}
      >
        <Image src={'/homicon.png'} alt={'MisContactos'} width={20} height={20} />
        <p>Mis Contactos</p>
      </div>
      <div
        className={`flex flex-col items-center p-3 py-12 text-center w-full ${
          hoveredElement === 'Perfil' || currentLeftBarElement === 'Perfil' ? 'bg-amber-200' : ''
        }`}
        onMouseEnter={() => handleHover('Perfil')}
        onMouseLeave={() => handleHover(null)}
        onClick={() => handleClick('Perfil')}
      >
        <Image src={'/homicon.png'} alt={'Perfil'} width={20} height={20} />
        <p>Perfil</p>
      </div>    </nav>
  );
};

export default BottomBar;
