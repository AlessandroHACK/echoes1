"use client"
import { Brand } from "@/types";
import useLoadBrand from "@/hooks/useLoadBrand"
import Image from "next/image";
import BrandTurntableItem from "./BrandTurntableItem";

interface ArtistInfoProps {
    brand: Brand;
};


const ArtistInfo: React.FC<ArtistInfoProps> = ({brand}) => {
    const logoPath = useLoadBrand(brand);
    return ( 
      <div className=" w-full bg-beige-100/90 shadow-md dark:bg-zinc-700/20 rounded-md grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10">
        <div className=" p-3 flex flex-col gap-y-3">
          <div className="dark:border-2 border-bone-100 mx-auto w-full sm:w-3/4 p-5 rounded-full aspect-square overflow-hidden relative">
            <Image alt="Brand" fill className="object-cover  " src={logoPath || '/images/logoblanco.png'}/>
          </div>
          <div className="">
            <h1 className=" text-zinc-950 dark:text-bone-100 text-center text-3xl font-semibold">{brand.nombre}</h1>
          </div>
        </div>
        <div className="p-3 mt-10 lg:mt-0 col-span-2 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-rows-4 gap-y-5 gap-x-2">
        {brand.productos?.map((turntable) => (
                <BrandTurntableItem
                    dataTurntable={turntable}
                    key={turntable.id_producto}
                />
            ))}
        </div>
      </div>
     );
}
 
export default ArtistInfo;