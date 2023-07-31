"use client"

import { Product } from "@/types";
import TurntableItem from "./TurntableItem";

interface TurntableContentProps {
    turntables: Product[];
}

const AlbumContent: React.FC<TurntableContentProps>= ({
    turntables
}) => {
    if(turntables.length === 0){
        return(
            <div className="mt-4 text-neutral-400 text-magenta-900 dark:text-bone-100">Parece que no hay nada aquí, vuelve más tarde.</div>
        )
    }
    return ( 
        <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-4
        2xl:grid-cols-4
        gap-4
        mt-4
        ">
            {turntables.map((item) => (
                <TurntableItem
                dataTurntable={item}
                key={item.id_producto}
                />
            ))}

        </div>
     );
}
 
export default AlbumContent;