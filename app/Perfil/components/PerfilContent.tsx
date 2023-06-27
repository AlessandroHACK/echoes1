"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RiSettings4Line, RiUserLine } from "react-icons/ri";
import {GoCreditCard} from 'react-icons/go';
import {BsBoxSeam} from 'react-icons/bs';
import {UserDetails} from '@/types';
import { useUser } from "@/hooks/useUser";

import Link from "next/link";
import Image from "next/image";
import useLoadUser from "@/hooks/useLoadUser";

interface UserItemProps {
  userDetails : UserDetails
};

const PerfilContent: React.FC<UserItemProps> = ({userDetails}) => {

  const userPath = useLoadUser(userDetails);
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
          Mi perfil
        </h1>

        <div className=" flex justify-center items-center mt-3">
          {userDetails.avatar_url !== null ? (
            <div className="relative overflow-hidden w-[150px] aspect-square">
              <Image
            fill
            alt="Foto de perfil"
            src={userPath}
            className="foto-perfil rounded-full dark:border dark:border-beige-100 border-2"
          />
            </div>
          ):(
            <div className="w-[150px] h-[150px] rounded-full bg-gray-300 flex items-center justify-center">
              <RiUserLine className="w-[140px] h-[140px] text-gray-400" />
            </div>
          )}
        </div>

        <div className="opciones-perfil mt-5 flex flex-wrap justify-center mx-4 text-chocolate-900 dark:text-beige-200">
          <div className="bg-beige-100 p-4 border dark:bg-zinc-800  dark:border-ash-100 rounded cursor-pointer hover:shadow-md transform hover:scale-105 transition-all duration-300 mx-2 mb-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <Link href="/Perfil/Confi">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <RiSettings4Line className="w-full h-full dark:text-beige-200 text-zinc-950" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold ">
                    Configuración
                  </h3>
                  <p className="mt-2 ">Editar información personal</p>
                </div>
              </div>
            </Link>
          </div>

          <div className=" bg-beige-100 p-4 border dark:bg-zinc-800  dark:border-ash-100 rounded cursor-pointer  hover:shadow-md transform hover:scale-105 transition-all duration-300 mx-2 mb-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <Link href="/Perfil/Pedidos">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <BsBoxSeam className="w-full h-full dark:text-beige-200 text-zinc-950"/>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Mis pedidos</h3>
                  <p className="mt-2">Pedidos que has realizado</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-beige-100 p-4 border dark:bg-zinc-800  dark:border-ash-100 rounded cursor-pointer  hover:shadow-md transform hover:scale-105 transition-all duration-300 mx-2 mb-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <Link href="/Perfil/Pagos">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                 <GoCreditCard className="w-full h-full dark:text-beige-200 text-zinc-950"/>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Pagos</h3>
                  <p className="mt-2">Tus métodos de pago</p>
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
