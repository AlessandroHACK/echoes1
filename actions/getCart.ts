import { Product } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getCart = async (): Promise<Product[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.from('carrito').select('*');
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getCart;