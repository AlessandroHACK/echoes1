import getAccesory from "@/actions/getAccesory";
import AccesoryInfo from "@/components/AccesoryInfo";
import { notFound } from "next/navigation";

export default async function TurntablePage({ params }: any) {
    const accesory = await getAccesory(params.id);
    if(accesory.nombre==null){
        notFound();
    }

    return (
        <div className="
        p-5 lg:p-10 xl:p-15 lg:min-h-screen">
            
            <AccesoryInfo accesory={accesory}/>
            
        </div>
    );
}