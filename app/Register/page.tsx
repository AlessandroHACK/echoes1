"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/`,
      },
    })
    router.refresh()

    // Aquí puedes realizar la lógica de registro o enviar los datos a un servidor
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Contraseña:', password);
    console.log('Confirmar contraseña:', confirmPassword);
    // Reiniciar los campos
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-mainbg bg-cover">
      <title>Echoes - Register</title>
      <div className="bg-white shadow-md rounded-md px-6 py-8 w-80">
      <div className="flex items-center justify-center">
          <Link href="/">
            <Image width={200} height={100} alt="logo" src="/img/Echoes-logo-b.png" />
          </Link>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 font-medium text-gray-700">Confirmar contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-black text-white font-semibold rounded hover:bg-white hover:text-black hover:border-black border-2">
            Registrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">¿Ya tienes cuenta? <Link href="/Login" className="text-blue-500">Iniciar sesión</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register
