import { CartContext } from "@/state/CartContext";
import { useContext, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import useLoadAlbum from "@/hooks/useLoadAlbum";
import { Product } from "@/types";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import AddToCartButton from "./AddToCartButton";

interface AlbumItemProps {
  dataAlbum: Product;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ dataAlbum }) => {
  const logoPath = useLoadAlbum(dataAlbum);
    


  return (
    <div className="bg-bone-100 dark:bg-chocolate-900 rounded-xl p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 h-auto">
        <Link href={`/Vinilos/${dataAlbum.id_producto}`}>
        <div className="relative overflow-hidden rounded-xl aspect-square">
          <Image
            className="object-cover"
            src={logoPath || "/images/logoblanco.png"}
            fill
            alt="Image"
            />
        </div>
            </Link>
        <div className="mt-1 p-2 h-[60px]">
          <h2 className="text-chocolate-700 text-md font-bold dark:text-beige-100">
            {dataAlbum.nombre}
          </h2>
          <Link href={`/Artistas/${dataAlbum.artistas.id_artista}`} className="group transition text-chocolate-700 text-sm dark:text-beige-100 w-fit">
            {dataAlbum.artistas.nombre}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-ash-200"></span>
          </Link>
        </div>
        <div className="mt-2 flex items-end justify-between">
          <p className="text-lg font-bold text-ash-300 dark:text-beige-700">
            $ {dataAlbum.precio}
          </p>
          <AddToCartButton dataProduct={dataAlbum}/>
        </div>
      </div>
  );
};

export default AlbumItem;