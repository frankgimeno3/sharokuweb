import React, { FC } from 'react';

interface ContactoScreenProps {
  
}

const ContactoScreen: FC<ContactoScreenProps> = ({ }) => {
  return (
    <div className='flex-col justify-center items-center text-center w-full' >
    <p className='font-bold py-12 text-3xl '>Mis contactos</p>
 
    <div className='flex flex-col mx-5'>
            <button className='bg-white rounded-lg shadow  m-5 py-5'>Favoritos</button>
            <button className='bg-white rounded-lg shadow  m-5 py-5'>Chat del piso</button>
            <button className='bg-white rounded-lg shadow  m-5 py-5'>Usuarios</button>
            <button className='bg-white rounded-lg shadow  m-5 py-5'>Propietarios y administradores</button>
            <button className='bg-white rounded-lg shadow  m-5 py-5'>Proveedores de Servicios</button>
     </div>
    </div>
  );
};

export default ContactoScreen;