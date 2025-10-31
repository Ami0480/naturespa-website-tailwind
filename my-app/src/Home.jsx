import { Link } from "react-router-dom";

import BackgroundVideo from "./images/background-video.mp4";
import EssentialOil from "./images/essential-oil.png";
import BodyPhotoMobile from "./images/body-treatment-photo.png";
import FacialPhotoMobile from "./images/facial-treatment-photo.png";
import SunriseMobile from "./images/sunrise.png";

export default function Home() {
  return (
    <div>
      <div className="hero relative w-full h-screen">
        <video
          src={BackgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-screen object-cover "
        />
        <div className="absolute w-full h-screen bg-linear-to-b from-black via-transparent to-transparent"></div>

        <div className="absolute w-full h-screen flex flex-col items-center justify-center">
          <h1 className="font-cormorant text-white text-6xl italic">
            Nature Spa
          </h1>
          <Link
            to="/booking"
            className="pr-5 pl-5 pt-3 pb-3 mt-5 text-white rounded-full font-bold font-raleway"
            style={{ backgroundColor: "#af9b8e" }}
          >
            Book Now
          </Link>
        </div>
      </div>

      <section className="relative w-full">
        <div className="relative">
          <div className="absolute w-full h-screen bg-linear-to-b from-black via-[rgba(0,0,0,0.1)] to-transparent z-10"></div>
          <div className="container">
            <img
              src={EssentialOil}
              alt="Essential Oil"
              className="w-60 object-contain mt-40 ml-25 z-0 absolute"
            ></img>
            <div className="absolute w-60 flex flex-col justify-center mt-20">
              <h2 className="flex flex-col text-[40px]/tight italic z-20 font-cormorant tracking-wide">
                <span>Calm</span>
                <span>Rejuvenate</span>
                <span>Bliss</span>
              </h2>

              <p className="text-[18px]/6 mt-5 z-20 font-raleway">
                Let your mind unwind, your body regain its energy, and your
                spirit feel light and refreshed, as every moment nurtures your
                inner wellness, restores your vitality, and enhances your
                natural beauty from within.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-150 flex flex-col justify-center items-center">
        <h2 className="text-[40px]/tight italic font-cormorant text-[#917A6B] mb-8">
          Body Treatment
        </h2>
        <p className="mb-8 text-[18px]/6 font-raleway">
          Treatments for the body help release tension, improve blood flow, and
          restore energy. They promote healthier skin, support flexibility, and
          ease stress. By caring for your body this way, you boost overall
          wellness and feel more vibrant, balanced, and refreshed.
        </p>
        <img src={BodyPhotoMobile} alt="Body Treatment" className="mb-8"></img>
        <Link
          to="/booking"
          className="pr-5 pl-5 pt-3 pb-3 mt-5 text-white rounded-full font-bold font-raleway"
          style={{ backgroundColor: "#af9b8e" }}
        >
          View Treatment
        </Link>
      </section>
      <section className="container flex flex-col justify-center items-center">
        <h2 className="text-[40px]/tight italic font-cormorant text-[#917A6B] mb-8 mt-8">
          Facial Treatment
        </h2>
        <p className="mb-8 text-[18px]/6 font-raleway">
          Facial treatments help cleanse and nourish the skin, improving its
          texture and natural glow. They support hydration, reduce signs of
          stress, and refresh tired skin. By caring for your face this way, you
          reveal a healthy, radiant complexion and feel renewed from the inside
          out.
        </p>
        <img
          src={FacialPhotoMobile}
          alt="Body Treatment"
          className="mb-8"
        ></img>
        <Link
          to="/booking"
          className="pr-5 pl-5 pt-3 pb-3 mt-5 mb-10 text-white rounded-full font-bold font-raleway"
          style={{ backgroundColor: "#af9b8e" }}
        >
          View Treatment
        </Link>
      </section>

      <div className="hero relative w-full h-screen">
        <div className="absolute w-full h-screen bg-linear-to-b from-black via-[rgba(0,0,0,0.2)] to-transparent z-10"></div>
        <img
          src={SunriseMobile}
          alt="Sunrise"
          className="absolute inset-0 w-full h-full object-cover z-0"
        ></img>

        <div className="absolute w-full h-screen flex flex-col items-center justify-center z-20">
          <h2 className="text-[40px]/tight italic font-cormorant">
            Enjoy your journey
          </h2>
          <Link
            to="/booking"
            className="pr-5 pl-5 pt-3 pb-3 mt-5 text-white rounded-full font-bold font-raleway"
            style={{ backgroundColor: "#af9b8e" }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
