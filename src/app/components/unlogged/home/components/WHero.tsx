import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';

interface WHeroProps {}

const WHero: FC<WHeroProps> = ({ }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [faseMensaje, setFaseMensaje] = useState(1);
  const [visible, setVisible] = useState(true);

  const { data: session, status } = useSession();

  if (status === "authenticated") {
    redirect('/dashboard');
  }

  useEffect(() => {
    setVideoUrl("https://sharoku.s3.eu-west-3.amazonaws.com/sharokuloop.mp4");

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setFaseMensaje(prevFase => (prevFase % 3) + 1);
        setVisible(true);
      }, 500);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  const getMessage = () => {
    switch (faseMensaje) {
      case 1:
        return "Buscas compañeros de piso? Buscas inquilinos para un piso de propiedad?";
      case 2:
        return "Necesitas herramientas para gestionar las tareas o las cuentas de un piso compartido?";
      case 3:
        return "Necesitas contratar un servicio de limpieza o reparación?";
      default:
        return "";
    }
  };

  return (
    <div className='relative'>
      <video
        className="fixed top-0 left-0 object-cover h-screen w-screen bg-sky-900 overflow-hidden"
        src={videoUrl}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute w-full flex flex-col justify-center items-center text-center mt-24 pt-24">
        <div className="bg-blue-500 bg-opacity-50 backdrop-filter backdrop-blur-lg w-full mt-24 py-10">
          <h1 className="text-4xl md:text-6xl text-sky-50 font-bold">
            SHAROKU
          </h1>
          <div className={`relative transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="xl:text-2xl text-slate-200 max-w-[45vw] sm:max-w-[60vw] m-auto py-6 font-light sm:text-xs md:text-xs">
              {getMessage()}
            </p>
          </div>
          <p className="xl:text-xl text-slate-200 max-w-[45vw] sm:max-w-[50vw] m-auto pt-1 font-medium sm:text-xs md:text-xs">
            Todo lo relacionado con compartir piso en una sola app
          </p>
        </div>
      </div>
    </div>
  );
};

export default WHero;
