"use client"
import React from 'react'
import { CartContext } from "@/state/CartContext";
import { useContext, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Product, UserDetails } from '@/types';
import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/useUser';


interface ButtonProps{
    dataProduct: Product | null,
}


const AddToCartButton:React.FC<ButtonProps> = ({dataProduct}) => {
    const router = useRouter();
    const user = useUser();
    const { addToCart } = useContext(CartContext);
    const isProductAvailable = dataProduct?.cantidad !== 0;
    const [loading, setLoading] = useState(false);
    const handleCartOperation = async (product) => {
        setLoading(true);
        await addToCart(product, user.userDetails);
        setLoading(false);
        console.log("Producto agregado al carrito:", product);
        router.refresh();
    };
    return(
        <button
      onClick={() => handleCartOperation(dataProduct)}
      disabled={loading || !isProductAvailable} // Disable the button if loading or the product quantity is 0
      className="flex items-center space-x-1.5 rounded-lg bg-zinc-100/70 shadow-md dark:text-bone-100 dark:bg-chocolate-100 px-2 py-1.5 text-ash-400 duration-100 hover:bg-chocolate-100 hover:text-bone-100 dark:hover:bg-beige-100 dark:hover:text-chocolate-800"
    >
      <RiShoppingCartLine className="relative mr-1 h-4 w-4" />
      <div className="relative text-md font-medium">Agregar al carrito</div>
    </button>
    );
}
 
export default AddToCartButton;
