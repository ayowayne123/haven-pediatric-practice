"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What services does Haven Pediatric Practice offer?",
    answer:
      "We provide expert general and specialist pediatric care (ranging from routine to complex conditions), routine and catch-up immunizations, and a dedicated pre-school clinic featuring comprehensive school-entry medical check-ups.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our clinic is located in Ikeja GRA, Lagos—specifically at 3c, Oba Dosumu, GRA, Ikeja.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can easily book an appointment using our “Book an Appointment” form available on the website. Once submitted, our staff will follow up to confirm your appointment details.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We partner with a range of HMO providers, including NEM, I.A., Avon, Leadway, Reliance, Phillips, H.P, Bupa, and AXA.",
  },
  {
    question: "What can I expect in terms of clinic environment and care?",
    answer:
      "You can easily book an appointment using our “Book an Appointment” form available on the website. Once submitted, our staff will follow up to confirm your appointment details.",
  },
  {
    question: "How do I book an appointment?",
    answer: `• Experienced Care Team: Our clinic is run by a team of highly trained doctors, nurses, and pediatric specialists.
• Modern, Child-Friendly Facilities: Designed for comfort, safety, and warmth.
• Transparent & Affordable Care: We offer clear billing and accessible payment options.
• Patient-First Culture: We truly listen, care deeply, and act with empathy.`,
  },
  {
    question: "Do you offer walk-in services?",
    answer:
      "Yes! At this child-centered clinic in Ikeja GRA, we welcome walk-ins and aim to give prompt attention in record time.",
  },
  {
    question: "Is there a way to get health advice or updates from you?",
    answer:
      "Absolutely! Check out our “Haven Insight” section for helpful health tips, such as managing picky eating or information on breast health.",
  },
  {
    question: "How can I get in touch or reach out?",
    answer: `• Email: customer.service@havenpractice.com
• Phone: Via WhatsApp link on the “Contact Us” page; look for the “wa.me” connection
• Visit Us: Drop by 3c, Oba Dosumu, GRA, Ikeja, Lagos`,
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-havenLightYellow pb-16 lg:pt-[400px] pt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold text-havenBlue mb-10">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="divide-y-[0.5px] divide-black">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5 px-6 md:px-10 lg:px-16 lg:py-10">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="font-extrabold lg:text-[22px] ">
                  {faq.question}
                </span>
                <span className="text-black font-bold text-xl">
                  {openIndex === index ? (
                    <FiMinus size={20} />
                  ) : (
                    <FiPlus size={20} />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="mt-3  whitespace-pre-line">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
