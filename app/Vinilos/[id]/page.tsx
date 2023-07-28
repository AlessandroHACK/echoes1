import getAlbum from "@/actions/getAlbum";
import AlbumInfo from "@/components/AlbumInfo";
import Header from "@/components/Header";

export default async function AlbumPage({ params }: any) {
    const album = await getAlbum(params.id);

    return (
        <div className="flex items-center p-5 md:p-10 lg:p-5 lg:ml-10 xl:p-20 lg:min-h-screen">
            <AlbumInfo album={album}/>
        </div>
    );
}