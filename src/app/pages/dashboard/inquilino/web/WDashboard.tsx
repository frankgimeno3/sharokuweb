import React, { FC, useState, useEffect } from 'react';
import TopNavbar from '@/app/components/logged/TopNavbar';
import LeftBar from '@/app/components/logged/LeftBar';
import { useSelector } from 'react-redux';
import { selectUser, User } from '@/redux/features/userSlice'; // Importamos la interfaz User desde userSlice

import PisoScreen from './screens/mipiso/MiPiso';
import EncontrarScreen from './screens/encontrar/EncontrarScreen';
import ContactoScreen from './screens/contactos/ContactoScreen';
import PerfilScreen from './screens/perfil/PerfilScreen';

interface WDashboardProps {
  currentLeftBarElement: any;
  setCurrentLeftBarElement: any;
}

const WDashboard: FC<WDashboardProps> = ({ currentLeftBarElement, setCurrentLeftBarElement }) => {
  const [emailReceived, setEmailReceived] = useState<string>('');
  const [typeReceived, setTypeReceived] = useState<string>('');
  const [pisoReceived, setPisoReceived] = useState<string>('');
  const user: User | null = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      setEmailReceived(user.email);
      setTypeReceived(user.userType)
      if (user.pisoId == "" || user.pisoId == '') { setPisoReceived("vacio") }
      if (user.pisoId == undefined || user.pisoId == null) { setPisoReceived("nulldefined") }
      if (user.pisoId != "" && user.pisoId != '' && user.pisoId != undefined && user.pisoId != null) { setPisoReceived(`${user.pisoId}`) }
      console.log("user desde wdashboard inquilino", user)
    }
  }, [user]);

  return (
    <div className='flex flex-col w-full min-h-screen' >
      <TopNavbar />
      <div className='flex flex-row w-full bg-gray-100 text-gray-500 h-full'>
        <LeftBar currentLeftBarElement={currentLeftBarElement} setCurrentLeftBarElement={setCurrentLeftBarElement} />
        {currentLeftBarElement=="Mi Piso" &&
        <PisoScreen />}
        {currentLeftBarElement=="Encontrar" &&
        <EncontrarScreen />}
        {currentLeftBarElement=="Mis Contactos" &&
        <ContactoScreen />}
        {currentLeftBarElement=="Perfil" &&
        <PerfilScreen />}
      </div>
    </div>
  );
};

export default WDashboard;
