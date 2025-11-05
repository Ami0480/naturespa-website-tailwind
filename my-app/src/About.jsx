import React from "react";
import { Link } from "react-router-dom";

import AboutImg from "./images/about-photo.jpg";
import RelaxRoom from "./images/relax-room.jpg";

export default function About() {
  return (
    <div>
      <div className="hero relative w-full h-screen">
        <div className="absolute inset-0 w-full h-screen bg-linear-to-b from-black via-black/20 to-transparent z-10"></div>
        <img
          src={AboutImg}
          alt="About Photo"
          className="object-cover inset-0 h-screen w-full z-0"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
          <h1>About</h1>
          <Link to="/booking" className="link bg-[#BFAFA5]">
            Book Now
          </Link>
        </div>
      </div>

      <section className="container flex flex-col justify-center items-center md:flex-row-reverse md:gap-12">
        <div className="md:flex-1">
          <h2 className="text-[#917A6B] mt-8 mb-8">About Us</h2>
          <p className="mb-8">
            At our spa, we believe every guest deserves to feel truly cared for
            and appreciated. From the moment you arrive, our team is dedicated
            to creating an atmosphere where you feel valued, relaxed, and
            completely at home. With personalized treatments, thoughtful
            attention to detail, and a welcoming environment, we ensure that
            each visit is not only restorative for the body and mind, but also a
            special experience designed just for you.
          </p>
        </div>
        <div className="md:flex-1">
          <img src={RelaxRoom} alt="Relax" className="rounded-3xl mb-8"></img>
        </div>
      </section>
    </div>
  );
}
