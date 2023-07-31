import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
        <div className="h-screen flex flex-col justify-center lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10 
                        lg:px-20 py-10 text-zinc-900 dark:text-bone-100 gap-y-4 lg:gap-y-10  bg-gray-100 dark:bg-zinc-900">
            <div className="my-auto"> 
                    <h1 className="my-2 text-zinc-900 dark:text-bone-100 font-bold text-2xl ">
                        Parece que la música no se encuentra en esta grieta.
                    </h1>
                    <p className="my-2 text-zinc-900 dark:text-bone-100">
                        Lo sentimos. Visita nuestra página de inicio para volver a explorar tu música favorita.
                    </p>
                    <div className="mt-5 md:mt-10">
                    <Link href='/' className=" rounded-lg bg-zinc-100/70 shadow-md 
                                           dark:text-bone-100 dark:bg-chocolate-100 px-2 py-1.5 text-ash-400 
                                           duration-100 hover:bg-chocolate-100 hover:text-bone-100 dark:hover:bg-beige-100 
                                           dark:hover:text-chocolate-800">
                        ¡Da click aquí!
                    </Link>
                    </div>
            </div>
            <div className="relative aspect-square md:aspect-auto w-full h-full align-middle self-center mx-auto">
                <Image
                    className="object-contain"
                    src="/img/404/404.png"
                    alt="404"
                    fill
                />
            </div>
        </div>
        </>
    );
}