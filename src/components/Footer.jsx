import Logo from "../assets/images/LOGO_WHITE_CORE-WORLD-BLANCO-TOMORROWLAD-MEDELLIN.png";
import { useNavigate } from "react-router-dom";
import {
  FaSpotify,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaSoundcloud,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import {
  supportEmail,
  FacebookURL,
  XURL,
  InstagramURL,
  YoutubeURl,
  TikTokURL,
  SoundCloudURl,
  SpotifyURL,
} from "../db/info";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="grid grid-cols-2 md:py-12 md:mx-20 lg:mx-36 bg-black-300 border-b-4 border-white">
      <div className="col-span-2 md:col-span-1 flex flex-col justify-start items-start">
        <span className="text-2xl cursor-pointer mx-auto md:mx-0 mt-10 md:mt-0">
          <img
            id="logo"
            src={Logo}
            alt="Logo"
            className="w-[220px]"
            onClick={() => navigate("/")}
          />
        </span>
        <p className="text-[13px] py-2 mx-auto md:mx-0 mb-10 md:mb-0">
          Copyright © 2024 CORE. All Rights Reserved.
        </p>
        <p className="hidden md:block text-[13px] my-10">{supportEmail}</p>
      </div>
      <div className="col-span-2 md:col-span-1 flex w-full my-4">
        <div className="flex justify-center items-center text-slate-300 hover:text-slate-50 w-full">
          <ul className="flex justify-center md:justify-around gap-4 w-full">
            <li className="hover:scale-110 transition-all ease-in-out duration-200">
              <a
                href={FacebookURL}
                className="text-slate-300 hover:text-slate-50 text-2xl"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="hover:scale-110 transition-all ease-in-out duration-200">
              <a
                href={XURL}
                className="text-slate-300 hover:text-slate-50 text-2xl"
              >
                <RiTwitterXFill />
              </a>
            </li>
            <li className="hover:scale-110 transition-all ease-in-out duration-200">
              <a
                href={SpotifyURL}
                className="text-slate-300 hover:text-slate-50 text-2xl"
              >
                <FaSpotify />
              </a>
            </li>
            <li className="hover:scale-110 transition-all ease-in-out duration-200">
              <a
                href={InstagramURL}
                className="text-slate-300 hover:text-slate-50 text-2xl"
              >
                <BsInstagram />
              </a>
            </li>
            <li className="hover:scale-110 transition-all ease-in-out duration-200">
              <a
                href={SoundCloudURl}
                className="text-slate-300 hover:text-slate-50 text-2xl"
              >
                <FaSoundcloud />
              </a>
            </li>
            <li className="hover:scale-110 transition-all ease-in-out duration-200">
              <a
                href={TikTokURL}
                className="text-slate-300 hover:text-slate-50 text-2xl"
              >
                <FaTiktok />
              </a>
            </li>
            <li className="hover:scale-110 transition-all ease-in-out duration-200">
              <a
                href={YoutubeURl}
                className="text-slate-300 hover:text-slate-50 text-2xl"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
