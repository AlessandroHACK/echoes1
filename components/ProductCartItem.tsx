import { FaPlus, FaMinus } from 'react-icons/fa';
import { useContext } from 'react';
import Image from 'next/image';
import { CartContext } from '@/state/CartContext';
import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/useUser';
import { ProductCart } from '@/types';
import useLoadProductCart from '@/hooks/useLoadProductCart';
import { IoTrashOutline } from 'react-icons/io5';

interface CartProps {
  product: ProductCart;
}

const ProductCartItem: React.FC<CartProps> = ({ product }) => {
  const router = useRouter();
  const user = useUser();
  const { addToCartProduct, removeFromCart, deleteFromCart } = useContext(CartContext);

  const handleDeleteProduct = async (product) => {
    await deleteFromCart(product, user.userDetails);
    console.log('Producto eliminado del carrito:', product);
    router.refresh()
  };

  const handleAddProduct = async (product) => {
    await addToCartProduct(product, user.userDetails);
    console.log('Producto agregado al carrito:', product);
    router.refresh()
  };

  const handleRemoveProduct = async (product) => {
    await removeFromCart(product, user.userDetails);
    console.log('Producto reducido del carrito:', product);
    router.refresh()
  };
  

  const imagePath = useLoadProductCart(product);

  return (
    <div className="h-[120px] dark:bg-chocolate-700 bg-bone-100/50 rounded-md shadow-md flex flex-row gap-3">
      <div className="w-auto relative aspect-square rounded-md">
        <Image
          className="object-cover rounded-l-md"
          src={imagePath || '/images/logoblanco.png'}
          alt="Producto"
          fill
        />
      </div>

      <div className="flex flex-col p-2">
        <h3 className="text-lg font-semibold">{product.productos.nombre}</h3>
        <div className="flex gap-2 items-center">
          <label htmlFor={`quantity-${product.id_producto}`}>Cantidad:</label>
          {/* Utilizamos los íconos para aumentar y reduciz|r la cantidad */}
          <button
            onClick={() => handleAddProduct(product)}
            className="p-2 hover:text-chocolate-400 dark:text-bone-100 dark:hover:text-bone-200"
          >
            <FaPlus size={20}/>
          </button>
          <span>{product.cantidad}</span>
          <button
            onClick={() => handleRemoveProduct(product)}
            className="p-2 hover:text-chocolate-400 dark:text-bone-100 dark:hover:text-bone-200"
          >
            <FaMinus size={20} />
          </button>
        </div>
        <div className="flex flex-row gap-x-2">
          <p className="font-bold">${product.subtotal}</p>
          <button
            onClick={() => handleDeleteProduct(product)}
            className=" hover:text-chocolate-400 dark:text-bone-100 dark:hover:text-bone-200"
          >
            <IoTrashOutline size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCartItem;