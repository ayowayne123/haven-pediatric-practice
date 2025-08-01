import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import {
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterEllipseIcon,
  NewTwitterRectangleIcon,
} from "hugeicons-react";

export default function Footer() {
  return (
    <footer className="bg-black relative text-white lg:py-28">
      <div className="container grid lg:grid-cols-6 gap-24 text-lg">
        <div className="col-span-3 space-y-12">
          <Image src={logo} alt="logo" width={48} height={48} />
          <div>© 2025 Haven Pediatric Practice. All rights reserved.</div>
        </div>

        <nav className="col-span-2 ">
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-2 gap-y-4 capitalize"
          >
            <li>
              <Link href="/home">home</Link>
            </li>
            <li>
              <Link href="/about">about us</Link>
            </li>
            <li>
              <Link href="/services">our services</Link>
            </li>
            <li>
              <Link href="/consulation">Consulation</Link>
            </li>
            <li>
              <Link href="/contact">contact us</Link>
            </li>
            <li>
              <Link href="/blog">haven insight</Link>
            </li>
          </ul>
        </nav>
        <div className="col-span-1 space-y-10">
          <div className="grid grid-cols-3 ">
            <Link href="https://instagram.com" target="_blank">
              <InstagramIcon size={30} />
            </Link>

            <Link href="https://instagram.com" target="_blank">
              <Linkedin01Icon size={30} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <NewTwitterRectangleIcon size={30} />
            </Link>
          </div>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
