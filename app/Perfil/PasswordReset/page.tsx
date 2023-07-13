"use client"
import { useState, useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from "react-hot-toast";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const ResetPassword = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const { error } = await supabase.auth.updateUser({ password: newPassword });

      
    if(error){
      toast.error(error.message)
      return;
    }
    toast.success('Has cambiado tu contraseña.');
    router.push('/');


    setIsSubmitting(false);
    setNewPassword("");
  };



  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-mainbg bg-cover">
        <title>Echoes - Password</title>
 
          <div className="bg-bone-100 dark:bg-chocolate-900  shadow-md rounded-xl px-6 py-8 w-80 my-10">
            <div className="flex items-center justify-center">
              <Link href={'/'} >
                <div className='bg-image-one dark:bg-image-two h-[55px] w-[195px] bg-cover'>
                </div>
              </Link>
            </div>
            <h2 className=" dark:text-bone-100 text-2xl font-bold mb-4 text-center">Recuperar contraseña</h2>
            <form onSubmit={handleUpdatePassword}>

              <div className="mb-4">
                <label htmlFor="pass" className="block mb-2 font-medium dark:text-bone-100">Nueva contraseña</label>
                <input
                  type="password"
                  id="pass"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border dark:text-zinc-100 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button type="submit" className="w-full py-2 px-4 transition bg-zinc-950 dark:bg-chocolate-100 text-bone-100 font-semibold rounded hover:bg-beige-900  hover:text-bone-100 dark:hover:text-chocolate-100  dark:hover:bg-beige-100">
                Guardar contraseña
              </button>
            </form>

          </div>



      </div>
    </div>
  );
};

export default ResetPassword;