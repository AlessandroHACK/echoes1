"use client"

import useLoadAlbum from "@/hooks/useLoadAlbum";
import { Product } from "@/types";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import Link from "next/link";

interface AlbumItemProps {
    album: Product;
};

const AlbumInfo: React.FC<AlbumItemProps> = ({
    album,
}) => {
    const logoPath = useLoadAlbum(album);
    return (

        <div className="mx-auto w-full">
            <div className="bg-beige-100/50 dark:bg-zinc-800/50 shadow-lg rounded-lg p-8 flex flex-col gap-y-4 lg:gap-y-0 lg:grid  lg:grid-cols-4 ">
                <div className="lg:col-start-1  flex flex-col gap-y-3">
                <div className="">
                    <div className=" lg:m-0 relative w-full lg:w-full lg:-left-20 overflow-hidden rounded-xl aspect-square">
                        <Image
                            className="object-cover"
                            src={logoPath || '/images/logoblanco.png'}
                            fill
                            alt="Image"
                        />
                    </div>
                </div>
                <div className=" text-zinc-800/80 dark:text-bone-100/80 h-auto my-4 lg:mt-0 flex flex-col relative gap-y-1">
                    <Link className="hover:dark:text-zinc-100 hover:scale-110 transition" href={`/Artistas/${album.artistas.id_artista}`}><span className='font-bold text-zinc-950 dark:text-zinc-100'>Artista:</span> {album.artistas.nombre}</Link>
                    <h2><span className='font-bold text-zinc-950 dark:text-zinc-100'>Lanzamiento:</span> {album.lanzamiento}</h2>
                    <h2><span className='font-bold text-zinc-950 dark:text-zinc-100'>Tamaño:</span> {album.tamano}</h2>
                    {album.cantidad > 0 ? (

                        <h2><span className='font-bold text-zinc-950 dark:text-zinc-100'>Cantidad:</span> {album.cantidad} disponible(s)</h2>
                    ) : (
                        <h2><span className='font-bold text-zinc-950 dark:text-zinc-100'>Cantidad:</span> No disponible.</h2>

                    )}
                </div>
                </div>
                <div className="lg:col-start-2 lg:col-span-3  flex flex-col gap-y-7 ">
                <div className="justify-center">
                    <h1 className=" text-chocolate-900 dark:text-zinc-100 text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
                        {album.nombre}
                    </h1>
                    <h1 className=" text-ash-900 dark:text-beige-200 text-xl lg:text-2xl xl:text-3xl font-light uppercase">
                        ${album.precio}
                    </h1>
                </div>
                <div className="h-auto flex flex-col gap-y-3">
                    <h1 className="text-lg font-bold text-zinc-800 dark:text-bone-100">Canciones</h1>
                    <div className="  grid grid-cols-1 lg:grid-cols-2 text-zinc-800 gap-y-3 dark:text-beige-100">
                        {album.tracklist.map((song) => (
                            <div className="flex flex-row gap-x-5" key={song.id}>
                                <h1 className="text-md font-bold">{song.id}. {song.titulo} <span className="text-sm font-light">({song.duracion})</span> </h1>

                            </div>

                        ))}
                    </div>

                </div>
                <div className="lg:my-auto lg:m-0 flex flex-row gap-x-4">
                    {album.cantidad>0 ? (
                        <>
                        <h1 className="font-semibold text-xl text-magenta-900 dark:text-bone-100">¿Te interesa este álbum? </h1>
                        <div className="my-auto">
                            <AddToCartButton dataProduct={album} />
                        </div>
                        </>
                    ):(
                        <>
                    <h1 className="font-semibold text-xl text-magenta-900 dark:text-bone-100">Lo sentimos, este álbum no está disponible actualmente.</h1>

                    </>
                    )}
                </div>
                </div>
                
                
            </div>
        </div>

    );
}

export default AlbumInfo;