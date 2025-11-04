import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "./images/Logo.svg";
import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import X from "./images/x.svg";
import SubmitArrow from "./images/arrow.svg";

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    navigate("/subscribe");
  };

  return (
    <div className="container bg-[#BFAFA5]">
      <Link to="/">
        <img src={logo} />
      </Link>

      <div className="flex">
        <div className="flex flex-1">
          <div className="font-raleway mt-5 flex flex-col gap-3 text-[20px]">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/product">Product</Link>
          </div>
        </div>

        <div className="flex flex-1">
          <div className="font-raleway flex mt-5 flex-col gap-3 text-[20px]">
            <p>08-100-200</p>
            <p>10 Perth St, Perth</p>
            <p>
              <a href="mailto:naturespa@gmail.com">naturespa@gmail.com</a>
            </p>
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
          </div>
        </div>
      </div>

      <div className="relative mt-10 flex flex-col gap-3 font-raleway text-[20px]">
        <p>Subscribe</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Please enter your email..."
            className="w-full h-9 bg-[#cdbcb0] opacity-90 text-white px-2 text-[16px] rounded-md focus:outline-none"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="absolute w-5 h-5 top-12.5 right-0">
            <img src={SubmitArrow} alt="right arrow" />
          </button>
        </form>
      </div>
      <p className="text-[14px] mt-10 font-raleway">NATURE@2025</p>
    </div>
  );
}
