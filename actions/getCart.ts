import { ProductCart } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getCart = async (): Promise<ProductCart[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.from('carrito').select('*, productos(nombre)');
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getCart;