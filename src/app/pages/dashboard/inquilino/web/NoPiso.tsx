import React, { FC } from 'react';

interface NoPisoProps {
  
}

const NoPiso: FC<NoPisoProps> = ({ }) => {
  return (
    <div className='flex-col justify-center items-center text-center' >          
    <p className='font-bold py-12 text-3xl '>Mi piso</p>

    <p>Actualmente no tienes o no has añadido tu piso o cuarto a sharoku</p>
    <button className='bg-white rounded-lg shadow  m-5 py-5'>Busca un piso disponible para alquilar</button>
    <button className='bg-white rounded-lg shadow  m-5 py-5'>Busca habitaciones en pisos compartidos</button>
    <button className='bg-white rounded-lg shadow  m-5 py-5'>Ya tienes piso?</button>
</div>
  );
};

export default NoPiso;