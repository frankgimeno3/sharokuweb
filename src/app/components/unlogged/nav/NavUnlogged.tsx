import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';

interface NavUnloggedProps {

}

const NavUnlogged: FC<NavUnloggedProps> = ({ }) => {
  const router = useRouter()
  const handleHome = ()=>{
    router.push('/')
  }
  const handleLogin = ()=>{
    router.push('/pages/auth/login')
  }
  const [pageLanguage, setPageLanguage] = useState("ES")
  
  return (
    <nav className='flex flex-row justify-between p-5 items-center px-12'>
      <div onClick={()=>{handleHome()}}> <p >Sharoku</p></div>
      <div className='flex flex-row  '>
        <div className='flex flex-row p-2' onClick={()=>{handleLogin()}}><p>Acceder</p></div>
        <div className='flex flex-row p-2'><p>Idioma ( {pageLanguage} )</p></div>
      </div>
    </nav>
  );
};

export default NavUnlogged;