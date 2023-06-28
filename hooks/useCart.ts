import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useUser } from './useUser';

const useCart = () => {
    const user = useUser();
    const supabase = createClientComponentClient();
  const [cartState, setCartState] = useState({});

  const fetchCurrentCart = async () => {
    const { data: carrito, error: cartError } = await supabase
      .from('carrito')
      .select('*')
      .eq('id_usuario', user.accessToken);
    if (cartError) {
      toast.error(cartError.message);
      return;
    }
    setCartState(
      carrito.reduce(
        (prev, curr) => ({
          ...prev,
          [curr.id_producto]: curr.quantity,
        }),
        {}
      )
    );
  };

  const addToCart = async (product) => {
    let error;
    if (cartState[product.id]) {
      const { error: updateError } = await supabase
        .from('carrito')
        .update({
          quantity: cartState[product.id] + 1,
        })
        .eq('id_usuario', user.accessToken)
        .eq('id_producto', product.id);
      error = updateError;
    } else {
      const { error: insertError } = await supabase.from('carrito').insert([
        {
          id_producto: product.id,
          quantity: cartState[product.id] || 0 + 1,
          id_usuario: user.accessToken,
        },
      ]);
      error = insertError;
    }
    if (error) {
      return toast.error(error.message);
    }
    await fetchCurrentCart();
  };

  const removeFromCart = async (product) => {
    let error;
    if (cartState[product.id] > 1) {
      const { error: updateError } = await supabase
        .from('carrito')
        .update({
          quantity: cartState[product.id] - 1,
        })
        .eq('id_producto', product.id)
        .eq('id_usuario', user.accessToken);
      error = updateError;
    } else {
      const { error: deleteError } = await supabase
        .from('carrito')
        .delete()
        .eq('id_producto', product.id)
        .eq('id_usuario', user.accessToken);
      error = deleteError;
    }
    if (error) {
      return toast.error(error.message);
    }
    await fetchCurrentCart();
  };

  const clearCart = async () => {
    const { error } = await supabase
      .from('carrito')
      .delete()
      .eq('id_usuario', user.accessToken);
    setCartState({});
    if (error) return toast.error(error.message);
  };

  return {
    setCartState,
    cartState,
    clearCart,
    addToCart,
    removeFromCart,
    fetchCurrentCart,
  };
};

export default useCart;