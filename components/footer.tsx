import Image from 'next/image';
import Link from 'next/link';
import ItemsContainer from './ItemsContainer';


const Footer1 = () => {
  return (

    <div className="bg-beige-100 dark:bg-chocolate-800 justify-center items-center text-chocolate-900 dark:text-bone-100 w-full p-3 mt-auto bottom-0">
      <footer className=''>

        <ItemsContainer />
        <div className='justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-5   text-center p-4  text-gray-400 text-sm pb-8'>
          <span className='text-chocolate-900 dark:text-bone-100'>&copy; {new Date().getFullYear()} Echoes. Todos los derechos reservados.</span>
          <span className='text-chocolate-900 dark:text-bone-100'>Terms - Privacy Policy</span>
        </div>
      </footer>
    </div>
  )
};

export default Footer1;
