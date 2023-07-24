import getBrand from "@/actions/getBrand";
import BrandInfo from "@/components/BrandInfo";


export default async function BrandPage({ params }: any) {
    const brand = await getBrand(params.id);

    return (
        <div className="px-10 lg:px-20 py-10">
        <BrandInfo brand={brand}/>

        </div>
    );
}