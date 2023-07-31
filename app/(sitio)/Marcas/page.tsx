import { Inter } from "next/font/google";
import getBrands from "@/actions/getBrands";
import Carousels from "@/components/Carousels";
import BrandContent from "@/components/BrandContent";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = 10;

export default async function Home() {
  const brands = await getBrands();
  return (
    <div>
        
        <div className="px-10 lg:px-20 py-10">

        <h1 className="text-center text-2xl font-bold text-chocolate-900 dark:text-bone-100">
        Conoce la calidad de marcas con los que colaboramos.</h1>
        <div className="mt-5">
        <BrandContent brands={brands}></BrandContent>
        </div>
        </div>
    </div>
  );
}