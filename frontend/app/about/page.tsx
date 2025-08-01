import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import teamPhoto from "@/public/images/teamPhoto.png";
import AboutCards from "./aboutCards";

export const metadata: Metadata = {
  title: "About Us ",
  description:
    "Haven Pediatric Practice offers compassionate, expert care for children from birth through adolescence. From routine checkups to urgent visits, we support every step of your child’s health journey.",
  keywords: [
    "Haven Pediatric Practice",
    "Pediatrician",
    "Children’s healthcare",
    "Child doctor",
    "Infant care",
    "Adolescent health",
    "Pediatric clinic",
    "Kids health services",
  ],
  openGraph: {
    title: "About Us | Haven Pediatric Practice",
    description:
      "Learn more about Haven Pediatric Practice — trusted pediatric care from infancy to adolescence. We're with you every step of the way.",
    url: "https://havenhospital.com/about",
    siteName: "Haven Pediatric Practice",
    type: "website",
    images: [
      {
        url: "https://havenhospital.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haven Pediatric Practice",
      },
    ],
  },
};

function Page() {
  return (
    <div>
      <PageHeader
        backgroundImage={teamPhoto.src}
        heading="Expert Care,
Heartfelt Support"
        subtext="At Haven, we provide a range of pediatric services designed to meet the unique health needs of children—from infancy through adolescence. Whether it’s a routine check-up, a school medical clearance, or urgent care, our team of experienced specialists is committed to delivering prompt, compassionate, and expert care in a child-friendly environment. Explore our services below."
      />
      <AboutCards />
    </div>
  );
}

export default Page;
