"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/", label: "मुख्यपृष्ठ" },
  { href: "/about", label: "आमच्याबद्दल" },
  { href: "/services", label: "सेवा" },
  { href: "/reviews", label: "अभिप्राय" },
  { href: "/rules", label: "नियम व अटी" },
  { href: "/contact", label: "संपर्क" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-4"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="श्री नाथ Associates" 
              width={240} 
              height={60} 
              className="h-14 md:h-16 w-auto object-contain"
              priority
            />
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-semibold transition-colors hover:text-[#D32F2F] ${pathname === link.href ? "text-[#D32F2F]" : "text-[#111111]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="tel:+919860946943"
              className="bg-[#D32F2F] text-white px-5 py-2 rounded-full font-bold hover:bg-red-700 transition-colors"
            >
              संपर्क साधा
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#111111] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col py-4 px-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold ${pathname === link.href ? "text-[#D32F2F]" : "text-[#111111]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919860946943"
              className="bg-[#D32F2F] text-white px-5 py-3 rounded-md font-bold text-center mt-4"
            >
              संपर्क साधा
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
