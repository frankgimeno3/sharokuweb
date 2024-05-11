"use client"

import React from "react";
import { useMediaQuery } from 'react-responsive';
import Mobile from "./components/unlogged/home/Mobile";
import Web from "./components/unlogged/home/Web";
import NavUnlogged from "./components/unlogged/nav/NavUnlogged";
import Footer from "./components/general/Footer";

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); 

  return (
    <div className="min-h-screen flex flex-col justify-between">
    <main className="flex flex-col   ">
            <NavUnlogged />
      {isMobile ? <Mobile /> : <Web />}
    </main>
      <Footer/>
    </div>
  )
}
