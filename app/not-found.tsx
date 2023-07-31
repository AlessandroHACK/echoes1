import Image from "next/image";

export default function Error() {
    return (
        <div className="flex flex-col justify-center lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10 
                        lg:px-20 py-10 text-zinc-900 dark:text-bone-100 gap-y-4 lg:gap-y-10 ">
            <div className="my-8"> 
                    <h1 className="my-2 text-zinc-900 dark:text-bone-100 font-bold text-2xl ">
                        Parece que has encontrontado una gran puerta a la nada
                    </h1>
                    <p className="my-2 text-zinc-900 dark:text-bone-100">
                        Lo sentimos. Visite nuestra página de inicio para llegar a su destino.
                    </p>
                    <button className="flex items-center space-x-1.5 rounded-lg bg-zinc-100/70 shadow-md 
                                           dark:text-bone-100 dark:bg-chocolate-100 px-2 py-1.5 text-ash-400 
                                           duration-100 hover:bg-chocolate-100 hover:text-bone-100 dark:hover:bg-beige-100 
                                           dark:hover:text-chocolate-800">
                        Da clic aquí!!!
                    </button>
            </div>
            <div className="relative overflow-hidden rounded-xl aspect-square lg:aspect-auto w-full h-full mx-3">
                <Image
                    className="object-cover"
                    src="/img/404/404.png"
                    alt="First slide"
                    fill
                />
            </div>
        </div>
    );
}