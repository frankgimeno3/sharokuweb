import Link from 'next/link';
import React, { FC } from 'react';

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
  return (
    <div className='bg-white text-gray-600 p-5 flex flex-row justify-end z-50'>
      <div className='flex flex-col p-5'>
        <p className='font-bold'>Sharoku</p>
        <p className='italic text-sm'> Alquiler y gestión de pisos compartidos</p>
        <Link href={'/pages/general/trabajo'}>
          <p className='hover:font-bold text-sm'> Trabaja con nosotros</p>
        </Link>
        <p className='hover:font-bold'> Descargar</p>
      </div>
      <div className='flex flex-col p-5'>
        <p className='font-bold'>SOBRE NOSOTROS</p>
        <Link href={'/pages/general/FAQ'}>
          <p className='hover:font-bold text-sm'> FAQS</p>
        </Link>
        <Link href={'/pages/general/contacto'}>
          <p className='hover:font-bold text-sm'> Contáctanos</p>
        </Link>
        <p className='hover:font-bold text-sm'>  Botones sociales</p>
      </div>
      <div className='flex flex-col p-5'>
        <p className='font-bold'>LEGAL</p>
        <Link href={'/pages/general/tyc'}>
          <p className='hover:font-bold text-sm'> Términos y condiciones</p>
        </Link>
        <Link href={'/pages/general/privacidad'}>
          <p className='hover:font-bold text-sm'> Política de privacidad</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;