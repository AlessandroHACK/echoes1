import React, { useState } from 'react';
import { RiUserLine } from 'react-icons/ri';

const ProfileForm = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');

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
  
      reader.readAsDataURL(file);
      setFileName(file.name);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-bone-100 dark:bg-zinc-950 rounded-lg shadow-md p-4 w-80 flex flex-col items-center dark:border">
        <h1 className="text-3xl font-bold mb-4 text-center dark:text-bone-100">Selecciona tu foto de perfil</h1>
        <div className="mb-4 flex items-center justify-center">
          {profileImage ? (
            <img
              className="w-32 h-32 rounded-full object-cover"
              src={profileImage}
              alt="Foto de perfil"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
              <RiUserLine className="w-20 h-20 text-gray-400" />
            </div>
          )}
        </div>
        <form className="max-w-md w-full">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile-photo">
              
            </label>
            <div className="relative w-full">
              <input
                type="file"
                id="profile-photo"
                name="profile-photo"
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
