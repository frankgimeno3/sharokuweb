"use client"

import React from "react";
import { useMediaQuery } from 'react-responsive';
import Mobile from "./components/unlogged/home/Mobile";
import Web from "./components/unlogged/home/Web";

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isMobile ? <Mobile /> : <Web />}
    </main>
  )
}
