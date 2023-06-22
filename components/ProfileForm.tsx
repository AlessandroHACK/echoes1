import React, { useState } from 'react';
import { RiUserLine } from 'react-icons/ri';

const ProfileForm = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfileImage(reader.result);
    };

    reader.readAsDataURL(file);
    setFileName(file.name);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-4 w-80 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Selecciona tu foto de perfil</h1>
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
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded border border-black focus:outline-none focus:shadow-outline w-full"
              >
                Seleccionar foto
              </button>
              
            </div>
          </div>
          <div className="mb-4 w-full">
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded border border-black focus:outline-none focus:shadow-outline w-full"
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
