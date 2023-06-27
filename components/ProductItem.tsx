"use client"

import Link from "next/link";
import useLoadProduct from "@/hooks/useLoadProduct";
import { Product } from "@/types";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";

interface TurntableItemProps {
    dataProduct: Product;
};

const ProductItem: React.FC<TurntableItemProps> = ({
    dataProduct,
}) => {
    const logoPath = useLoadProduct(dataProduct);
    switch (parseInt(dataProduct.id_tipo)) {
        case 1:
            return (
                <Link href={`/Vinilos/${dataProduct.id_producto}`}>

                    <div className="bg-bone-100  dark:bg-chocolate-900 rounded-xl p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 h-auto">
                        <div className="relative overflow-hidden rounded-xl aspect-square">
                            <Image
                                className="object-cover"
                                src={logoPath || '/images/logoblanco.png'}
                                fill
                                alt="Image"
                            />
                        </div>
                        <div className="mt-1 p-2 h-[60px]">
                            <h2 className="text-chocolate-700 text-md font-bold dark:text-beige-100">
                                {dataProduct.nombre}
                            </h2>
                            <h2 className="text-chocolate-700 text-sm dark:text-beige-100">
                                {dataProduct.artistas.nombre}
                            </h2>
                        </div>
                        <div className="mt-2 flex items-end justify-between">
                            <p className="text-lg font-bold text-ash-300 dark:text-beige-700">
                                $ {dataProduct.precio}
                            </p>
                            <div className="flex items-center space-x-1.5 rounded-lg bg-beige-200 dark:text-bone-100 dark:bg-chocolate-100 px-2 py-1.5 text-ash-400 duration-100 hover:bg-chocolate-100 hover:text-bone-100 dark:hover:bg-beige-100 dark:hover:text-chocolate-800">
                                <RiShoppingCartLine className="relative mr-1 h-4 w-4 " />
                                <button className="relative text-sm ">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>

                </Link>
            )
        case 2:
            return (
                <Link href={`/Tornamesas/${dataProduct.id_producto}`}>

                    <div className="bg-bone-100  dark:bg-chocolate-900 rounded-xl p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 h-auto">
                        <div className="relative overflow-hidden rounded-xl aspect-square">
                            <Image
                                className="object-cover"
                                src={logoPath || '/images/logoblanco.png'}
                                fill
                                alt="Image"
                            />
                        </div>
                        <div className="mt-1 p-2 h-[60px]">
                            <h2 className="text-chocolate-700 text-md font-bold dark:text-beige-100">
                                {dataProduct.nombre}
                            </h2>
                            <h2 className="text-chocolate-700 text-sm dark:text-beige-100">
                                {dataProduct.marcas.nombre}
                            </h2>
                        </div>
                        <div className="mt-2 flex items-end justify-between">
                            <p className="text-lg font-bold text-ash-300 dark:text-beige-700">
                                $ {dataProduct.precio}
                            </p>
                            <div className="flex items-center space-x-1.5 rounded-lg bg-beige-100 dark:text-bone-100 dark:bg-chocolate-100 px-2 py-1.5 text-ash-400 duration-100 hover:bg-chocolate-100 hover:text-bone-100 dark:hover:bg-beige-100 dark:hover:text-chocolate-800">
                                <RiShoppingCartLine className="relative mr-1 h-4 w-4 " />
                                <button className="relative text-sm ">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>

                </Link>
            )
        case 3:
            return (
                <Link href={`/Accesorios/${dataProduct.id_producto}`}>

                    <div className="bg-bone-100  dark:bg-chocolate-900 rounded-xl p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 h-auto">
                        <div className="relative overflow-hidden rounded-xl aspect-square">
                            <Image
                                className="object-cover"
                                src={logoPath || '/images/logoblanco.png'}
                                fill
                                alt="Image"
                            />
                        </div>
                        <div className="mt-1 p-2 h-[60px]">
                            <h2 className="text-chocolate-700 text-md font-bold dark:text-beige-100">
                                {dataProduct.nombre}
                            </h2>
                        </div>
                        <div className="mt-2 flex items-end justify-between">
                            <p className="text-lg font-bold text-ash-300 dark:text-beige-700">
                                $ {dataProduct.precio}
                            </p>
                            <div className="flex items-center space-x-1.5 rounded-lg bg-beige-100 dark:text-bone-100 dark:bg-chocolate-100 px-2 py-1.5 text-ash-400 duration-100 hover:bg-chocolate-100 hover:text-bone-100 dark:hover:bg-beige-100 dark:hover:text-chocolate-800">
                                <RiShoppingCartLine className="relative mr-1 h-4 w-4 " />
                                <button className="relative text-sm ">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>

                </Link>
            )
        default: return null;
    }

}
export default ProductItem;