import { Inter } from "next/font/google";

import getProducts from "@/actions/getProducts";
import Carousels from "@/components/Carousels";
import HomeContent from "@/components/HomeContent";
import Header from "@/components/Header";
import { Product } from "@/types";
import searchProducts from "@/actions/searchProducts";
import Search from "@/components/Search";

export const revalidate = 0;

const Home = async ({ searchParams,
}: {
  searchParams: { search?: string }
}) => {
  const searchQuery = searchParams.search ?? ""
  let products: Product[] = []

  const initialProductsData = await getProducts();
  const filteredProductsData = await searchProducts(searchQuery);

  if (searchQuery.length > 1) {
    // If there is a result, set products to result
    if (filteredProductsData) {
      products = []
      products = filteredProductsData
    }
    // If there is no result, set products to empty array
    else {
      products = []
    }
  }
  // If there is no search query, set products to initial data
  else {
    products = initialProductsData ?? []
  }

  return (
    <div >
      <Carousels />
      <h1 className="text-center text-2xl font-bold text-chocolate-900 dark:text-bone-100 mt-5">
        Revive el Sonido Clásico: Tu Destino Musical en Vinilos y Tornamesas</h1>
      
      <div className="px-10 lg:px-20 py-10">
        <div className="text-lg my-2 font-medium dark:text-beige-200">
          <p className=" text-left">Busca algún producto, seguro lo tenemos.</p>
        </div>
      <Search/>
        <HomeContent products={products}></HomeContent>
      </div>
    </div>
  );
}

export default Home;