import { Product } from "@/types";
import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getProduct = async (IdProduct: string): Promise<Product> => {
    const supabase = createClientComponentClient();
    const { data, error } = await supabase.from('productos').select('*')
    .eq('id_producto',IdProduct).single();
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getProduct;