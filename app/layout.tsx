"use client"
import './globals.css'
import Footer from '../components/Footer';
import Header from '../components/header'
import UserProvider from '../providers/UserProvider';
import SupabaseProvider from '../providers/SupabaseProvider';

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