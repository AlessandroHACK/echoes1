import { Artist } from "../types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadArtist = (artist: Artist) => {
    const supabaseClient = useSupabaseClient();
    if(!artist){
        return null;
    }
    const{data: imageData} = supabaseClient
    .storage
    .from('artistas')
    .getPublicUrl(artist.artista_path);

    return imageData.publicUrl;
};
export default useLoadArtist;