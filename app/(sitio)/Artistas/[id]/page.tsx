import getArtist from "@/actions/getArtist";
import ArtistInfo from "@/components/ArtistInfo";
import { notFound } from "next/navigation";


export default async function ArtistPage({ params }: any) {
    const artist = await getArtist(params.id);
    if(artist.nombre==null){
        notFound();
    }

    return (
        <div className="px-10 lg:px-20 py-10 lg:min-h-screen">
        <ArtistInfo artist={artist}/>

        </div>
    );
}