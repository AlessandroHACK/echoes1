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
interface CartProps {
  cartData: ProductCart[];
}

const CartPage: React.FC<CartProps> = ({ cartData }) => {
  const { clearCart } = useContext(CartContext);
  const searchParams = useSearchParams();
  const supabase = useSupabaseClient();
  const { user } = useUser();
  const router = useRouter();
  const success = searchParams.get("success") === "true";
  const cancel = searchParams.get("cancel") === "true";

  const handleApprove = async (details) => {
    const { error } = await supabase.from("ordenes").insert({
      id_orden: details?.id,
      id_usuario: user?.id,
      status: "Completada.",
      total: total,
    });
    if (error) {
      toast.error(
        "Su pago se ha procesado correctamente. Sin embargo, no pudimos registrar su compra. Póngase en contacto con nosotros en echoes@gmail.com para obtener ayuda"
      );
      return;
    }

    for (const product of cartData) {
      console.log(product);
      const updatedQuantity = product.productos.cantidad - product.cantidad;
      console.log(updatedQuantity);
      // Supabase: Actualizar la cantidad en la tabla de productos
      const { error } = await supabase
        .from("productos")
        .update({ cantidad: updatedQuantity })
        .eq("id_producto", product.id_producto);

      if (error) {
        console.log(error);
      }
    }

    await clearCart(user);
    toast.success("Tu orden se completó perro");
  };

  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    let cartTotal = 0;
    cartData.forEach((product) => {
      cartTotal += product.subtotal || 0;
    });
    setTotal(cartTotal);
  }, [cartData]);

  const getPayPalItems = (): any[] => {
    return cartData.map((product) => {
      return {
        name: product.productos.nombre,
        unit_amount: {
          currency_code: "MXN",
          value: product.precio.toFixed(2),
        },
        quantity: product.cantidad.toString(),
      };
    });
  };

  useEffect(() => {
    if (success) {
      clearCart();
      toast.success("Order created successfully");
    }

    if (cancel) {
      toast.error("Error creating order, try again");
    }
  }, [success, cancel]);

  return (
    <section className="p-4">
    <div className="dark:bg-zinc-950 rounded-lg p-6">
      <h1 className="my-4 text-4xl dark:text-bone-100">Cart</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 dark:text-bone-100">
          {cartData.map((product) => (
            <ProductCartItem product={product}/>
          ))}

          <div>
          {cartData.length > 0 && (
          <div className="flex justify-end mt-4">
            <div className="flex items-center">
              <p className="dark:text-bone-100 font-bold">Total: ${total}</p>
              <button
                className="bg-chocolate-100 text-bone-100 px-6 py-2 ml-4 rounded-md flex"
                onClick={() => clearCart()}
              >
                Vaciar Carrito   <IoTrashOutline size={20} className="flex" />
              </button>
            </div>
          </div>
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
          <PayPalScriptProvider
              options={{ currency: "MXN", clientId: `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}` }}
            >
              <div className="bg-zinc-50 rounded-lg border-2 border-beige-300 dark:border-ash-300">
              <PayPalButtons className="p-1 pb-0"
                style={
                  {
                    layout: 'horizontal',
                    label: 'pay',
                    height: 45,
                    shape: 'rect',
                    color: 'white',
                  }
                }
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        description: "My Purchases",
                        amount: {
                          currency_code: "MXN",
                          value: total.toString(),
                          breakdown: {
                            item_total: {
                              currency_code: "MXN",
                              value: total.toString()
                            },
                            shipping: {
                              currency_code: "MXN",
                              value: "0.00"
                            },
                            tax_total: {
                              currency_code: "MXN",
                              value: "0.00"
                            }
                          }
                        },
                        items: getPayPalItems(),
                      }
                    ]
                  });
                }}
                onApprove={async (data, actions) => {
                  const details = await actions?.order?.capture();
                  handleApprove(details);

                }}
                onError={() => {
                  toast.error('Hubo un error, verifica tu carrito.')
                }}
                onCancel={() => {
                  router.push('/Perfil/Cart')
                }}
              />
              </div>
            </PayPalScriptProvider>
         
        </div>
      </div>
    </div>
  </section>

  
  );
};

export default CartPage;