import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Product } from "@/types";

const useLoadAccesory = (accesory: Product) => {
    const supabaseClient = createClientComponentClient();
    if(!accesory){
        return null;
    }
    const{data: imageData} = supabaseClient
    .storage
    .from('productos')
    .getPublicUrl(accesory.imagen_path);

    return imageData.publicUrl;
};
export default useLoadAccesory;