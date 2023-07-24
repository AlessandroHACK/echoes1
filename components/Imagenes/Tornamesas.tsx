'use client'
import Image from "next/image";

const Tornamesa = () => {
    return (
        <div className="relative overflow-hidden rounded-xl aspect-square lg:aspect-auto w-full h-full">
            <Image
                className="object-cover"
                src="/img/Inicio/Tornamesa.jpeg"
                alt="First slide"
                fill
            />
        </div>
    );
}

export default Tornamesa;