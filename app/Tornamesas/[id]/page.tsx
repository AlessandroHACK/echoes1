import getTurntable from "@/actions/getTurntable";
import TurntableInfo from "@/components/TurntableInfo";

export default async function TurntablePage({ params }: any) {
    const turntable = await getTurntable(params.id);

    return (
        <div className="
        p-20 lg:min-h-screen">
            
            <TurntableInfo turntable={turntable}/>
            
        </div>
    );
}