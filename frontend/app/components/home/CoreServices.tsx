"use client";
import React from "react";
import { motion, TargetAndTransition } from "framer-motion";

type ServiceCardProps = {
  number?: string;
  bgColor?: string;
  headingColor?: string;
  headingText?: string;
  bodyText?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number = 0): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: custom },
  }),
};

function CoreServices() {
  const services = [
    {
      number: "01",
      bgColor: "bg-havenBlue",
      headingColor: "text-[#6BB3E4]",
      headingText: "General / Specialist Pediatric Care",
      bodyText:
        "From everyday illnesses to complex conditions, our pediatric team provides both general care and access to specialists. We ensure every child receives personalized, expert attention tailored to their unique health needs.",
    },
    {
      number: "02",
      bgColor: "bg-havenPink",
      headingColor: "text-[#FF7EA8]",
      headingText: "Vaccination",
      bodyText:
        "In line with WHO standards, we provide both routine and catch-up immunizations to protect children against common preventable diseases. All vaccines are safe, up to date, and administered by experienced pediatric professionals in a calm, child-friendly environment.",
    },
    {
      number: "03",
      bgColor: "bg-havenYellow",
      headingColor: "text-[#FBDD7F]",
      headingText: "Pre-school medical screening",
      bodyText:
        "A comprehensive medical check-up designed to meet school entry requirements. We provide thorough health screenings and medical clearance for children starting or transferring to a new school, ensuring they're ready and fit for the classroom.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mb-12">
        <motion.h2
          className="lg:text-3xl text-2xl font-bold sm:text-left text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Core Services
        </motion.h2>
      </div>

      <div className="cardWidth sm:overflow-x-auto no-scrollbar">
        <div className="flex sm:flex-row flex-col gap-6 lg:gap-11 w-full md:mr-20 mr-10">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
              variants={fadeUp}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  bgColor,
  headingColor,
  headingText,
  bodyText,
}) => (
  <div
    className={`md:w-[428px] sm:w-[400px] lg:h-[660px] h-[498px] ${bgColor} shrink-0 rounded-3xl xl:py-16 xl:px-[60px] px-10 lg:px-12 py-[72px] text-white flex flex-col justify-start`}
  >
    <p
      className={`text-[40px] lg:text-[65px] font-bold lg:mb-20 mb-16 ${headingColor}`}
    >
      {number}
    </p>
    <h3 className="text-lg lg:text-[28px] font-bold lg:h-[80px] h-[50px] mb-4 mt-3">
      {headingText}
    </h3>
    <p className="text-sm lg:text-xl leading-relaxed font-extralight">
      {bodyText}
    </p>
  </div>
);

export default CoreServices;
