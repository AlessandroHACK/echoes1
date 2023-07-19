"use client"

import useLoadAlbum from "@/hooks/useLoadAlbum";
import { Album } from "@/types";
import Image from "next/image";

interface AlbumItemProps {
    album: Album;
};

const AlbumItem: React.FC<AlbumItemProps> = ({
    album,
}) => {
    const logoPath = useLoadAlbum(album);
    return (

        <div className="justify-center m-8">
            <div className="bg-white shadow-lg rounded-lg my-10 mx-8 p-8 grid lg:grid-cols-4 gap-4">
                <div className="lg:col-start-1 lg:col-end-5">
                    <h1 className="text-black text-7xl font-bold uppercase indent-24">
                        {album.nombre}
                    </h1>
                </div>
                <div className="flex flex-col-start-1 col-end-2">
                    <div className="relative xl:w-5/6 xl:h-5/6 2xl:w-5/6 2xl:h-5/6 xl:-left-36 xl:-top-32 2xl:-left-36 2xl:-top-28 overflow-hidden rounded-xl aspect-square m-8">
                    <Image
                        className="object-cover"
                        src={logoPath || '/images/logoblanco.png'}
                        fill
                        alt="Image"
                    />
                    </div>
                    <div>
                        Hola
                    </div>
                </div>
                <div className="col-end-5 col-span-3">
                    <table className="table-fixed border-separate border-spacing-7">
                        <tbody>
                            <tr>
                                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td>Malcolm Lockyer</td>
                                <td>Malcolm Lockyer</td>
                                <td>Malcolm Lockyer</td>
                                <td>Malcolm Lockyer</td>
                            </tr>
                            <tr>
                                <td>Witchy Woman</td>
                                <td>The Eagles</td>
                                <td>The Eagles</td>
                                <td>The Eagles</td>
                                <td>The Eagles</td>
                            </tr>
                            <tr>
                                <td>Witchy Woman</td>
                                <td>The Eagles</td>
                                <td>The Eagles</td>
                                <td>The Eagles</td>
                                <td>The Eagles</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default AlbumItem;