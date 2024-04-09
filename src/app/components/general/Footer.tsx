import React, { FC } from 'react';

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({ }) => {
  return (
    <div className='bg-white text-gray-600 p-5 flex flex-row justify-end'>
        <div className='flex flex-col p-5'>
            <p className='font-bold'>Sharoku</p>
            <p>Alquiler y gestión de pisos compartidos</p>
            <p>Trabaja con nosotros</p>
            <p>Descargar</p>
        </div>
        <div className='flex flex-col p-5'>
            <p className='font-bold'>SOBRE NOSOTROS</p>
            <p>FAQS</p>
            <p>Contáctanos</p>
            <p> Botones sociales</p>
        </div>
        <div className='flex flex-col p-5'>
            <p className='font-bold'>LEGAL</p>
            <p>Términos y condiciones</p>
            <p>Política de privacidad</p>
        </div>
    </div>
  );
};

export default Footer;