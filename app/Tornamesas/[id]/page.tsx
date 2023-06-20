import getTurntable from "@/actions/getTurntable";

export default async function TurntablePage({ params }: any) {
    const turntable = await getTurntable(params.id);

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
                    {turntable.nombre}
                </h1>
            </div>
            
        </div>
    );
}