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
import uniqid from 'uniqid';
import { Spinner } from 'react-bootstrap';

interface FormProps {
  userDetails: UserDetails
}

const ProfileForm: React.FC<FormProps> = ({ userDetails }) => {
  const [isLoading, setIsLoading] = useState(false);
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const userPath = useLoadUser(userDetails);
  const [file, setFile] = useState<File | null>(null);
  const [fileDataURL, setFileDataURL] = useState<string | null>(userPath);

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      full_name: "",
      logo: null,
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      if(values.full_name.length>20){
        toast.error("¡El nombre es demasiado largo!")
        return;
      }
      setIsLoading(true);
      let image;
      let newname;
      const uniqueID = uniqid();
      if (!values.full_name && !file) {
        toast.error("¡No has cambiado ningún campo!")
        setIsLoading(false);
        return;
      }
      if (values.full_name) {
        newname = values.full_name.replace(/\b\w/g, (c) => c.toUpperCase())
      }
      else {
        newname = userDetails.full_name;
      }
      if (file) {
        const { error: imgError } = await supabaseClient
          .storage.from('usuarios')
          .remove([`${user.userDetails?.avatar_url}`])
        if (imgError) {
          toast.error("Hubo un error cambiando la imagen")
          setIsLoading(false);
          return;
        }

        const { data: imageData, error: imageError } = await supabaseClient
          .storage
          .from('usuarios')
          .upload(`image-${uniqueID}`, file, {
            cacheControl: '3600',
            upsert: false
          });

        if (imageError) {
          toast.error("Hubo un error cambiando la imágen, inténtalo de nuevo.");
          setIsLoading(false);
          return
        }
        image = imageData.path
      }
      else {
        image = userDetails.avatar_url;
      }



      const { error: supabaseError } = await supabaseClient
        .from('users')
        .update({
          avatar_url: image,
          full_name: newname,
        })
        .eq('id', user.userDetails?.id);

      if (supabaseError) {
        toast.error('Hubo un error actualizando tus datos, por favor vuelve a intentarlo.');
        return;
      }

      toast.success('¡Tus datos han sido actualizados!');
      router.refresh();
      setIsLoading(false);
    } catch (error) {
      toast.error("Algo falló, por favor vuelve a intentarlo.");
      setIsLoading(false);
    }
    reset();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (!file.type.match(/image\/(png|jpg|jpeg)/i)) {
      toast.error("Image mime type is not valid");
      return;
    }

    setFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        setFileDataURL(result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-bone-100 dark:bg-zinc-950 rounded-lg shadow-md p-4 w-80 flex flex-col items-center dark:border">
        <h1 className="text-3xl font-bold mb-4 text-center dark:text-bone-100">Información personal</h1>
        <div className="mb-4 w-full  flex items-center justify-center">
          {fileDataURL ? (
            <div className='relative overflow-hidden w-1/2 aspect-square'>
              <Image
                fill
                className="rounded-full object-contain"
                src={fileDataURL}
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
            <div className="py-1 w-full font-bold text-magenta-900 dark:text-bone-100">Tu nombre</div>
            <input className='p-2 w-full bg-zinc-200 dark:bg-zinc-800 text-zinc-50 rounded-md '
              id="full_name"
              {...register('full_name', { required: false })}
              placeholder="Escribe tu nombre"
            />
            <div className="py-1 w-full font-bold text-magenta-900 dark:text-bone-100">Elige una foto de perfil</div>
            <div className="relative w-full py-2">
              <input
                type="file"
                accept='image/*'
                id="logo"
                onChange={changeHandler}
                className="absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer"
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
              disabled={isLoading} // Disable the button when isLoading is true
            >
              {isLoading ? (
                <span>
                  <Spinner animation="border" size="sm" className="mr-2" /> Guardando...
                </span>
              ) : (
                'Guardar'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;