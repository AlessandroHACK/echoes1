"use client"
import { Artist } from "@/types";
import useLoadArtist from "@/hooks/useLoadArtist"
import Image from "next/image";
import ArtistAlbumItem from "./ArtistAlbumItem";

interface ArtistInfoProps {
    artist: Artist;
};


const ArtistInfo: React.FC<ArtistInfoProps> = ({artist}) => {
    const logoPath = useLoadArtist(artist);
    return ( 
      <div className=" w-full bg-beige-100/90 shadow-md dark:bg-zinc-700/20 rounded-md grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10">
        <div className=" p-3 flex flex-col ">
          <div className="dark:border-2 border-bone-100 m-auto w-full sm:w-3/4 p-5 rounded-full aspect-square overflow-hidden relative">
            <Image alt="Artist" fill className="object-cover  " src={logoPath || '/images/logoblanco.png'}/>
            <h1 className="absolute text-zinc-950 dark:text-zinc-950 text-center drop-shadow-2xl top-2/3 left-1/2 -translate-x-1/2  -translate-y-1/2 text-3xl font-semibold bg-bone-100 mix-blend-screen">{artist.nombre}</h1>
          </div>
          <div className="">
            <h2 className="text-center text-md  text-ash-500 dark:text-beige-100">{artist.descripcion}</h2>
          </div>
        </div>
        <div className="p-3 mt-10 lg:mt-0 col-span-2 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-rows-4 gap-y-5 gap-x-2">
        {artist.productos?.map((album) => (
                <ArtistAlbumItem
                    dataAlbum={album}
                    key={album.id_producto}
                />
            ))}
        </div>
      </div>
     );
}
 
export default ArtistInfo;