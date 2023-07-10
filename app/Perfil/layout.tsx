"use client"
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import Providers from "@/components/Providers";
import ToasterProvider from "@/providers/ToasterProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import CartContextProvider from "@/state/CartContext";
import { Suspense } from 'react';
import Footer from "@/components/Footer";
import HeaderProvider from "@/providers/HeaderProvider";
import LoadingScreen from "@/components/loading";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isLoading, user } = useUser();
    const router = useRouter();
    useEffect(() => {
        if (!isLoading && !user) {
            router.replace("/");
        }
    }, [isLoading, user, router]);
    return (
        <div>
              <title>Echoes</title>
                      {children}
          </div>
    
      );
}
