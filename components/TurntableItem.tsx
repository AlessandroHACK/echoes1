"use client"

import Link from "next/link";
import useLoadTurntable from "@/hooks/useLoadTurntable";
import { Turntable } from "@/types";
import Image from "next/image";

interface TurntableItemProps {
    dataTurntable: Turntable;
};

const AlbumItem: React.FC<TurntableItemProps> = ({
    dataTurntable,
}) => {
    const logoPath = useLoadTurntable(dataTurntable);
    return (
        <Link href={`/Tornamesas/${dataTurntable.id_producto}`}
            
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
                    src={logoPath || '/public/ímg/disco1.jpg'}
                    fill
                    alt="Image"
                />
                
            </div>
            <div className="flex flex-col items-start w-full p-4 gap-y-1">
                <p className="font-semibold w-full truncate text-red-700">
                    {dataTurntable.nombre}
                </p>
            </div>
        </Link>
    );
}

export default AlbumItem;