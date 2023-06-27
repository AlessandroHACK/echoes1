import { Product } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getTurntable = async (turntableId: string): Promise<Product> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.from('productos').select('*, marcas(*)').eq('id_producto', turntableId).single();
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getTurntable;