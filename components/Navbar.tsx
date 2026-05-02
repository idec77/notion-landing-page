"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-stone-200/60 bg-stone-50/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <img
            src="/idec-logo.png"
            alt="IDEC logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          IDEC
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/#free-templates"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
          >
            Free Templates
          </a>
          <a href="/#newsletter" className="btn-primary text-xs">
            Subscribe
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-stone-200 bg-stone-50 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="/#free-templates"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-stone-600"
            >
              Free Templates
            </a>
            <a href="/#newsletter" className="btn-primary mt-2 text-center text-xs">
              Subscribe
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
