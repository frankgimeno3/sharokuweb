"use client"
import React, { FC, useState } from 'react';
import MDashboard from './inquilino/mobile/MDashboard';
import WDashboard from './inquilino/web/WDashboard';
import { useMediaQuery } from 'react-responsive';
import BottomBar from '@/app/components/logged/BottomBar';
import LeftBar from '@/app/components/logged/LeftBar';

interface DashboardProps {

}

const Dashboard: FC<DashboardProps> = ({ }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [currentBarElement, setCurrentBarElement] = useState("Mi Piso")
  return (
    <>
      <main className="flex min-h-screen flex-row">
  
        {isMobile ? 
        <MDashboard currentBottomBarElement={currentBarElement} setCurrentBottomBarElement={setCurrentBarElement}/> 
        : 
        <WDashboard currentLefBarElement={currentBarElement} setCurrentLefBarElement={setCurrentBarElement}/>}
      </main>
    </>
  );
};

export default Dashboard;