'use client'

import React, { useState, useEffect } from 'react';
import Loading from '../../components/loading';

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
          <form className="bg-white shadow-md rounded-lg p-6 w-1/2">
            <h2 className="text-2xl mb-4">Agrega tu cuenta de PayPal</h2>
            {/* Aquí puedes agregar los campos del formulario para la cuenta de PayPal */}
            <input
              className="mb-4 p-2 border border-gray-300 rounded w-full"
              type="text"
              placeholder="Correo electrónico de PayPal"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" type="submit">
              Guardar cuenta de PayPal
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl mb-4">No tienes ningún método de pago guardado</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto" onClick={handleClick}>
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
