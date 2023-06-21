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
            <div>
                <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 h-auto">
                    <div className="relative overflow-hidden rounded-xl aspect-square">
                        <Image
                            className="object-cover"
                            src={logoPath || '/images/logoblanco.png'}
                            fill
                            alt="Image"
                        />
                    </div>
                    <div className="mt-1 p-2">
                        <h2 className="text-slate-700">
                            {dataAlbum.nombre}
                        </h2>
                    </div>
                    <div className="mt-2 flex items-end justify-between">
                        <p className="text-lg font-bold text-zinc-700">
                            $ {dataAlbum.precio}
                        </p>
                        <div className="flex items-center space-x-1.5 rounded-lg bg-bone px-2 py-1.5 text-white duration-100 hover:bg-indigo-500">
                            <RiShoppingCartLine className="mr-1 h-4 w-4" />
                            <button className="text-sm">Agregar al carrito</button>
                        </div>
                    </div>
                </article>
            </div>
        </Link>
    );
}

export default AlbumItem;