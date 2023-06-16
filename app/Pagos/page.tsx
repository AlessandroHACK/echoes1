'use client'

import React, { useState, useEffect } from 'react';
import Loading from '../../components/loading';
import Link from 'next/link';

const Pagos = () => {
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
      <h1>hola</h1>
    )}
  </div>
  )
}

export default Pagos
