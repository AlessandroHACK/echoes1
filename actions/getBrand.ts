import { Brand } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getCompany = async (brandId: string): Promise<Brand> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase.from('marcas').select('*, productos(*)').eq('id_marca', brandId).single();
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getCompany;