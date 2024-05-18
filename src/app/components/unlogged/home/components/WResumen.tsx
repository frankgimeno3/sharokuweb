import React, { FC } from 'react';

interface WResumenProps {
  
}

const WResumen: FC<WResumenProps> = ({ }) => {
  return (
    <div className='flex flex-col z-50   bg-opacity-80  bg-gray-50 text-gray-600 p-32'>
              <p className='font font-bold text-4xl py-5 text-center py-16'> Para quién es Sharoku?</p>

    <div className='flex flex-row mx-auto  '>
      <div className='flex flex-col mx-12  px-12 py-8 bg-gray-50 rounded-lg shadow-xl'>
        <p className='font font-bold text-xl py-5'> Para inquilinos</p>
        <p className='py-2'>Encuentra pisos completos, compañeros o habitaciones</p>
        <p className='py-2'>Gestiona los gastos del alquiler, compras, servicios y otros</p>
        <p className='py-2'>Organiza eventos en el calendario compartido</p>
        <p className='py-2'>Contrata servicios de limpieza, mantenimiento y otros</p>
        <p className='py-2'>Contacta con el propietario y administrador de tu piso</p>
      </div>
      <div className='flex flex-col mx-12 px-12 py-8 bg-gray-50 rounded-lg shadow-xl'>
        <p className='font font-bold text-xl py-5 '> Para propietarios</p>
        <p className='py-2'>Gestiona fácilmente todos tus pisos alquilados</p>
        <p className='py-2'>Comunícate con tus inquilinos y administradores de fincas</p>
        <p className='py-2'>Todos tus documentos e informes en una sola app</p>
        <p className='py-2'>Contrata servicios para tus pisos</p>
        <p className='py-2'>Encuentra inquilinos y administradores de fincas</p>
      </div>
    </div>
    <div className='flex flex-col text-center my-12 mx-auto p-12 bg-gray-50 rounded-lg shadow-xl '>
    <p className='font font-bold text-xl'> Eres un proveedor de servicios?</p>
    <p className='pB-2 '>Encuentra clientes a través de nuestra app!</p>
    </div>
    </div >
  );
};

export default WResumen;