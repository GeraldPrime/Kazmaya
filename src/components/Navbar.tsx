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
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "10px",
            borderRadius: "12px",
            background: "var(--bg)",
            boxShadow: "4px 4px 10px #c8bfe0, -4px -4px 10px #ffffff",
            border: "none",
            cursor: "pointer",
          }}
          className="burger-btn"
        >
          <span style={{ display: "block", width: "24px", height: "2px", background: "var(--purple-dark)", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "var(--gold)", transition: "all 0.3s", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "var(--purple-dark)", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="burger-menu"
        style={{
          display: "none",
          flexDirection: "column",
          gap: "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.3s ease",
          maxHeight: open ? "400px" : "0",
          opacity: open ? 1 : 0,
        }}
      >
        <div style={{ padding: "0.5rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${pathname === l.href ? " active" : ""}`}
              style={{ fontSize: "0.9rem", padding: "0.5rem 0", display: "block" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="neu-btn"
            style={{ padding: "0.75rem 1.5rem", fontSize: "0.9rem", fontWeight: 600, textAlign: "center", color: "var(--purple-dark)", textDecoration: "none", display: "block" }}
            onClick={() => setOpen(false)}
          >
            <span className="gold-text">Order Now</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
