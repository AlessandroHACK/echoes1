"use client"
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UserProvider from '@/providers/UserProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';

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
            {children}
            <Footer />
          </UserProvider>

        </SupabaseProvider>

      </body>

    </html>
  );
}