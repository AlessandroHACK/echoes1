import { UserDetails } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadUser = (user: UserDetails | null | undefined) => {
  const supabaseClient = useSupabaseClient();

  if (!user || !user.avatar_url) {
    return null; // Manejar el caso cuando user es undefined o avatar_url es undefined
  }

  const { data: imageData } = supabaseClient
    .storage
    .from('usuarios')
    .getPublicUrl(user.avatar_url);

  return imageData.publicUrl;
};

export default useLoadUser;