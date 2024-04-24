import { useEffect, useId } from "react";
import { BsFillCartXFill } from "react-icons/bs";
import { useCart } from "../hooks/useCart";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const cartCheckBoxId = useId();
  const { cart, addToCart, removeFromCart, clearCart, delivery } = useCart();

  const navigate = useNavigate();

  const goToTicketsPage = () => {
    navigate("/tickets");
  };
  const subtotal = cart.reduce(
    (acc, ticket) => acc + ticket.price * ticket.quantity,
    0
  )
  const IVA = subtotal / 1.19 - subtotal

  return (
    <div className="grid lg:grid-cols-3 md:p-12">
      <main className="lg:col-span-2 p-2 border-2 rounded-sm m-2 md:p-8">
        <h1 className="text-3xl md:text-4xl p-4 my-3 rounded-lg bg-[#303030]">
          Carrito
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 py-6">
          <div className="hidden sm:grid sm:col-span-3">
            {cart.length > 0 && (
              <div className="grid sm:grid-cols-6">
                <p></p>
                <p className="col-span-6 sm:col-span-2 sm:ml-4 font-semibold">
                  Producto
                </p>
                <p className="col-span-6 sm:col-span-1 text-center font-semibold">
                  Precio
                </p>
                <p className="col-span-6 sm:col-span-1 text-center font-semibold">
                  Cantidad
                </p>
                <p className="col-span-6 sm:col-span-1 text-center font-semibold">
                  Subtotal
                </p>
              </div>
            )}
          </div>
          <ul className="grid gap-2 col-span-2 sm:col-span-3">
            {cart.length > 0 ? (
              cart.map((ticket) => {
                return (
                  <CartItem
                    key={ticket.id}
                    addToCart={() => addToCart(ticket)}
                    removeFromCart={() => removeFromCart(ticket)}
                    {...ticket}
                  />
                );
              })
            ) : (
              <p className=" text-4xl text-center mx-auto py-16">
                No hay tickets en el carrito
              </p>
            )}
          </ul>
          <div className="flex justify-center sm:justify-end items-center gap-4 my-3 col-span-3">
            <button onClick={goToTicketsPage}>Volver a Tickets</button>
            <button onClick={() => clearCart()}>
              <label
                htmlFor={cartCheckBoxId}
                className="flex items-center gap-2"
              >
                <BsFillCartXFill /> Vaciar Carrito
              </label>
            </button>
          </div>
        </div>
      </main>
      <aside className="p-2 border-2 rounded-sm m-2 md:p-8">
        <h1 className="text-2xl text-center p-4 my-3 rounded-lg shadow-lg bg-[#303030] font-semibold">
          Total del Carrito
        </h1>
        <div className="grid p-4 sm:p-0">
          <ul className="grid gap-4 sm:py-6">
            <li className="flex justify-between">
              <p className="text-1xl font-semibold">Subtotal:</p>
              <p className="text-1xl">
                $
                {subtotal}
              </p>
            </li>
            <li className="flex justify-between">
              <p className="text-1xl font-semibold">Envío:</p>
              <div className="flex gap-2">
                <p className="text-1xl">TuBoleta Pass</p>
                <p className="text-1xl font-semibold">$ {delivery}</p>
              </div>
            </li>
            <li className="flex justify-between">
              <p className="text-1xl font-semibold">Total:</p>
              <p className="text-1xl">
                $
                {subtotal + delivery}
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
