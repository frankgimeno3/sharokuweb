import React, { FC, useState, useEffect } from 'react';
import TopNavbar from '@/app/components/logged/TopNavbar';
import LeftBar from '@/app/components/logged/LeftBar';
import { useSelector } from 'react-redux';
import { selectUser, User } from '@/redux/features/userSlice'; // Importamos la interfaz User desde userSlice
import MiPiso from './MiPiso';
import NoPiso from './NoPiso';

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
    <div className='flex flex-row w-full' >
      <LeftBar currentLeftBarElement={currentLeftBarElement} setCurrentLeftBarElement={setCurrentLeftBarElement} />
      <div className='flex flex-col w-full bg-gray-100 text-gray-500'>
        <TopNavbar />
        <div className='p-12'>
          <p>Welcome, {emailReceived} {typeReceived} </p>
          <p className='font-bold py-12 '>Mi piso</p>
          {pisoReceived != "vacio" && pisoReceived != "nulldefined" &&
            <MiPiso />
          }
          {pisoReceived == "vacio" &&
            <NoPiso />
          }

        </div>
      </div>
    </div>
  );
};

export default WDashboard;
