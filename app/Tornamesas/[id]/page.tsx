import getTurntable from "@/actions/getTurntable";
import TurntableInfo from "@/components/TurntableInfo";

export default async function TurntablePage({ params }: any) {
    const turntable = await getTurntable(params.id);

    return (
        <div className="
        p-20">
            
            <TurntableInfo turntable={turntable}/>
            
        </div>
    );
}