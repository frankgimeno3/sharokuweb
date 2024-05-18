import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
  return (
    <div className='bg-white text-gray-600 px-5 py-2 flex flex-row justify-between items-center z-30'>
       <div><Image
              className="mx-auto border rounded-md shadow-xl hover:opacity-90"
              src="/logos/shdark.png"
              alt="Sharoku"
              width={75}
              height={75}
            />      </div>
       <div className='flex flex-row'>
        <div className='flex flex-col p-5'>
        <p className='font-bold'>Sharoku</p>
        <Link href={'/pages/general/trabajo'}>
          <p className='hover:text-amber-700'> Trabaja con nosotros</p>
        </Link>
        <p className='hover:text-amber-700'> Descargar</p>
      </div>
      <div className='flex flex-col p-5'>
        <p className='font-bold'>Sobre nosotros</p>
        <Link href={'/pages/general/FAQ'}>
          <p className='hover:text-amber-700'> FAQS</p>
        </Link>
        <Link href={'/pages/general/contacto'}>
          <p className='hover:text-amber-700'> Contáctanos</p>
        </Link>
        <p className='hover:text-amber-700'>  Botones sociales</p>
      </div>
      <div className='flex flex-col p-5'>
        <p className='font-bold'>Legal</p>
        <Link href={'/pages/general/tyc'}>
          <p className='hover:text-amber-700'> Términos y condiciones</p>
        </Link>
        <Link href={'/pages/general/privacidad'}>
          <p className='hover:text-amber-700'> Política de privacidad</p>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Footer;