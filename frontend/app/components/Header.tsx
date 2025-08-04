"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "@/public/images/logoFullColour.png";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path ? "text-havenBlue" : "hover:text-havenPink";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/consultation", label: "Book an Appointment" },
    { href: "/contact", label: "Contact Us" },
    { href: "/blog", label: "Haven Insight" },
  ];

  return (
    <header className="fixed z-50 h-24 inset-0 md:bg-white/80 flex items-center backdrop-blur-lg">
      <div className="container ">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-12">
          <nav>
            <ul className="flex items-center gap-4 md:gap-6 lg:gap-8 text-xs sm:text-base tracking-tight">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`capitalize ${isActive(link.href)}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logo */}
          <Link className="flex items-center gap-2 w-32 h-16 relative" href="/">
            <Image src={logo} alt="logo" fill className="object-contain" />
          </Link>

          <nav>
            <ul className="flex items-center gap-4 md:gap-6 lg:gap-8 text-xs sm:text-base tracking-tight">
              {navLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`capitalize ${isActive(link.href)}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden justify-between items-center">
          <Link href="/" className="relative w-28 h-14">
            <Image src={logo} alt="logo" fill className="object-contain" />
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-3xl text-havenBlue"
          >
            <HiMenu />
          </button>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 left-0 z-50 h-screen w-[80%] max-w-xs bg-havenLightPeach text-white shadow-lg transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 pt-6">
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-black"
            >
              <HiX />
            </button>
          </div>

          <ul className="flex flex-col gap-6 mt-10 px-6">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-lg font-medium capitalize ${
                    pathname === href || pathname.includes(href)
                      ? "text-havenBlue"
                      : "text-black"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Backdrop */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
