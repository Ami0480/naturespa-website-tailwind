import React, { useState } from "react";
import { supabase } from "../supabase-client";
import { useNavigate } from "react-router-dom";

export default function StaffLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 m-28">
      <h2 className="my-5">Staff Login</h2>

      <input
        type="email"
        placeholder="Please enter your email address"
        className="bg-white text-gray-500 w-96 px-2 py-1 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="bg-white text-gray-500 w-96 px-2 py-1 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-[#af9b8e] w-48 px-2 py-1 rounded"
        type="button"
        onClick={handleSignIn}
      >
        Log in
      </button>
    </div>
  );
}
