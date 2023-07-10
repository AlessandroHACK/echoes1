// "use client"
// import React, { createContext, useEffect, useMemo, useState } from "react";
// import useCart from "@/hooks/useCart";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { Product } from "@/types";
// import useLocalStorage from '../hooks/useLocalStorage';

// interface Props {
//   children: React.ReactNode;
// }

// export const CartContext = createContext<any>(null);

// const CartContextProvider = ({ children }: Props) => {
//   const supabaseClient = createClientComponentClient();
//   const [products, setProducts] = useState<Product[]>([]);
//   const { cartState, removeFromCart, addToCart, clearCart, fetchCurrentCart } = useCart();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data: products, error } = await supabaseClient.from("productos").select("*");
//       if (error) {
//         console.error("Error fetching products:", error);
//         return;
//       }
//       setProducts(products as Product[] || []);
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     (async () => {
//       await fetchCurrentCart();
//     })();
//   }, []);

//   const totalCartItems = useMemo(() => {
//     return Object.values(cartState).reduce((prev: number, curr: number) => prev + curr, 0);
//   }, [cartState]);

//   const cartWithQuantity = useMemo(() => {
//     return Object.keys(cartState).map((productId) => {
//       return {
//         ...products.find((product) => parseInt(product.id_producto) === parseInt(productId)),
//         cantidad: cartState[productId],
//       };
//     });
//   }, [cartState, products]);

//   const totalPrice = useMemo(() => {
//     return cartWithQuantity.reduce((prev, curr) => {
//         const precio = curr.precio ? +curr.precio : 0;
//         return prev + precio * +curr.cantidad;
//     }, 0);
//   }, [cartWithQuantity]);

//   const cartContextValue = {
//     cartState: cartState || {},
//     removeFromCart,
//     addToCart,
//     clearCart,
//     totalCartItems,
//     cartWithQuantity,
//     totalPrice,
//   };

//   return (
//     <CartContext.Provider value={cartContextValue}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContextProvider;