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
    <div className=" lg:min-h-screen">
      <h1 className="text-center text-2xl font-bold text-chocolate-900 dark:text-bone-100 mt-5 p-3">
        Descubre música nueva y encuentra a tus artistas favoritos.</h1>
      
      <div className="p-5 lg:p-10 xl:p-15">
        <div className="text-lg my-2 font-medium dark:text-beige-200 ">
        <p className=" text-center">Busca algún álbum, seguro lo tenemos.</p>
        </div>
      <Search/>
        <AlbumContent albums={albums}></AlbumContent>
      </div>
    </div>
  );
}

export default Home;