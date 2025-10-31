import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AboutImg from "./images/about-photo.png";

export default function About() {
  return (
    <div className="hero relative">
      <div className="absolute w-full h-screen bg-linear-to-b from-black via-[rgba(0,0,0,0.1)] to-transparent z-10"></div>
      <img
        src={AboutImg}
        alt="About Photo"
        className="object-cover h-screen w-full z-0"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
        <h1 className="font-cormorant text-white text-6xl italic">About</h1>
        <Link
          to="/booking"
          className="pr-5 pl-5 pt-3 pb-3 mt-5 bg-[#BFAFA5] font-raleway rounded-full font-bold"
        >
          Book Now
        </Link>
      </div>

      <section>
        <h2 className="text-[40px]/tight italic z-20 font-cormorant tracking-wide">
          About Us
        </h2>
        <p>
          At our spa, we believe every guest deserves to feel truly cared for
          and appreciated. From the moment you arrive, our team is dedicated to
          creating an atmosphere where you feel valued, relaxed, and completely
          at home. With personalized treatments, thoughtful attention to detail,
          and a welcoming environment, we ensure that each visit is not only
          restorative for the body and mind, but also a special experience
          designed just for you.
        </p>
      </section>
    </div>
  );
}
