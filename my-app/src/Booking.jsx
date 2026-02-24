import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import calendar from "./images/calendar-icon.svg";
import { supabase } from "./supabase-client";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const durationMap = {
      "Full Body Relaxation Massage ": "60min",
      "Full Body Deep Tissue Massage ": "60min",
      "Full Body Pregnancy Massage ": "75min",
      "Lymphatic Drainage Massage": "60min",
      "Body Scrub": "60min",
      "Body Detox and Wrap": "120min",
      "Full Body Mask": "150min",
      "Head to Toe Massage": "120min",
      "Calm Facial": "60min",
      "Rejuvenate Facial": "60min",
      "Refresh Facial": "60min",
      "LED Light Therapy": "30min",
      "Facial Scrub": "30min",
      "Facial Scrub and Mask": "60min",
      "Hydro Microdermabrasion Facial": "60min",
      "Facial Peeling": "60min",
    };

    console.log("Submitting formData:", formData);

    const { error } = await supabase.from("bookings").insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        mobile: formData.mobile,
        email: formData.email,
        treatment: formData.treatment,
        therapist: formData.therapist,
        appointment: new Date(formData.appointment).toLocaleString("sv-SE", {
          timeZone: "Australia/Perth",
        }),
        duration: durationMap[formData.treatment] || "",
      },
    ]);
    if (error) {
      console.error("Error submitting to supabase", error);
      return;
    }
    console.log("Booking saved to supabase", formData);
    navigate("/thankyou");
  };

  return (
    <div className="container">
      <h1 className="font-cormorant text-white text-6xl italic mt-20 mb-8 md:mb-16">
        Book an appointment
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="md:flex md:gap-5 md:my-5">
          <div className="md:flex-1">
            <label className="text-[18px]/6 font-raleway">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-black px-4 outline-none"
              required
            ></input>
          </div>
          <div className="md:flex-1">
            <label className="text-[18px]/6 font-raleway mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-black px-4 outline-none"
              required
            ></input>
          </div>
        </div>

        <div className="md:flex md:gap-5 md:my-5">
          <div className="md:flex-1">
            <label className="text-[18px]/6 font-raleway mb-2">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-black px-4 outline-none"
              required
            ></input>
          </div>
          <div className="md:flex-1">
            <label className="text-[18px]/6 font-raleway mb-2">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-black px-4 outline-none"
              required
            ></input>
          </div>
        </div>

        <div className="md:flex md:gap-5 md:my-5">
          <div className="md:flex-1">
            <label className="text-[18px]/6 font-raleway mb-2">
              What treatment would you like?
            </label>
            <select
              type="text"
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-neutral-600 px-4 outline-none appearance-none"
              required
            >
              <option value="">Select a treatment..</option>
              <option value="Full Body Relaxation Massage">
                Full Body Relaxation Massage - 60min ($140)
              </option>
              <option value="Full Body Deep Tissue Massage">
                Full Body Deep Tissue Massage - 60min ($140)
              </option>
              <option value="Full Body Pregnancy Massage">
                Full Body Pregnancy Massage - 75min ($170)
              </option>
              <option value="Lymphatic Drainage Massage">
                Lymphatic Drainage Massage - 60min ($180)
              </option>
              <option value="Body Scrub">Body Scrub - 60min ($120)</option>
              <option value="Body Detox and Wrap">
                Body Detox and Wrap - 120min ($280)
              </option>
              <option value="Full Body Mask">
                Full Body Mask- 150min ($320)
              </option>
              <option value="Head to Toe Massage">
                Head to Toe Massage- 120min ($210)
              </option>
              <option value="Calm Facial">Calm Facial- 60min ($210)</option>
              <option value="Rejuvinate Facial">
                Rejuvinate Facial - 60min ($210)
              </option>
              <option value="Refresh Facial">
                Refresh Facial- 60min ($210)
              </option>
              <option value="LED Light Therapy">
                LED Light Therapy - 30min ($120)
              </option>
              <option value="Facial Scrub">Facial Scrub- 30min ($120)</option>
              <option value="Facial Scrub and Mask">
                Facial Scrub and Mask- 60min ($320)
              </option>
              <option value="Hydro Microdermabrasion Facial">
                Hydro Microdermabrasion Facial - 60min ($210)
              </option>
              <option value="Facial Peeling">
                Facial Peeling- 60min ($240)
              </option>
            </select>
          </div>
          <div className="md:flex-1">
            <label className="text-[18px]/6 font-raleway mb-2">
              Preferred therapist
            </label>

            <select
              type="text"
              name="therapist"
              value={formData.therapist}
              onChange={handleChange}
              className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-neutral-600 px-4 outline-none appearance-none"
              required
            >
              <option value="">Select a therapist..</option>
              <option value="any">Any therapist</option>
              <option value="sarah">Sarah</option>
              <option value="amy">Amy</option>
              <option value="chloe">Chloe</option>
              <option value="michelle">Michelle</option>
              <option value="emma">Emma</option>
            </select>
          </div>
        </div>

        <div className="md:flex md:w-1/2 md:my-5">
          <div className="md:flex-1 md:mr-2.5">
            <label className="text-[18px]/6 font-raleway mb-2">
              When would you likt to visit?
            </label>
            <div className="relative">
              <input
                type="datetime-local"
                name="appointment"
                value={formData.appointment}
                onChange={handleChange}
                className="w-full h-10 mt-2 mb-4 bg-white rounded-3xl text-neutral-600 px-4 outline-none appearance-none"
                required
              ></input>
              <img
                src={calendar}
                alt="calendar"
                className="absolute top-4 right-3 pointer-events-none"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button type="submit" className="link hover:opacity-80 ease-in-out">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}
