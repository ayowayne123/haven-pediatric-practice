"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/logoFullColour.png";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-havenBlue" : "hover:text-havenPink";

  return (
    <header className="fixed z-50 h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg">
      <div className="container">
        <div className="flex items-center justify-center gap-12">
          {/* Left Nav */}
          <nav>
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 lg:gap-8 leading-5 text-xs sm:text-base tracking-tight"
            >
              <li>
                <Link href="/" className={`capitalize ${isActive("/")}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`capitalize ${isActive("/about")}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`capitalize ${isActive("/services")}`}
                >
                  Our Services
                </Link>
              </li>
            </ul>
          </nav>

          {/* Logo */}
          <Link className="flex items-center gap-2 w-32 h-16 relative" href="/">
            <Image src={logo} alt="logo" fill className="object-contain" />
          </Link>

          {/* Right Nav */}
          <nav>
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 lg:gap-8 leading-5 text-xs sm:text-base tracking-tight"
            >
              <li>
                <Link
                  href="/consulation"
                  className={`capitalize ${isActive("/consulation")}`}
                >
                  book an appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`capitalize ${isActive("/contact")}`}
                >
                  contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`capitalize ${isActive("/blog")}`}
                >
                  haven insight
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
