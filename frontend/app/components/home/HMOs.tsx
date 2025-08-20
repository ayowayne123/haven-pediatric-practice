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
  { src: nem, alt: "logo of nem", className: "lg:py-[5.5px]" },
  { src: ila, alt: "logo of ila", className: "lg:py-3" },
  { src: avon, alt: "logo of avon", className: "lg:py-2" },
  { src: leadway, alt: "logo of leadway", className: "lg:py-[18px]" },
  { src: reliance, alt: "logo of reliance", className: "lg:py-4" },
  { src: phillips, alt: "logo of phillips", className: "lg:py-[29px]" },
  { src: hp, alt: "logo of hp", className: "lg:py-[31px]" },
  { src: bupa, alt: "logo of bupa", className: "lg:py-1.5" },
  { src: axa, alt: "logo of axa", className: "lg:py-1" },
];

function HMOs() {
  return (
    <section className="lg:py-36 py-16 bg-[#FFFDF6] md:bg-white overflow-hidden">
      <h2 className="text-center mb-12 lg:mb-20">Our HMO Partners</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-9 animate-infinite-scroll w-max">
          {[...hmoPartners, ...hmoPartners].map((partner, index) => (
            <div
              key={index}
              className="lg:w-[221px] w-[130px] h-[52px] lg:h-[88px] relative shrink-0"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className={`object-contain ${partner.className}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HMOs;
