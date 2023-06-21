'use client'
import React, { useState, useEffect } from 'react';
import Loading from '../../components/loading';

const Pedidos = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1>desde pedidos</h1>
          {/* Aquí va el contenido adicional de la página Pedidos */}
        </div>
      )}
    </div>
  );
};

export default Pedidos;

