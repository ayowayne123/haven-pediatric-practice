import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import hospitalBed from "@/public/images/hospitalBed.png";
import AboutCards from "./aboutCards";

export const metadata: Metadata = {
  title: "Our Services ",
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
    title: "Our Services | Haven Pediatric Practice",
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
        backgroundImage={hospitalBed.src}
        heading="Compassionate,
Expert Care for 
Every Child"
        subtext="At Haven Pediatric Practice, we provide expert, compassionate care for children from infancy through adolescence. Whether it’s a routine checkup, urgent need, or specialist visit, we’re here every step of the way—making each appointment a step toward your child’s brighter, healthier future."
      />
      <AboutCards />
    </div>
  );
}

export default Page;
