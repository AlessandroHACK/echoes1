import { Inter } from "next/font/google";

import getAccesories from "@/actions/getAccesories";
import Carousels from "@/components/Carousels";
import AccesoryContent from "@/components/AccesoryContent";
import Header from "@/components/Header";
import { Product } from "@/types";
import searchAccesories from "@/actions/searchAccesories";
import Search from "@/components/Search";

export const revalidate = 0;

const Home = async ({ searchParams,
}: {
  searchParams: { search?: string }
}) => {
  const searchQuery = searchParams.search ?? ""
  let accesories: Product[] = []

  const initialProductsData = await getAccesories();
  const filteredProductsData = await searchAccesories(searchQuery);

  if (searchQuery.length > 1) {
    // If there is a result, set accesories to result
    if (filteredProductsData) {
      accesories = []
      accesories = filteredProductsData
    }
    // If there is no result, set accesories to empty array
    else {
      accesories = []
    }
  }
  // If there is no search query, set accesories to initial data
  else {
    accesories = initialProductsData ?? []
  }

  return (
    <div className="h-auto min-h-full">
      <h1 className="text-center text-2xl font-bold text-chocolate-900 dark:text-bone-100 mt-5">
        Cuida y disfruta de tu colección con estos productos</h1>
      
      <div className="px-10 lg:px-20 py-10">
        <div className="text-lg my-2 font-medium dark:text-beige-200">
        <p className=" text-center">Busca algún accesorio, seguro lo tenemos.</p>
        </div>
      <Search/>
        <AccesoryContent accesories={accesories}></AccesoryContent>
      </div>
    </div>
  );
}

export default Home;