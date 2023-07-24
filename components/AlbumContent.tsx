"use client"

import { Product } from "@/types";
import AlbumItem from "./AlbumItem";

interface AlbumContentProps {
    albums: Product[];
}

const AlbumContent: React.FC<AlbumContentProps>= ({
    albums
}) => {
    if(albums.length === 0){
        return(
            <div className="w-full h-full p-10 text-chocolate-900 dark:text-beige-200 text-neutral-400">Parece que no hay nada aquí.</div>
        )
    }
    return ( 
        <div className="
        grid
        grid-cols-1
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-4
        gap-12
        mt-4
        ">
            {albums.map((item) => (
                <AlbumItem
                dataAlbum={item}
                key={item.id_producto}
                />
            ))}

        </div>
     );
}
 
export default AlbumContent;