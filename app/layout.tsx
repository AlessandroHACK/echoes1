import './globals.css'
import React from "react";
import Head from "next/head";
import Header from "./header";
import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./footer";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Head>
        <title>Echoes</title>
        <meta name="desciption" content="Sitio web de venta de Dicos de vinilo" />
      </Head>
      
      <body>
      <Header />
        {children}
      </body>

      <Footer />


    </div>
  );
}