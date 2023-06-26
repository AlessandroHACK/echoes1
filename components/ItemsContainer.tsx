import Item from './Item';
import { PRODUCTOS, RESOURCES, COMPANY, SUPPORT } from './Menus';

const ItemsContainer = () => {
  return (
    <div className='items-center  justify-center grid
    grid-cols-1
    sm:grid-cols-1
        md:grid-cols-1
        lg:grid-cols-3
        xl:grid-cols-3
        2xl:grid-cols-3 
       
        '>
      <Item  Links={PRODUCTOS} title="PRODUCTOS" />
      <Item Links={RESOURCES} title="OTROS" />
      <Item Links={COMPANY} title="AYUDA" />
    </div>
  );
};

export default ItemsContainer;