import { Inter } from "next/font/google";

import getAlbums from "@/actions/getAlbums";
import Carousels from "@/components/Carousels";
import AlbumContent from "@/components/AlbumContent";
import Header from "@/components/Header";
import { Product } from "@/types";
import searchAlbums from "@/actions/searchAlbums";
import Search from "@/components/Search";

export const revalidate = 0;

const Home = async ({ searchParams,
}: {
  searchParams: { search?: string }
}) => {
  const searchQuery = searchParams.search ?? ""
  let albums: Product[] = []

  const initialProductsData = await getAlbums();
  const filteredProductsData = await searchAlbums(searchQuery);

  if (searchQuery.length > 1) {
    // If there is a result, set albums to result
    if (filteredProductsData) {
      albums = []
      albums = filteredProductsData
    }
    // If there is no result, set albums to empty array
    else {
      albums = []
    }
  }
  // If there is no search query, set albums to initial data
  else {
    albums = initialProductsData ?? []
  }

  return (
    <div >
      <Carousels />
      <h1 className="text-center text-2xl font-bold text-chocolate-900 dark:text-bone-100 mt-5">
        Revive el Sonido Clásico: Tu Destino Musical en Vinilos y Tornamesas</h1>
      
      <div className="px-10 lg:px-20 py-10">
        <div className="text-lg my-2 font-medium dark:text-beige-200">
          <p className=" text-left">Busca algún álbum, seguro lo tenemos.</p>
        </div>
      <Search/>
        <AlbumContent albums={albums}></AlbumContent>
      </div>
    </div>
  );
}

export default Home;