'use client'
import React, { useState, useEffect } from 'react';
import Loading from '../../components/loading';
import ProfileForm from '../../components/ProfileForm';

const Confi = () => {
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
        
        <ProfileForm></ProfileForm>
      </div>
    )}
  </div>
  )
}

export default Confi
