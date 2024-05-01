"use client"
import React, { FC, useState } from 'react';
import MDashboard from './inquilino/mobile/MDashboard';
import WDashboard from './inquilino/web/WDashboard';
import { useMediaQuery } from 'react-responsive';


interface DashboardProps {

}

const Dashboard: FC<DashboardProps> = ({ }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [currentBarElement, setCurrentBarElement] = useState("Mi Piso")
  const [userSettings, setUserSettings] = useState()
    //gestionar con redux
    //dependiendo de los settings, te muestra una screen u otra
    //deben guardarse como estado gral para poder usarlas en todas las páginas

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