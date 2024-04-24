import { IoLogoWhatsapp } from "react-icons/io";
import { WhatsAppNumber } from "../db/info";

export default function WhatsAppItem() {
  const handleClick = () => {
    const WhatsApp = WhatsAppNumber;
    const message = `Hola! Me gustaría obtener información acerca de CORE WORLD MEDELLIN.`;
    const url = `https://wa.me/${WhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <span
      title="¡Contáctanos en WhatsApp!"
      className="fixed bottom-4 right-4 text-5xl bg-[#25D366] p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
    >
      <IoLogoWhatsapp />
    </span>
  );
}
