"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(240, 236, 248, 0.92)"
          : "rgba(240, 236, 248, 0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: scrolled
          ? "0 4px 20px rgba(107,33,168,0.12), 0 -1px 0 rgba(255,255,255,0.8) inset"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="rounded-2xl overflow-hidden p-1 transition-all duration-300"
            style={{
              background: "var(--bg)",
              boxShadow: "4px 4px 12px #c8bfe0, -4px -4px 12px #ffffff",
            }}
          >
            <Image
              src="/images/logo.jpeg"
              alt="Kazmaya World"
              width={56}
              height={56}
              className="rounded-xl object-contain"
            />
          </div>
          <div>
            <p
              className="font-bold tracking-wide leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.1rem",
                color: "var(--purple-deep)",
              }}
            >
              Kazmaya World
            </p>
            <p
              className="text-xs tracking-widest mt-0.5"
              style={{ color: "var(--gold)", fontWeight: 500 }}
            >
              COMFORT MEETS STYLE
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-sm ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="neu-btn px-6 py-2.5 text-sm font-semibold"
            style={{ color: "var(--purple-dark)" }}
          >
            <span className="gold-text">Order Now</span>
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl transition-all"
          style={{
            background: "var(--bg)",
            boxShadow: "4px 4px 10px #c8bfe0, -4px -4px 10px #ffffff",
          }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "var(--purple-dark)",
              transform: open ? "rotate(45deg) translate(4px,4px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "var(--gold)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "var(--purple-dark)",
              transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0" }}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-sm py-2 ${pathname === l.href ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="neu-btn px-6 py-3 text-sm font-semibold text-center"
            style={{ color: "var(--purple-dark)" }}
            onClick={() => setOpen(false)}
          >
            <span className="gold-text">Order Now</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
