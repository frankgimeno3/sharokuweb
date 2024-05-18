import React, { FC } from 'react';

interface EncontrarScreenProps {
  
}

const EncontrarScreen: FC<EncontrarScreenProps> = ({ }) => {
  return (
    <div className='flex-col justify-center items-center text-center w-full' >
    <p className='font-bold py-12 text-3xl '>Encontrar</p>
 
    <div className='flex flex-col mx-5'>
             <button className='bg-white rounded-lg shadow  m-5 py-5'>Usuarios</button>
            <button className='bg-white rounded-lg shadow  m-5 py-5'>Pisos completos</button>
            <button className='bg-white rounded-lg shadow  m-5 py-5'>Habitaciones</button>
            <button className='bg-white rounded-lg shadow  m-5 py-5'>Formador de grupos</button>
     </div>
    <button className='bg-white rounded-lg shadow w-50 m-5'>Contratar servicios</button>
</div>
  );
};

export default EncontrarScreen;