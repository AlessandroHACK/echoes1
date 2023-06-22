import { Product } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const searchAlbums = async (searchQuery:string): Promise<Product[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    // const { data, error } = await supabase.rpc('search_product', {query: searchQuery})
    const {data:albumName, error:error1} = await supabase
    .from('productos')
    .select('*, artistas!inner(*)')
    .ilike('artistas.nombre', `%${searchQuery}%`)
    .eq('id_tipo',1)
    if (error1) {
        console.log(error1);
    }

    const {data:albumArtist, error:error2} = await supabase
    .from('productos')
    .select('*, artistas!inner(*)')
    .ilike('nombre', `%${searchQuery}%`)
    .eq('id_tipo',1)
    if (error2) {
        console.log(error2);
    }
    const albums = [...(albumName || []), ...(albumArtist || [])];
    return albums as Product[];
}

export default searchAlbums;