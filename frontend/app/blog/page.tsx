import React from "react";
import { Suspense } from "react";
import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import hospitalBed from "@/public/images/hospitalBed.png";
import { AllPosts } from "@/app/components/Posts";

export const metadata: Metadata = {
  title: "Haven Insight | Blog",
  description:
    "Haven Insight is your go-to blog for trusted pediatric advice, health tips, and parenting support. Stay informed and confident through every stage of your child’s development.",
  keywords: [
    "Pediatric blog",
    "Parenting tips",
    "Child health advice",
    "Haven Insight",
    "Pediatric care articles",
    "Children’s healthcare blog",
    "Parental guidance",
  ],
  openGraph: {
    title: "Haven Insight | Blog",
    description:
      "Explore Haven Insight for expert advice, health tips, and helpful articles to guide your parenting journey with confidence.",
    url: "https://havenhospital.com/blog",
    siteName: "Haven Pediatric Practice",
    type: "website",
    images: [
      {
        url: "https://havenhospital.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haven Pediatric Blog",
      },
    ],
  },
};

async function BlogPage() {
  return (
    <div>
      <PageHeader
        backgroundImage={hospitalBed.src}
        heading="Helpful Articles,
Real Insight"
        subtext="Haven Insight is where we share expert tips, trusted health information, and practical guidance for parents and caregivers. From everyday concerns to important milestones, our blog supports your journey through every stage of your child’s growth—helping you stay informed, confident, and prepared."
      />
      <div className="">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
