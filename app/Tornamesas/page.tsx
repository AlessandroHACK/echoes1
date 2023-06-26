import { Inter } from "next/font/google";

import getTurntables from "@/actions/getTurntables";
import Carousels from "@/components/Carousels";
import TurntableContent from "@/components/TurntableContent";
import Header from "@/components/Header";
import { Product } from "@/types";
import searchTurntables from "@/actions/searchTurntables";
import Search from "@/components/Search";

export const revalidate = 0;

const Home = async ({ searchParams,
}: {
  searchParams: { search?: string }
}) => {
  const searchQuery = searchParams.search ?? ""
  let turntables: Product[] = []

  const initialProductsData = await getTurntables();
  const filteredProductsData = await searchTurntables(searchQuery);

  if (searchQuery.length > 1) {
    // If there is a result, set turntables to result
    if (filteredProductsData) {
      turntables = []
      turntables = filteredProductsData
    }
    // If there is no result, set turntables to empty array
    else {
      turntables = []
    }
  }
  // If there is no search query, set turntables to initial data
  else {
    turntables = initialProductsData ?? []
  }

  return (
    <div >
      <Carousels />
      <h1 className="text-center text-2xl font-bold text-chocolate-900 dark:text-bone-100 mt-5">
        Revive el Sonido Clásico: Tu Destino Musical en Vinilos y Tornamesas</h1>
      
      <div className="px-10 lg:px-20 py-10">
        <div className="text-lg my-2 font-medium dark:text-beige-200">
        <p className=" text-center">Busca alguna tornamesa, seguro la tenemos.</p>
        </div>
      <Search/>
        <TurntableContent turntables={turntables}></TurntableContent>
      </div>
    </div>
  );
}

export default Home;