"use client"

import React from "react";
import { useMediaQuery } from 'react-responsive';
import Mobile from "./components/unlogged/home/Mobile";
import Web from "./components/unlogged/home/Web";
import NavUnlogged from "./components/unlogged/nav/NavUnlogged";

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); 

  return (
    <main className="flex min-h-screen flex-col   ">
            <NavUnlogged />

      {isMobile ? <Mobile /> : <Web />}
    </main>
  )
}
