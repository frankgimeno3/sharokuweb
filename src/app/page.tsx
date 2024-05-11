"use client"

import React from "react";
import { useMediaQuery } from 'react-responsive';
import Mobile from "./components/unlogged/home/Mobile";
import Web from "./components/unlogged/home/Web";
import NavUnlogged from "./components/unlogged/nav/NavUnlogged";
import Footer from "./components/general/Footer";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); 

  
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    redirect('/pages/dashboard');
  }
  
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
