"use client"
import React, { createContext, useEffect, useMemo, useState } from "react";
import useCart from "@/hooks/useCart";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Product } from "@/types";
import useLocalStorage from '../hooks/useLocalStorage';

interface Props {
  children: React.ReactNode;
}


export const CartContext = createContext<any>(null);

const CartContextProvider = ({ children }: Props) => {
  const { removeFromCart, addToCart, clearCart } = useCart();

 

  

  const cartContextValue = {
    removeFromCart,
    addToCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;