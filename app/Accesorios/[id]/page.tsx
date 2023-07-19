import getAccesory from "@/actions/getAccesory";

export default async function AccesoryPage({ params }: any) {
    const accesory = await getAccesory(params.id);

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
                    {accesory.nombre}
                </h1>
            </div>
            
        </div>
    );
}