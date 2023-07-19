import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Brand } from "@/types";

const useLoadBrand = (brand: Brand) => {
    const supabaseClient = createClientComponentClient();
    if(!brand){
        return null;
    }
    const{data: imageData} = supabaseClient
    .storage
    .from('marcas')
    .getPublicUrl(brand.logo_path);

    return imageData.publicUrl;
};
export default useLoadBrand;