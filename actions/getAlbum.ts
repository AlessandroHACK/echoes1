import { Album } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getCompany = async (albumId: string): Promise<Album | null> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.from('productos').select('*').eq('id_producto', albumId).single();
    if (error) {
        console.log(error);
        return null;
    }

    return data as Album | null;
}

export default getCompany;