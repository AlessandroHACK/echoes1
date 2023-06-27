import { UserDetails } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadUser = (user: UserDetails) => {
    const supabaseClient = useSupabaseClient();

    const{data: imageData} = supabaseClient
    .storage
    .from('usuarios')
    .getPublicUrl(user.avatar_url);

    return imageData.publicUrl;
};
export default useLoadUser;