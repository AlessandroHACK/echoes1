"use client"

import { Product } from "../types";
import ProductItem from "./ProductItem";

interface AlbumContentProps {
    products: Product[];
}

const AlbumContent: React.FC<AlbumContentProps>= ({
    products
}) => {
    if(products.length === 0){
        return(
            <div className="w-full h-full py-10 text-chocolate-900 dark:text-beige-200 text-neutral-400">Parece que no hay nada aquí.</div>
        )
    }
    return ( 
        <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3
        2xl:grid-cols-4
        gap-4
        mt-4
        ">
            {products.map((item) => (
                <ProductItem
                dataProduct={item}
                key={item.id_producto}
                />
            ))}

        </div>
     );
}
 
export default AlbumContent;