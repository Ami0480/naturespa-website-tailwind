import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase-client";

function getMonthDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return { firstDay, daysInMonth };
}

function toDateStr(date) {
  return date.toISOString().slice(0, 10);
}

export default function Bookings() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(toDateStr(today));
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const { firstDay, daysInMonth } = getMonthDays(year, month);

  // Fetch all bookings for the current month
  const monthStart = `${year}-${String(month + 1).padStart(2, "0")}-01`;
  const monthEnd = `${year}-${String(month + 1).padStart(2, "0")}-${String(
    daysInMonth
  ).padStart(2, "0")}`;

  useEffect(() => {
    async function fetchBookings() {
      setLoading(true);
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .gte("appointment", monthStart)
        .lte("appointment", monthEnd + "T23:59:59")
        .order("appointment", { ascending: true });
      if (!error) setBookings(data || []);
      setLoading(false);
    }
    fetchBookings();
  }, [year, month]);

  function prevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else setMonth((m) => m - 1);
  }
  function nextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else setMonth((m) => m + 1);
  }

  // bookings that have a date matching a calendar day
  function bookingsForDay(day) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return bookings.filter(
      (b) => b.appointment && b.appointment.slice(0, 10) === dateStr
    );
  }

  const selectedBookings = bookings.filter(
    (b) => b.appointment && b.appointment.slice(0, 10) === selectedDate
  );

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex flex-col items-center justify-center m-4 md:mx-10">
      {/* Header */}
      <div className="relative flex flex-col items-start w-full m-8 md:gap-4">
        <h2>Nature Spa</h2>
        <h3>Admin</h3>
        <Link to="/staff-login" className="md:absolute md:right-0 md:top-0">
          <button className="text-sm text-white border border-white px-3 py-1 rounded mt-3 md:mt-0 hover:bg-white hover:text-primary-bg transition-colors">
            Back to Login
          </button>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-10 mt-2 w-full items-center justify-center md:gap-30">
        <h4 className="bg-[#af9b8e] p-2 rounded-tr rounded-tl">Bookings</h4>
        <Link to="/dashboard/subscribers">
          <h4 className="p-2">Subscribers</h4>
        </Link>
      </div>

      <div className="bg-[#af9b8e] w-full rounded p-3">
        {/* Calendar */}
        <div className="max-w-full bg-white mx-4 rounded">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={prevMonth}
              className="px-2 text-[#af9b8e] text-2xl rounded m-2"
            >
              ‹
            </button>
            <span className="font-semibold text-[#453b2e]">
              {monthNames[month]} {year}
            </span>
            <button
              onClick={nextMonth}
              className="px-2 text-[#af9b8e] text-2xl rounded m-2"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 text-center text-xs mb-1">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="font-semibold text-[#453b2e]">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 text-center text-sm text-[#453b2e] gap-y-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`e${i}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
              const dateStr = `${year}-${String(month + 1).padStart(
                2,
                "0"
              )}-${String(day).padStart(2, "0")}`;
              const hasBooking = bookingsForDay(day).length > 0;
              const isSelected = selectedDate === dateStr;
              const isToday = dateStr === toDateStr(today);
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`rounded-full w-8 h-8 mx-auto flex items-center justify-center relative
                  ${
                    isSelected
                      ? "bg-[#453b2e] text-white"
                      : isToday
                      ? "border border-[#453b2e]"
                      : "hover:bg-[#e8ddd7]"
                  }
                `}
                >
                  {day}
                  {hasBooking && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#af9b8e] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bookings list for selected date */}
        <div className="max-w-full mt-6  mx-4">
          {loading ? (
            <p className="text-sm text-gray-400">Loading...</p>
          ) : selectedBookings.length === 0 ? (
            <p className="text-sm text-[#453b2e]">No bookings for this day.</p>
          ) : (
            <div className="flex flex-col gap-2">
              {" "}
              <h5 className="font-semibold mb-2 text-[#453b2e]">
                {selectedDate === toDateStr(today) ? "Today" : selectedDate}{" "}
                <span className="bg-white text-[#453b2e] px-2 py-0.5 rounded text-sm font-normal">
                  {selectedBookings.length} booking
                  {selectedBookings.length !== 1 ? "s" : ""}
                </span>
              </h5>
              {selectedBookings.map((b) => (
                <div
                  key={b.id}
                  className="bg-[#f5eeea] rounded p-3 text-sm text-[#453b2e]"
                >
                  <div className="flex justify-between">
                    <span className="font-semibold">
                      {b.first_name} {b.last_name}
                    </span>
                    <span className="text-[#453b2e]">
                      {b.appointment ? b.appointment.slice(11, 16) : ""}
                    </span>
                  </div>
                  <div className="text-gray-600">
                    {b.treatment} · {b.duration}
                  </div>
                  <div className="text-gray-500">Therapist: {b.therapist}</div>
                  <div className="text-gray-500">
                    {b.mobile} · {b.email}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
