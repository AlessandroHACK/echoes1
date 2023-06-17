import './globals.css'
import Footer from '@/components/Footer';
import UserProvider from '@/providers/UserProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
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
        <SupabaseProvider>
          <UserProvider>
            <Header />
            <Suspense fallback={<LoadingScreen/>}>
              {children}
            </Suspense>
            <Footer />
          </UserProvider>

        </SupabaseProvider>

      </body>

    </html>
  );
}