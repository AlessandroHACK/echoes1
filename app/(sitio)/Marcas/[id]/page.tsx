import getBrand from "@/actions/getBrand";
import BrandInfo from "@/components/BrandInfo";
import { notFound } from "next/navigation";


export default async function BrandPage({ params }: any) {
    const brand = await getBrand(params.id);
    if(brand.nombre==null){
        notFound();
    }

    return (
        <div className="px-10 lg:px-20 py-10">
        <BrandInfo brand={brand}/>

        </div>
    );
}