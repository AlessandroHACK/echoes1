import { Product } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const searchProducts = async (searchQuery:string): Promise<Product[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.rpc('search_product', {query: searchQuery})
    if (error) {
        console.log(error);
    }
    return (data as any) || [];
}

export default searchProducts;