import React, { FC } from 'react';

interface NavUnloggedProps {

}

const NavUnlogged: FC<NavUnloggedProps> = ({ }) => {
  return (
    <nav className='flex flex-row justify-between p-5'>
      <div> <p>Sharoku</p></div>
      <div className='flex flex-row'>
        <div className='flex flex-row'><p>Acceder</p></div>
        <div className='flex flex-row'><p>Idioma</p></div>
      </div>
    </nav>
  );
};

export default NavUnlogged;