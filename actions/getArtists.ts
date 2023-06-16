import { Artist } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getArtists = async (): Promise<Artist[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
    .from('artistas')
    .select(`*, albums(nombre)`)
    .order('nombre', {ascending: true})
    if (error) {
        console.log(error);
    }
    return (data as any) || [];
}

export default getArtists;