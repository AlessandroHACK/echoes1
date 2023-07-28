'use client'
import useLoadProductCart from "@/hooks/useLoadProductCart";
import { ProductCart } from "@/types";
import { IoTrashOutline } from "react-icons/io5";
import Image from "next/image";

interface CartProps {
    product: ProductCart
}

const ProductCartItem: React.FC<CartProps> = ({ product }) => {
    const imagePath = useLoadProductCart(product)
    return (
        <div
            className=" dark:bg-magenta-700 bg-magenta-100 rounded-md shadow-md p-2 flex flex-row gap-2"
        >
            <div className="w-10 h-10  relative aspect-square">
                <Image className="object-cover"
                    src={imagePath || '/images/logoblanco.png'}
                    alt="Producto"
                    fill
                />
            </div>

            <div className="flex flex-col ">
                <h3 className="text-lg font-semibold">{product.productos.nombre}</h3>
                <div className="flex gap-2">
                    <label htmlFor={`quantity-${product.id_producto}`}>Cantidad:</label>
                    <input
                        type="number"
                        id={`quantity-${product.id_producto}`}
                        value={product.cantidad}
                        // onChange={(e) =>
                        //   // handleQuantityChange(product.id_producto, Number(e.target.value))
                        // }
                        className="w-16 p-1 border border-x-magenta-400 rounded bg-transparent  dark:text-bone-100 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-row">
                    <p className="font-bold">${product.subtotal}</p>
                    <button
                        // onClick={() => handleDeleteProduct(product.id_producto)}
                        className="p-2  hover:text-chocolate-400 dark:text-bone-100 dark:hover:text-bone-200"
                    >
                        <IoTrashOutline size={20} />
                    </button>
                </div>
            </div>

        </div>
    );
}

export default ProductCartItem;