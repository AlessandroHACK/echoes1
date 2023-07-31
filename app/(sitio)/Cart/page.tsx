import getCart from "@/actions/getCart";
import CartPage from "@/components/CartPage";

export const revalidate = 0;

export default async function Cart(){
  const cartData = await getCart();
  return(
    <div className="p-5 lg:p-10 xl:p-15 lg:min-h-screen flex items-center justify-center">
      <CartPage cartData={cartData}/>
    </div>
  );
}