"use client"
import { useState, useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from "react-hot-toast";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const PasswordRecovery = () => {
  const router = useRouter();
  const supabaseClient = createClientComponentClient();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo: `https://echoes-opal.vercel.app/PasswordReset`,
      });
        if(error)
        toast.error(error.message)
        else
        toast.success('Correo enviado')
      }
    catch(error){
      toast.error(error.message)
    }
      

  

    setIsSubmitting(false);
    setEmail("");
  };

  

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-mainbg bg-cover">
        <title>Echoes - Register</title>
          <div className="bg-bone-100 dark:bg-chocolate-900  shadow-md rounded-xl px-6 py-8 w-80 my-10">
            <div className="flex items-center justify-center">
              <Link href={'/'} >
                <div className='bg-image-one dark:bg-image-two h-[55px] w-[195px] bg-cover'>
                </div>
              </Link>
            </div>
            <h2 className=" dark:text-bone-100 text-2xl font-bold mb-4 text-center">Recuperar contraseña</h2>
            <form onSubmit={handleResetPassword}>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium dark:text-bone-100">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button type="submit" className="w-full py-2 px-4 bg-zinc-950 dark:bg-chocolate-100 text-bone-100 font-semibold rounded hover:bg-beige-900  hover:text-bone-100 dark:hover:text-chocolate-100  dark:hover:bg-beige-100">
                Envíame un correo
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

export default PasswordRecovery;