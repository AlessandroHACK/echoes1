import getAlbum from "@/actions/getAlbum";
import AlbumInfo from "@/components/AlbumInfo";
import { notFound, useRouter } from "next/navigation";

export default async function AlbumPage({ params }: any) {
    const album = await getAlbum(params.id);
    if(album.nombre==null){
        notFound();
    }

    return (
        <div className="flex items-center p-5 md:p-10 lg:p-5 lg:ml-10 xl:p-20 lg:min-h-screen">
            <AlbumInfo album={album}/>
        </div>
    );
}