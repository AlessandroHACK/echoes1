// import { useState } from "react";
// import toast from "react-hot-toast";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { useUser } from "./useUser";
// import { Product } from "@/types";

// const useCart = () => {
//   const [cartState, setCartState] = useState({});
//   const user = useUser();
//   const supabase = createClientComponentClient();

//   const fetchCurrentCart = async () => {
//     if(!user){
//       return;
//     }
//     const { data: cart, error: cartError } = await supabase
//       .from("carrito")
//       .select("*")
//       .eq("id_usuario", user.userDetails?.id);
//     if (cartError) {
//       toast.success("Recuperando carrito.");
//       return;
//     }
//     setCartState(
//       cart.reduce(
//         (prev, curr) => ({
//           ...prev,
//           [curr.id_producto]: curr.cantidad,
//         }),
//         {}
//       )
//     );
//   };

//   const addToCart = async (product:Product) => {
//     let error;
//     if (cartState[product.id_producto]) {
//       const { error: updateError } = await supabase
//         .from("carrito")
//         .update({
//           cantidad: cartState[product.id_producto] + 1,
//           precio: cartState[product.id_producto] + product.precio,
//         })
//         .eq("id_usuario", user.userDetails?.id)
//         .eq("id_producto", product.id_producto);
//       error = updateError;
//     } else {
//       const { error: insertError } = await supabase.from("carrito").insert([
//         {
//           id_producto: product.id_producto,
//           cantidad: cartState[product.id_producto] || 0 + 1,
//           precio: cartState[product.id_producto] || 0 + product.precio,
//           id_usuario: user.userDetails?.id,
//         },
//       ]);
//       error = insertError;
//     }
//     if (error) {
//       return toast.error("No se pudo agregar el producto.");
//     }
//     await fetchCurrentCart();
//   };

//   const removeFromCart = async (product) => {
//     let error;
//     if (cartState[product.id_producto] > 1) {
//       const { error: updateError } = await supabase
//         .from("carrito")
//         .update({
//           cantidad: cartState[product.id_producto] - 1,
//           precio: cartState[product.id_producto] - product.precio,
//         })
//         .eq("id_producto", product.id_producto)
//         .eq("id_usuario", user.userDetails?.id);
//       error = updateError;
//     } else {
//       const { error: deleteError } = await supabase
//         .from("carrito")
//         .delete()
//         .eq("id_producto", product.id_producto)
//         .eq("id_usuario", user.userDetails?.id);
//       error = deleteError;
//     }
//     if (error) {
//       return toast.error("No se pudo eliminar el producto.");
//     }
//     await fetchCurrentCart();
//   };

//   const clearCart = async () => {
//     const { error } = await supabase
//       .from("carrito")
//       .delete()
//       .eq("id_usuario", user.userDetails?.id);
//     setCartState({});
//     if (error) return toast.error("No se pudo limpiar el carrito.");
//   };

//   return {
//     setCartState,
//     cartState,
//     clearCart,
//     addToCart,
//     removeFromCart,
//     fetchCurrentCart,
//   };
// };

// export default useCart;