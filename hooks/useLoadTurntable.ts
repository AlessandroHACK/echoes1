import { Turntable } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadAlbum = (turntable: Turntable) => {
    const supabaseClient = useSupabaseClient();

    const{data: imageData} = supabaseClient
    .storage
    .from('tornamesas')
    .getPublicUrl(turntable.imagen_path);

    return imageData.publicUrl;
};
export default useLoadAlbum;