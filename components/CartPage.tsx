"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { CartContext } from "@/state/CartContext";
import { useUser } from "@/hooks/useUser";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Product } from "@/types";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface CartProps {
  cartData: Product[];
}

const CartPage: React.FC<CartProps> = ({ cartData }) => {
  const { clearCart } = useContext(CartContext);
  const searchParams = useSearchParams();
  const { user } = useUser();
  const router = useRouter();
  const success = searchParams.get("success") === "true";
  const cancel = searchParams.get("cancel") === "true";

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
                      <p className="font-semibold">{product.nombre}</p>
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

            <PayPalScriptProvider options={{
                clientId: "AXjJ2FkFinVU5Kr3vf_uH8ONhMcU0xv4Qlb9h8htXtfcoi7gRPSkFk64q0f2GkK5zP0S4ev53njEvVAq"
            }}>
                <PayPalButtons
                createOrder={(data, actions) => {
                    return actions?.order.create({
                        purchase_units: [
                            {
                              description: "Hola",
                                amount: {
                                    value: "2.00",
                                }
                            },
                            {
                              description: "Hola",
                                amount: {
                                    value: "2.00",
                                }
                            }
                        ]
                    })
                }}/>
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;