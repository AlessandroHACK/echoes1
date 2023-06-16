"use client"
import './globals.css'
import Footer from '../components/Footer';
import Header2 from '../components/header2'
import UserProvider from '../providers/UserProvider';
import SupabaseProvider from '../providers/SupabaseProvider';
import Script from 'next/script';


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
            <Header2 />
            {children}
            <Footer />
          </UserProvider>

        </SupabaseProvider>

<Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
      </body>

    </html>
  );
}