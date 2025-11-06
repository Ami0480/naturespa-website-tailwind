import React from "react";
import { Link } from "react-router-dom";

import ProductOil from "./images/product-hands.jpg";
import OurProduct from "./images/our-product.jpg";

export default function Product() {
  return (
    <div className="relative z-0">
      <div className="absolute w-full h-screen inset-0 bg-linear-to-b from-black via-black/20 to-transparent z-10"></div>
      <img
        src={ProductOil}
        alt="Product Photo"
        className="w-full h-screen object-cover inset-0"
      ></img>
      <div className="absolute inset-0 w-full h-screen flex flex-col justify-center items-center z-20">
        <h1>Product</h1>
        <Link to="/booking" className="link bg-[#BFAFA5]">
          Book Now
        </Link>
      </div>

      <section className="container flex flex-col justify-center items-center md:flex-row md:gap-12">
        <div className="md:flex-1">
          <h2 className="text-[#917A6B] mt-8 mb-8 flex justify-center items-center">
            Our product
          </h2>
          <p className="mb-8 text-center md:text-left">
            Our products are carefully crafted using only organic and natural
            ingredients, ensuring they remain completely free from harmful
            chemicals, synthetic substances, and artificial additives. By
            staying true to nature, we provide safe, sustainable, and authentic
            solutions that not only support your well-being but also respect the
            environment. Each product reflects our commitment to purity,
            transparency, and uncompromising quality.
          </p>
        </div>
        <div className="md:flex-1">
          <img
            src={OurProduct}
            alt="Our Product"
            className="rounded-3xl mb-8"
          ></img>
        </div>
      </section>
    </div>
  );
}
