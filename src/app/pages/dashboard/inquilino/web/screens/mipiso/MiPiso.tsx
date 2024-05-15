import React, { FC } from 'react';

interface MiPisoProps {

}

const MiPiso: FC<MiPisoProps> = ({ }) => {
    return (

        <div className='flex-col justify-center items-center text-center' >
            <p className='font-bold py-12 text-3xl '>Mi piso</p>

            <p>Sobre tu piso</p>
            <p>Dirección </p>
            <p>Logo </p>
            <div className='flex flex-row mx-5'>
                <div className='flex flex-col flex-1 '>
                    <button className='bg-white rounded-lg shadow  m-5 py-5'>Calendario</button>
                    <button className='bg-white rounded-lg shadow  m-5 py-5'>Cuentas</button>
                    <button className='bg-white rounded-lg shadow  m-5 py-5'>Chat del piso</button>
                    {/* //incluirá compañeros, y admin y propietarios por separado */}
                </div>
                <div className='flex flex-col flex-1 '>
                    <button className='bg-white rounded-lg shadow  m-5 py-5'>Tareas</button>
                    <button className='bg-white rounded-lg shadow  m-5 py-5'>Lista de la compra</button>
                    <button className='bg-white rounded-lg shadow  m-5 py-5'>Administrar habitaciones</button>
                </div>
            </div>
            <button className='bg-white rounded-lg shadow w-50 m-5'>Contratar servicios</button>
        </div>
    );
};

export default MiPiso;