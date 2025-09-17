"use client";
import React, { useState } from "react";
import Image from "next/image";
import consultationImage from "@/public/images/consultation.png";
import toast, { Toaster } from "react-hot-toast";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";

import dayjs, { Dayjs } from "dayjs";

function Consultation() {
  const [appointmentDateTime, setAppointmentDateTime] = useState<Dayjs | null>(
    dayjs()
  );
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    specialist: "",
    complaint: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          appointmentDateTime: appointmentDateTime?.toISOString(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Error sending request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col justify-between bg-black">
      <Toaster position="top-right" />
      {/* Hero Section with Background Image */}
      <div className="relative w-full lg:h-[calc(100svh_-_80px)] max-h-[780px] h-84">
        <Image
          src={consultationImage}
          alt="Consultation Background"
          fill
          className="object-cover object-top-right"
          priority
        />
      </div>

      <div className="w-full h-[500px] lg:h-[450px]" />

      {/* Centered Card */}
      <div className="absolute top-28 lg:top-[200px] w-full z-10">
        <div className="container flex flex-col items-end justify-end">
          <div className="w-full max-w-[800px] bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-28">
            {!submitted ? (
              <>
                <h4 className="text-xl sm:text-2xl font-extrabold mb-6">
                  Welcome
                </h4>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="First name, Last name"
                    onChange={handleChange}
                    className="border text-havenGrey px-4 py-2 rounded-full"
                    required
                  />

                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                    className="border text-havenGrey px-4 py-2 rounded-full"
                  />

                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      className="border text-havenGrey px-4 py-2 rounded-full w-full"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      onChange={handleChange}
                      className="border text-havenGrey px-4 py-2 rounded-full w-full"
                    />
                  </div>

                  <select
                    name="specialist"
                    defaultValue=""
                    onChange={handleChange}
                    className="appearance-none border px-4 py-2 rounded-full w-full"
                  >
                    <option value="" disabled>
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

                  <textarea
                    name="complaint"
                    rows={4}
                    placeholder="Complaint"
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-xl"
                  ></textarea>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="Appointment Date & Time"
                      value={appointmentDateTime}
                      onChange={(newValue) => setAppointmentDateTime(newValue)}
                      minDateTime={dayjs()} // prevents selecting past times
                      slotProps={{
                        textField: {
                          className: "bg-white rounded-full w-full", // tailwind styles
                        },
                      }}
                    />
                  </LocalizationProvider>

                  <button
                    type="submit"
                    disabled={loading} // disable while loading
                    className={`bg-havenPink text-white rounded-full py-3 mt-2 transition ${
                      loading
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-havenBlue"
                    }`}
                  >
                    {loading ? "Sending..." : "Book Appointment"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h4 className="text-xl font-bold text-havenBlue mb-4">
                  Thank you for booking with Haven Pediatric Practice!
                </h4>
                <p className="text-gray-600 max-w-md mx-auto">
                  Your request has been received, and one of our staff members
                  will reach out shortly to confirm your appointment. We
                  appreciate your trust in us and look forward to caring for
                  you.
                </p>
              </div>
            )}
          </div>

          <div className="w-full max-w-[800px] bg-havenYellow h-5 mt-5" />
        </div>
      </div>
    </div>
  );
}

export default Consultation;
