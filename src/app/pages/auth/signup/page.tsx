"use client"
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import Correo from './signupComponents/Correo';
import Tipo from './signupComponents/Tipo';
import Contras from './signupComponents/Contras';
import { doc, setDoc } from '@firebase/firestore';
import { auth, db } from '@/app/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import NavUnlogged from '@/app/components/unlogged/nav/NavUnlogged';

interface SignupProps {

}

const Signup: FC<SignupProps> = ({ }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [userType, setUserType] = useState('inquilino');
  const [isAccepted, setIsAccepted] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [edad, setEdad] = useState("");
  const [genero, setGenero] = useState("");
  const [ubi, setUbi] = useState("");
  const [region, setRegion] = useState("");
  const [actividad, setActividad] = useState("");
  const [cifEmpresa, setCifEmpresa] = useState("");
  const [pisoId, setPisoId] = useState("")
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    setVideoUrl("https://sharoku.s3.eu-west-3.amazonaws.com/sharokuloop.mp4");
  }, []);

  const { data: session, status } = useSession()


  if (status === "authenticated") {
    redirect('/pages/dashboard');
  }


  const router = useRouter();

  const handleUserTypeChange = (e: any) => {
    setUserType(e.target.value);
  };
  const handleRegionChange = (e: any) => {
    setRegion(e.target.value);
  };

  const addUserInFirebase = async () => {
    if (email !== '' && password !== '' && passwordAgain !== '') {
      const userDocRef = doc(db, 'users', email.trim());
      console.log("check de que todo funciona desde addUserIn Firebase! nombre: ", nombre, ", email:", email,
        ", apellidos: ", apellidos, ", edad: ", edad, ", genero: ", genero, ", ubi: ", ubi,)
      await setDoc(userDocRef, {
        nombre: nombre.trim(),
        email: email.trim(),
        apellidos: apellidos.trim(),
        edad: edad.trim(),
        genero: genero.trim(),
        ubi: ubi.trim(),
        pisoId: pisoId.trim(),
        userType: userType.trim(),
      });
    }


  };

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password);
    addUserInFirebase();
    setIsAccepted(true);
    setTimeout(() => {
      router.push("/pages/dashboard");
    }, 3500);
  };
  return (
    <div className="relative h-screen">
      <video
        className="fixed top-0 left-0 object-cover h-screen w-screen bg-sky-900 overflow-hidden z-10"
        src={videoUrl}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute w-full flex flex-col justify-center items-center text-center mt-24 pt-24 z-20">
        <NavUnlogged />

        <form onSubmit={(e) => {
          e.preventDefault();
          signup();
        }} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"      >
          <div className="space-y-6">

            <Correo setEmail={setEmail} />
            <Tipo userType={userType} handleUserTypeChange={handleUserTypeChange} />
            <Contras setPassword={setPassword} setPasswordAgain={setPasswordAgain} />


            <div>
              <button
                disabled={(!email || !password || !passwordAgain || !setNombre || !setApellidos || !setUbi) || (password !== passwordAgain)}
                onClick={() => signup()}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;