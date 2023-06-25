import { Product } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import searchAlbums from "./searchAlbums";
import searchTurntables from "./searchTurntables";

const searchProducts = async (searchQuery:string): Promise<Product[]> => {
    

    // const { data, error } = await supabase.rpc('search_product', {query: searchQuery})
    const albums = await searchAlbums(searchQuery);
    const turntables  = await searchTurntables(searchQuery);
    const products = [...(albums || []), ...(turntables || [])];
    return products;
}

export default searchProducts;