"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CartContext } from "@/state/CartContext";
import { useUser } from "@/hooks/useUser";
import { ProductCart } from "@/types";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { IoTrashOutline } from "react-icons/io5";
import ProductCartItem from "./ProductCartItem";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import PaypalCustom from "./PaypalCustom";
interface CartProps {
  cartData: ProductCart[];
}

const CartPage: React.FC<CartProps> = ({ cartData }) => {
  const { clearCart } = useContext(CartContext);
  const { user } = useUser();
  const router = useRouter();
  const [key, setKey] = useState(0);
  const [total, setTotal] = useState<number>(0);



  

  const calculateTotal = () => {
    let cartTotal = 0;
    cartData.forEach((product) => {
      cartTotal += product.subtotal || 0;
    });
    setTotal(cartTotal);
  };

  useEffect(() => {
    calculateTotal();
    setKey(prevKey => prevKey + 1); // Actualiza el "key" cada vez que cambien los datos
  }, [cartData]);

const items=cartData.map((product) => {
  return {
    name: product.productos.nombre,
    unit_amount: {
      currency_code: "MXN",
      value: product.precio.toFixed(2),
    },
    quantity: product.cantidad.toString(),
  };
});

  

console.log(items)
  return (
    <div className="dark:bg-zinc-950 bg-beige-100 rounded-lg p-6">
      <div className="grid grid-cols-1  gap-4">
        <div className="flex flex-col">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 dark:text-bone-100">
        {cartData.map((product) => (
                <ProductCartItem
                    product={product}
                    key={product.id_producto}
                />
            ))}
        </div>

          <div className="flex justify-end mt-4">
            {cartData.length > 0 && (
              <>
                <div className="flex flex-row items-center">
                  <p className="dark:text-bone-100 font-bold">Total: ${total}</p>
                  <button
                    className="bg-zinc-100/70 shadow-md dark:text-bone-100 dark:bg-chocolate-100 text-ash-400 duration-100 hover:bg-chocolate-100 hover:text-bone-100 dark:hover:bg-beige-100 dark:hover:text-chocolate-800 px-6 py-2 hover:scale-110 transition ml-4 rounded-md flex gap-x-2"
                    onClick={() => clearCart(user)}
                  >
                    Vaciar Carrito   <IoTrashOutline size={20} className="flex" />
                  </button>
                </div>
              </>
            )}
          </div>

        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-image-one dark:bg-image-two h-[55px] w-[195px] bg-cover"></div>
          <div className="dark:text-bone-100 mb-5 mt-5 text-center">
            Nuestro compromiso es brindarte una excelente experiencia de
            compra. Los productos serán cuidadosamente preparados y enviados
            para que los recibas en un plazo estimado de 5 días hábiles.
            Queremos asegurarnos de que disfrutes de tus productos lo más
            pronto posible. <span className="font-bold">¡Gracias por tu confianza!</span>
          </div>

          {/* Aquí se agrega PayPal */}
          <PaypalCustom total={total} items={items} key={key}/>

        </div>
      </div>
    </div>


  );
};

export default CartPage;