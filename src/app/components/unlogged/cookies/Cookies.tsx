import React, { FC } from 'react';

interface CookiesProps {
  
}

const Cookies: FC<CookiesProps> = ({ }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-xl w-64 ">
      <h2 className="text-lg font-semibold text-gray-600">Aviso de cookies</h2>
      <p className="text-left text-gray-600 mt-2 mb-4">Este sitio web utiliza cookies para garantizar que obtengas la mejor experiencia en nuestro sitio web.</p>
      <div className="flex ">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mr-4">
          Aceptar
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg">
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default Cookies;