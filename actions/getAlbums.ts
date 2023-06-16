import { Album } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getAlbums = async (): Promise<Album[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.from('productos').select(`
  *, artistas(nombre)
`)
.eq('id_tipo','1');
    if (error) {
        console.log(error);
    }
    return (data as any) || [];
}

export default getAlbums;