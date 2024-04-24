import { BsFillCartPlusFill } from "react-icons/bs";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

export default function CartItem({
  addToCart,
  removeFromCart,
  image,
  title,
  price,
  quantity,
  index,
}) {
  return (
    <main className="grid rounded-lg">
      <div key={index} className="grid sm:grid-cols-6 gap-4 shadow-lg p-4">
        <div className="hidden sm:flex justify-center items-center">
          <img src={image} alt={title} className="w-10 rounded-lg mx-auto" />
        </div>
        {/* name */}
        <div className="flex sm:grid sm:col-span-2">
          <strong className="sm:hidden">Producto: </strong>
          <p className="text-end sm:text-start font-semibold text-violet-500">{title}</p>
        </div>
        {/* price */}
        <div className="flex justify-between sm:justify-center items-center">
          <strong className="sm:hidden">Precio: </strong>
          <p className="font-semibold">$ {price}</p>
        </div>
        {/* quantity */}
        <div className="flex justify-between sm:flex sm:justify-center sm:items-center">
        <strong className="sm:hidden">Cantidad: </strong>
          <div className="flex items-center gap-4">
            <button
              onClick={addToCart}
              className="bg-[#303030] text-white p-2 rounded-lg"
            >
              <BsFillCartPlusFill />
            </button>
            <p>{quantity}</p>
          </div>
        </div>
        {/* subtotal */}
        <div className="flex justify-between sm:justify-center sm:items-center">
        <strong className="sm:hidden">Subtotal: </strong>
          <p className="font-semibold">${price * quantity}</p>
        </div>
      </div>
    </main>
  );
}
