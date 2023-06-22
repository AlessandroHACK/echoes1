import './globals.css'
import Footer from '@/components/Footer';
import UserProvider from '@/providers/UserProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import ToasterProvider from '@/providers/ToasterProvider'
import Header from '@/components/Header';
import Loading from './loading'
import LoadingScreen from '@/components/loading';
import { Suspense } from 'react';
import Providers from '@/components/Providers';


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
                <div className="bg-beige-100 dark:bg-zinc-900">
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