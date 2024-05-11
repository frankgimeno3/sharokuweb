"use client"
import React, { FC, useEffect, useState } from 'react';
import MDashboard from './inquilino/mobile/MDashboard';
import WDashboardInquilino from './inquilino/web/WDashboard';
import WDashboardModerador from './moderador/web/WDashboard';
import WDashboardPropietario from './propietario/web/WDashboard';
import WDashboardAdministrador from './administrador/web/WDashboard';
import WDashboardServicios from './servicios/web/WDashboard';
import { useMediaQuery } from 'react-responsive';
import { Providers } from '@/redux/provider';
import { redirect } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { selectUser, updateUser, User } from '@/redux/features/userSlice';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '@/app/firebase';


interface DashboardProps {
}


const Dashboard: FC<DashboardProps> = ({ }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [currentBarElement, setCurrentBarElement] = useState("Mi Piso")
  const dispatch = useDispatch();
  const [userData, setUserData] = useState('');
  const [userObject, setUserObject] = useState<any>();
  const [userTypeReceived, setUserTypeReceived] = useState<string>()
  const user = useSelector(selectUser); 

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/pages/auth/login');
    },
  });


  // ESTOS 2 USEEFFECT SON PARA
  // EL PRIMERO PARA OBTENER DE SESSION EL EMAIL DE USUARIO
  useEffect(() => {
    if (session?.data?.user?.email) {
      setUserData(session.data.user.email);
    } 
  }, [session?.data?.user?.email]);

  // EL SEGUNDO PARA HACER FETCH CON EL A FIREBASE, OBTENER EL OBJETO COMPLETO, Y PASAR A REDUX
  useEffect(() => {
    const fetchDoc = async () => {
      if (userData) {
        const docRef = doc(db, "users", userData);
        const response = await getDoc(docRef);
        if (response.exists()) {
          const myUserData = response.data() as User;
          dispatch(updateUser(myUserData));
          setUserObject(myUserData)
        }
      }
    };
    fetchDoc();
  }, [userData, dispatch]);

  useEffect(() => {
    if(userObject)
    {if (userObject.userType == "inquilino") {setUserTypeReceived("inquilino")}
    if (userObject.userType == "moderador") {setUserTypeReceived("moderador")}
    if (userObject.userType == "propietario") {setUserTypeReceived("propietario")}
    if (userObject.userType == "administrador") {setUserTypeReceived("administrador")}
    if (userObject.userType == "servicios") {setUserTypeReceived("servicios")}}
  }, [userObject]);

  return (
    <Providers >
      <main className="flex min-h-screen flex-row">  
      {userTypeReceived == "inquilino" && 
        <WDashboardInquilino currentLeftBarElement={currentBarElement} setCurrentLeftBarElement={setCurrentBarElement}/> 
            }   
      {userTypeReceived == "moderador" && 
        <WDashboardModerador currentLeftBarElement={currentBarElement} setCurrentLeftBarElement={setCurrentBarElement}/>
    }   
          {userTypeReceived == "propietario" && 
        <WDashboardPropietario currentLeftBarElement={currentBarElement} setCurrentLeftBarElement={setCurrentBarElement}/>
    }   
          {userTypeReceived == "administrador" && 
        <WDashboardAdministrador currentLeftBarElement={currentBarElement} setCurrentLeftBarElement={setCurrentBarElement}/>
    }   
          {userTypeReceived == "servicios" && 
        <WDashboardServicios currentLeftBarElement={currentBarElement} setCurrentLeftBarElement={setCurrentBarElement}/>
    }   
      </main>
    </Providers>
  );
};

export default Dashboard;