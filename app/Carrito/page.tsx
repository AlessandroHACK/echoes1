'use client'
import React from 'react';
import {useState} from 'react';

const Carrito = () => {

    const [productos, setProductos] = useState([]);

  return (
    <div className=" min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-zinc-950 dark:text-bone-100 text-center mb-8">Carrito</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-bone-100 dark:bg-chocolate-900  rounded-lg shadow-md p-6">
            {/* Contenido de la lista de elementos del carrito */}
            <p className="text-zinc-950 dark:text-bone-100">Lista de elementos del carrito</p>
          </div>
          <div className="bg-bone-100 dark:bg-chocolate-900 rounded-lg shadow-md p-6">
            {/* Contenido de los totales del carrito */}
            <p className="text-zinc-950 dark:text-bone-100">Totales del carrito</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
