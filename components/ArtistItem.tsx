"use client"

import useLoadArtist from "../hooks/useLoadArtist";
import { Artist } from "../types";
import Image from "next/image";

interface ArtistItemProps {
    dataArtist: Artist;
};

const AlbumItem: React.FC<ArtistItemProps> = ({
    dataArtist,
}) => {
    const logoPath = useLoadArtist(dataArtist);
    return (
        <div
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
                    className="object-cover"
                    src={logoPath || '/images/logoblanco.png'}
                    fill
                    alt="Image"
                />
            </div>
            <div className="flex flex-col items-start w-full p-4 gap-y-1">
                <p className="font-semibold w-full truncate text-red-700">
                    {dataArtist.nombre}
                </p>
            </div>
        </div>
    );
}

export default AlbumItem;