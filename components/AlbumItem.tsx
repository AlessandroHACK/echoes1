"use client"

import useLoadAlbum from "../hooks/useLoadAlbum";
import { Album } from "../types";
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
        <div
            onClick={() => onClick(dataAlbum.id_album)}
            className="
        relative
        flex
        flex-col
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-800/5
        cursor-pointer
        hover:bg-neutral-800/10
        transition
        p-4
        h-200
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
                    className="object-cover"
                    src={logoPath || '/images/logoblanco.png'}
                    fill
                    alt="Image"
                />
            </div>
            <div className="flex flex-col items-start w-full p-4 gap-y-1">
                <p className="font-semibold w-full truncate">
                    {dataAlbum.nombre}
                </p>
            </div>
        </div>
    );
}

export default AlbumItem;