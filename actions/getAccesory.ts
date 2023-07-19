import { Product } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getCompany = async (accesoryId: string): Promise<Product> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.from('productos').select('*').eq('id_producto', accesoryId).single();
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getCompany;