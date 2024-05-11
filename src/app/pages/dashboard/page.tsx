"use client"
import React, { FC, useEffect, useState } from 'react';
import MDashboard from './inquilino/mobile/MDashboard';
import WDashboard from './inquilino/web/WDashboard';
import { useMediaQuery } from 'react-responsive';
import { Providers } from '@/redux/provider';
import { redirect } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { selectUser, updateUser } from '@/redux/features/userSlice';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '@/app/firebase';


interface DashboardProps {
}

interface User {
  id: any
  apellidos: string;
  edad: number;
  genero: string;
  nombre: string;
  ubi: string;
  email: string;
  conversations: any
}


const Dashboard: FC<DashboardProps> = ({ }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [currentBarElement, setCurrentBarElement] = useState("Mi Piso")
  const dispatch = useDispatch();
  const [userData, setUserData] = useState('');
  const [userObject, setUserObject] = useState<any>();
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



  return (
    <Providers >
      <main className="flex min-h-screen flex-row">    
        <WDashboard currentLeftBarElement={currentBarElement} setCurrentLeftBarElement={setCurrentBarElement}/> 
      </main>
    </Providers>
  );
};

export default Dashboard;