import React, { FC } from 'react';

interface NoPisoProps {
  
}

const NoPiso: FC<NoPisoProps> = ({ }) => {
  return (
    <>
    <p>Actualmente no tienes o no has añadido tu piso o cuarto a sharoku</p>
    <button>Busca un piso disponible para alquilar</button>
    <button>Busca habitaciones en pisos compartidos</button>
    <button>Ya tienes piso?</button>
</>  );
};

export default NoPiso;