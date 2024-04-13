"use client"
import React, { FC } from 'react';
import TopNavbar from '@/app/components/logged/TopNavbar';
import BottomBar from '@/app/components/logged/BottomBar';


interface MDashboardProps {
  currentBottomBarElement:any
setCurrentBottomBarElement:any
}

const MDashboard: FC<MDashboardProps> = ({currentBottomBarElement, setCurrentBottomBarElement }) => {
  return (
    <div className='flex flex-col'>
      <TopNavbar />
      <p> Dashboard Content</p>
      <BottomBar currentBottomBarElement={currentBottomBarElement} setCurrentBottomBarElement={setCurrentBottomBarElement} />

    </div>
  );
};

export default MDashboard;