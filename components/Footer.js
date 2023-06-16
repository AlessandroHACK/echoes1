import ItemsContainer from './ItemsContainer';
import SocialIcons from './SocialIcons';
import {Icons} from './Menus';

const Footer1 = () => {
  return <footer className='bg-black mt-20 text-white'>

    <ItemsContainer />
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
      <span>&copy; {new Date().getFullYear()} Echoes. Todos los derechos reservados.</span>
      <span>Terms - Privacy Policy</span>
      <SocialIcons Icons = {Icons}/>
    </div>
  </footer>
};

export default Footer1;

