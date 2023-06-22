import { Product } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const searchAlbums = async (searchQuery:string): Promise<Product[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    // const { data, error } = await supabase.rpc('search_product', {query: searchQuery})
    const {data, error} = await supabase
    .from('productos')
    .select('*, artistas!inner(*)')
    .ilike('artistas.nombre', `%${searchQuery}%`)
    .or('nombre.ilike.%')
    .eq('id_tipo',1)
    if (error) {
        console.log(error);
    }
    console.log(data);
    return (data as any) || [];
}

export default searchAlbums;