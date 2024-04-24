import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  WhatsAppNumber,
  supportEmail,
  templateStringEmail,
  FacebookURL,
  XURL,
  InstagramURL,
  YoutubeURl,
} from "../db/info";

export default function SocialMedia() {
  const WhatsAppURL = (phoneNumber) => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.location.href = whatsappURL;
  };

  return (
    <div className="flex col-span-2 lg:col-span-1 justify-evenly items-center text-slate-300 hover:text-slate-50">
      <a
        href={templateStringEmail}
        className="flex justify-center items-center gap-1"
      >
        <MdEmail />
        <span>{supportEmail}</span>
      </a>

      <ul className="hidden md:flex justify-center md:justify-around gap-4">
        <li>
          <a href={FacebookURL} className="text-slate-300 hover:text-slate-50">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href={XURL} className="text-slate-300 hover:text-slate-50">
            <RiTwitterXFill />
          </a>
        </li>
        <li>
          <a href={InstagramURL} className="text-slate-300 hover:text-slate-50">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href={YoutubeURl} className="text-slate-300 hover:text-slate-50">
            <FaYoutube />
          </a>
        </li>
        <li>
          <a
            onClick={() => WhatsAppURL(WhatsAppNumber)}
            className="text-slate-300 hover:text-slate-50"
          >
            <IoLogoWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
}
