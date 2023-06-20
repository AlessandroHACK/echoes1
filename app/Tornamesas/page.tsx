import { Inter } from "next/font/google";

import getTurntables from "@/actions/getTurntables";
import Carousels from "@/components/Carousels";
import TurntableContent from "@/components/TurntableContent";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const turntables = await getTurntables();
  return (
    <div>
        
        <Carousels/>
        <h1 className="text-center color-black mt-5">Lo más reciente </h1>
        <div className="p-3">
        <TurntableContent turntables={turntables}></TurntableContent>
        </div>
    </div>
  );
}