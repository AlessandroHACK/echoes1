'use client'
import Image from "next/image";

const Vinilo = () => {
    return (

        <div className="relative overflow-hidden rounded-xl  aspect-square lg:aspect-auto  w-full h-full">
            <Image
                className="object-cover"
                src="/img/Inicio/Vinilo.jpeg"
                alt="First slide"
                fill
            />
        </div>
    );
}

export default Vinilo;