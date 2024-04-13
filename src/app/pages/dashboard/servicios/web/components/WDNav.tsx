import React, { FC } from 'react';

interface WDNavProps {
  
}

const WDNav: FC<WDNavProps> = ({ }) => {
  return (
    <nav className='flex flex-row'>
        <div className='p-5 bg-white hover:bg-gray-50 text-gray-500'>
            <p>
                Mi piso
            </p>
        </div>
        <div className='p-5 bg-white hover:bg-gray-50 text-gray-500'>
            <p>
                Contactos
            </p>
        </div>
        <div className='p-5 bg-white hover:bg-gray-50 text-gray-500'>
            <p>
                Encontrar
            </p>
        </div>
    </nav>
  );
};

export default WDNav;