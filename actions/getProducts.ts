import { Product } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getProducts = async (): Promise<Product[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.from('productos')
    .select(`*, artistas(*), marcas(*)`)
.order('nombre', {ascending: true});
    if (error) {
        console.log(error);
    }
    return (data as any) || [];
}

export default getProducts;