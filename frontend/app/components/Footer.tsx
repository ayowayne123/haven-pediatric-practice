import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import {
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterEllipseIcon,
  Facebook01Icon,
  NewTwitterRectangleIcon,
} from "hugeicons-react";

export default function Footer() {
  return (
    <footer className="bg-black relative text-white lg:py-28 py-16">
      <div className="container grid lg:grid-cols-6 gap-12 lg:gap-24 text-lg">
        <div className="lg:col-span-3 space-y-8 lg:block flex flex-col items-center justify-center">
          <Image src={logo} alt="logo" width={48} height={48} />
          <div className="hidden md:block">
            © 2025 Haven Pediatric Practice. All rights reserved.
          </div>
          <div className="hidden md:block">
            <p>customer.service@havenpractice.com</p>
            <p>3c, Oba Dosumu, GRA, Ikeja, Lagos, Nigeria</p>
          </div>
        </div>

        <nav className="lg:col-span-2 ">
          <ul
            role="list"
            className="lg:grid lg:grid-cols-2 hidden gap-x-2 gap-y-4 capitalize "
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
              <Link
                href="https://wa.me/2348161713397"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact us
              </Link>
            </li>
            <li>
              <Link href="/blog">haven insight</Link>
            </li>
          </ul>
          <ul
            role="list"
            className="flex flex-row flex-wrap lg:hidden gap-y-4 px-4 capitalize items-center justify-center w-full text-center"
          >
            <li className="basis-1/2 text-xs ">
              <Link href="/home">home</Link>
            </li>
            <li className="basis-1/2 text-xs ">
              <Link href="/about">about us</Link>
            </li>
            <li className="basis-1/2 text-xs ">
              <Link href="/services">our services</Link>
            </li>
            <li className="basis-1/2 text-xs ">
              <Link href="/consulation">consulation</Link>
            </li>
            <li className="basis-1/2 text-xs ">
              <Link href="/contact">contact us</Link>
            </li>
            <li className="basis-1/2 text-xs ">
              <Link href="/blog">haven insight</Link>
            </li>
          </ul>
        </nav>
        <div className="lg:col-span-1 lg:space-y-10 space-y-4 mx-auto">
          <div className="lg:grid lg:grid-cols-4  flex gap-4">
            <Link
              href="https://www.instagram.com/havenpediatricpractices"
              target="_blank"
            >
              <InstagramIcon size={30} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/haven-pediatric-practice/"
              target="_blank"
            >
              <Linkedin01Icon size={30} />
            </Link>
            <Link href="https://x.com/HavenPediatric" target="_blank">
              <NewTwitterRectangleIcon size={30} />
            </Link>
            <Link
              href="https://web.facebook.com/profile.php?id=61574197852460"
              target="_blank"
            >
              <Facebook01Icon size={30} />
            </Link>
          </div>
          <span className="lg:text-left text-center">Lagos, Nigeria</span>
        </div>
        <div className="md:hidden text-xs text-center">
          © 2025 Haven Pediatric Practice. All rights reserved.
        </div>
        <div className="md:hidden text-xs text-center">
          <p>customer.service@havenpractice.com</p>
          <p>3c, Oba Dosumu, GRA, Ikeja, Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
