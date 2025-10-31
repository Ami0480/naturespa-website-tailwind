import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "./images/Logo.svg";
import hamburger from "./images/hamburger-icon.svg";
import cross from "./images/cross.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="header">
      <div className="container flex place-content-between">
        <Link to="/">
          <img src={logo} />
        </Link>
        <img src={hamburger} onClick={() => setMenuOpen(true)} />
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0  z-20"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <section
        className={`navbar fixed top-0 flex flex-col items-center justify-center gap-y-9

          bg-[#917a6b]
        w-full
        h-screen
        transform
        transition-transform
        duration-500
        ease-in-out
        z-30 ${menuOpen ? "translate-x-0" : "translate-x-full"} 
        `}
      >
        <img
          src={cross}
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 w-10 h-10"
        />
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="hover:underline decoration-1 duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
          className="hover:underline decoration-1 duration-200"
        >
          About
        </Link>
        <Link
          to="/menu"
          onClick={() => setMenuOpen(false)}
          className="hover:underline decoration-1 duration-200"
        >
          Menu
        </Link>
        <Link
          to="/product"
          onClick={() => setMenuOpen(false)}
          className="hover:underline decoration-1 duration-200"
        >
          Product
        </Link>

        <Link
          to="/booking"
          className="pr-5 pl-5 pt-3 pb-3 mt-5 text-[#af9b8e] bg-white rounded-full font-bold font-raleway hover:opacity-80 ease-in-out"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}
