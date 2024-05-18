'use client';
import { useEffect, useState } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { auth } from '@/app/firebase';
import NavUnlogged from '@/app/components/unlogged/nav/NavUnlogged';


export default function ForgotPassword() {
  const router = useRouter();


  const [email, setEmail] = useState('');
  const [videoUrl, setVideoUrl] = useState("");
  const [buttonPushed, setButtonPushed] = useState(false)

  const { data: session, status } = useSession()

  if (status === "authenticated") {
    redirect('/pages/dashboard');
  }


  useEffect(() => {
    setVideoUrl("https://sharoku.s3.eu-west-3.amazonaws.com/sharokuloop.mp4");
  }, []);


  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
    setButtonPushed(true)
    setTimeout(() => { router.push("/signin") }
      , 4000);

  };

  return (
    <div className="relative h-screen">
      <video
        className="fixed top-0 left-0 object-cover h-screen w-screen bg-gray-50 overflow-hidden z-10"
        src={videoUrl}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute w-full flex flex-col   text-center   z-20 h-full ">
        <NavUnlogged />
        <div className=" sm:mx-auto sm:w-full sm:max-w-3xl pt-36 bg-black bg-opacity-50 h-full w-full px-24"
        >

          <div className="space-y-12">
            <Image
              className="mx-auto rounded-md shadow-xl"
              src="/logos/shwhite.png"
              alt="Sharoku"
              width={100}
              height={100}
            />
            <p className='text-4xl '>Olvidé mi contraseña</p>
          </div>
          {!buttonPushed && <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Correo electrónico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-3 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={() => resetEmail()}
                  disabled={!email}
                  className="disabled:opacity-50 disabled:text-white flex w-full justify-center rounded-md bg-opacity-20 bg-orange-200 border border-orange-200   px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Enviar cambio de contraseña
                </button>
              </div>

              <div className="text-sm">
                <div onClick={() => router.push('/pages/auth/signup')} className="cursor-pointer font-semibold text-orange-200 hover:text-orange-300">
                  No dispone de una cuenta? Crear cuenta
                </div>
              </div>
            </div>
          </div>}
          {buttonPushed &&
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="space-y-6">
                <div>
                  <h3>Hemos enviado un mensaje a su correo, por favor, ábralo y cree una nueva contraseña</h3>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>
  )
}