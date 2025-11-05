import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const bodyTreatments = [
    {
      name: "Full Body Relaxation Massage",
      duration: "60mins",
      price: "$140",
    },
    {
      name: "Full Body Deep Tissue Massage",
      duration: "60mins",
      price: "$140",
    },
    {
      name: "Full Body Pregnancy Massage",
      duration: "75mins",
      price: "$170",
    },
    {
      name: "Lymphatic Drainage Massage",
      duration: "60mins",
      price: "$180",
    },
    { name: "Body Scrub", duration: "60mins", price: "$120" },
    { name: "Body Detox and Wrap", duration: "120mins", price: "$280" },
    { name: "Full Body Mask", duration: "150mins", price: "$320" },
    { name: "Head to Toe Massage", duration: "120mins", price: "$210" },
  ];

  const facialTreatments = [
    { name: "Calm Facial", duration: "60minutes", price: "$210" },
    { name: "Rejuvinate Facial", duration: "60minutes", price: "$210" },
    { name: "Refresh Facial", duration: "60minutes", price: "$210" },
    { name: "LED Light Therapy", duration: "30minutes", price: "$120" },
    { name: "Facial Scrub", duration: "30minutes", price: "$100" },
    { name: "Facial Scrub and Mask", duration: "60minutes", price: "$320" },
    {
      name: "Hydro Microdermabrasion Facial",
      duration: "60minutes",
      price: "$210",
    },
    { name: "Facial Peeling", duration: "60minutes", price: "$240" },
  ];

  return (
    <div className="container w-full h-full bg-black font-light">
      <h1 className="flex justify-center mt-20 mb-8 md:mb-16">Menu</h1>
      <h3 className="z-20 mb-2">Body Treatment</h3>
      {bodyTreatments.map((service, index) => (
        <div
          className="service flex border-b pt-4 items-end md:pt-6"
          key={index}
        >
          <h4 className="flex-2">{service.name}</h4>
          <h4 className="flex-1 text-right">{service.duration}</h4>
          <h4 className="flex-1 text-right">{service.price}</h4>
        </div>
      ))}

      <h3 className="mb-2 mt-10 md:mt-20">Facial Treatment</h3>
      {facialTreatments.map((service, index) => (
        <div
          className="service flex border-b pt-4 items-end md:pt-6"
          key={index}
        >
          <h4 className="menu flex-2">{service.name}</h4>
          <h4 className="menu flex-1 text-right">{service.duration}</h4>
          <h4 className="menu flex-1 text-right">{service.price}</h4>
        </div>
      ))}
      <div className="flex justify-center">
        <Link
          to="/booking"
          className="link mb-8"
          style={{ backgroundColor: "#af9b8e" }}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
