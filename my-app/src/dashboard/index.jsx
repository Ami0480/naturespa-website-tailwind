import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <div className="flex flex-col items-start w-full m-8">
        <h2>Nature Spa</h2>
        <h3>Admin</h3>
      </div>

      <div className="flex gap-10 my-4">
        <Link to="/dashboard/bookings">
          <h4>Bookings</h4>
        </Link>

        <Link to="/dashboard/subscribers">
          <h4>Subscribers </h4>
        </Link>
      </div>
    </div>
  );
}
