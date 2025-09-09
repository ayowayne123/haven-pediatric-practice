import Image from "next/image";
import cmd from "@/public/images/cmd.png";
import olatunde from "@/public/images/olatunde.png";
import motunrayo from "@/public/images/motunrayo.png";

const sections = [
  {
    title: "Our Mission",
    body: "To deliver high-quality, compassionate pediatric care in a child-centered environment that supports every stage of your child’s growth and development.",
    bg: "bg-[#E9F7F0]",
  },
  {
    title: "Who We Serve",
    body: "From newborns needing their first vaccines to teenagers navigating complex health needs. We proudly serve children across Lagos with personalized care tailored to their age, condition, and personality.",
    bg: "bg-[#FEF4ED]",
  },
  {
    title: "What Makes Us Different",
    body: (
      <>
        <p>
          <strong>All-in-One Pediatric Expertise:</strong> Access to a wide
          range of pediatric services and specialists under one roof.
        </p>
        <p className="mt-6">
          <strong>Family-Centered Approach:</strong> We work with parents, not
          just for them—because you know your child best.
        </p>
        <p className="mt-6">
          <strong>Child-Friendly Spaces:</strong> Our clinic features themed
          rooms (Safari, Ocean, and Dino zones!) to ease anxiety and make visits
          fun.
        </p>
        <p className="mt-6">
          <strong>Fast, Reliable Access to Care:</strong> With minimal wait
          times, a dedicated pediatric emergency room, and a full-featured
          online patient portal, we’re built for today’s busy families.
        </p>
      </>
    ),
    bg: "bg-[#FEF6DC]",
  },
  {
    title: "Our Team",
    body: "Our team of experienced pediatricians, nurses, and support staff are locally trained and globally informed, combining skill with compassion. We treat every child like they’re our own—because to us, they are.",
    bg: "bg-white",
  },
];

export default function AboutCards() {
  return (
    <div className="space-y-4 container pt-24 pb-32">
      {sections.map((section, i) => (
        <div
          key={i}
          className={`grid grid-cols-12 ${section.bg} p-6 lg:py-11 lg:px-16 px-7 py-16  rounded-lg`}
        >
          <div className="col-span-12 md:col-span-3 font-extrabold text-xl lg:text-[26px] text-black max-w-[157px] mb-6 lg:mb-0">
            {section.title}
          </div>
          <div className="col-span-12 md:col-span-9 text-black text-sm lg:text-xl leading-loose space-y-1">
            {section.body}
          </div>
        </div>
      ))}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <div className="relative w-full h-[470px] md:h-[400px] bg-havenPink rounded-[20px] overflow-hidden">
            <Image
              className="object-cover"
              src={cmd}
              alt="Photo of Chief Medical Officer"
              fill
            />
          </div>
          <h4 className="font-bold text-xl lg:text-left w-full text-centerlg:text-[28px] mt-8 mb-2">
            Dr. Odedina Adegbajo
          </h4>
          <p className=" text-sm lg:text-xl text-[#625C5C] lg:pr-4">
            Chief Medical Director
          </p>
        </div>
        <div className="flex flex-col">
          <div className="relative w-full h-[470px] md:h-[400px] bg-havenBlue rounded-[20px] overflow-hidden">
            <Image
              className="object-cover"
              src={olatunde}
              alt="Photo of  Dr. Olatunde Odusote"
              fill
            />
          </div>
          <h4 className="font-bold text-xl lg:text-left w-full text-centerlg:text-[28px] mt-8 mb-2">
            Dr. Olatunde Odusote
          </h4>
          <p className=" text-sm lg:text-xl text-[#625C5C] lg:pr-4">
            Consultant Pediatrician, Allergologist and Dermatologist.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="relative w-full h-[470px] md:h-[400px] bg-havenYellow rounded-[20px] overflow-hidden">
            <Image
              className="object-cover"
              src={motunrayo}
              alt="Photo of  Dr. Motunrayo Oluwabukola"
              fill
            />
          </div>
          <h4 className="font-bold text-xl lg:text-left w-full text-centerlg:text-[28px] mt-8 mb-2">
            Dr. Motunrayo Oluwabukola
          </h4>
          <p className=" text-sm lg:text-xl text-[#625C5C] lg:pr-4">
            Paediatric Hematology / Oncologist
          </p>
        </div>
      </div>
    </div>
  );
}
