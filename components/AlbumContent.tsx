"use client"

import { Album } from "../types";
import AlbumItem from "./AlbumItem";

interface AlbumContentProps {
    albums: Album[];
}

const AlbumContent: React.FC<AlbumContentProps>= ({
    albums
}) => {
    if(albums.length === 0){
        return(
            <div className="mt-4 text-neutral-400">No hay empresas o no tienes acceso a verlas.</div>
        )
    }
    return ( 
        <div className="
        grid
        grid-cols-1
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-4
        2xl:grid-cols-6
        gap-4
        mt-4
        ">
            {albums.map((item) => (
                <AlbumItem
                dataAlbum={item}
                key={item.id_album}
                onClick={() => {}}
                />
            ))}

        </div>
     );
}
 
export default AlbumContent;