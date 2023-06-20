import { Turntable } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getTurntable = async (turntableId: string): Promise<Turntable> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.from('productos').select('*').eq('id_producto', turntableId).single();
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getTurntable;