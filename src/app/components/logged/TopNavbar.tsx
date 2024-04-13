import React, { FC } from 'react';

interface TopNavbarProps {

}

const TopNavbar: FC<TopNavbarProps> = ({ }) => {
    return (
        <nav className='flex flex-row justify-between align-center items-center bg-white text-gray-600 w-full p-5 text-xl'>
            <p>Sharoku</p>
            <div className='flex flex-row'>
                <p className='px-5'>Notifications</p>
                <p className='px-5'>Settings</p>
            </div>
        </nav>
    );
};

export default TopNavbar;