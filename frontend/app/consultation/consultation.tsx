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
    <div className="relative  flex flex-col justify-between bg-black">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[100svh]">
        <Image
          src={consultationImage}
          alt="Consultation Background"
          fill
          className="object-cover object-top-right"
          priority
        />
      </div>
      <div className="w-full h-[450px]"></div>

      {/* Centered Card */}
      <div className="absolute top-[200px] w-full  z-10   ">
        <div className="container justify-end items-end  flex flex-col">
          <div className="w-full max-w-[800px] transform  bg-white   lg:px-20 lg:py-28">
            <h4 className="text-2xl font-extrabold mb-6">Welcome</h4>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="First name, Last name"
                className="border text-havenGrey placeholder:text-havenGrey lg:text-xl rounded-full px-8 py-3  focus:outline-havenPink"
              />
              <input
                type="text"
                placeholder="Address"
                className="border text-havenGrey placeholder:text-havenGrey lg:text-xl rounded-full px-8 py-3"
              />
              <div className="flex gap-5 w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="border text-havenGrey placeholder:text-havenGrey lg:text-xl rounded-full px-8 py-3 w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border text-havenGrey placeholder:text-havenGrey lg:text-xl rounded-full px-8 py-3 w-full"
                />
              </div>

              <div className="relative inline-block ">
                <select
                  defaultValue=""
                  className="appearance-none border  placeholder:text-havenGrey lg:text-xl w-full text-havenGrey rounded-full px-8 py-3 pr-12 bg-white cursor-pointer"
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
                className="border text-havenGrey placeholder:text-havenGrey lg:text-xl rounded-xl px-8 py-3 min-h-[80px]"
              ></textarea>

              {/* Native DateTime Picker */}
              <input
                type="datetime-local"
                value={appointmentDateTime}
                onChange={handleDateChange}
                className="border text-havenGrey placeholder:text-havenGrey lg:text-xl rounded-full px-8 py-3"
                min={new Date().toISOString().slice(0, 16)}
              />

              <button
                type="submit"
                className="bg-havenPink text-white rounded-full py-3 mt-4 hover:bg-havenBlue transition-colors"
              >
                Book Appointment
              </button>
            </form>
          </div>
          <div className="w-full max-w-[800px] transform  bg-havenYellow h-5   mt-5" />
        </div>
      </div>
    </div>
  );
}

export default Consultation;
