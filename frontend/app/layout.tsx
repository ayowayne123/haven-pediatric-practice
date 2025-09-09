import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing, toPlainText } from "next-sanity";
import { Toaster } from "sonner";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import DraftModeToast from "@/app/components/DraftModeToast";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { handleError } from "./client-utils";

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "Haven Pediatric Practice",
      template: "%s | Haven Pediatric Practice",
    },
    description: "A Pediatric Practice",
    openGraph: {
      images: [
        {
          url: "/og.png", // Place your static image in public/og-image.png
          width: 600,
          height: 630,
          alt: "Haven",
        },
      ],
    },
  };
}

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${nunito.variable} bg-white text-black`}>
      <body>
        <section className="min-h-screen pt-24">
          {/* The <Toaster> component is responsible for rendering toast notifications used in /app/client-utils.ts and /app/components/DraftModeToast.tsx */}
          <Toaster />
          {isDraftMode && (
            <>
              <DraftModeToast />

              <VisualEditing />
            </>
          )}

          <SanityLive onError={handleError} />
          <Header />
          <main className="">{children}</main>
          <Footer />
        </section>
        <SpeedInsights />
        <Link
          href="https://wa.me/2348161713397?text=Hello%20Haven%20Pediatric%20Practice!%20I%20would%20like%20to%20book%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp size={24} />
          <span className="hidden sm:inline text-sm font-medium">
            Chat with us
          </span>
        </Link>
      </body>
    </html>
  );
}
