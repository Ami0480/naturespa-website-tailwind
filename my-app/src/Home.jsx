import { Link } from "react-router-dom";

import BackgroundVideo from "./images/background-video.mp4";
import EssentialOilMobile from "./images/essential-oil.jpg";
import EssentialOilDesktop from "./images/essential-oil-desktop.jpg";
import BodyPhotoMobile from "./images/body-treatment-photo.jpg";
import BodyPhotoOnlyDesktop from "./images/body-photo-only-desktop.jpg";
import FacialPhotoMobile from "./images/facial-treatment-photo.jpg";
import FacialPhotoOnlyDesktop from "./images/facial-photo-only-desktop.jpg";
import SunriseMobile from "./images/sunrise.jpg";

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
          <h1>Nature Spa</h1>
          <Link
            to="/booking"
            className="link pr-5 pl-5 pt-3 pb-3 mt-5 rounded-full"
            style={{ backgroundColor: "#af9b8e" }}
          >
            Book Now
          </Link>
        </div>
      </div>

      <div>
        <section className="relative w-full">
          <div className="relative">
            <div className="absolute w-full h-screen bg-linear-to-b from-black via-black/10 to-transparent z-10 md:via-black/50"></div>
            <div className="container relative">
              <img
                src={EssentialOilMobile}
                alt="Essential Oil"
                className="w-60 object-cover right-5 top-40 z-0 absolute md:hidden"
              ></img>

              <div className="relative">
                <img
                  src={EssentialOilDesktop}
                  alt="Essential Oil"
                  className="hidden md:block object-cover z-0 absolute inset-0 m-auto mt-28 w-full"
                ></img>

                <div className="absolute flex flex-col justify-center mt-20 md:absolute m-auto md:ml-28 md:w-[1000px]">
                  <h2 className="flex flex-col z-20 md:flex-row md:gap-7 md:mt-40">
                    <span>Calm</span>
                    <span>Rejuvenate</span>
                    <span>Bliss</span>
                  </h2>

                  <p className="mt-5 z-20 w-60 md:w-150">
                    Let your mind unwind, your body regain its energy, and your
                    spirit feel light and refreshed, as every moment nurtures
                    your inner wellness, restores your vitality, and enhances
                    your natural beauty from within.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container flex flex-col justify-center items-center">
          <div className="md:flex md:flex-row md:gap-12 md:mt-10">
            <div className="md:flex-1 md:flex md:flex-col md:gap-6 md:items-center">
              <h2 className="text-[#917A6B] mb-8 mt-150 flex justify-center items-center">
                Body Treatment
              </h2>
              <p className="mb-8">
                Treatments for the body help release tension, improve blood
                flow, and restore energy. They promote healthier skin, support
                flexibility, and ease stress. By caring for your body this way,
                you boost overall wellness and feel more vibrant, balanced, and
                refreshed.
              </p>
              <Link
                to="/menu"
                className="hidden md:inline-block link px-5 py-3 rounded-full"
                style={{ backgroundColor: "#af9b8e" }}
              >
                View Treatment
              </Link>
            </div>

            <div className="md:flex-1 md:relative">
              <img
                src={BodyPhotoMobile}
                alt="Body Treatment"
                className="hidden md:block md:rounded-3xl md:w-1/2 md:mt-150 md:right-5 md:absolute md:z-10"
              ></img>
              <img
                src={BodyPhotoOnlyDesktop}
                alt="Body Treatment"
                className="mb-8 rounded-3xl w-full md:w-1/2 md:mt-185 md:absolute md:z-0"
              ></img>
            </div>
          </div>

          <Link
            to="/menu"
            className="link px-5 py-3 mt-5 rounded-full md:hidden"
            style={{ backgroundColor: "#af9b8e" }}
          >
            View Treatment
          </Link>
        </section>

        <section className="container flex flex-col justify-center items-center">
          <div className="md:flex md:flex-row-reverse md:gap-12 md:mt-10">
            <div className="md:flex-1 md:flex md:flex-col md:gap-6 md:items-center">
              <h2 className="text-[#917A6B] my-8">Facial Treatment</h2>
              <p className="mb-8">
                Facial treatments help cleanse and nourish the skin, improving
                its texture and natural glow. They support hydration, reduce
                signs of stress, and refresh tired skin. By caring for your face
                this way, you reveal a healthy, radiant complexion and feel
                renewed from the inside out.
              </p>
              <Link
                to="/menu"
                className="hidden md:inline-block link px-5 py-3 mt-5 mb-10 rounded-full"
                style={{ backgroundColor: "#af9b8e" }}
              >
                View Treatment
              </Link>
            </div>
            <div className="md:flex-1 md:relative">
              <img
                src={FacialPhotoMobile}
                alt="Body Treatment"
                className="hidden md:block md:rounded-3xl md:w-1/2 md:mt-50 md:right-5 md:absolute md:z-0"
              ></img>
              <img
                src={FacialPhotoOnlyDesktop}
                alt="Body Treatment"
                className="mb-8 w-full rounded-3xl md:w-1/2 md:absolute md:z-10"
              ></img>
            </div>
          </div>

          <Link
            to="/menu"
            className="link px-5 py-3 mt-5 mb-10 rounded-full md:hidden"
            style={{ backgroundColor: "#af9b8e" }}
          >
            View Treatment
          </Link>
        </section>
      </div>

      <div className="hero relative w-full h-screen">
        <div className="absolute w-full h-screen bg-linear-to-b from-black via-[rgba(0,0,0,0.2)] to-transparent z-10"></div>
        <img
          src={SunriseMobile}
          alt="Sunrise"
          className="absolute inset-0 w-full h-full object-cover z-0"
        ></img>

        <div className="absolute w-full h-screen flex flex-col items-center justify-center z-20">
          <h2>Enjoy your journey</h2>
          <Link
            to="/booking"
            className="link px-5 py-3 mt-5 rounded-full"
            style={{ backgroundColor: "#af9b8e" }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
