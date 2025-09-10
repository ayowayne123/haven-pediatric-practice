"use client";
import React from "react";
import Image from "next/image";
import contactImage from "@/public/images/contact.jpg"; // replace with your actual image

function Contact() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-center lg:text-xl md:text-lg ">
        {/* Left Content */}
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl leading-[120%] font-extrabold text-havenPink mb-5">
            We’re Here for You <br /> Every Step of the Way
          </h3>
          <p className=" mb-8 lg:mb-12 leading-relaxed">
            Have questions or need to book an appointment? We’re here to help.
            At Haven Pediatric Practice, we provide prompt support and expert
            care to guide you through every stage of your child’s health
            journey.
          </p>

          <h3 className="font-extrabold lg:text-2xl text-xl  mb-1">
            Get in Touch Today
          </h3>
          <p className="mb-12">
            Reach out to book an appointment, ask a question, or speak with a
            member of our care team.
          </p>

          <div className="lg:space-y-8 space-y-4">
            <div className="flex lg:flex-row flex-col lg:gap-16 gap-4">
              <div>
                <p className="font-semibold text-havenBlue ">Call/WhatsApp:</p>
                <p className="">08161713397</p>
              </div>
              <div>
                <p className="font-semibold text-havenBlue ">Email:</p>
                <p className="">customer.service@havenpractice.com</p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-havenBlue ">Address:</p>
              <p className="">3c, Oba Dosumu, GRA, Ikeja, Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[670px] relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={contactImage}
            alt="Contact Haven Pediatric Practice"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
