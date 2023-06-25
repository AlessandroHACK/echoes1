import Image from 'next/image';
import Link from 'next/link';
import ItemsContainer from './ItemsContainer';


const Footer1 = () => {
  return (

    <div className="bg-beige-400 dark:bg-chocolate-800 justify-center items-center text-white w-full p-3 mt-auto bottom-0">
      <footer className=''>

        <ItemsContainer />
        <div className='justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-5   text-center p-4 pb-0 text-gray-400 text-sm pb-8'>
          <span>&copy; {new Date().getFullYear()} Echoes. Todos los derechos reservados.</span>
          <span>Terms - Privacy Policy</span>
          {/* <SocialIcons Icons={Icons} /> */}
        </div>
      </footer>
    </div>
  )
};

export default Footer1;
