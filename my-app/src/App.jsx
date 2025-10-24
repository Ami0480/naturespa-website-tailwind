import { Link } from "react-router-dom";
import Header from "./Header";

import "./App.css";

import BackgroundVideo from "./images/background-video.mp4";
import EssentialOil from "./images/essential-oil.png";

function App() {
  return (
    <div className="App">
      <div className="hero relative w-full h-screen">
        <video
          src={BackgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-screen object-cover "
        />
        <div className="absolute w-full h-screen bg-gradient-to-b from-black via-transparent to-transparent"></div>
        <div className="absolute w-full z-40">
          <Header />
        </div>

        <div className="absolute w-full h-screen flex flex-col items-center justify-center">
          <h1 className="font-cormorant text-white text-6xl italic font-bold ">
            Nature Spa
          </h1>
          <Link
            to="/booking"
            className="pr-5 pl-5 pt-3 pb-3 mt-5 text-white rounded-full font-bold font-nunito"
            style={{ backgroundColor: "#af9b8e" }}
          >
            Book Now
          </Link>
        </div>
      </div>

      <section className="relative w-full">
        <div className="calm-rejuvenate-bliss-wrapper relative">
          <img
            src={EssentialOil}
            className="w-60 object-contain mt-40 ml-30 z-0 absolute"
          ></img>
          <div className="absolute w-full h-screen bg-gradient-to-b from-black via-[rgba(0,0,0,0.1)] to-transparent z-10"></div>
          <div className="absolute w-60 flex flex-col justify-center mt-24 ml-5">
            <h2 className="flex flex-col text-5xl/tight italic z-20 font-cormorant font-bold tracking-wide">
              <span>Calm</span>
              <span>Rejuvenate</span>
              <span>Bliss</span>
            </h2>

            <p className="not-italic  text-[18px]/6 mt-5 z-20 font-nunito">
              Let your mind unwind, your body regain its energy, and your spirit
              feel light and refreshed, as every moment nurtures your inner
              wellness, restores your vitality, and enhances your natural beauty
              from within.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
