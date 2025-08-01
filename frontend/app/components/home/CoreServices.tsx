import React from "react";

type ServiceCardProps = {
  number?: string;
  bgColor?: string;
  headingColor?: string;
  headingText?: string;
  bodyText?: string;
};
function CoreServices() {
  return (
    <section className=" py-16 ">
      <div className="container mb-12">
        <h2 className="text-3xl font-bold">Our Core Services</h2>
      </div>

      <div className="cardWidth overflow-x-auto no-scrollbar">
        <div className="flex gap-11 w-full mr-20">
          <ServiceCard
            number="01"
            bgColor="bg-havenBlue"
            headingColor="text-[#6BB3E4]"
            headingText="General / Specialist Pediatric Care"
            bodyText="From everyday illnesses to complex conditions, our pediatric team provides both general care and access to specialists. We ensure every child receives personalized, expert attention tailored to their unique health needs."
          />
          <ServiceCard
            number="02"
            bgColor="bg-havenPink"
            headingColor="text-[#FF7EA8]"
            headingText="Vaccination"
            bodyText="We offer routine and catch-up immunizations to protect children against common preventable diseases. Our vaccines are safe, up-to-date, and administered by experienced pediatric professionals in a calm, child-friendly environment."
          />
          <ServiceCard
            number="03"
            bgColor="bg-havenYellow "
            headingColor="text-[#FBDD7F]"
            headingText="Pre-School Clinic:"
            bodyText="A comprehensive medical check-up designed to meet school entry requirements. We provide thorough health screenings and medical clearance for children starting or transferring to a new school, ensuring they're ready and fit for the classroom."
          />
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
}) => {
  return (
    <div
      className={`lg:w-[428px] lg:h-[660px] ${bgColor} shrink-0 rounded-3xl xl:py-16 xl:px-[60px] text-white flex flex-col justify-start`}
    >
      <p
        className={`text-[48px] lg:text-[65px] font-bold lg:mb-20 ${headingColor}`}
      >
        {number}
      </p>
      <h3 className="text-lg lg:text-[28px] font-bold lg:h-[80px] mb-4 mt-3 ">
        {headingText}
      </h3>
      <p className="text-sm lg:text-xl leading-relaxed  font-extralight">
        {bodyText}
      </p>
    </div>
  );
};

export default CoreServices;
