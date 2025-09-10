"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import twobeds from "@/public/images/twoHospitalBeds.jpg";

function NewsLetter() {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="relative w-full h-[320px] md:h-[340px] lg:h-[610px]">
        <Image
          src={twobeds}
          alt="Hospital beds"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay card */}
      <div className="lg:absolute lg:top-[273px] w-full z-30 flex justify-center items-center ">
        {/* Underlay card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute lg:-bottom-6 bg-[#06273E] mx-auto lg:h-[441px] w-[90%] text-center lg:max-w-[816px] xl:max-w-[930px]  rounded-2xl shadow-lg z-20"
        />
        {/* Underlay card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute lg:-bottom-12 bg-[#021624] mx-auto lg:h-[381px] w-[90%] text-center lg:max-w-[736px] xl:max-w-[815px]  rounded-2xl shadow-lg z-10"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-havenDarkBlue mx-auto lg:h-[524px] text-center z-30 container lg:max-w-4xl xl:max-w-5xl w-full lg:rounded-2xl shadow-lg p-6 sm:p-10 lg:p-24"
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-havenYellow font-bold text-xl sm:text-2xl lg:text-[40px] mb-6"
          >
            Haven Insights
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-sm sm:text-base lg:text-xl xl:text-2xl mb-6 lg:mb-12 leading-relaxed"
          >
            Join thousands of Nigerian parents getting exclusive pediatric
            health tips, wellness updates, doctor Q&As, and early access to
            events at Haven Pediatric Practice.
          </motion.p>

          {/* Newsletter input */}
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="flex bg-white rounded-full overflow-hidden max-w-xl mx-auto lg:h-20 h-16 p-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className=" px-4 py-2 w-full focus:outline-none lg:text-xl"
              required
            />
            <button
              type="submit"
              className="bg-havenBlue text-white px-6 shrink-0 lg:px-10 py-2 text-base font-bold lg:text-2xl hover:bg-havenPink rounded-full transition"
            >
              Submit
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsLetter;
