import getCart from "@/actions/getCart";
import CartPage from "@/components/CartPage";

export const revalidate = 0;

export default async function Cart(){
  const cartData = await getCart();
  return(
    <CartPage cartData={cartData}/>
  );
}