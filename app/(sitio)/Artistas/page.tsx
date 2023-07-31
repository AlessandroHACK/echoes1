import { Inter } from "next/font/google";
import getArtists from "@/actions/getArtists";
import Carousels from "@/components/Carousels";
import ArtistContent from "@/components/ArtistContent";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = 10;

export default async function Home() {
  const artists = await getArtists();
  return (
        
        <div className="lg:min-h-screen">
          <title>Echoes - Artistas</title>
        <h1 className="text-center text-2xl font-bold text-chocolate-900 dark:text-bone-100">
        Encuentra y descubre una gran variedad de artistas.</h1>
        <div className="p-5 lg:p-10 xl:p-15">
        <ArtistContent artists={artists}></ArtistContent>
        </div>
        </div>
  );
}