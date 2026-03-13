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
        <Link to="/dashboard/bookings">
          <h4>Bookings</h4>
        </Link>
        <h4 className="bg-[#af9b8e] p-2 rounded-tr rounded-tl">Subscribers </h4>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#af9b8e] p-2 rounded">
        <p className="bg-white text-[#453b2e] px-2 rounded w-10 flex items-center justify-center">
          25
        </p>
        <div className="flex gap-4 border-b">
          <div>Ami Fukuyama</div>
          <div>email address</div>
          <div>date</div>
        </div>
      </div>
    </div>
  );
}
