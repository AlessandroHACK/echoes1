import { Product } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getCompany = async (albumId: string): Promise<Product> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.from('productos').select('*, artistas(*)').eq('id_producto', albumId).single();
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getCompany;