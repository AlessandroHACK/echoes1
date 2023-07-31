import { Product } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getAlbums = async (): Promise<Product[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.from('productos').select(`
  *, artistas(*)
`)
.eq('id_tipo','1')
.order('nombre', {ascending: true});
    if (error) {
        console.log(error);
    }
    return (data as any) || [];
}

export default getAlbums;