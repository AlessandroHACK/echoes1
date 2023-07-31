import { Product } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const searchTurntables = async (searchQuery:string): Promise<Product[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    // const { data, error } = await supabase.rpc('search_product', {query: searchQuery})
    const {data:turntableArtist, error:error1} = await supabase
    .from('productos')
    .select('*, marcas!inner(*)')
    .ilike('marcas.nombre', `%${searchQuery}%`)
    .eq('id_tipo',2)
    if (error1) {
        console.log(error1);
    }

    const {data:turntableName, error:error2} = await supabase
    .from('productos')
    .select('*, marcas!inner(*)')
    .ilike('nombre', `%${searchQuery}%`)
    .eq('id_tipo',2)
    if (error2) {
        console.log(error2);
    }
    const turntables = [...(turntableArtist || []), ...(turntableName || [])];
    return turntables as Product[];
}

export default searchTurntables;