import React from "react";
import { Link } from "react-router-dom";

import logo from "./images/Logo.svg";
import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import X from "./images/x.svg";
import SubmitArrow from "./images/arrow.svg";

export default function Footer() {
  return (
    <div className="container bg-[#BFAFA5]">
      <Link to="/">
        <img src={logo} />
      </Link>

      <div className="flex">
        <div className="flex flex-1">
          <ul className="font-raleway mt-5 flex flex-col gap-3 text-[20px]">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Product</li>
          </ul>
        </div>

        <div className="flex flex-1">
          <ul className="font-raleway flex mt-5 flex-col gap-3 text-[20px]">
            <li>08-100-200</li>
            <li>10 Perth St, Perth</li>
            <li>
              <a href="mailto:naturespa@gmail.com">naturespa@gmail.com</a>
            </li>
            <li className="flex gap-5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Facebook} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Instagram} />
              </a>
              <a href="https://www.x.com" target="_blank" rel="noreferrer">
                <img src={X} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mt-10 flex flex-col gap-3 font-raleway text-[20px]">
        <p>Subscribe</p>
        <form>
          <input
            type="email"
            placeholder="Please enter your email..."
            className="w-full h-9 bg-white opacity-40 text-[#9c8f86] px-2 text-[16px]"
          />
          <button
            type="submit"
            className="absolute w-5 h-5 top-12.5 right-0 text-[#9c8f86]"
          >
            <img src={SubmitArrow} />
          </button>
        </form>
      </div>
      <p className="text-[14px] mt-10 font-raleway">NATURE@2025</p>
    </div>
  );
}
