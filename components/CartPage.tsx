"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { CartContext } from "@/state/CartContext";
import { useUser } from "@/hooks/useUser";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ProductCart } from "@/types";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

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

  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    let cartTotal = 0;
    cartData.forEach((product) => {
      cartTotal += product.subtotal || 0;
    });
    setTotal(cartTotal);
    console.log(total);
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
  const handleCheckout = async () => {
    if (!user) {
      toast.error("No has iniciado sesión");
      return router.push("/Login");
    }

    try {
      const { data } = await axios.post("/api/payment", {
        customer_id: user.id,
        customer_email: user.email,
      });
      if (!data) return toast.error("Error creating order");
      router.push(data.session_url);
    } catch (error) {
      console.error(error);
    }
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="dark:bg-magenta-700 bg-magenta-100 rounded-lg p-4">
            {cartData.length > 0 ? (
              <div className="flex flex-col gap-y-4">
                {cartData.map((product) => (
                  <div
                    key={product.id_producto}
                    className="flex flex-col gap-y-4 dark:text-bone-100"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{product.productos.nombre}</p>
                      <p className="dark:text-bone-100">
                        {product.cantidad} x ${product.precio}
                      </p>
                    </div>
                    <p className="dark:text-bone-100">
                      Subtotal: ${product.subtotal || 0}
                    </p>
                  </div>
                ))}
                <p className="dark:text-bone-100">Total: $</p>
              </div>
            ) : (
              <p className="dark:text-bone-100">
                No hay productos en el carrito.
              </p>
            )}
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-image-one dark:bg-image-two h-[55px] w-[195px] bg-cover"></div>
            <div className="dark:text-bone-100 mb-5 mt-5 text-center">
              Nuestro compromiso es brindarte una excelente experiencia de
              compra. Los productos serán cuidadosamente preparados y enviados
              para que los recibas en un plazo estimado de 5 días hábiles.
              Queremos asegurarnos de que disfrutes de tus productos lo más
              pronto posible.{" "}
              <span className="font-bold">¡Gracias por tu confianza!</span>
            </div>

            <button
              className="py-1 px-20 bg-zinc-950 dark:bg-chocolate-100 text-bone-100 rounded text-sm mb-4"
              onClick={handleCheckout}
            >
              Checkout
            </button>

            {/* aqui se agra paypal  */}

            <PayPalScriptProvider
              options={{currency:"MXN", clientId: `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}` }}
            >
              <PayPalButtons
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
                  const {error} = await supabase
                  .from("ordenes")
                  .insert({id_orden: details?.id, id_usuario: user?.id, status: "Completada.", total: total})
                  if(error) toast.error(error.message);
                  const name = details?.payer?.name?.given_name;
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;