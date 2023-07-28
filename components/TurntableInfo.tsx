"use client"
import { Product } from "@/types";
import useLoadTurntable from "@/hooks/useLoadTurntable"
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

interface TurntableItemProps {
  turntable: Product;
};


const TurntableInfo: React.FC<TurntableItemProps> = ({ turntable }) => {
  const logoPath = useLoadTurntable(turntable);
  return (
    <div className="px-2 py-7 lg:px-5 lg:py-14 mx-auto bg-beige-100/50 dark:bg-chocolate-900/50 rounded-md shadow-xl shadow-zinc-900/20 dark:shadow-zinc-600/20">
      <div className="lg:w-4/5 mx-auto flex flex-wrap ">
        <div className="relative lg:w-1/2 w-full md:w-3/4 m-auto overflow-hidden  aspect-square">

          <Image className="object-cover" alt="turntable" fill src={logoPath || '/images/logoblanco.png'} />

        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 className="text-gray-900 text-xl lg:text-3xl title-font font-medium mb-1 dark:text-bone-100" >{turntable.nombre}</h1>

          <p className="leading-relaxed dark:text-beige-100">{turntable.descripcion}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-chocolate-200 dark:border-beige-200 mb-5">
            <div className="flex flex-col">
              <h2 className="font-bold dark:text-bone-200">Cantidad: </h2>
              {turntable.cantidad > 0 ? (
                <p className="dark:text-beige-600">{turntable.cantidad} piezas.</p>
              ) : (
                <p className="dark:text-beige-600">No disponible.</p>
              )}
              <span className="mt-3 title-font font-medium text-2xl text-ash-900 dark:text-zinc-50">${turntable.precio}</span>
            </div>

          </div>
          <div className="flex">
            {turntable.cantidad > 0 ? (
              <>
              <span className="title-font font-medium text-2xl text-ash-900 dark:text-zinc-50">¿Te interesa esta tornamesa?</span>
              <div className="flex ml-auto">
                <AddToCartButton dataProduct={turntable} />
              </div>
              </>
            ):(
              <>
              <span className="title-font font-medium text-2xl text-ash-900 dark:text-zinc-50">Lo sentimos, esta tornamesa no está disponible actualmente.</span>

              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default TurntableInfo;