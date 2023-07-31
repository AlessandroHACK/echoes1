import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {useContext} from "react";
import { CartContext } from "@/state/CartContext";
import { useUser } from "@/hooks/useUser";

interface PaypalProps{
    total: number,
    items: any[]
}

const PaypalCustom:React.FC<PaypalProps> = ({total, items}) => {
    const user = useUser();
    const supabase = useSupabaseClient();
    const {clearCart} = useContext(CartContext);
    const router = useRouter();


    const handleApprove = async (details) => {
        const { error } = await supabase.from("ordenes").insert({
          id_orden: details?.id,
          id_usuario: user?.userDetails?.id,
          status: "Completada.",
          total: total,
        });
        if (error) {
          toast.error(
            "Su pago se ha procesado correctamente. Sin embargo, no pudimos registrar su compra. Póngase en contacto con nosotros en echoes@gmail.com para obtener ayuda"
          );
          return;
        }
    
        for (const product of items) {
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
        router.refresh();
      };
    return ( 
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
                  console.log(items)
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
                        items: items,
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
     );
}
 
export default PaypalCustom;