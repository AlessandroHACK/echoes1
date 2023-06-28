"use client"

import { format } from 'date-fns';
import useLoadAlbum from "@/hooks/useLoadAlbum";
import { Product } from "@/types";
import Image from "next/image";

interface AlbumItemProps {
    album: Product;
};

const AlbumInfo: React.FC<AlbumItemProps> = ({
    album,
}) => {
    const logoPath = useLoadAlbum(album);
    return (

        <div className="">
            <div className="bg-beige-100/50 dark:bg-zinc-800/50 shadow-lg rounded-lg p-8 flex flex-col lg:grid  lg:grid-rows-3 lg:grid-cols-4  gap-3">
                <div className="lg:row-span-2 lg:col-span-1 h-auto">
                    <div className=" lg:m-0 lg:col-start-1 relative w-full lg:w-full/12 xl:-left-24 2xl:-left-24 lg:-left-20   overflow-hidden rounded-xl aspect-square">
                    <Image
                        className="object-cover"
                        src={logoPath || '/images/logoblanco.png'}
                        fill
                        alt="Image"
                    />
                    </div>
                </div>
                <div className="row-start-2 lg:row-start-1 lg:col-span-3 lg:col-end-5 h-auto">
                    <h1 className=" text-chocolate-900 dark:text-bone-100 text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
                        {album.nombre}
                    </h1>
                </div>
                <div className="text-zinc-800 dark:text-bone-100/80 h-auto row-start-3 mt-2 lg:mt-0 flex flex-col relative lg:row-span-1 lg:col-span-1 lg:row-start-3">
                        <h1><span className='font-bold'>Artista:</span> {album.artistas.nombre}</h1>
                        <h2><span className='font-bold'>Lanzamiento:</span> {album.lanzamiento}</h2>
                        <h2><span className='font-bold'>Tamaño:</span> {album.tamano}</h2>
                    </div>
                <div className="lg:col-span-3 lg:col-end-5 lg:row-span-2 h-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 text-zinc-800 dark:text-beige-100">
                            <div className="text-5xl">Tracklist</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AlbumInfo;