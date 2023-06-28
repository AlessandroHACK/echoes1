import getArtist from "@/actions/getArtist";
import ArtistInfo from "@/components/ArtistInfo";


export default async function ArtistPage({ params }: any) {
    const artist = await getArtist(params.id);

    return (
        <div className="px-10 lg:px-20 py-10">
        <ArtistInfo artist={artist}/>

        </div>
    );
}