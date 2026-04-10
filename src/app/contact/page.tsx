"use client";

import { useState } from "react";
import Image from "next/image";

const contactItems = [
  {
    icon: "📍",
    label: "Visit Us",
    lines: [
      "Ogombo Road, Opposite Abraham Adesanya Estate",
      "Ajah, Lagos State, Nigeria",
    ],
    href: null,
  },
  {
    icon: "📞",
    label: "Call Us",
    lines: ["08132776852", "07026232126"],
    href: "tel:08132776852",
  },
  {
    icon: "🕐",
    label: "Business Hours",
    lines: ["Monday – Saturday: 8am – 7pm", "Sunday: 10am – 4pm"],
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="pt-28">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <Image
          src="/images/heroes/contact-hero.jpg"
          alt="Kazmaya World — elegant footwear"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,10,60,0.80) 0%, rgba(107,33,168,0.62) 55%, rgba(201,168,76,0.22) 100%)",
          }}
        />
        <div
          className="relative z-10 flex items-center justify-center px-6"
          style={{ minHeight: "420px" }}
        >
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <span
              className="badge inline-flex mb-6"
              style={{
                background: "rgba(201,168,76,0.18)",
                color: "#e8c96b",
                border: "1px solid rgba(201,168,76,0.5)",
              }}
            >
              ✦ Reach Out
            </span>
            <h1
              className="mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#ffffff",
              }}
            >
              Let&apos;s{" "}
              <span className="shimmer-text">Connect</span>
            </h1>
            <div className="divider-gold w-32 mx-auto mb-6" />
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.05rem)",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.8,
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              We&apos;d love to hear from you. Whether it&apos;s an order enquiry, partnership,
              or just saying hello — our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="py-4 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactItems.map((c, i) => (
              <div
                key={i}
                className="neu-card p-8 flex flex-col items-center text-center gap-4"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    background: "var(--bg)",
                    boxShadow: "6px 6px 14px #c8bfe0, -6px -6px 14px #ffffff",
                  }}
                >
                  {c.icon}
                </div>
                <h3
                  className="font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    color: "var(--text-dark)",
                  }}
                >
                  {c.label}
                </h3>
                <div className="flex flex-col gap-1">
                  {c.lines.map((line, j) =>
                    c.href && j === 0 ? (
                      <a
                        key={j}
                        href={c.href}
                        className="text-sm font-medium transition-colors duration-300 hover:text-purple-700"
                        style={{ color: "var(--text-mid)" }}
                      >
                        {line}
                      </a>
                    ) : (
                      <p
                        key={j}
                        className="text-sm"
                        style={{ color: "var(--text-light)" }}
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="neu-flat p-8 md:p-10">
              <span className="badge badge-purple-style inline-flex mb-6">✦ Send a Message</span>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "var(--text-dark)",
                }}
              >
                Get in <span className="gold-text">Touch</span>
              </h2>

              {sent ? (
                <div
                  className="rounded-2xl p-10 text-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(107,33,168,0.08), rgba(201,168,76,0.1))",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3
                    className="font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "var(--text-dark)" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="section-sub">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", subject: "", message: "" }); }}
                    className="neu-btn px-6 py-3 mt-6 text-sm font-semibold"
                    style={{ color: "var(--purple-dark)" }}
                  >
                    <span className="gold-text">Send Another</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold mb-2 block" style={{ color: "var(--text-mid)" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className="neu-input"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold mb-2 block" style={{ color: "var(--text-mid)" }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Your phone number"
                        value={form.phone}
                        onChange={handleChange}
                        className="neu-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-2 block" style={{ color: "var(--text-mid)" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="neu-input"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-2 block" style={{ color: "var(--text-mid)" }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="neu-input"
                      style={{ appearance: "none" }}
                    >
                      <option value="">Select a subject...</option>
                      <option value="order">Product Order</option>
                      <option value="enquiry">General Enquiry</option>
                      <option value="wholesale">Wholesale / Bulk Order</option>
                      <option value="partnership">Partnership</option>
                      <option value="cis">CIS Programme</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-2 block" style={{ color: "var(--text-mid)" }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us more about your enquiry..."
                      value={form.message}
                      onChange={handleChange}
                      className="neu-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60"
                    style={{
                      background: loading
                        ? "rgba(107,33,168,0.5)"
                        : "linear-gradient(135deg, #6b21a8, #7c3aed)",
                      color: "#fff",
                    }}
                  >
                    {loading ? "Sending..." : "Send Message ✦"}
                  </button>
                </form>
              )}
            </div>

            {/* Map + Logo */}
            <div className="flex flex-col gap-6">
              {/* Map placeholder */}
              <div
                className="neu-flat flex-1 overflow-hidden rounded-3xl"
                style={{ minHeight: "320px", position: "relative" }}
              >
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8"
                  style={{
                    background: "linear-gradient(135deg, rgba(107,33,168,0.06), rgba(201,168,76,0.06))",
                  }}
                >
                  <div className="text-5xl float-anim">📍</div>
                  <div className="text-center">
                    <p
                      className="font-bold mb-2"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "var(--text-dark)" }}
                    >
                      Find Us In Lagos
                    </p>
                    <p className="text-sm text-center" style={{ color: "var(--text-light)" }}>
                      Ogombo Road, Opposite Abraham Adesanya Estate<br />
                      Ajah, Lagos State, Nigeria
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Ogombo+Road+Abraham+Adesanya+Estate+Ajah+Lagos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-btn px-6 py-3 text-sm font-semibold"
                    style={{ color: "var(--purple-dark)" }}
                  >
                    <span className="gold-text">Open in Google Maps →</span>
                  </a>
                </div>
              </div>

              {/* Logo card */}
              <div className="neu-card p-8 flex items-center gap-6">
                <Image
                  src="/images/logo.jpeg"
                  alt="Kazmaya World"
                  width={80}
                  height={80}
                  className="rounded-2xl object-contain"
                />
                <div>
                  <h4
                    className="font-bold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "var(--text-dark)" }}
                  >
                    Kazmaya World
                  </h4>
                  <p className="text-xs mb-3" style={{ color: "var(--gold-dark)", fontWeight: 600, letterSpacing: "0.05em" }}>
                    COMFORT MEETS STYLE
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-light)" }}>
                    Beauty & Fashion Accessories — proudly serving Lagos and beyond since 2014.
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2348132776852?text=Hello%20Kazmaya%20World%2C%20I%27d%20like%20to%20enquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #25d366, #128c7e)",
                  color: "#fff",
                }}
              >
                <span className="text-3xl">💬</span>
                <div>
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-xs opacity-85">Quick response guaranteed</p>
                </div>
                <span className="ml-auto text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
