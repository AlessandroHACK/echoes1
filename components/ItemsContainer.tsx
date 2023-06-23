import Item from './Item';
import { PRODUCTOS, RESOURCES, COMPANY, SUPPORT } from './Menus';

const ItemsContainer = () => {
  return (
    <div className='items-center  justify-center grid
    grid-cols-1
    sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-4
        xl:grid-cols-4
        2xl:grid-cols-4 
       
        '>
      <Item  Links={PRODUCTOS} title="PRODUCTOS" />
      <Item Links={RESOURCES} title="OTROS" />
      <Item Links={COMPANY} title="AYUDA" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;