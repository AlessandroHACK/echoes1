import getCart from "@/actions/getCart";
import CartPage from "@/components/CartPage";


export default async function Cart(){
  const cartData = await getCart();
  return(
    <div className="lg:min-h-screen flex items-center justify-center p-5 lg:p-10 xl:p-15">
      <CartPage cartData={cartData}/>
    </div>
  );
}