"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import {toast} from "react-hot-toast"

const Register = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password != confirmPassword){
      toast.error('Las contraseñas no son iguales.')
      return;
    }
    const {error} = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/`,
      },
    })
    if(error){
      toast.error('Hubo un error en el registro, inténtalo de nuevo.')
      return;
    }
    router.push('/')

    // Reiniciar los campos
    setEmail('');
    setPassword('');
    setConfirmPassword('');

   
  };

  return (
    <div >
    <div className="min-h-screen flex items-center justify-center bg-mainbg bg-cover">
      <title>Echoes - Register</title>
      <div className="bg-bone-100 dark:bg-chocolate-900  shadow-md rounded-xl px-6 py-8 w-80 my-10">
      <div className="flex items-center justify-center">
         <Link href={'/'} >
            <div className='bg-image-one dark:bg-image-two h-[55px] w-[195px] bg-cover'>
            </div>
              </Link>
        </div>
        <h2 className=" dark:text-bone-100 text-2xl font-bold mb-4 text-center">Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium dark:text-bone-100">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border dark:text-zinc-100 border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium dark:text-bone-100">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border dark:text-zinc-100 border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 font-medium dark:text-bone-100">Confirmar contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border dark:text-zinc-100 border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-zinc-950 dark:bg-chocolate-100 text-bone-100 font-semibold rounded hover:bg-beige-900  hover:text-bone-100 dark:hover:text-chocolate-100  dark:hover:bg-beige-100">
            Registrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="dark:text-bone-100">¿Ya tienes cuenta? <Link href="/Login" className="dark:text-beige-900 text-chocolate-100">Iniciar sesión</Link></p>
        </div>
      </div>
    </div>
     </div>
  );
};

export default Register
