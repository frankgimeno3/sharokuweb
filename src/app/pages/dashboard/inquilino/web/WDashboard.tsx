"use client"
import React, { FC } from 'react';
import TopNavbar from '@/app/components/logged/TopNavbar';
import LeftBar from '@/app/components/logged/LeftBar';

interface WDashboardProps {
  currentLefBarElement:any
  setCurrentLefBarElement:any
}

const WDashboard: FC<WDashboardProps> = ({ currentLefBarElement, setCurrentLefBarElement}) => {
  return (
    <div className='flex flex-row w-full' >
      <LeftBar currentLeftBarElement={currentLefBarElement} setCurrentLeftBarElement={setCurrentLefBarElement} />
      <div className='flex flex-col w-full bg-gray-100 text-gray-500'>
        <TopNavbar />

        <p>Welcome, X</p>
        <p>Contenido destacado:</p>
      </div>
    </div>
  );
};

export default WDashboard;