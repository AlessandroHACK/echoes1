'use client'
import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Spinner animation="border" variant="black" className="h-16 w-16 mb-4" />
      <h2 className="text-xl font-bold text-gray-700">Cargando...</h2>
    </div>
  );
};

export default LoadingScreen;
