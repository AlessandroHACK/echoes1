import './globals.css'
import Footer from '@/components/Footer';
import UserProvider from '@/providers/UserProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import ToasterProvider from '@/providers/ToasterProvider'
import Header from '@/components/Header';
import Loading from './loading'
import LoadingScreen from '@/components/loading';
import { Suspense } from 'react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        <ToasterProvider/>
          <SupabaseProvider>
            <UserProvider>
              <Suspense fallback={<LoadingScreen />}>
                <Header />
                {children}
                <Footer />
              </Suspense>
            </UserProvider>

          </SupabaseProvider>

      </body>

    </html>
  );
}