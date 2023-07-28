import { Inter } from "next/font/google";
import getProducts from "@/actions/getProducts";
import Carousels from "@/components/Carousels";
import HomeContent from "@/components/HomeContent";
import { Product } from "@/types";
import searchProducts from "@/actions/searchProducts";
import Search from "@/components/Search";
import Tornamesa from "@/components/Imagenes/Tornamesas";
import Vinilo from "@/components/Imagenes/Vinilo";
import Accesorios from "@/components/Imagenes/Accesorios";

export const revalidate = 0;

const Home = async ({ searchParams,
}: {
  searchParams: { search?: string }
}) => {
  const searchQuery = searchParams.search ?? ""
  let products: Product[] = []

  const initialProductsData = await getProducts();
  const filteredProductsData = await searchProducts(searchQuery);

  if (searchQuery.length > 1) {
    // If there is a result, set products to result
    if (filteredProductsData) {
      products = []
      products = filteredProductsData
    }
    // If there is no result, set products to empty array
    else {
      products = []
    }
  }
  // If there is no search query, set products to initial data
  else {
    products = initialProductsData ?? []
  }

  return (
    <div className="lg:min-h-screen">
      <Carousels />

      <div className="bg-beige-100/50 dark:bg-chocolate-900 p-5 lg:p-10 xl:p-15">
        <div className="grid gap-x-3 md:gap-x-4 grid-cols-6 lg:gap-x-6 place-items-center">
          <div className="col-start-1 col-span-2">
            <h1 className="text-left text-md md:text-lg lg:text-xl xg:text-2xl font-semi-bold text-chocolate-900 dark:text-bone-100">
              Revive el Sonido Clásico: Tu Destino Musical en Vinilos y Tornamesas</h1>
          </div>
          <div className="col-start-3 col-span-7">
            <h2 className="text-justify text-md lg:text-xl font-semi-bold text-chocolate-900 dark:text-bone-100 ">
              ¿Te gustaría disfrutar de la música como nunca antes? En nuestra página web te ofrecemos
              las mejores tornamesas y discos de vinilo para que vivas la magia del sonido analógico.
              Tenemos una gran variedad de géneros y épocas para que elijas lo que más te gusta.
              No esperes más y entra a nuestra tienda online.
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-center text-4xl font-semi-bold text-chocolate-900 dark:text-bone-100 ">
          ¿Qué productos ofrecemos?
        </h2>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 lg:gap-x-6 place-items-center px-10 lg:px-20 py-10">
        <div className="bg-bone-100 dark:bg-chocolate-900 rounded-xl p-3 shadow-lg h-full flex flex-col gap-y-2">
          <h3 className="text-center text-4xl font-semi-bold text-chocolate-900 dark:text-bone-100">
            Tornamesas
          </h3>
          <p className="text-justify dark:text-bone-100">
            Las tornamesas son dispositivos que permiten reproducir discos de vinilo, un formato de audio analógico
            que tiene una calidad superior a la de los formatos digitales. En nuestra tienda en línea, vendemos
            tornamesas de la mejor calidad, con diseños elegantes, funcionales y duraderos. Nuestras tornamesas
            cuentan con características como brazos ajustables, platos giratorios estables, cápsulas y agujas de
            alta fidelidad, preamplificadores integrados y salidas de audio compatibles con diversos equipos.
          </p>
        </div>
        <Tornamesa />
        <Vinilo />
        <div className="place-items-center bg-bone-100 dark:bg-chocolate-900 rounded-xl p-3 shadow-lg h-full flex flex-col gap-y-2">
          <h3 className="text-center text-4xl font-semi-bold text-chocolate-900 dark:text-bone-100">
            Vinilos
          </h3>
          <p className="text-justify dark:text-bone-100">
            Si te encanta la música y quieres escucharla con la mejor calidad, te invitamos a visitar nuestra
            tienda online de discos de vinilo. Tenemos una gran variedad de géneros y artistas, todos originales
            y en perfecto estado. Los discos de vinilo son superiores a los formatos digitales, ya que tienen un
            sonido más fiel y un valor estético y sentimental.
          </p>
        </div>
        <div className="bg-bone-100 dark:bg-chocolate-900 rounded-xl p-3 shadow-lg h-full flex flex-col gap-y-2">
          <h3 className="text-center text-4xl font-semi-bold text-chocolate-900 dark:text-bone-100">
            Accesorios
          </h3>
          <p className="text-justify dark:text-bone-100">
            Encontrarás accesorios para las tornamesas, como agujas, cápsulas, correas, platos y más.
            Todos de la mejor calidad y compatibles con las principales marcas y modelos. También tenemos
            productos de limpieza para las tornamesas y los discos, como cepillos, líquidos, paños y más.
            Todos diseñados para eliminar el polvo, la grasa y las impurezas que pueden afectar al sonido
            y al estado de tus vinilos. Con nuestros accesorios y productos de limpieza, podrás mantener
            tu tornamesa en óptimas condiciones y prolongar la vida útil de tus discos.
          </p>
        </div>
        <Accesorios />
      </div>


      <div className="px-10 lg:px-20 py-10">
        <div className="text-lg my-2 font-medium dark:text-beige-200">
          <p className=" text-center">Busca algún producto, seguro lo tenemos.</p>
        </div>
        <Search />

        <HomeContent products={products}></HomeContent>
      </div>
    </div>
  );
}

export default Home;