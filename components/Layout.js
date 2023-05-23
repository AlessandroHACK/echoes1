import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>Echoes - {pagina}</title>
        <meta name="desciption" content="Sitio web de venta de Dicos de vinilo"/>
      </Head>
     <Header/> 

      {children}
      <Footer/>


    </div>
  );
};

export default Layout;
