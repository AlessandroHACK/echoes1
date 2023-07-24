"use client"

import Link from "next/link";
import useLoadProduct from "@/hooks/useLoadProduct";
import { Product } from "@/types";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";
import AlbumItem from "./AlbumItem";
import TurntableItem from "./TurntableItem";
import AccesoryItem from "./AccesoryItem";

interface TurntableItemProps {
    dataProduct: Product;
};

const ProductItem: React.FC<TurntableItemProps> = ({
    dataProduct,
}) => {

    switch (parseInt(dataProduct.id_tipo)) {
        case 1:
            return (
                <AlbumItem dataAlbum={dataProduct}/>
            )
        case 2:
            return (
                <TurntableItem dataTurntable={dataProduct}/>
            )
        case 3:
            return (
                <AccesoryItem dataAccesory={dataProduct}/>
            )
        default: return null;
    }

}
export default ProductItem;