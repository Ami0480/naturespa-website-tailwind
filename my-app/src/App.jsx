import { Link } from "react-router-dom";

import "./App.css";

import BackgroundVideo from "./images/background-video.mp4";

function App() {
  return (
    <div className="relative w-full">
      <video
        src={BackgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-screen object-cover "
      />
      <div className="absolute w-full h-screen bg-gradient-to-b from-black via-transparent to-transparent"></div>
      <div className="absolute w-full h-screen flex flex-col items-center justify-center">
        <h1 className=" text-white text-6xl font-[--font-playfair] italic font-bold">
          Nature Spa
        </h1>
        <Link
          to="/booking"
          className="pr-5 pl-5 pt-3 pb-3 mt-5 text-white rounded-full"
          style={{ backgroundColor: "#af9b8e" }}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default App;
