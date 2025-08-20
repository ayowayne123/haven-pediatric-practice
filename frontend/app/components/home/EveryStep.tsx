"use client";
import React, { useState } from "react";
import Image from "next/image";
import Hospital from "@/public/images/hospitalBed.png";
import { VscQuote } from "react-icons/vsc";
import { motion } from "framer-motion";

type TestimonialProps = {
  name?: string;
  place?: string;
  bodyText?: string;
};

function EveryStep() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Experienced Professionals",
      description:
        "Our team includes highly trained doctors, nurses, and specialists.",
    },
    {
      title: "Modern Infrastructure",
      description:
        "Clean, tech-enabled facilities designed for comfort and safety.",
    },
    {
      title: "Affordable Care Plans",
      description: "Transparent billing and accessible payment options.",
    },
    {
      title: "Patient-Centered Culture",
      description: "We listen, we care, and we act with empathy.",
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Pink Curve */}
      <div className="bg-havenLightPink w-[140%] -translate-x-[14%] lg:min-h-[1000px] min-h-[590px] bgCurve ">
        <div className="sm:container max-w-[100vw] mx-auto lg:pt-24 xl:pt-28 px-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="xl:text-4xl lg:text-3xl font-extrabold flex flex-col lg:mb-16 text-2xl"
          >
            <span>We’re Here for You.</span>
            <span>Every Step of the Way.</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2">
            {/* Hospital Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="w-full h-[650px] relative rounded-xl overflow-hidden lg:flex hidden"
            >
              <Image
                src={Hospital}
                alt="AN hospital bed"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Features */}
            <div className="lg:ml-9 my-4 md:my-0 relative text-sm md:text-[22px] leading-[22px] md:leading-[36px] py-3 gap-y-5 lg:py-6 lg:gap-y-6 flex flex-col">
              <div className="w-[4px] bg-pink-200 rounded-lg h-full absolute left-0 top-0" />
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group cursor-pointer relative pl-6 py-3"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {activeIndex === index && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute -left-[2px] w-2 bg-havenPink rounded-2xl h-full top-0"
                      transition={{ duration: 0.4 }}
                    />
                  )}
                  <h3 className="font-bold text-actionBlue">{item.title}</h3>
                  <p className="text-black">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="lg:pt-20 lg:pb-24 pb-16 pt-16 lg:bg-havenLightPink">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:mb-16 mb-11 max-w-[215px] lg:max-w-full mx-auto"
        >
          See what patients say about us
        </motion.h2>

        <div className="cardWidth sm:overflow-x-auto no-scrollbar">
          <div className="flex sm:flex-row flex-col gap-11 w-full lg:mr-20 mr-10">
            {[
              {
                name: "Maryam Sanusi",
                place: "(Meatmadamng)",
                bodyText:
                  "I no longer have to travel to V.I for pediatric visits. Thanks to Haven pediatric practices located in Ikeja GRA. Beautiful space, warm personnel and brilliant doctors.",
              },
              {
                name: "Anonymous",
                bodyText:
                  "Your clinic is beautiful, Your staff are polite, I didn’t feel like i was in Nigeria as they were all very professional.",
              },
              {
                name: "Michael Elisha",
                bodyText:
                  "I have spent the past few days at Haven pediatric and I recommend them for any form of pediatric treatment you need for your child or wards. Thank you very much Dr Adegbajo Odedina.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <Testimonial {...t} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Testimonial: React.FC<TestimonialProps> = ({ name, place, bodyText }) => {
  return (
    <div className="lg:w-[428px] sm:w-[400px] lg:h-[480px] h-[420px] pt-20 shrink-0 rounded-2xl xl:pt-16 xl:pl-10 pr-7 pl-7 border border-black text-black flex flex-col">
      <span className="text-havenPink text-4xl mb-16">
        <VscQuote />
      </span>
      <div className="text-sm lg:text-xl leading-relaxed font-light flex flex-col justify-between h-full pb-8">
        {bodyText}
        <div className="font-extrabold text-lg lg:text-xl flex flex-col h-20">
          <span>{name}</span>
          <span>{place}</span>
        </div>
      </div>
    </div>
  );
};

export default EveryStep;
