import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase-client";

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSubscribers() {
      const { data, error } = await supabase
        .from("subscribers")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) console.error("Supabase error:", error);
      else setSubscribers(data || []);
      setLoading(false);
    }
    fetchSubscribers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center m-4 md:mx-10">
      <div className="relative flex flex-col items-start w-full m-8 md:gap-4">
        <h2>Nature Spa</h2>
        <h3>Admin</h3>
        <Link to="/staff-login" className="md:absolute md:right-0 md:top-0">
          <button className="text-sm text-white border border-white px-3 py-1 rounded mt-3 md:mt-0 hover:bg-white hover:text-primary-bg transition-colors">
            Back to Login
          </button>
        </Link>
      </div>

      <div className="flex gap-10 mt-2 w-full items-center justify-center md:gap-30">
        <Link to="/dashboard/bookings">
          <h4 className="p-2">Bookings</h4>
        </Link>
        <h4 className="bg-[#af9b8e] p-2 rounded-tr rounded-tl">Subscribers</h4>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#af9b8e] p-2 rounded w-full">
        <p className="bg-white text-[#453b2e] px-2 rounded flex items-center justify-center mb-2">
          {subscribers.length} subscriber{subscribers.length !== 1 ? "s" : ""}
        </p>

        {loading ? (
          <p className="text-sm text-[#453b2e]">Loading...</p>
        ) : subscribers.length === 0 ? (
          <p className="text-sm text-[#453b2e]">No subscribers yet.</p>
        ) : (
          <div className="bg-white rounded overflow-hidden w-full">
            <div className="grid grid-cols-2 text-xs font-semibold text-[#453b2e] px-3 py-2 border-b">
              <span>Email</span>
              <span>Date</span>
            </div>
            {subscribers.map((s) => (
              <div
                key={s.id}
                className="grid grid-cols-2 text-sm text-[#453b2e] px-3 py-2 border-b last:border-0"
              >
                <span>{s.email}</span>
                <span>
                  {s.created_at
                    ? new Date(s.created_at).toLocaleString("en-AU", {
                        timeZone: "Australia/Perth",
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : ""}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
