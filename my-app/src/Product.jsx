import React from "react";
import { Link } from "react-router-dom";

import ProductOil from "./images/product-hands.jpg";
import OurProduct from "./images/our-product.jpg";

export default function Product() {
  return (
    <div className="relative z-0">
      <div className="absolute w-full h-screen inset-0 bg-linear-to-b from-black via-[rgba(0,0,0,0.2)] to-transparent z-10"></div>
      <img
        src={ProductOil}
        alt="Product Photo"
        className="w-full h-screen object-cover inset-0"
      ></img>
      <div className="absolute inset-0 w-full h-screen flex flex-col justify-center items-center z-20">
        <h1 className="font-cormorant text-white text-6xl italic">Product</h1>
        <Link
          to="/booking"
          className="pr-5 pl-5 pt-3 pb-3 mt-5 bg-[#BFAFA5] font-raleway rounded-full font-bold"
        >
          Book Now
        </Link>
      </div>

      <section className="container flex flex-col justify-center items-center">
        <h2 className="text-[40px]/tight italic z-20 font-cormorant tracking-wide mt-8 mb-8">
          Our product
        </h2>
        <p className="mb-8  text-[18px]/6 font-raleway">
          Our products are carefully crafted using only organic and natural
          ingredients, ensuring they remain completely free from harmful
          chemicals, synthetic substances, and artificial additives. By staying
          true to nature, we provide safe, sustainable, and authentic solutions
          that not only support your well-being but also respect the
          environment. Each product reflects our commitment to purity,
          transparency, and uncompromising quality.
        </p>
        <img
          src={OurProduct}
          alt="Our Product"
          className="rounded-3xl mb-8"
        ></img>
      </section>
    </div>
  );
}
