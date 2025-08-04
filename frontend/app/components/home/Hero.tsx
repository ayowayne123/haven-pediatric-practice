import React from "react";
import Link from "next/link";
import mother from "@/public/images/motherDaughter.png";
import girl from "@/public/images/girl.png";
import girl2 from "@/public/images/girl2.png";
import doctor from "@/public/images/doctor.png";
import schoolBoy from "@/public/images/schoolBoy.png";
import womanBack from "@/public/images/womanBack.png";
import bed from "@/public/images/bed.svg";
import hands from "@/public/images/hands.svg";
import bg from "@/public/images/bgHero.png";
import Image, { StaticImageData } from "next/image";

interface CircledPhotoProps {
  image: StaticImageData;
  alt?: string;
  bgColor: string;
  width: number;
  height: number;
  position: string;
  imgWidth?: number;
  imgHeight?: number;
}

const CircledPhoto = ({
  image,
  alt = "arc image",
  bgColor,
  width,
  height,
  position,
  imgWidth,
  imgHeight,
}: CircledPhotoProps) => {
  return (
    <div
      className={`absolute ${position} rounded-full flex items-center justify-center overflow-hidden ${bgColor}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className={`relative w-full h-full`}>
        <Image
          src={image}
          alt={alt}
          fill
          className=" object-bottom object-contain"
        />
      </div>
    </div>
  );
};

function Hero() {
  return (
    <>
      <section
        className="bg-[#F7B888]/20 font-light "
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="container pt-24 flex justify-center items-center flex-col  ">
          <h1 className="mx-auto flex justify-center items-center flex-col text-havenBlue text-center px-12 md:px-0">
            <span>Expert Pediatric Care,</span>
            <span>Every Step of the Way</span>
          </h1>
          <p className="my-8 px-12 md:px-0 text-center xl:text-2xl xl:w-[695px] md:text-xl md:w-[600px] 2xl:text-[27px] max-w-[730px]">
            The first child-centered clinic in Ikeja GRA. Offering specialized
            pediatric care for children. walk in and receive the attention your
            child needs in record time
          </p>
          <div className="flex md:flex-row flex-col gap-5">
            <Link href="/consultation" className="pryBtn btn">
              Consultation
            </Link>
            <Link href="/services" className="secBtn btn">
              Our Services
            </Link>
          </div>

          {/* Desktop Images */}
          <div className="relative lg:h-[650px] lg:flex hidden w-full">
            <CircledPhoto
              image={mother}
              bgColor="bg-havenGreen"
              width={140}
              height={140}
              position="left-16 -top-6"
            />
            <CircledPhoto
              image={girl2}
              bgColor="bg-havenBlue"
              width={120}
              height={120}
              position="right-12 -top-11"
            />
            <CircledPhoto
              image={girl}
              bgColor="bg-havenYellow"
              width={120}
              height={120}
              position="left-64 top-48"
            />
            <CircledPhoto
              image={womanBack}
              bgColor="bg-white"
              width={160}
              height={160}
              position="right-64 top-40"
            />
            <div
              className={`absolute w-[178px] h-[178px] bottom-[370px] bg-havenPink rounded-full left-[calc(50%-86px)]  flex  `}
            >
              <div className={`relative w-80 h-80  ]`}>
                <Image
                  src={schoolBoy}
                  alt="A school Boy dressed in uniform"
                  fill
                  className=" object-bottom object-contain"
                />
              </div>
            </div>

            <div className=" absolute top-[420px] ">
              <div className="bg-havenDarkBlue rounded-[70px]  w-full min-h-[580px] text-white lg:grid-cols-2 grid  ">
                <div className="py-16 px-16  lg:text-xl space-y-8 flex flex-col gap-4">
                  <h4 className="bg-havenPink  py-3 px-9 max-w-fit rounded-full">
                    About Haven Pediatric Practice
                  </h4>
                  <span className="leading-[170%]">
                    At Haven Pediatric Practice, we know that your child’s
                    health and happiness come first. That’s why we’ve created a
                    warm, welcoming space where children receive compassionate,
                    expert care from infancy through adolescence.
                  </span>
                  <span className="leading-[170%]">
                    Our experienced team is here to support your little one’s
                    growth, well-being, and development with personalized
                    attention in a safe, nurturing environment. More than just a
                    clinic, we’re your partners in raising healthy, happy kids.
                  </span>
                </div>
                <div className="lg:h-[calc(100%_+_40px)] w-full relative">
                  <Image
                    src={doctor}
                    alt="Black Female doctor dressed in white coat and stethoscope"
                    fill
                    className="object-contain object-bottom-right -translate-y-[40px] -translate-x-10"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Images */}
          <div className="relative h-[500px] lg:hidden flex w-full">
            <CircledPhoto
              image={mother}
              bgColor="bg-havenGreen"
              width={65}
              height={65}
              position="left-0 top-11"
            />
            <CircledPhoto
              image={girl2}
              bgColor="bg-havenBlue"
              width={65}
              height={65}
              position="right-0 top-11"
            />
            <CircledPhoto
              image={girl}
              bgColor="bg-havenYellow"
              width={40}
              height={40}
              position="left-2 top-48"
            />
            <CircledPhoto
              image={womanBack}
              bgColor="bg-white"
              width={46}
              height={46}
              position="right-2 top-40"
            />
            <div
              className={`absolute w-[80px]  h-[80px] top-[130px] bg-havenPink rounded-full left-[calc(50%-40px)]  flex  `}
            >
              <div className={`relative w-40 h-40 ]`}>
                <Image
                  src={schoolBoy}
                  alt="A school Boy dressed in uniform"
                  fill
                  className=" object-bottom object-contain"
                />
              </div>
            </div>

            <div className=" absolute  top-[280px] ">
              <div className="bg-havenDarkBlue rounded-[20px]  w-full min-h-[580px] text-white  grid  ">
                <div className="py-8 px-8  lg:text-xl space-y-3 flex flex-col gap-4">
                  <h4 className="bg-havenPink  py-3 px-9 max-w-full rounded-[10px] text-center">
                    About Haven Pediatric Practice
                  </h4>
                  <span className="text-sm text-center leading-[170%]">
                    At Haven Pediatric Practice, we know that your child’s
                    health and happiness come first. That’s why we’ve created a
                    warm, welcoming space where children receive compassionate,
                    expert care from infancy through adolescence.
                  </span>
                  <span className="text-sm text-center leading-[170%]">
                    Our experienced team is here to support your little one’s
                    growth, well-being, and development with personalized
                    attention in a safe, nurturing environment. More than just a
                    clinic, we’re your partners in raising healthy, happy kids.
                  </span>
                </div>
                <div className="h-80 w-full relative ">
                  <Image
                    src={doctor}
                    alt="Black Female doctor dressed in white coat and stethoscope"
                    fill
                    className="object-contain object-bottom "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[620px] sm:h-[500px]  w-full bg-white"></div>
      <section className="lg:my-24 grid lg:grid-cols-7 sm:grid-cols-2 gap-8 sm:container max-w-60 px-0 mx-auto">
        <div className=" aboutList lg:col-span-4 ">
          <span className="text-havenGreen bg-havenGreen/20">30+</span>
          <p>Led by a team of experts with over 30 years of trusted care</p>
        </div>
        <div className=" aboutList lg:col-span-3 ">
          <span className="text-havenPink bg-havenPink/20">
            <Image
              src={bed}
              alt="bed"
              width={40}
              height={40}
              className="object-contain"
            />
          </span>
          <p>State-of-the-art Facilities</p>
        </div>
        <div className=" aboutList lg:col-span-4 ">
          <span className="text-havenBlue bg-havenBlue/20">
            <Image
              src={hands}
              alt="bed"
              width={42}
              height={38}
              className="object-contain"
            />
          </span>
          <p>Affordable Private Healthcare</p>
        </div>
        <div className=" aboutList lg:col-span-3 ">
          <span className="text-havenYellow bg-havenYellow/20">24/7</span>
          <p>Speedy access to pediatric specialist</p>
        </div>
      </section>
    </>
  );
}

export default Hero;
