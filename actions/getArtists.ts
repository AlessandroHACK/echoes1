import { Artist } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getArtists = async (): Promise<Artist[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
        .from('artistas')
        .select(`*, productos(nombre, cantidad)`)
        .order('nombre', {ascending: true});

    if (error) {
        console.log(error);
    }

    const artistsWithAlbums = data?.map((artist: Artist) => {
        const albumCount = artist.productos.length;
        const albumStock = artist.productos.reduce(
            (totalStock: number, producto: any) => totalStock + producto.cantidad,
            0
        );
        return { ...artist, albums: albumCount, stock: albumStock };
    });

    return artistsWithAlbums || [];
};

export default getArtists;