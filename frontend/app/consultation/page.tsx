import React from "react";
import type { Metadata } from "next";
import Consultation from "./consultation";

export const metadata: Metadata = {
  title: "Book an Appointment ",
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
};
function ConsultationPage() {
  return (
    <div>
      <Consultation />
    </div>
  );
}

export default ConsultationPage;
