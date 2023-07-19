import { Inter } from "next/font/google";
import getProducts from "@/actions/getProducts";
import Carousels from "@/components/Carousels";
import HomeContent from "@/components/HomeContent";
import { Product } from "@/types";
import searchProducts from "@/actions/searchProducts";
import Search from "@/components/Search";
import Tornamesa from "@/components/Imagenes/Tornamesa";
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
    <div className="bg-black">
      <Carousels />

      <div className="bg-chocolate-900 p-2 mt-3">
        <div className="h-56 grid grid-cols-6 gap-6 place-items-center mx-20 my-5">
          <div className="col-start-1 col-span-2">
            <h1 className="text-left text-5xl font-semi-bold text-chocolate-900 dark:text-bone-100">
              Revive el Sonido Clásico: Tu Destino Musical en Vinilos y Tornamesas</h1>
          </div>
          <div className="col-start-3 col-span-7 px-20">
            <h2 className="text-justify text-xl font-semi-bold text-chocolate-900 dark:text-bone-100 ">
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
          ¿ Qué productos ofrecemos ?
        </h2>
      </div>

      <div className="h-96 grid grid-cols-2 gap-y-4 gap-x-6 place-items-center mx-20 my-5">
        <div className="bg-bone-100 dark:bg-chocolate-900 rounded-xl p-3 shadow-lg h-full">
          <h3 className="text-center text-4xl font-semi-bold text-chocolate-900 dark:text-bone-100">
            Tornamesas
          </h3>
          <p className="text-justify dark:text-bone-100 my-4 mx-20">
            Las tornamesas son dispositivos que permiten reproducir discos de vinilo, un formato de audio analógico
            que tiene una calidad superior a la de los formatos digitales. En nuestra tienda en línea, vendemos
            tornamesas de la mejor calidad, con diseños elegantes, funcionales y duraderos. Nuestras tornamesas
            cuentan con características como brazos ajustables, platos giratorios estables, cápsulas y agujas de
            alta fidelidad, preamplificadores integrados y salidas de audio compatibles con diversos equipos.
          </p>
        </div>
        <Tornamesa />
      </div>


      <div className="h-96 grid grid-cols-2 gap-4 place-items-center mx-20 my-5">
        <Vinilo />
        <div className="place-items-center bg-bone-100 dark:bg-chocolate-900 rounded-xl p-3 shadow-lg h-full">
          <h3 className="text-center text-4xl font-semi-bold text-chocolate-900 dark:text-bone-100">
            Vinilos
          </h3>
          <p className="text-justify dark:text-bone-100 my-4 mx-20">
            Si te encanta la música y quieres escucharla con la mejor calidad, te invitamos a visitar nuestra
            tienda online de discos de vinilo. Tenemos una gran variedad de géneros y artistas, todos originales
            y en perfecto estado. Los discos de vinilo son superiores a los formatos digitales, ya que tienen un
            sonido más fiel y un valor estético y sentimental.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 place-items-center mx-20 my-5">
        <div className="bg-bone-100 dark:bg-chocolate-900 rounded-xl p-3 shadow-lg h-full">
          <h3 className="text-center text-4xl font-semi-bold text-chocolate-900 dark:text-bone-100">
            Accesorios
          </h3>
          <p className="text-justify dark:text-bone-100 my-4 mx-20">
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