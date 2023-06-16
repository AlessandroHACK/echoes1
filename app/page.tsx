import { Inter } from "next/font/google";

import getAlbums from "../actions/getAlbums";
import Carousels from "../components/Carousels";
import AlbumContent from "../components/AlbumContent";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const albums = await getAlbums();
  return (
    <div>
        
        <Carousels/>
        <h1 className="text-center color-black mt-5">Lo más reciente </h1>
        <div className="p-3">
        <AlbumContent albums={albums}></AlbumContent>
        </div>
    </div>
  );
}