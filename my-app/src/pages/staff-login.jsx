import React from "react";

export default function StaffLogin() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 m-28">
      <h2 className="my-5">Staff Login</h2>

      <input
        type="email"
        placeholder="Please enter your email address"
        className="bg-white text-gray-500 w-96 px-2 py-1 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="bg-white text-gray-500 w-96 px-2 py-1 rounded"
      />
      <button className="bg-[#af9b8e] w-48 px-2 py-1 rounded">Log in</button>
    </div>
  );
}
