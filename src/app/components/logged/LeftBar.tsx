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
    <nav className='flex flex-col bg-neutral-500 h-full text-white w-52'>
      <div
        className={`flex flex-row items-center p-3 pl-6 py-4 text-center w-full ${hoveredElement === 'Mi Piso' || currentLeftBarElement === 'Mi Piso' ? 'bg-neutral-400' : ''
          }`}
        onMouseEnter={() => handleHover('Mi Piso')}
        onMouseLeave={() => handleHover(null)} // Pasamos null aquí cuando el mouse sale del elemento
        onClick={() => handleClick('Mi Piso')}
      >
        <svg version="1.1" className='h-5 w-5 fill-white' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve">
          <polygon stroke="white" stroke-width="2" stroke-miterlimit="10" points="32,3 2,33 11,33 11,63 23,63 23,47 39,47 
	          39,63 51,63 51,33 62,33 "/>
        </svg>
        <p className='pl-3'>Mi piso</p>
      </div>
      <div
        className={`flex flex-row items-center p-3 pl-6 py-4 text-center w-full ${hoveredElement === 'Encontrar' || currentLeftBarElement === 'Encontrar' ? 'bg-neutral-400' : ''
          }`}
        onMouseEnter={() => handleHover('Encontrar')}
        onMouseLeave={() => handleHover(null)}
        onClick={() => handleClick('Encontrar')}
      >
        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 256.00098 256.00098" id="Flat" xmlns="http://www.w3.org/2000/svg"
          className='w-5 h-5 fill-white'>
          <path d="M232.47656,215.51563l-40.67773-40.67774a96.10791,96.10791,0,1,0-16.97168,16.96973l40.67871,40.67871a12.0001,12.0001,0,1,0,16.9707-16.9707ZM43.99707,116a72,72,0,1,1,72,72A72.08124,72.08124,0,0,1,43.99707,116Z" />
        </svg>
        <p className='pl-3'>Encontrar</p>
      </div>
      <div
        className={`flex flex-row items-center p-3 pl-6 py-4 text-center w-full ${hoveredElement === 'Mis Contactos' || currentLeftBarElement === 'Mis Contactos' ? 'bg-neutral-400' : ''
          }`}
        onMouseEnter={() => handleHover('Mis Contactos')}
        onMouseLeave={() => handleHover(null)}
        onClick={() => handleClick('Mis Contactos')}
      >
        <svg className="h-5 w-5 jam jam-message" fill="white" width="800px" height="800px" viewBox="-2 -2.5 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin"  ><path d='M9.378 12H17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1 1 1 0 0 1 1 1v3.013L9.378 12zM3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.006V14a2 2 0 0 1-2-2V3a3 3 0 0 1 3-3z' /></svg>
        <p className='pl-3'>Mis contactos</p>
      </div>
      <div
        className={`flex flex-row items-center p-3 pl-6 py-4 text-center w-full ${hoveredElement === 'Perfil' || currentLeftBarElement === 'Perfil' ? 'bg-neutral-400' : ''
          }`}
        onMouseEnter={() => handleHover('Perfil')}
        onMouseLeave={() => handleHover(null)}
        onClick={() => handleClick('Perfil')}
      >
        <svg className='h-5 w-5 ' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512" xmlSpace="preserve">
          <style type="text/css">
            {`.st0{fill:white;}`}
          </style>
          <g>
            <path className="st0" d="M486.28,196.046C482.19,87.09,392.628,0,282.673,0C170.118,0,78.875,91.234,78.856,203.781
      C63.67,233.026,27.245,307.275,27.245,307.275c-2.799,5.589-2.899,12.15-0.281,17.83c2.617,5.689,7.67,9.869,13.731,11.387
      l33.308,8.334c0,0,16.968,76.612,20.839,94.388c5.853,26.919,14.56,32.754,40.024,32.754c25.483,0,55.6-8.253,55.6-8.253V512
      h218.366v-76.421c0-27.673,7.616-62.38,29.118-88.336C481.191,295.06,489.597,239.233,486.28,196.046z"/>
          </g>
        </svg>
        <p className='pl-3'>Perfil</p>
      </div>    </nav>
  );
};

export default BottomBar;
