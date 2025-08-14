"use client";
import React, { useState } from "react";
import Image from "next/image";
import consultationImage from "@/public/images/consultation.png";

function Consultation() {
  const [appointmentDateTime, setAppointmentDateTime] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppointmentDateTime(e.target.value);
  };

  return (
    <div className="relative flex flex-col justify-between bg-black">
      {/* Hero Section with Background Image */}
      <div className="relative w-full lg:h-[100svh] h-84">
        <Image
          src={consultationImage}
          alt="Consultation Background"
          fill
          className="object-cover object-top-right"
          priority
        />
      </div>

      <div className="w-full lg:h-[450px] h-[300px]"></div>

      {/* Centered Card */}
      <div className="absolute top-[200px] w-full z-10">
        <div className="container flex flex-col items-end justify-end">
          <div className="w-full max-w-[800px] bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-28 transform">
            <h4 className="text-xl sm:text-2xl font-extrabold mb-6">Welcome</h4>

            <form className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              <input
                type="text"
                placeholder="First name, Last name"
                className="border text-havenGrey placeholder:text-havenGrey text-base px-4 py-2 lg:text-xl lg:px-8 lg:py-3 rounded-full focus:outline-havenPink"
              />

              <input
                type="text"
                placeholder="Address"
                className="border text-havenGrey placeholder:text-havenGrey text-base px-4 py-2 lg:text-xl lg:px-8 lg:py-3 rounded-full"
              />

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="border text-havenGrey placeholder:text-havenGrey text-base px-4 py-2 lg:text-xl lg:px-8 lg:py-3 rounded-full w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border text-havenGrey placeholder:text-havenGrey text-base px-4 py-2 lg:text-xl lg:px-8 lg:py-3 rounded-full w-full"
                />
              </div>

              <div className="relative inline-block w-full">
                <select
                  defaultValue=""
                  className="appearance-none border text-havenGrey text-base px-4 py-2 lg:text-xl lg:px-8 lg:py-3 pr-12 bg-white rounded-full w-full"
                >
                  <option value="" disabled className="text-havenGrey">
                    Select Specialist
                  </option>
                  <option>Pediatric Cardiologist</option>
                  <option>Pediatric Neurologist</option>
                  <option>Pediatric Dentist</option>
                  <option>Pediatric Dermatologist</option>
                  <option>Pediatric ENT</option>
                  <option>Pediatric Allergist</option>
                  <option>Pediatric Hematologist</option>
                  <option>Pediatric Gastroenterologist</option>
                  <option>Pediatric Oncologist</option>
                </select>

                {/* Custom Arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg
                    className="w-4 h-4 text-havenGrey"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <textarea
                rows={4}
                placeholder="Complaint"
                className="border text-havenGrey placeholder:text-havenGrey text-base px-4 py-2 lg:text-xl lg:px-8 lg:py-3 rounded-xl min-h-[80px]"
              ></textarea>

              <input
                type="datetime-local"
                value={appointmentDateTime}
                onChange={handleDateChange}
                className="border text-havenGrey placeholder:text-havenGrey text-base px-4 py-2 lg:text-xl lg:px-8 lg:py-3 rounded-full"
                min={new Date().toISOString().slice(0, 16)}
              />

              <button
                type="submit"
                className="bg-havenPink text-white text-base lg:text-lg rounded-full py-3 mt-2 hover:bg-havenBlue transition-colors"
              >
                Book Appointment
              </button>
            </form>
          </div>

          <div className="w-full max-w-[800px] bg-havenYellow h-5 mt-5" />
        </div>
      </div>
    </div>
  );
}

export default Consultation;
