import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #1e0a3c, #3b0764, #2d1060)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top divider */}
        <div className="divider-gold w-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div
                className="rounded-2xl overflow-hidden p-1"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                <Image
                  src="/images/logo.jpeg"
                  alt="Kazmaya World"
                  width={56}
                  height={56}
                  className="rounded-xl"
                />
              </div>
              <div>
                <p
                  className="font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
                >
                  Kazmaya World
                </p>
                <p className="text-xs tracking-widest" style={{ color: "var(--gold)" }}>
                  COMFORT MEETS STYLE
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Your one-stop destination for premium beauty, fashion, and school accessories in Lagos, Nigeria.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {["📘", "📸", "🐦", "💼"].map((icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-base transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold mb-5 text-sm tracking-widest uppercase"
              style={{ color: "var(--gold)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Catalogue", href: "/catalogue" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-all duration-300 hover:text-white flex items-center gap-2 group"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    <span
                      className="w-5 h-px transition-all duration-300 group-hover:w-8"
                      style={{ background: "var(--gold)" }}
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold mb-5 text-sm tracking-widest uppercase"
              style={{ color: "var(--gold)" }}
            >
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="text-lg mt-0.5">📍</span>
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Ogombo Road, Opposite Abraham Adesanya Estate, Ajah, Lagos State
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <div className="flex flex-col gap-1">
                  <a href="tel:08132776852" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                    08132776852
                  </a>
                  <a href="tel:07026232126" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                    07026232126
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="divider-gold w-full mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Kazmaya World. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Beauty & Fashion Accessories — Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
