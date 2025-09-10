import { Suspense } from "react";
import Link from "next/link";
import NewsLetter from "@/app/components/home/NewsLetter";
import Hero from "@/app/components/home/Hero";
import CoreServices from "@/app/components/home/CoreServices";
import EveryStep from "@/app/components/home/EveryStep";
import HMOs from "@/app/components/home/HMOs";
import FAQ from "./components/home/Faq";

import { RecentPosts } from "@/app/components/Posts";

export default async function Page() {
  return (
    <>
      <div className="relative">
        <Hero />
        <CoreServices />
        <EveryStep />
        <HMOs />
      </div>
      <div className="bg-[#FFFDF6] md:bg-white">
        <div className="container pt-11">
          <h2 className="text-3xl font-bold text-havenBlue lg:text-black sm:text-4xl lg:text-[40px] flex flex-col text-center">
            <span> Latest Health Tips</span>
            <span> Stay Informed. Stay Healthy</span>
          </h2>
          <aside className="py-12 sm:py-20">
            <Suspense>{await RecentPosts()}</Suspense>
          </aside>
        </div>
      </div>
      <div>
        <NewsLetter />
        <FAQ />
      </div>
    </>
  );
}
