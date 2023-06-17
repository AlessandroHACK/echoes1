"use client"

import Link from "next/link";
import useLoadAlbum from "@/hooks/useLoadAlbum";
import { Album } from "@/types";
import Image from "next/image";

interface AlbumItemProps {
    dataAlbum: Album;
    onClick: (id_proyecto: string) => void
};

const AlbumItem: React.FC<AlbumItemProps> = ({
    dataAlbum,
    onClick
}) => {
    const logoPath = useLoadAlbum(dataAlbum);
    return (
        <Link href={`/Vinilos/${dataAlbum.id_producto}`}
            
            className="
        relative
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-red-800/5
        text-red
        cursor-pointer
        hover:bg-neutral-800/10
        transition
        p-4
        ">
            <div className="
            relative
            aspect-square
            w-full
            h-50%
            rounded-md
            overflow-hidden
            hover:scale-110
            transition
            ">
                <Image
                    priority
                    className="object-cover"
                    src={logoPath}
                    fill
                    alt="Image"
                />
                
            </div>
            <div className="flex flex-col items-start w-full p-4 gap-y-1">
                <p className="font-semibold w-full truncate text-red-700">
                    {dataAlbum.nombre}
                </p>
            </div>
        </Link>
    );
}

export default AlbumItem;