"use client"

import { Brand } from "../types";
import BrandItem from "./BrandItem";

interface AlbumContentProps {
    brands: Brand[];
}

const AlbumContent: React.FC<AlbumContentProps>= ({
    brands
}) => {
    if(brands.length === 0){
        return(
            <div className="mt-4 text-neutral-400">No hay artistas o no tienes acceso a verlas.</div>
        )
    }
    return (
        <div className="
                grid
                grid-cols-1
                sm:grid-cols-3
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-4
                2xl:grid-cols-4
                gap-12
                mt-4
                     ">
            {brands.map((item) => (
                <BrandItem
                    dataBrand={item}
                    key={item.id_marca}
                />
            ))}

        </div>

    );
}
 
export default AlbumContent;