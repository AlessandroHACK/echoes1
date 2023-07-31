import { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "./useUser";
import { Product, ProductCart, UserDetails } from "@/types";
import { SessionContextProvider, useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import getCartProduct from "@/actions/getProductCart";
import getProduct from "@/actions/getProduct";
import { useRouter } from "next/navigation";


const useCart = () => {
  const supabase = useSupabaseClient();
  const router=useRouter()
  

  const addToCart = async (product:Product, user:UserDetails) => {
    if(!user){
      toast.error('Debes iniciar sesión para agregar productos');
      return;
    }
    const pc = await getCartProduct(product.id_producto);

    let error;
    if (pc.id_producto) {
      if(pc.cantidad===product.cantidad || pc.cantidad>product.cantidad){
        toast.error('Llegaste al límite de stock.')
        return;
      }
      const { error: updateError } = await supabase
      .from("carrito")
      .update({
          cantidad: pc.cantidad + 1,
          subtotal: pc.subtotal + product.precio,
        })
        .eq("id_usuario", user.id)
        .eq("id_producto", product.id_producto);
        error = updateError;
      } else {
      const { error: insertError } = await supabase.from("carrito").insert([
        {
          id_producto: product.id_producto,
          id_usuario: user.id,
          cantidad: '1',
          precio: product.precio,
          subtotal: product.precio,
        },
      ]);
      error = insertError;
    }
    if (error) {
      toast.error("No se pudo agregar al carrito.");
      return;
    }
    toast.success('Producto agregado al carrito.');
  };

  const addToCartProduct = async (product:ProductCart, user:UserDetails) => {
    if(!user){
      toast.error('Debes iniciar sesión para agregar productos');
      return;
    }
    const pc = await getProduct(product.id_producto);

    let error;
    if (pc.id_producto) {
      if(pc.cantidad===product.cantidad || pc.cantidad<product.cantidad){
        toast.error('Llegaste al límite de stock.')
        return;
      }
      const { error: updateError } = await supabase
      .from("carrito")
      .update({
          cantidad: product.cantidad + 1,
          subtotal: product.subtotal + pc.precio,
        })
        .eq("id_usuario", user.id)
        .eq("id_producto", pc.id_producto);
        error = updateError;
      }
    if (error) {
      toast.error("No se pudo agregar al carrito.");
      return;
    }
    toast.success('Producto agregado al carrito.');
  };

  const removeFromCart = async (product:Product | ProductCart, user:UserDetails) => {
    let error;
    const pc = await getCartProduct(product.id_producto);
    if (pc.cantidad>1) {
      const { error: updateError } = await supabase
        .from("carrito")
        .update({
          cantidad: pc.cantidad - 1,
          subtotal: pc.subtotal - product.precio,
        })
        .eq("id_producto", product.id_producto)
        .eq("id_usuario", user.id);
      error = updateError;
    } else {
      const { error: deleteError } = await supabase
        .from("carrito")
        .delete()
        .eq("id_producto", product.id_producto)
        .eq("id_usuario", user.id);
      error = deleteError;
    }
    if (error) {
      return toast.error("No se pudo eliminar el producto.");
    }
  };

  const deleteFromCart = async (product:ProductCart, user:UserDetails) => {
    let error;
    const pc = await getCartProduct(product.id_producto);
    
      const { error: deleteError } = await supabase
        .from("carrito")
        .delete()
        .eq("id_producto", product.id_producto)
        .eq("id_usuario", user.id);
      error = deleteError;
    
    if (error) {
      return toast.error("No se pudo eliminar el producto.");
    }
  };

  const clearCart = async (user:UserDetails) => {
    const { error } = await supabase
      .from("carrito")
      .delete()
      .eq("id_usuario", user.id);
    if (error){

      toast.error("No se pudo vaciar el carrito.");
      return
    } 
    router.refresh();
  };

  return {
    clearCart,
    addToCart,
    removeFromCart,
    deleteFromCart,
    addToCartProduct
  };
};

export default useCart;