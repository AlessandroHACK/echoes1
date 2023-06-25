'use client'

import React, { useState, useEffect } from 'react';
import Loading from '../../components/loading';
import { RiPaypalLine } from 'react-icons/ri';

const Pagos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleClick = () => {
    setShowForm(true);
  };

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    } else if (showForm) {
      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <form className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl mb-4 text-center">Agrega tu cuenta de PayPal</h2>
            {/* Aquí puedes agregar los campos del formulario para la cuenta de PayPal */}
            <input
              className="mb-4 p-2 border border-gray-300 rounded w-full"
              type="text"
              placeholder="Correo electrónico de PayPal"
            />
            <button className="bg-black text-white font-bold py-2 px-4 rounded w-full" type="submit">
              <RiPaypalLine className="mr-2 h-5 w-5 inline" />
              Guardar cuenta de PayPal
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl mb-4 text-center">No tienes ningún método de pago guardado</h2>
            <button className="bg-black text-white font-bold py-2 px-4 rounded mx-auto" onClick={handleClick}>
              Agregar método de pago
            </button>
          </div>
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default Pagos;
