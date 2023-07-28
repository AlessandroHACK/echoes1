import { Album, ProductCart } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadProductCart = (product: ProductCart) => {
    const supabaseClient = useSupabaseClient();

    if (product.productos.id_tipo == '1') {
        const { data: imageData } = supabaseClient
            .storage
            .from('albums')
            .getPublicUrl(product.productos.imagen_path);
            return imageData.publicUrl;
    }
    if (product.productos.id_tipo == '2') {
        const { data: imageData } = supabaseClient
            .storage
            .from('tornamesas')
            .getPublicUrl(product.productos.imagen_path);
            return imageData.publicUrl;
    }

    if (product.productos.id_tipo == '3') {
        const { data: imageData } = supabaseClient
            .storage
            .from('productos')
            .getPublicUrl(product.productos.imagen_path);
            return imageData.publicUrl;
    }

};
export default useLoadProductCart;