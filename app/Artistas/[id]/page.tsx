import getAlbum from "../../../actions/getAlbum";
import Header from "../../../components/Header";

export default async function AlbumPage({ params }: any) {
    const company = await getAlbum(params.id);

    return (
        <div className="
        bg-stone-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto">
            <div className="mb-2">
                <h1 className="text-white
              text-3xl font-semibold">
                    {company?.nombre}
                </h1>
            </div>
           
        </div>
    );
}