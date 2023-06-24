import { Inter } from "next/font/google";
import getArtists from "../../actions/getArtists";
import Carousels from "../../components/Carousels";
import ArtistContent from "../../components/ArtistContent";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = 10;

export default async function Home() {
  const artists = await getArtists();
  return (
    <div>
        
        <Carousels/>
        <h1 className="text-center color-black mt-5">Lo más reciente </h1>
        <div className="p-3">
        <ArtistContent artists={artists}></ArtistContent>
        </div>
    </div>
  );
}