"use client"
import React, { FC } from 'react';
import MDashboard from './pages/mobile/MDashboard';
import WDashboard from './pages/web/WDashboard';
import { useMediaQuery } from 'react-responsive';

interface DashboardProps {
  
}

const Dashboard: FC<DashboardProps> = ({ }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); 
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isMobile ? <MDashboard /> : <WDashboard />}
    </main>  );
};

export default Dashboard;