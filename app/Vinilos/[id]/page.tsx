import getAlbum from "@/actions/getAlbum";
import AlbumInfo from "@/components/AlbumInfo";
import Header from "@/components/Header";


export default async function AlbumPage({ params }: any) {
    const album = await getAlbum(params.id);

    return (

        <div className="px-10 lg:px-24 py-10 min-h-screen">
            <AlbumInfo album={album}/>
        </div>

    );
}