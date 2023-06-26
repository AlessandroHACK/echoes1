import '@/styles/junk.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer';
import UserProvider from '@/providers/UserProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import ToasterProvider from '@/providers/ToasterProvider'
import Header from '@/components/Header';
import LoadingScreen from '@/components/loading';
import { Suspense } from 'react';
import Providers from '@/components/Providers';
import Head from 'next/head';
import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
        <ToasterProvider/>
          <SupabaseProvider>
            <UserProvider>
              <Suspense fallback={<LoadingScreen />}>
                <Header/>
                <div className=" bg-gray-100 dark:bg-zinc-900">
                  {children}
                </div>
                <Footer />
              </Suspense>
            </UserProvider>

          </SupabaseProvider>
        </Providers>

      </body>

    </html>
  );
}