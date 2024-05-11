import React, { FC, useState, useEffect } from 'react';
import TopNavbar from '@/app/components/logged/TopNavbar';
import LeftBar from '@/app/components/logged/LeftBar';
import { useSelector } from 'react-redux';
import { selectUser, User } from '@/redux/features/userSlice'; // Importamos la interfaz User desde userSlice

interface WDashboardProps {
  currentLeftBarElement: any;
  setCurrentLeftBarElement: any;
}

const WDashboard: FC<WDashboardProps> = ({ currentLeftBarElement, setCurrentLeftBarElement }) => {
  const [emailReceived, setEmailReceived] = useState<string>('');
  const [typeReceived, setTypeReceived] = useState<string>('');
  const user: User | null = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      setEmailReceived(user.email);  
      setTypeReceived(user.userType)
      console.log("user desde wdashboard inquilino", user)
    }  
  }, [user]);

  return (
    <div className='flex flex-row w-full' >
      <LeftBar currentLeftBarElement={currentLeftBarElement} setCurrentLeftBarElement={setCurrentLeftBarElement} />
      <div className='flex flex-col w-full bg-gray-100 text-gray-500'>
        <TopNavbar />
        <div className='p-12'>
          <p>Welcome, {emailReceived} {typeReceived} </p>
          <p>AQUÍ DEBERÍA MOSTRARSE EL USER.USERTYPE PARA TENER YO UNA REFERENCIA</p>
          <p>ACTUALMENTE ME RENDERIZA SOLAMENTE INQUILINO</p>
          <p>CENTRALIZAR USER CON REDUX, Y AUTOMATIZAR PETICION A BBDD</p>
          <p>LUEGO DESDE SUBCOMPONENTES, SIMPLEMENTE CONSUMIR EL OBJETO</p>
          <p>Contenido destacado:</p>
        </div>
      </div>
    </div>
  );
};

export default WDashboard;
