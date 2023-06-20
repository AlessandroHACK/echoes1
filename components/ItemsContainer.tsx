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
      <Item  Links={PRODUCTOS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;