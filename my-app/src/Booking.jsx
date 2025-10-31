import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Booking() {
  const [firstName, setFirstName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1 className="font-cormorant text-white text-6xl italic mt-20 mb-8">
        Book an appointment
      </h1>
      <p className="text-[18px]/6 font-raleway mb-2">First Name</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full h-10 bg-white rounded-3xl text-black px-4 outline-none"
        ></input>
      </form>
    </div>
  );
}
