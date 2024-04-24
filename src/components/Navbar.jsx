import React from 'react'

export default function Navbar() {
  return (
    <div><div className="flex z-40 items-center md:p-2 pt-4">
    <img
      id="logo"
      src={Logo}
      alt="Core World"
      className="w-[180px] md:px-8 transition:all ease-in duration-500"
    />
  </div>
  {/* Dropdown */}
  <div className="flex justify-end items-center md:pt-2 md:gap-6 md:pr-12">
    <span
      onClick={() => toggleMenu()}
      className="text-5xl cursor-pointer md:hidden transition-all ease-in duration-800 text-slate-300 hover:text-slate-50 hover:shadow-lg"
    >
      {menu ? <FaTimes /> : <FaBars />}
    </span>
    <ul
      className={`md:flex md:items-center absolute gap-4 md:static w-full left-0 md:w-auto md:py-0 py-4 ${
        menu ? "opacity-100 top-[110px]" : "opacity-0 top-[-400px]"
      } transition-all ease-in duration-500`}
    >
      <li className="md:m-0 mx-10 p-2 border-black border-1 text-center bg-black">
        <a href="/">
          <span className="nav-title text-slate-300 hover:text-slate-50 animate-bounce">
            LINE UP
          </span>
        </a>
      </li>
      <li className="md:m-0 mx-10 p-2 border-black border-1 text-center bg-black">
        <a href="/" className="md:hidden">
          <span className="nav-title text-slate-300 hover:text-slate-50 animate-bounce">
            WEBSITE TERMS OF USE
          </span>
        </a>
      </li>
      <li className="md:m-0 mx-10 p-2 border-black border-1 text-center bg-black">
        <a href="/" className="md:hidden">
          <span className="nav-title text-slate-300 hover:text-slate-50 animate-bounce">
            PRIVACY POLICY
          </span>
        </a>
      </li>
      <li className="md:m-0 mx-10 p-2 border-black border-1 text-center bg-black">
        <a href="/" className="md:hidden">
          <span className="nav-title text-slate-300 hover:text-slate-50 animate-bounce">
            FAQ
          </span>
        </a>
      </li>
      <li className="md:m-0 mx-10 p-2 border-black border-1 text-center bg-black">
        <span
          className="nav-title text-slate-300 hover:text-slate-50 animate-bounce"
          onClick={goToBuyTickets}
        >
          BUY TICKETS
        </span>
      </li>
    </ul>
  </div></div>
  )
}
