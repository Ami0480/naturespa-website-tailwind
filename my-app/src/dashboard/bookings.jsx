import React from "react";
import { Link } from "react-router-dom";

export default function Bookings() {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <div className="flex flex-col items-start w-full">
        <h2>Nature Spa</h2>
        <h3>Admin</h3>
      </div>

      <div className="flex gap-10 mt-4">
        <h4 className="bg-[#af9b8e] p-2 rounded-tr rounded-tl">Bookings</h4>
        <Link to="/dashboard/subscribers">
          <h4>Subscribers </h4>
        </Link>
      </div>

      <div className="flex gap-2 bg-[#af9b8e] p-2 rounded">
        <p className="bg-white text-[#453b2e] px-2 rounded">Bookings Today</p>
        <p className="bg-white text-[#453b2e] px-2 rounded">Cash/Cards</p>
        <p className="bg-white text-[#453b2e] px-2 rounded">Gift Voucher</p>
      </div>
    </div>
  );
}
