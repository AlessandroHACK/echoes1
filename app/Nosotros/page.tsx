import Image from "next/image";
import vinyl1 from "@/assets/images/vinyl1.jpg"
import vinyl2 from "@/assets/images/vinyl2.jpeg"
import vinyl3 from "@/assets/images/vinyl3.jpg"
import vinyl4 from "@/assets/images/vinyl4.jpeg"
import vinyl5 from "@/assets/images/gif.gif"
import vinyl6 from "@/assets/images/vinyl6.png"

const Nosotros = () => {
    return (
        <div className="flex flex-col lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 lg:px-20 py-10 text-zinc-900 dark:text-bone-100 gap-y-4 lg:gap-y-10">
            <div className="lg:col-span-2 text-6xl font-bold">
                <h1>Nosotros</h1>
            </div>
            <div className="lg:col-span-2 ml-0 lg:ml-4 text-md font-thin text-lg">
                <p>
                    En Echoes, somos apasionados por la música y creemos en el poder de los discos de vinilo para capturar la esencia y la belleza de cada canción. Nos enorgullece ser una tienda de e-commerce dedicada a la distribución de discos de vinilo, tornamesas y accesorios relacionados en México.
                </p>
            </div>
            <div className="col-span-4 grid grid-cols-2  lg:grid-cols-4 gap-x-6 gap-y-2 group">
                <div className="group-hover:scale-105 relative w-full aspect-square rounded-lg shadow-lg blur-0 hover:blur-sm hover:rotate-1 transition duration-500"><Image alt="vinyl" src={vinyl1} fill className=" object-cover" /></div>
                <div className="group-hover:scale-105 relative w-full aspect-square rounded-lg shadow-lg blur-0 hover:blur-sm hover:rotate-1 transition duration-500"><Image alt="vinyl" src={vinyl2} fill className=" object-cover" /></div>
                <div className="group-hover:scale-105 relative w-full aspect-square rounded-lg shadow-lg blur-0 hover:blur-sm hover:rotate-1 transition duration-500"><Image alt="vinyl" src={vinyl3} fill className=" object-cover" /></div>
                <div className="group-hover:scale-105 relative w-full aspect-square rounded-lg shadow-lg blur-0 hover:blur-sm hover:rotate-1 transition duration-500"><Image alt="vinyl" src={vinyl4} fill className=" object-cover" /></div>
            </div>
            <div className="lg:col-span-1 text-6xl font-bold flex flex-col gap-y-4 mx-auto text-center">
                <h1>Misión</h1>
                <p className="text-md font-thin text-lg">
                    Nuestra misión en Echoes es ser la principal fuente de discos de vinilo, tornamesas y accesorios en México, Aguascalientes. Nos comprometemos a proporcionar a nuestros clientes una amplia selección de discos de vinilo de diferentes géneros y épocas, asegurando la calidad y autenticidad de cada uno de ellos.
                </p>
            </div>
            <div className="lg:col-span-2 lg:mx-6 my-0">
                <div className="relative w-full aspect-video rounded-lg"><Image alt="vinyl" src={vinyl5} fill className=" object-cover" /></div>
            </div>
            <div className="lg:col-span-1  text-6xl font-bold flex flex-col gap-y-4  mx-auto text-center">
                <h1 className="">Visión</h1>
                <p className="text-md font-thin text-lg ">
                    En Echoes, nuestra visión es convertirnos en el referente de excelencia para los amantes de la música en formato de vinilo en México, Aguascalientes y más allá. Buscamos ser reconocidos como la tienda en línea líder en la industria, conocida por nuestra amplia variedad de discos de vinilo, tornamesas de calidad y accesorios especializados.
                </p>
            </div>
        </div>
    );
}

export default Nosotros;