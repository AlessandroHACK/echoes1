import { Brand } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getArtists = async (): Promise<Brand[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
        .from('marcas')
        .select(`*, productos(nombre, cantidad)`)
        .order('nombre', {ascending: true});

    if (error) {
        console.log(error);
    }

    const brandWithTurntables = data?.map((brand: Brand) => {
        const turntableCount = brand.productos.length;
        const turntableStock = brand.productos.reduce(
            (totalStock: number, producto: any) => totalStock + producto.cantidad,
            0
        );
        return { ...brand, turntables: turntableCount, stock: turntableStock };
    });

    return brandWithTurntables || [];
};

export default getArtists;