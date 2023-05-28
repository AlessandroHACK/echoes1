import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-10 mt-20 text-white">
     <div className="contenedor text-center items-center">
     <div className="flex items-center justify-start">
  <Link href="/">
    <Image width={200} height={100} alt="logo" src="/img/Echoes-logo-w.png" />
  </Link>
</div>

        
     <nav className="flex justify-center items-center space-x-4">
  <Link href="/" className="text-white  hover:text-gray-400 no-underline">Inicio</Link>
  <Link href="/" className="text-white  hover:text-gray-400 no-underline">Ayuda</Link>
  <Link href="/" className="text-white  hover:text-gray-400 no-underline">Términos y condiciones</Link>
</nav>


       
        <div className="mt-12 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Echoes. Todos los derechos reservados.</p>
          <p className="text-sm">UPA, AGS, MEX</p>
        </div>
     </div>
    </footer>
  
  );
};

export default Footer;
