"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Terms", href: "/terms" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-[rgba(0,0,0,0.09)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="/logo.png"
              alt="THETINY.SITE"
              width={787}
              height={72}
              preload
              className="h-auto w-45 min-[380px]:w-52.5 sm:w-55 md:w-48.75 lg:w-55 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[0.925rem] font-medium transition-colors pb-0.5 cursor-pointer ${isActive
                    ? "text-[#5b21f3] border-b-2 border-[#5b21f3]"
                    : "text-[#6b7280] hover:text-[#5b21f3]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-[0.875rem] font-semibold text-[#1a1a1a] bg-transparent border border-[#e5e7eb] rounded-lg px-[18px] py-[7px] hover:bg-gray-50 transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-[0.875rem] font-semibold text-white bg-[#5b21f3] hover:opacity-90 rounded-lg px-[18px] py-[8px] transition-opacity"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1a1a1a] bg-transparent cursor-pointer rounded-lg hover:bg-gray-100"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${isActive
                      ? "text-[#5b21f3] bg-[#5b21f3]/5 font-semibold"
                      : "text-gray-600 hover:text-[#5b21f3] hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold text-[#1a1a1a] border border-[#e5e7eb] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#5b21f3] hover:opacity-90 rounded-lg transition-opacity"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
