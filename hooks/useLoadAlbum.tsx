import { Album } from "../types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadAlbum = (album: Album) => {
    const supabaseClient = useSupabaseClient();
    if(!album){
        return null;
    }
    const{data: imageData} = supabaseClient
    .storage
    .from('albums')
    .getPublicUrl(album.album_path);

    return imageData.publicUrl;
};
export default useLoadAlbum;