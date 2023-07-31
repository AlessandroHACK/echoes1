import Head from 'next/head';
import './globals.css'
import '@/styles/junk.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer';
import UserProvider from '@/providers/UserProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import ToasterProvider from '@/providers/ToasterProvider'
import LoadingScreen from '@/components/loading';
import { Suspense } from 'react';
import Providers from '@/components/Providers';
import CartContextProvider from "@/state/CartContext";
import getUser from '@/actions/getUser';
import Header from '@/components/Header';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
        <ToasterProvider/>
          <SupabaseProvider>
            <UserProvider>
             <CartContextProvider>
             <Suspense fallback={<LoadingScreen />}>
                
                <div className=" bg-gray-100 dark:bg-zinc-900">
                <Header user={user ?? []}/>
                  {children}
                </div>
                <Footer />
              </Suspense>
             </CartContextProvider>
            </UserProvider>

          </SupabaseProvider>
        </Providers>

      </body>

    </html>
  );
}