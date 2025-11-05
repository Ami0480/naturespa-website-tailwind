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
    <div className="p-5 bg-[#BFAFA5]">
      <div className="container">
        <Link to="/">
          <img src={logo} />
        </Link>

        <div className="md:flex md:gap-20">
          <div className="flex md:flex-1">
            <div className="flex flex-1">
              <div className="link-footer mt-10 flex flex-col gap-3">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/product">Product</Link>
              </div>
            </div>

            <div className="flex flex-1">
              <div className="flex mt-11 flex-col gap-4">
                <p className="link-footer">08-100-200</p>
                <p className="link-footer">10 Perth St, Perth</p>
                <p className="link-footer">
                  <a href="mailto:naturespa@gmail.com">naturespa@gmail.com</a>
                </p>
                <div className="flex gap-5 md:mt-3 md:gap-6">
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
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-10 flex flex-col gap-3 font-raleway text-[20px] md:flex-1">
            <p className="link-footer">Subscribe</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Please enter your email..."
                className="w-full h-9 bg-[#cdbcb0] opacity-90 text-white px-2 text-[16px] rounded-md focus:outline-none md:w-56"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="absolute w-5 h-5 top-11 right-0 md:right-40 md:top-12"
              >
                <img src={SubmitArrow} alt="right arrow" />
              </button>
            </form>
          </div>
        </div>

        <p className="copywrite mt-10">NATURE@2025</p>
      </div>
    </div>
  );
}
