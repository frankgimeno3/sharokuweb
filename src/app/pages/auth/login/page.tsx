"use client"
import NavUnlogged from '@/app/components/unlogged/nav/NavUnlogged';
import { signIn, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';

interface LoginProps { }

const Login: FC<LoginProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data: session, status } = useSession();
  const router = useRouter();

  // useEffect para hacer console.log de email y password cuando cambian
  useEffect(() => {
    console.log("Email:", email);
    console.log("Password:", password);
  }, [email, password]);

  if (status === "authenticated") {
    redirect('/pages/dashboard');
  }

  return (
    <>
      <NavUnlogged />

      <form
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={(e) => {
          e.preventDefault();
          signIn('credentials', { email, password, redirect: true, callbackUrl: '/pages/dashboard' });
        }}
      >
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
              Correo Electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                Contraseña
              </label>
              <div className="text-sm">
                <div onClick={() => router.push('/forgot-password')} className="cursor-pointer font-semibold text-blue-400 hover:text-blue-300">
                  Olvidó su contraseña?
                </div>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={() => signIn('credentials', { email, password, redirect: true, callbackUrl: '/pages/dashboard' })}
              disabled={!email || !password}
              className="disabled:opacity-40 flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Iniciar sesión
            </button>
          </div>
          <div className="text-sm">
            <div onClick={() => router.push('/pages/auth/signup')} className="cursor-pointer font-semibold text-blue-400 hover:text-blue-300">
              No dispone de una cuenta? Crear cuenta
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;