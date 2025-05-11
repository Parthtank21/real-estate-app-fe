import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FooterSection() {
  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4">
            <Link href="/" className="text-xl font-bold" scroll={false}>
              RENTIFUL
            </Link>
          </div>
          <nav className="mb-4">
            <ul className="flex space-x-6">
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">FAQs</Link>
              </li>
              <li>
                <Link href="/">Terms</Link>
              </li>
              <li>
                <Link href="/">Privacy</Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4 mb-4">
            <a
              href="#"
              aria-label="facebook"
              className="hover:text-primary-600"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="instagram"
              className="hover:text-primary-600"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="linkedin"
              className="hover:text-primary-600"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" aria-label="twitter" className="hover:text-primary-600">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="youtube" className="hover:text-primary-600">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 flex justify-center space-x-4">
          <span>© RENTiful. All rights reserved.</span>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
