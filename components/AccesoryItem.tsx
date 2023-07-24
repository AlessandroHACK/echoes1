"use client"

import { useContext, useState } from "react"
import Link from "next/link";
import useLoadAccesory from "@/hooks/useLoadAccesory";
import { Product } from "@/types";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";
import { CartContext } from "@/state/CartContext";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import AddToCartButton from "./AddToCartButton";

interface AlbumItemProps {
    dataAccesory: Product;
};

const AccesoryItem: React.FC<AlbumItemProps> = ({
    dataAccesory,
}) => {
    const { addToCart } = useContext(CartContext);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const user = useUser();

    const logoPath = useLoadAccesory(dataAccesory);
    return (


        <div className="bg-bone-100  dark:bg-chocolate-900 rounded-xl p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 h-auto">
            <Link href={`/Accesorios/${dataAccesory.id_producto}`}>
                <div className="relative overflow-hidden rounded-xl aspect-square">
                    <Image
                        className="object-cover"
                        src={logoPath || '/images/logoblanco.png'}
                        fill
                        alt="Image"
                    />
                </div>
            </Link>
            <div className="mt-1 p-2 h-[60px]">
                <h2 className="text-chocolate-700 text-md font-bold dark:text-beige-100">
                    {dataAccesory.nombre}
                </h2>
            </div>
            <div className="mt-2 flex items-end justify-between">
          <p className="text-lg font-bold text-ash-300 dark:text-beige-700">
            $ {dataAccesory.precio}
          </p>
          {dataAccesory.cantidad>0 ? (
            <>
            <AddToCartButton dataProduct={dataAccesory}/>
            </>
          ):(
            <>
            <p className="font-md text-magenta-900 dark:text-beige-100 px-3">No disponible.</p>
            </>
          )}
        </div>
        </div>

    );
}

export default AccesoryItem;