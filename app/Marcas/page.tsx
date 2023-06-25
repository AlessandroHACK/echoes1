import { Inter } from "next/font/google";
import getBrands from "../../actions/getBrands";
import Carousels from "../../components/Carousels";
import BrandContent from "../../components/BrandContent";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = 10;

export default async function Home() {
  const brands = await getBrands();
  return (
    <div>
        
        <Carousels/>
        <h1 className="text-center color-black mt-5">Lo más reciente </h1>
        <div className="p-3">
        <BrandContent brands={brands}></BrandContent>
        </div>
    </div>
  );
}