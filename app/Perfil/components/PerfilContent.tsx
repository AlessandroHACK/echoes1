"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RiSettings4Line } from "react-icons/ri";
import {GoCreditCard} from 'react-icons/go';
import {BsBoxSeam} from 'react-icons/bs';

import { useUser } from "@/hooks/useUser";

import Link from "next/link";
import Image from "next/image";

const PerfilContent = () => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  return (
    <div className="md:min-h-[480px] justify-center items-center">
      <div className="w-full p-5">
        <h1 className="text-4xl text-center font-bold text-chocolate-900 dark:text-beige-200">
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

        <div className="opciones-perfil mt-5 flex flex-wrap justify-center mx-4 text-chocolate-900 dark:text-beige-200">
          <div className="bg-beige-100 p-4 border dark:bg-chocolate-900  dark:border-ash-100 rounded cursor-pointer hover:shadow-md transform hover:scale-105 transition-all duration-300 mx-2 mb-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <Link href="/Confi">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <RiSettings4Line className="w-full h-full dark:text-beige-200 text-ash-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold ">
                    Configuración
                  </h3>
                  <p className="mt-2 ">Descripción de la tarjeta 1</p>
                </div>
              </div>
            </Link>
          </div>

          <div className=" bg-beige-100 p-4 border dark:bg-chocolate-900  dark:border-ash-100 rounded cursor-pointer  hover:shadow-md transform hover:scale-105 transition-all duration-300 mx-2 mb-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <Link href="/Pedidos">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <BsBoxSeam className="w-full h-full dark:text-beige-200 text-ash-500"/>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Mis pedidos</h3>
                  <p className="mt-2">Descripción de la tarjeta 2</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-beige-100 p-4 border dark:bg-chocolate-900  dark:border-ash-100 rounded cursor-pointer  hover:shadow-md transform hover:scale-105 transition-all duration-300 mx-2 mb-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <Link href="/Pagos">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                 <GoCreditCard className="w-full h-full dark:text-beige-200 text-ash-500"/>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Pagos</h3>
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

export default PerfilContent;
