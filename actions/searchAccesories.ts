import { Product } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const searchAccesories = async (searchQuery:string): Promise<Product[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const {data:searchAccesory, error:error2} = await supabase
    .from('productos')
    .select('*')
    .ilike('nombre', `%${searchQuery}%`)
    .eq('id_tipo',3)
    if (error2) {
        console.log(error2);
    }
    
    return searchAccesory as Product[];
}

export default searchAccesories;