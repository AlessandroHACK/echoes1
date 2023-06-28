import { Artist } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getCompany = async (artistId: string): Promise<Artist> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.from('artistas').select('*, productos(*)').eq('id_artista', artistId).single();
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getCompany;