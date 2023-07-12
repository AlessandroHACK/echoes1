"use client"
import { Product } from "@/types";
import useLoadTurntable from "@/hooks/useLoadTurntable"
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

interface TurntableItemProps {
    turntable: Product;
};


const TurntableInfo: React.FC<TurntableItemProps> = ({turntable}) => {
    const logoPath = useLoadTurntable(turntable);
    return ( 
  <div className=" px-5 py-14 mx-auto bg-beige-100/50 dark:bg-chocolate-900/50 rounded-md shadow-xl shadow-zinc-900/20 dark:shadow-zinc-600/20">
    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
        <div className="relative lg:w-1/2 w-full overflow-hidden  aspect-square">

      <Image className="object-cover" alt="turntable" fill src={logoPath}/>

        </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-600 tracking-widest dark:text-bone-400">{turntable.marcas.nombre}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 dark:text-bone-100" >{turntable.nombre}</h1>
        
        <p className="leading-relaxed dark:text-beige-100">{turntable.descripcion}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-chocolate-200 dark:border-beige-200 mb-5">
          <div className="flex flex-col">
            <h2 className="font-bold dark:text-bone-200">Disponibles: </h2>
            {turntable.cantidad == 1 ? (
                <p className="dark:text-beige-600">{turntable.cantidad} pieza.</p>
            ):(
                <p className="dark:text-beige-600">{turntable.cantidad} piezas.</p>
            )}
          </div>
          
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900 dark:text-zinc-50">${turntable.precio}</span>
          <div className="flex ml-auto">
                <AddToCartButton dataProduct={turntable}/>
                </div>
          
        </div>
      </div>
    </div>
  </div>
     );
}
 
export default TurntableInfo;