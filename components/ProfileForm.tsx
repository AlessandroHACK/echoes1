"use client"
import { useUser } from '@/hooks/useUser';
import React, { useState, useEffect } from 'react';
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form';
import { RiUserLine } from 'react-icons/ri';
import { toast } from "react-hot-toast";
import { User, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import useLoadUser from '@/hooks/useLoadUser';
import { UserDetails } from '@/types';
import Image from 'next/image';

interface FormProps{
  userDetails: UserDetails
}

const ProfileForm:React.FC<FormProps> =   ({userDetails,}) => {
    
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      logo: null,
    }
  });

  const userPath = useLoadUser(userDetails);

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      const ImageFile = values.logo?.[0];
      if (!ImageFile) {
        toast.error('No has seleccionado una imagen');
        return;
      }

      const { data: imageData, error: imageError } = await supabaseClient
        .storage
        .from('usuarios')
        .upload(`image-${user.userDetails?.id}`, ImageFile, {
          cacheControl: '3600',
          upsert: false
        });

      if (imageError) {
        return toast.error(imageError.message);
      }

      const { error: supabaseError } = await supabaseClient
        .from('users')
        .update({
          avatar_url: imageData.path,
        })
        .eq('id', user.userDetails?.id);

      if (supabaseError) {
        return toast.error(supabaseError.message);
      }

      toast.success('Foto agregada.');
      router.refresh();
    } catch (error) {
      toast.error("Algo falló al agregar.");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onload = () => {
        const result = reader.result;
        if (result instanceof ArrayBuffer) {
          const uintArray = new Uint8Array(result);
          const array = Array.from(uintArray);
          const base64 = btoa(String.fromCharCode(...array));
          setProfileImage(`data:image/jpeg;base64,${base64}`);
        } else if (typeof result === 'string') {
          setProfileImage(result);
        }
      };
  
      reader.readAsArrayBuffer(file);
    } else {
      setProfileImage(userPath); // Establecer la imagen por defecto
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-bone-100 dark:bg-zinc-950 rounded-lg shadow-md p-4 w-80 flex flex-col items-center dark:border">
        <h1 className="text-3xl font-bold mb-4 text-center dark:text-bone-100">Selecciona tu foto de perfil</h1>
        <div className="mb-4 w-full  flex items-center justify-center">
          {profileImage ? (
            <div className='relative overflow-hidden w-1/2 aspect-square'>
              <Image
            fill
            className="rounded-full object-contain"
            src={profileImage}
            alt="Foto de perfil"
          />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
              <RiUserLine className="w-20 h-20 text-gray-400" />
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile-photo">

            </label>
            <div className="relative w-full">
              <input
                type="file"
                accept='image/*'
                id="logo"
                {...register('logo', {required: true})}
                className="absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer"
                onChange={handleFileChange}
              />
              <button
                type="button"
                className="bg-zinc-950   text-bone-100  font-bold py-2 px-4 rounded border  focus:outline-none focus:shadow-outline w-full"
              >
                Seleccionar foto
              </button>

            </div>
          </div>
          <div className="mb-4 w-full">
            <button
              type="submit"
              className="bg-beige-900 dark:bg-ash-100 text-bone-100 font-bold py-2 px-4 rounded border  focus:outline-none focus:shadow-outline w-full"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
