import { ProductCart } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getCart = async (): Promise<ProductCart[]> => {
    const supabase = createServerComponentClient({
        cookies
    });

    const { data, error } = await supabase.from('carrito').select('*, productos(*)').order('created_at', {ascending: true});;
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getCart;