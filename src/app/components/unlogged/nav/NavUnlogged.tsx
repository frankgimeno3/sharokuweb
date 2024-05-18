import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import Image from 'next/image';

interface NavUnloggedProps {}

const NavUnlogged: FC<NavUnloggedProps> = ({}) => {
  const router = useRouter();
  const handleHome = () => {
    router.push('/');
  };
  const handleLogin = () => {
    router.push('/pages/auth/login');
  };
  const [pageLanguage, setPageLanguage] = useState('ES');
  const [selectOpen, setSelectOpen] = useState(false);

  const handleLanguageChange = (language: string) => {
    setPageLanguage(language);
    setSelectOpen(false);
    setPageLanguage(language);
  };

  return (
    <nav className="flex flex-row justify-between px-5 py-3 items-center px-12 z-30 bg-white text-gray-600 w-full">
      <div className='flex flex-row items-center' onClick={() => handleHome()}>
      <Image
              className="mx-auto border rounded-md shadow-xl"
              src="/logos/shdark.png"
              alt="Sharoku"
              width={75}
              height={75}
            />      
             </div>
      <div className="flex flex-row">
        <div className="flex flex-row p-2" onClick={() => handleLogin()}>
          <p>Acceder</p>
        </div>
        <div className="relative">
          <div
            className="flex flex-row p-2 items-center cursor-pointer"
            onClick={() => setSelectOpen(!selectOpen)}
          >
            <p>Idioma ({pageLanguage})</p>
            <Image
              className="mx-2"
              src={`/${pageLanguage}.png`}
              height={10}
              width={20}
              alt=""
            />
          </div>
          {selectOpen && (
            <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-lg bg-gray-400 w-24 text-center">
              <p
                className=" p-2 hover:bg-gray-200"
                onClick={() => handleLanguageChange('ES')}
              >
                ESPAÑOL
              </p>
              <p
                className=" p-2 hover:bg-gray-200"
                onClick={() => handleLanguageChange('EN')}
              >
                ENGLISH
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavUnlogged;
