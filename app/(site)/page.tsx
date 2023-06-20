import { Inter } from "next/font/google";

import getProducts from "@/actions/getProducts";
import Carousels from "@/components/Carousels";
import HomeContent from "@/components/HomeContent";

export const revalidate = 0;

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
        <div className="">
        
        </div>
        <Carousels/>
        <h1 className="text-center color-black mt-5">Lo más reciente </h1>
        <div className="p-3">
        <HomeContent products={products}></HomeContent>
        </div>
    </div>
  );
}