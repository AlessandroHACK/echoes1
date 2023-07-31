"use client"

import Link from "next/link";
import useLoadBrand from "@/hooks/useLoadBrand";
import { Brand } from "@/types";
import Image from "next/image";

interface ArtistItemProps {
    dataBrand: Brand;
};

const BrandItem: React.FC<ArtistItemProps> = ({
    dataBrand,
}) => {
    const logoPath = useLoadBrand(dataBrand);
    return (
        <Link href={`/Marcas/${dataBrand.id_marca}`}>
            <div className="my-10 rounded-xl bg-beige-100/60 dark:bg-chocolate-800 p-3 shadow-gray-400 dark:shadow-chocolate-100 hover:transform hover:scale-105 duration-300 shadow-md h-auto">
                <div className="relative overflow-hidden  -mt-20 rounded-xl aspect-square p-10 m-8 ">
                    <Image
                        className=" rounded-full"
                        src={logoPath || '/images/logoblanco.png'}
                        fill
                        alt="Image"
                    />
                </div>
                <div className="mt-1 p-2">
                    <h1 className="font-bold text-xl text-center dark:text-magenta-100">
                        {dataBrand.nombre}
                    </h1>
                </div>
                <div>
                    <ul className="mt-3 flex justify-center text-center dark:text-bone-100">
                        <li className="flex flex-col "><span className="text-xl font-medium">Tornamesas</span>{dataBrand.turntables || "0"}</li>
                        <li className="mx-6 flex flex-col "><span className="text-xl font-medium">Stock</span>{dataBrand.stock || "0"}</li>
                    </ul>
                </div>
            </div>
        </Link>
    );
}

export default BrandItem;