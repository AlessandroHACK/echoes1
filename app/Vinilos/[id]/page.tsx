import getAlbum from "@/actions/getAlbum";
import AlbumInfo from "@/components/AlbumInfo";

export default async function AlbumPage({ params }: any) {
    const album = await getAlbum(params.id);

    return (
        <div className="pl-24 pr-24">
            <AlbumInfo album={album} />
        </div>    
    );
}