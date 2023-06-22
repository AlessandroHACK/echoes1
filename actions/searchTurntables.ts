import { Product } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const searchTurntables = async (searchQuery:string): Promise<Product[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    // const { data, error } = await supabase.rpc('search_product', {query: searchQuery})
    const {data, error} = await supabase
    .from('productos')
    .select('*, marcas!inner(*)')
    .ilike('marcas.nombre', `%${searchQuery}%`)
    .or('nombre.ilike.%')
    .eq('id_tipo',2)
    if (error) {
        console.log(error);
    }
    console.log(data);
    return (data as any) || [];
}

export default searchTurntables;