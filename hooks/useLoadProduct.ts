import { Album, Product } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadProduct = (product: Product) => {
    const supabaseClient = useSupabaseClient();

    if (product.id_tipo == '1') {
        const { data: imageData } = supabaseClient
            .storage
            .from('albums')
            .getPublicUrl(product.imagen_path);
            return imageData.publicUrl;
    }
    if (product.id_tipo == '2') {
        const { data: imageData } = supabaseClient
            .storage
            .from('tornamesas')
            .getPublicUrl(product.imagen_path);
            return imageData.publicUrl;
    }

};
export default useLoadProduct;