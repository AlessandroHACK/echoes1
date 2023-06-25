"use client"

import { Artist } from "../types";
import ArtistItem from "./ArtistItem";

interface AlbumContentProps {
    artists: Artist[];
}

const AlbumContent: React.FC<AlbumContentProps>= ({
    artists
}) => {
    if(artists.length === 0){
        return(
            <div className="mt-4 text-neutral-400">No hay artistas o no tienes acceso a verlas.</div>
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
                2xl:grid-cols-4
                gap-12
                mt-4
                     ">
            {artists.map((item) => (
                <ArtistItem
                    dataArtist={item}
                    key={item.id_artista}
                />
            ))}

        </div>

    );
}
 
export default AlbumContent;