"use client"


import Link from "next/link";
import Image from "next/image";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import Loading from '../../components/loading';
import { toast } from "react-hot-toast"


const Login = () => {
  const supabaseClient = useSupabaseClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación o enviar los datos a un servidor
    try {
      const {
        error: supabaseError
      } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      })
      if (supabaseError) {
        toast.error('Las credenciales son incorrectas o no se encontró una cuenta.')
        return;
      }else{

        toast.success('Sesión iniciada.')
      }
      router.push('/');
      router.refresh();
    }
    catch (error) {
      console.log(error);
    }

    // Reiniciar los campos
    setEmail("");
    setPassword("");
  };

  return (
    <div>

      <div className="min-h-screen flex items-center justify-center">
        <title>Echoes - Login</title>
        <div className="bg-bone-100 dark:bg-chocolate-900 shadow-md rounded-md px-6 py-8 w-80">
        <Link href={'/'} className="flex items-center justify-center">
            <div className='bg-image-one dark:bg-image-two h-[55px] w-[195px] bg-cover'>
            </div>
          </Link>
          <h2 className="text-2xl text-chocolate-900 dark:text-bone-100 font-bold mb-4 text-center">Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 font-medium  dark:text-bone-100"
              >
                Email
              </label>
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
              <label
                htmlFor="password"
                className="block mb-2 font-medium  dark:text-bone-100"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border dark:text-zinc-100 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-zinc-950 dark:bg-chocolate-100 text-bone-100 font-semibold rounded hover:bg-beige-900  hover:text-bone-100 dark:hover:text-chocolate-100  dark:hover:bg-beige-100"
            >
              Iniciar sesión
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-zinc-900 dark:text-bone-100">
              ¿No tienes cuenta?{" "}
              <Link href="/Register" className="dark:text-beige-900 text-chocolate-100">
                Crear cuenta
              </Link>
            </p>
            <p className="text-zinc-900 dark:text-bone-100">
              ¿Olvidaste tu contraseña?{" "}
              <Link href="/PasswordRecovery" className="dark:text-beige-900 text-chocolate-100">
                Recuperar contraseña
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
