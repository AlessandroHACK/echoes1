import { UserDetails } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getUser = async (): Promise<UserDetails> => {
    const supabase = createServerComponentClient({
      cookies: cookies,

    });

    const { data, error } = await supabase.from('users').select('*').maybeSingle();
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getUser;