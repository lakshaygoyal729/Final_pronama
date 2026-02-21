"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO + NAME */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon-dark-32x32.png"
            alt="Pronama Infratel Logo"
            width={44}
            height={44}
            className="object-contain"
          />
          <div className="hidden sm:block leading-tight">
            <span className="block text-lg font-bold text-slate-900">
              Pronama Infratel
            </span>
            <span className="block text-xs text-slate-500">
              Pvt Ltd
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-teal-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP RIGHT */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+91-8178297956"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-teal-600"
          >
            <Phone className="h-4 w-4" />
            <span>+91-8178297956</span>
          </a>
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          className="rounded-md p-2 text-slate-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t pt-4">
              <a
                href="tel:+91-8178297956"
                className="flex items-center gap-2 px-4 text-sm text-slate-600"
              >
                <Phone className="h-4 w-4" />
                <span>+91-8178297956</span>
              </a>
              <Button asChild className="mx-4 bg-teal-600 hover:bg-teal-700">
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}