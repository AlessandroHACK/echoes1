import getAccesory from "@/actions/getAccesory";
import AccesoryInfo from "@/components/AccesoryInfo";

export default async function TurntablePage({ params }: any) {
    const accesory = await getAccesory(params.id);

    return (
        <div className="
        p-5 lg:p-20">
            
            <AccesoryInfo accesory={accesory}/>
            
        </div>
    );
}