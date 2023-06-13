"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Perfil = () => {
  return (
    <div>
      <div className="contenedor-perfil">
        <h1 className="text-4xl text-center font-bold text-black mt-5">
          Mi cuenta
        </h1>

        <div className="contenedor-foto flex justify-center items-center mt-3">
          <Image
            width={100}
            height={100}
            alt="Foto de perfil"
            src="/img/erick.jfif"
            className="foto-perfil rounded-full"
          />
        </div>

        <div className="opciones-perfil mt-5 flex flex-wrap justify-center mx-4">
          <div className="p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-100 hover:shadow-md transform hover:scale-105 transition-all duration-300 mx-2 mb-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <Link href="/Confi">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <Image
                    width={100}
                    height={100}
                    layout="responsive"
                    className="object-contain"
                    src="/img/conf.png"
                    alt="Imagen 1"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Configurar Información
                  </h3>
                  <p className="mt-2">Descripción de la tarjeta 1</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-100 hover:shadow-md transform hover:scale-105 transition-all duration-300 mx-2 mb-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <Link href="/Pedidos">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <Image
                    width={100}
                    height={100}
                    layout="responsive"
                    className="object-contain"
                    src="/img/produ.png"
                    alt="Imagen 2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Mis pedidos</h3>
                  <p className="mt-2">Descripción de la tarjeta 2</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-100 hover:shadow-md transform hover:scale-105 transition-all duration-300 mx-2 mb-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <Link href="/Pagos">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <Image
                    width={100}
                    height={100}
                    layout="responsive"
                    className="object-contain"
                    src="/img/pago.png"
                    alt="Imagen 3"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Mis pagos</h3>
                  <p className="mt-2">Descripción de la tarjeta 3</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
