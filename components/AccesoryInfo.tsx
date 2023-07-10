"use client"
import { Product } from "@/types";
import useLoadAccesory from "@/hooks/useLoadAccesory"
import Image from "next/image";

interface AccesoryItemProps {
    accesory: Product;
};


const TurntableInfo: React.FC<AccesoryItemProps> = ({accesory}) => {
    const logoPath = useLoadAccesory(accesory);
    return ( 
  <div className="px-2 py-7 lg:px-5 lg:py-14 mx-auto bg-beige-100/50 dark:bg-chocolate-900/50 rounded-md shadow-xl shadow-zinc-900/20 dark:shadow-zinc-600/20">
    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
        <div className="relative lg:w-1/2 w-full md:w-3/4 m-auto overflow-hidden  aspect-square">

      <Image className="object-cover" alt="accesory" fill src={logoPath || '/images/logoblanco.png'}/>

        </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-xl lg:text-3xl title-font font-medium mb-1 dark:text-bone-100" >{accesory.nombre}</h1>
        
        <p className="leading-relaxed dark:text-beige-100">{accesory.descripcion}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-chocolate-200 dark:border-beige-200 mb-5">
          <div className="flex flex-col">
            <h2 className="font-bold dark:text-bone-200">Disponibles: </h2>
            {accesory.cantidad == 1 ? (
                <p className="dark:text-beige-600">{accesory.cantidad} pieza.</p>
            ):(
                <p className="dark:text-beige-600">{accesory.cantidad} piezas.</p>
            )}
          </div>
          
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900 dark:text-zinc-50">${accesory.precio}</span>
          <button className="flex ml-auto text-zinc-50 dark:text-chocolate-900 hover:dark:text-bone-100 dark:bg-beige-200 hover:dark:bg-ash-300 bg-ash-300 hover:bg-beige-800 border-0 p-2 lg:py-2 lg:px-6 focus:outline-none hover:scale-110 transition hover:bg-red-600 rounded">Agregar al carrito</button>
          
        </div>
      </div>
    </div>
  </div>
     );
}
 
export default TurntableInfo;