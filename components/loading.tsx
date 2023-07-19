'use client'
import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Spinner animation="border" className="h-16 w-16 mb-4 text-chocolate-950 dark:text-beige-200" />
      <h2 className="text-xl font-bold text-gray-700 dark:text-bone-100">Cargando...</h2>
    </div>
  );
};

export default LoadingScreen;
