import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/LOGO_WHITE_CORE-WORLD-BLANCO-TOMORROWLAD-MEDELLIN.png";
import "../assets/css/Header.css";
import { LiaTimesSolid } from "react-icons/lia";
import { FiMenu } from "react-icons/fi";
import Adds from "./Adds";
import SocialMedia from "./SocialMedia";
import { useState, useRef, useEffect} from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const listRef = useRef(null);
  const WebsiteTermsOfUse = 'https://www.tomorrowland.com/en/website-terms-of-use'
  const PrivacyPolicy = 'https://www.tomorrowland.com/en/festival/tickets/your-privacy'
  const FAQ = 'https://www.tomorrowland.com/en/faq-contact'

  const navigate = useNavigate();
  const goToBuyTickets = () => {
    navigate("/tickets");
  };
  const goToLineUp = () => {
    navigate("/lineup");
  }

  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("logo");

    if (window.scrollY > 0) {
      navbar.classList.add("navbar-scroll");
      logo.style.width = "150px";
    } else {
      navbar.classList.remove("navbar-scroll");
      if (this.window.innerWidth > 768) {
        logo.style.width = "220px";
      }
      logo.style.width = "200px";
    }
  });
  function toggleMenu() {
    setMenu(!menu);
  }
  useEffect(() => {
    if (listRef.current) {
      if (menu) {
        listRef.current.classList.add("top-[80px]");
        listRef.current.classList.add("opacity-100");
      } else {
        listRef.current.classList.remove("top-[80px]");
        listRef.current.classList.remove("opacity-100");
      }
    }
  }, [menu])
  

  return (
    <header
      id="navbar"
      className="fixed z-50 top-0 left-0 p-4 py-2 pb-4 bg-black w-full"
    >
      <div>
        <div className="grid grid-cols-2 z-40 gap-2">
          {/* Email and Social Media */}
          <SocialMedia />
          {/* TyC FAQ */}
          <Adds />
          {/* Logo */}
          <nav className="col-span-2 shadow md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">
              <span className="text-2xl cursor-pointer">
                <img
                  id="logo"
                  src={Logo}
                  alt="Logo"
                  className="w-[220px] md:pl-7"
                  onClick={() => navigate("/")}
                />
              </span>
              <span
                onClick={() => toggleMenu()}
                className="text-5xl cursor-pointer md:hidden hover:scale-110 transition-all ease-in duration-800 text-slate-300 hover:text-slate-50 hover:shadow-lg"
              >
                {menu ? <LiaTimesSolid /> : <FiMenu />}
              </span>
            </div>
            <ul
              ref={listRef}
              className="md:flex md:items-center -z-20 md:z-auto md:static absolute bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
            >
              <li className="mx-4 my-6 md:my-0">
                <Link
                  to='/lineup'
                  className="text-xl text-slate-300 hover:text-slate-50"
                >
                  LINE UP
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0 md:hidden">
                <a
                  href={WebsiteTermsOfUse}
                  className="text-xl text-slate-300 hover:text-slate-50"
                >
                  WEBSITE TERMS OF USE
                </a>
              </li>
              <li className="mx-4 my-6 md:my-0 md:hidden">
                <a
                  href={PrivacyPolicy}
                  className="text-xl text-slate-300 hover:text-slate-50"
                >
                  PRIVACY POLICY
                </a>
              </li>
              <li className="mx-4 my-6 md:my-0 md:hidden">
                <a
                  href={FAQ}
                  className="text-xl text-slate-300 hover:text-slate-50"
                >
                  FAQ
                </a>
              </li>
              <button>
                <span
                  className="text-xl text-slate-300 hover:text-slate-50"
                  onClick={goToBuyTickets}
                >
                  BUY TICKETS
                </span>
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
