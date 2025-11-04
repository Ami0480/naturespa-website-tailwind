import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import calendar from "./images/calendar-icon.svg";

export default function Booking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    treatment: "",
    therapist: "",
    appointment: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thankyou");
  };

  return (
    <div className="container">
      <h1 className="font-cormorant text-white text-6xl italic mt-20 mb-8">
        Book an appointment
      </h1>

      <label className="text-[18px]/6 font-raleway">First Name</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-black px-4 outline-none"
          required
        ></input>

        <label className="text-[18px]/6 font-raleway mb-2">Last Name</label>

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-black px-4 outline-none"
          required
        ></input>

        <label className="text-[18px]/6 font-raleway mb-2">Mobile</label>

        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-black px-4 outline-none"
          required
        ></input>

        <label className="text-[18px]/6 font-raleway mb-2">Email</label>

        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-black px-4 outline-none"
          required
        ></input>

        <label className="text-[18px]/6 font-raleway mb-2">
          What treatment would you like?
        </label>

        <select
          type="text"
          name="treatment"
          value={formData.treatment}
          onChange={handleChange}
          className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-black px-4 outline-none appearance-none"
          required
        >
          <option value="">Select a treatment..</option>
          <option value="relaxation">
            Full Body Relaxation Massage - 60min ($140)
          </option>
          <option value="deep">
            Full Body Deep Tissue Massage - 60min ($140)
          </option>
          <option value="pregnancy">
            Full Body Pregnancy Massage - 75min ($170)
          </option>
          <option value="lymphatic">
            Lymphatic Drainage Massage - 60min ($180)
          </option>
          <option value="Scrub">Body Scrub - 60min ($120)</option>
          <option value="Detox">Body Detox and Wrap - 120min ($280)</option>
          <option value="Mask">Full Body Mask- 150min ($320)</option>
          <option value="Head-toe">Head to Toe Massage- 120min ($210)</option>
          <option value="Calm">Calm Facial- 60min ($210)</option>
          <option value="Rejuvinate">Rejuvinate Facial - 60min ($210)</option>
          <option value="Refresh">Refresh Facial- 60min ($210)</option>
          <option value="LED">LED Light Therapy - 30min ($120)</option>
          <option value="F-scrub">Facial Scrub- 30min ($120)</option>
          <option value="F-mask">Facial Scrub and Mask- 60min ($320)</option>
          <option value="Microdermabrasion">
            Hydro Microdermabrasion Facial - 60min ($210)
          </option>
          <option value="Peeling">Facial Peeling- 60min ($240)</option>
        </select>

        <label className="text-[18px]/6 font-raleway mb-2">
          Preferred therapist
        </label>

        <select
          type="text"
          name="therapist"
          value={formData.therapist}
          onChange={handleChange}
          className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-black px-4 outline-none appearance-none"
          required
        >
          <option value="">Select a therapist..</option>
          <option value="any">Any therapist</option>
          <option value="sarah">Sarah</option>
          <option value="amy">Amy</option>
          <option value="chloe">Chloe</option>
          <option value="michael">Michelle</option>
          <option value="emma">Emma</option>
        </select>

        <label className="text-[18px]/6 font-raleway mb-2">
          When would you likt to visit?
        </label>
        <div className="relative">
          <input
            type="datetime-local"
            name="appointment"
            value={formData.appointment}
            onChange={handleChange}
            className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-black px-4 outline-none appearance-none"
            required
          ></input>
          <img
            src={calendar}
            alt="calendar"
            className="absolute top-3 right-5 pointer-events-none"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            to="/thankyou"
            className="pr-5 pl-5 pt-3 pb-3 items-center text-white rounded-full font-bold font-raleway"
            style={{ backgroundColor: "#af9b8e" }}
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}
