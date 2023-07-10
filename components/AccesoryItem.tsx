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
    const handleCartOperation = async (product) => {
        setLoading(true);
        await addToCart(product, user.userDetails);
        setLoading(false);
        console.log("Producto agregado al carrito:", product);
        router.refresh();
    };
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
                <button

                    onClick={() => handleCartOperation(dataAccesory)}
                    disabled={loading}
                    className="flex items-center space-x-1.5 rounded-lg bg-beige-100 dark:text-bone-100 dark:bg-chocolate-100 px-2 py-1.5 text-ash-400 duration-100 hover:bg-chocolate-100 hover:text-bone-100 dark:hover:bg-beige-100 dark:hover:text-chocolate-800">
                    <RiShoppingCartLine className="relative mr-1 h-4 w-4 " />
                    <div
                        className="relative text-sm ">Agregar al carrito</div>
                </button>
            </div>
        </div>

    );
}

export default AccesoryItem;