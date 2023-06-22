import { Inter } from "next/font/google";

import getProducts from "@/actions/getProducts";
import Carousels from "@/components/Carousels";
import HomeContent from "@/components/HomeContent";
import Header from "@/components/Header";
import { Product } from "@/types";
import searchProducts from "@/actions/searchProducts";
import Search from "@/components/Search";

export const revalidate = 60;

const Home = async ({ searchParams,
}: {
  searchParams: { search?: string }
}) => {
  const searchQuery = searchParams.search ?? ""
  let products: Product[] = []

  const initialProductsData = await getProducts();
  const filteredProductsData = await searchProducts(searchQuery);

  if (searchQuery.length > 0) {
    // If there is a result, set products to result
    if (filteredProductsData) {
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
      <h1 className="text-center color-black mt-5">Lo más reciente </h1>
      <Search/>
      <div className="px-20 py-10">
        <HomeContent products={products}></HomeContent>
      </div>
    </div>
  );
}

export default Home;