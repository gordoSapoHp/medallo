import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { WhatsAppNumber } from "../db/info.js";

export default function TicketItem({ ticket, isProductInCart = false }) {
  const { addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const handleClick = () => {
    if (isProductInCart) {
      removeFromCart(ticket);
    } else {
      addToCart(ticket);
      // Redirect to the cart page
      navigate("/cart-page");
    }
  };

  const handleMessage = () => {
    const WhatsApp = WhatsAppNumber
    const message = `Hola! Me gustaría saber información acerca de la compra de ${ticket.title} con el valor de $${ticket.price}.`;
    const url = `https://wa.me/${WhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
  return (
    <span onClick={handleMessage} className="flex flex-col hover:shadow-lg cursor-pointer shadow-slate-300 p-2 h-[200px] w-full sm:min-h-[500px] ">
      <div className="w-full my-animation bg-zinc-800 h-full rounded-lg p-3">
        <div className="flex flex-col py-2 gap-1 justify-center items-center h-full">
          <div className="mb-4">
          <h1 className="text-[16px] sm:text-[40px] font-semibold text-[#0C71C3] text-center">
            {ticket.title}
          </h1>
          </div>
          <div className="flex items-center h-auto pb-2 flex-wrap">
            <p className="text-[13px] sm:text-[25px] font-bold">$</p>
            <p className="text-[13px] sm:text-[25px] font-semibold px-2 pl-1">
              {ticket.price}
            </p>
            <p className="text-[13px] sm:text-[25px] font-semibold">
              IVA Incluido
            </p>
          </div>
        </div>
      </div>
    </span>
  );
}
