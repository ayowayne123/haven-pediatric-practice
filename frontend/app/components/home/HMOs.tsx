import React from "react";
import Image from "next/image";
import nem from "@/public/logos/nem2.png";
import ila from "@/public/logos/ila.png";
import avon from "@/public/logos/avon.png";
import leadway from "@/public/logos/leadway.png";
import reliance from "@/public/logos/reliance.png";
import phillips from "@/public/logos/phillips.png";
import bupa from "@/public/logos/bupa.png";
import hp from "@/public/logos/hp.png";
import axa from "@/public/logos/axa.png";

const hmoPartners = [
  {
    src: nem,
    alt: "logo of nem",
  },
  {
    src: ila,
    alt: "logo of ila",
  },
  {
    src: avon,
    alt: "logo of avon",
  },
  {
    src: leadway,
    alt: "logo of leadway",
  },
  {
    src: reliance,
    alt: "logo of reliance",
  },
  {
    src: phillips,
    alt: "logo of phillips",
  },
  {
    src: bupa,
    alt: "logo of bupa",
  },
  {
    src: hp,
    alt: "logo of hp",
  },
  {
    src: axa,
    alt: "logo of axa",
  },
];

function HMOs() {
  return (
    <section className="lg:py-36 py-16 bg-[#FFFDF6] md:bg-white">
      <h2 className="text-center  mb-12 lg:mb-20">Our HMO Partners</h2>
      <div className="cardWidth flex flex-row overflow-x-auto snap-mandatory snap-x gap-9  no-scrollbar">
        {hmoPartners.map((partner, index) => (
          <div
            key={index}
            className="lg:w-[220px] w-[130px] h-[52px] lg:h-[76px] lg:px-5 lg:not-odd:py-2 relative  shrink-0 snap-center"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HMOs;
