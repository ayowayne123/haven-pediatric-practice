import React from "react";
import Link from "next/link";
import Image from "next/image";
import hospitalRoom from "@/public/images/hospitalRoom.png";

type CardProps = {
  bgColor?: string;
  doubleColumn?: boolean;
  headingText?: string;
  bodyText?: string;
  linkName?: string;
};

const havenReasons = [
  "All-in-One Pediatric Clinic",
  "Trusted Child Health Specialists",
  "Minimal Wait Times",
  "Emergency Pediatric Room",
  "Laboratory",
  "Vaccination",
  "Pre-school Clinic",
  "Allergy and asthma management",
  "Echocardiogram",
];

const CardInfo = [
  {
    headingText: "General Pediatric Care",
    bodyText:
      "From sniffles to milestones, our general pediatric services in Lagos cover everything your growing child needs. We manage common childhood illnesses, monitor growth and development, and provide health education to empower parents",
    linkName: "Book Treatment",
    bgColor: "bg-[#FEF6DC]",
  },
  {
    headingText: "Pediatric Emergency & Urgent Care",
    bodyText:
      "Because emergencies don’t wait, neither do we. Our pediatric emergency services in Ikeja provide rapid, effective care for injuries, fevers, infections, and more—handled in a child-friendly, calming environment.",
    linkName: "Book Treatment",
    bgColor: "bg-[#E9F4FB]",
  },
  {
    headingText: "Specialist Pediatric Consultations",
    bodyText:
      "Your child deserves expert attention. We offer access to trusted pediatric specialists in Lagos, including: Pediatric Cardiology, Pediatric Dermatology ENT (Ear, Nose & Throat), Pediatric Neurology, Pediatric Endocrinology",
    linkName: "Book Consultation",
    bgColor: "bg-[#E9F7F0]",
  },
  {
    headingText: "Minor & Intermediate Pediatric Procedures",
    bodyText:
      "From infant circumcision in Lagos to wound care and minor surgeries, our procedures are performed with precision and compassion—minimizing stress for you and your child.",
    linkName: "Book Treatment",
    bgColor: "bg-[#FAFAFA]",
  },
  {
    headingText: "Developmental & Behavioral Assessments",
    bodyText:
      "Is your child hitting their milestones? We provide comprehensive developmental evaluations and behavioral screenings to guide your parenting journey and catch concerns early.",
    linkName: "Book Appointment",
    bgColor: "bg-[#FEF4ED]",
  },
  {
    headingText: "Nutritional & Growth Monitoring",
    bodyText:
      "Nutrition fuels growth. At Haven, we track your child’s weight, height, and dietary needs—ensuring they stay on the path to a vibrant, healthy life.",
    linkName: "Book Appointment",
    bgColor: "bg-[#FEF6DC]",
  },
  {
    headingText: "Adolescent & Mental Health Support",
    bodyText:
      "Teen years come with big changes. Our adolescent health services focus on physical, emotional, and mental well-being—with mental health support tailored for Nigerian teens.",
    linkName: "Book Appointment",
    bgColor: "bg-[#E9F7F0]",
  },
  {
    doubleColumn: true,
  },
];

function AboutCards() {
  return (
    <div className="grid lg:grid-cols-3 xl:gap-5 lg:gap-3 2xl:gap-9 container lg:py-28 xl:py-32">
      {CardInfo.map((card, index) => (
        <Card
          bgColor={card.bgColor}
          headingText={card.headingText}
          bodyText={card.bodyText}
          linkName={card.linkName}
          doubleColumn={card.doubleColumn}
          key={index}
        />
      ))}
    </div>
  );
}

const Card: React.FC<CardProps> = ({
  bgColor,
  doubleColumn,
  headingText,
  bodyText,
  linkName,
}) => {
  if (doubleColumn === true) {
    return (
      <div
        className={`text-white lg:h-[440px] text-sm w-full bg-cover bg-no-repeat bg-center col-span-2 p-6 rounded-[20px] flex flex-col justify-between `}
        style={{
          backgroundImage: ` url(${hospitalRoom.src})`,
        }}
      >
        <div className="bg-havenDarkBlue h-full w-full rounded-[10px] px-12 py-9">
          <h3 className="lg:text-[26px] font-extrabold flex flex-col">
            <span>Why Families</span>
            <span> Choose Haven</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 py-8">
            {havenReasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-6  ">
                <div className="border-havenYellow w-4 h-4 border-4 rounded-full" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`lg:h-[440px] text-sm w-full col-span-1 px-10 pb-[60px] pt-[90px] rounded-[20px] flex flex-col justify-between ${bgColor}`}
      >
        <h3 className="lg:text-2xl xl:text-[26px] font-extrabold xl:h-[70px] ">
          {headingText}
        </h3>
        <p className="leading-[27px]">{bodyText}</p>
        <Link
          className="underline underline-offset-4 hover:text-havenBlue w-max"
          href="/consultation"
        >
          {linkName}
        </Link>
      </div>
    );
  }
};

export default AboutCards;
