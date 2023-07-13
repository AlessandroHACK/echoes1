"use client"
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";


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
