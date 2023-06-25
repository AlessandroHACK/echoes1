"use client"

import Link from "next/link";
import useLoadAlbum from "@/hooks/useLoadAlbum";
import { Album } from "@/types";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";

interface AlbumItemProps {
    dataAlbum: Album;
};

const AlbumItem: React.FC<AlbumItemProps> = ({
    dataAlbum,
}) => {
    const logoPath = useLoadAlbum(dataAlbum);
    return (

        <Link href={`/Vinilos/${dataAlbum.id_producto}`}>
                    
                        <div className="bg-beige-200  dark:bg-chocolate-900 rounded-xl p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 h-auto">
                            <div className="relative overflow-hidden rounded-xl aspect-square">
                                <Image
                                    className="object-cover"
                                    src={logoPath || '/images/logoblanco.png'}
                                    fill
                                    alt="Image"
                                />
                            </div>
                            <div className="mt-1 p-2 h-[60px]">
                                <h2 className="text-chocolate-700 text-md font-bold dark:text-beige-100">
                                    {dataAlbum.nombre}
                                </h2>
                                <h2 className="text-chocolate-700 text-sm dark:text-beige-100">
                                   {dataAlbum.artistas.nombre}
                                </h2>
                            </div>
                            <div className="mt-2 flex items-end justify-between">
                                <p className="text-lg font-bold text-zinc-700 dark:text-beige-700">
                                    $ {dataAlbum.precio}
                                </p>
                                <div className="flex items-center space-x-1.5 rounded-lg dark:bg-chocolate-100 px-2 py-1.5 text-zinc-100 duration-100 dark:hover:bg-beige-100 dark:hover:text-chocolate-800">
                                    <RiShoppingCartLine className="relative mr-1 h-4 w-4 " />
                                    <button className="relative text-sm ">Agregar al carrito</button>
                                </div>
                            </div>
                        </div>
                    
                </Link>
    );
}

export default AlbumItem;