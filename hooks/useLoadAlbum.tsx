import { Album } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadAlbum = (album: Album) => {
    const supabaseClient = createClientComponentClient();

    const{data: imageData} = supabaseClient
    .storage
    .from('albums')
    .getPublicUrl(album.imagen_path);

    return imageData.publicUrl;
};
export default useLoadAlbum;