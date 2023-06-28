"use client"

import Link from "next/link";
import useLoadTurntable from "@/hooks/useLoadTurntable";
import { Product } from "@/types";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";

interface TurntableItemProps {
    dataTurntable: Product;
};

const BrandTurntableItem: React.FC<TurntableItemProps> = ({
    dataTurntable,
}) => {
    const logoPath = useLoadTurntable(dataTurntable);
    return (

        <Link href={`/Tornamesas/${dataTurntable.id_producto}`}>

                    <div className=" shadow-zinc-800/20 dark:shadow-zinc-950 h-[100px] flex flex-row bg-bone-100 dark:bg-chocolate-900 rounded-xl shadow-md hover:transform hover:scale-105 duration-300">
                        <div className="w-[100px] p-3 relative overflow-hidden rounded-xl aspect-square">
                            <Image
                                className="object-cover "
                                src={logoPath || '/images/logoblanco.png'}
                                fill
                                alt="Image"
                            />
                        </div>
                        <div className="p-2 w-2/3">
                            <h2 className=" text-chocolate-700 text-md font-bold dark:text-beige-100 break-words">
                                {dataTurntable.nombre}
                            </h2>
                            <p className="text-zinc-900 dark:text-beige-100">${dataTurntable.precio}</p>
                        </div>
                        
                    </div>

                </Link>
    );
}

export default BrandTurntableItem;