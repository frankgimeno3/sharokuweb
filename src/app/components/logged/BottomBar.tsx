import React, { FC } from 'react';
import Image from 'next/image';


interface BottomBarProps {
 currentBottomBarElement:any;
 setCurrentBottomBarElement:any
}

const BottomBar: FC<BottomBarProps> = ({ currentBottomBarElement, setCurrentBottomBarElement}) => {
    return (
        <nav className='flex flex-row justify-center align-center items-center'>
            <div className='flex flex-col justify-center p-12 text-center'>
                <Image src={'/homicon.png'} alt={'homeIcon'} width={20} height={20}/>
                <p>Mi Piso</p>
            </div>
            <div className='flex flex-col justify-center p-12 text-center'>
                <Image src={'/homicon.png'} alt={'Encontrar'} width={20} height={20}/>
                <p>Encontrar</p>
            </div>
            <div className='flex flex-col justify-center p-12 text-center'>
                <Image src={'/homicon.png'} alt={'MisContactos'} width={20} height={20}/>
                <p>MisContactos</p>
            </div>
            <div className='flex flex-col justify-center p-12 text-center'>
                <Image src={'/homicon.png'} alt={'Perfil'} width={20} height={20}/>
                <p>Perfil</p>
            </div>
        </nav>
    );
};

export default BottomBar;