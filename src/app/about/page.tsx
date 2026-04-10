import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: "⭐",
    title: "Integrity",
    body: "We uphold the highest standards of integrity in our work. Honest in all our dealings, working together as a team to meet our customers' needs.",
  },
  {
    icon: "💡",
    title: "Innovation",
    body: "Our experiences, training, and passion drive creative innovations — ensuring the authenticity of our products and top-notch customer service.",
  },
  {
    icon: "🤝",
    title: "Teamwork",
    body: "From concept to delivery, our team works with commitment, diligence, and expertise — the foundation of every successful project.",
  },
  {
    icon: "🌟",
    title: "Excellence",
    body: "We pursue excellence in every product and service, bringing our company to the forefront of quality design, production, and sales globally.",
  },
];

const team = [
  {
    name: "Catherine Okedu-Kamalu",
    role: "Founder / CEO",
    initials: "CK",
    color: "#6b21a8",
    bio: "Visionary leader and founder of Kazmaya World, driving the mission to deliver world-class fashion and beauty products across Nigeria and beyond.",
  },
  {
    name: "Mark Kamalu",
    role: "Executive Director / Project Manager",
    initials: "MK",
    color: "#c9a84c",
    bio: "10+ years of experience in supply chain & distribution, production, sales, marketing, and business development across Manufacturing and Retail of Consumer Goods.",
  },
  {
    name: "Joan Aniaka",
    role: "Marketing & Operations",
    initials: "JA",
    color: "#7c3aed",
    bio: "Drives marketing strategy and operational excellence, ensuring seamless delivery of Kazmaya World's promise to every customer.",
  },
  {
    name: "Ese Erejuwa",
    role: "Product Design",
    initials: "EE",
    color: "#a07830",
    bio: "Creative force behind Kazmaya World's product aesthetic — blending contemporary design with functional elegance.",
  },
];

const milestones = [
  { year: "2014", event: "Kazmaya World founded in Lagos, Nigeria" },
  { year: "2016", event: "Launched Kids World — school bags & accessories line" },
  { year: "2018", event: "Expanded into fashion and beauty accessories" },
  { year: "2020", event: "Partnered with Adels Hub & D'Divas Hub" },
  { year: "2022", event: "Launched CIS Community Impact Programme" },
  { year: "2024", event: "Introduced import & export services globally" },
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "460px" }}>
        <Image
          src="/images/heroes/about-hero.jpg"
          alt="Kazmaya World — fashion lifestyle"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,10,60,0.82) 0%, rgba(59,7,100,0.70) 40%, rgba(107,33,168,0.55) 80%, rgba(201,168,76,0.25) 100%)",
          }}
        />
        <div
          className="relative z-10 flex items-center justify-center px-6"
          style={{ minHeight: "460px" }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span
              className="badge inline-flex mb-6"
              style={{
                background: "rgba(201,168,76,0.18)",
                color: "#e8c96b",
                border: "1px solid rgba(201,168,76,0.5)",
              }}
            >
              ✦ Our Story
            </span>
            <h1
              className="mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#ffffff",
              }}
            >
              The Story Behind{" "}
              <span className="shimmer-text">Kazmaya World</span>
            </h1>
            <div className="divider-gold w-32 mx-auto mb-8" />
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.8,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Born from a passion for fashion and a commitment to quality, Kazmaya World
              has been bringing style and comfort to families across Lagos — and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT BODY ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="neu-flat p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="flex flex-col gap-6">
              <span className="badge badge-purple-style inline-flex w-fit">✦ About Us</span>
              <h2 className="section-title">
                Fashion is an{" "}
                <span style={{ fontStyle: "italic", color: "var(--purple-dark)" }}>
                  ageless adventure
                </span>
              </h2>
              <p className="section-sub">
                Kazmaya World is a beauty and fashion industry leader focused on — and not
                limited to — the general beauty and fashion accessories of kids (school pupils)
                and adults alike. We also cover school and office stationeries, machineries,
                and import & export services.
              </p>
              <p className="section-sub">
                At Kazmaya World, we take immense pleasure in sourcing raw materials both
                locally and internationally. Our world-class processes manufacture and sell
                high quality and affordable products.
              </p>
              <p
                className="text-base font-medium italic"
                style={{
                  color: "var(--purple-dark)",
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "16px",
                }}
              >
                "Fashion is an ageless adventure and at Kazmaya World, we bring it
                constantly alive."
              </p>
            </div>

            {/* Neumorphic logo display */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <div
                  className="w-72 h-72 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--bg)",
                    boxShadow: "20px 20px 60px #c0b5d8, -20px -20px 60px #ffffff",
                  }}
                >
                  <Image
                    src="/images/logo.jpeg"
                    alt="Kazmaya World"
                    width={220}
                    height={220}
                    className="object-contain rounded-2xl float-anim"
                  />
                </div>
                {/* Orbiting badges */}
                <div
                  className="absolute -top-4 -right-4 neu-flat-sm px-4 py-2"
                  style={{ animation: "floatY 4s ease-in-out infinite 0.3s" }}
                >
                  <span className="text-xs font-semibold" style={{ color: "var(--text-dark)" }}>
                    🏆 Quality First
                  </span>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 neu-flat-sm px-4 py-2"
                  style={{ animation: "floatY 4s ease-in-out infinite 1.2s" }}
                >
                  <span className="text-xs font-semibold" style={{ color: "var(--text-dark)" }}>
                    🌍 Lagos, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge badge-gold-style inline-flex mb-4">✦ Purpose</span>
            <h2 className="section-title mb-4">Mission & <span className="gold-text">Vision</span></h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="neu-card p-8 md:p-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                style={{
                  background: "linear-gradient(135deg, rgba(107,33,168,0.1), rgba(124,58,237,0.2))",
                  border: "1px solid rgba(107,33,168,0.2)",
                }}
              >
                🎯
              </div>
              <h3
                className="mb-4 font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.6rem",
                  color: "var(--text-dark)",
                }}
              >
                Our Mission
              </h3>
              <ul className="flex flex-col gap-4">
                {[
                  "Be a one-stop shop for beauty, fashion, school and office stationeries, machineries, and general supplies.",
                  "Remain customer-centric — ensuring confidence in the quality and reliability of every product.",
                  "Create unique and outstanding uniformity in organizations where such is the standard.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs"
                      style={{
                        background: "linear-gradient(135deg, var(--gold-dark), var(--gold-light))",
                        color: "#fff",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                    <span className="section-sub text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div
              className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #3b0764, #6b21a8, #4c1d95)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 relative z-10"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                🌐
              </div>
              <h3
                className="mb-4 font-bold text-white relative z-10"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.6rem",
                }}
              >
                Our Vision
              </h3>
              <p
                className="relative z-10 leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem" }}
              >
                To become a{" "}
                <span className="shimmer-text font-semibold">global leader</span>{" "}
                in the world of Beauty, Fashion designs, and general service provision —
                bringing Kazmaya World to every corner of the globe.
              </p>
              <div
                className="relative z-10 p-4 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.7)" }}>
                  "Bringing our company in the light of best quality designs, production,
                  and sales globally."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge badge-purple-style inline-flex mb-4">✦ What Drives Us</span>
            <h2 className="section-title mb-4">Our Core <span className="gold-text">Values</span></h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="neu-card p-7 flex flex-col gap-4 text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto"
                  style={{
                    background: "var(--bg)",
                    boxShadow: "6px 6px 14px #c8bfe0, -6px -6px 14px #ffffff",
                  }}
                >
                  {v.icon}
                </div>
                <h4
                  className="font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    color: "var(--text-dark)",
                  }}
                >
                  {v.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-light)" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge badge-gold-style inline-flex mb-4">✦ Our Journey</span>
            <h2 className="section-title mb-4">
              Milestones &{" "}
              <span className="gold-text">Growth</span>
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
              style={{ background: "linear-gradient(to bottom, var(--purple-dark), var(--gold))" }}
            />

            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="neu-flat-sm p-5 inline-block">
                      <span
                        className="font-bold text-sm block mb-1 shimmer-text"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {m.year}
                      </span>
                      <p className="text-sm" style={{ color: "var(--text-light)" }}>
                        {m.event}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div
                    className="relative z-10 w-4 h-4 rounded-full flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, var(--gold-dark), var(--gold-light))",
                      boxShadow: "0 0 0 4px var(--bg), 0 0 0 6px var(--gold)",
                    }}
                  />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge badge-purple-style inline-flex mb-4">✦ Meet the Team</span>
            <h2 className="section-title mb-4">
              Our Core <span className="gold-text">Team</span>
            </h2>
            <div className="divider-gold w-24 mx-auto mb-4" />
            <p className="section-sub max-w-xl mx-auto">
              With a combined professional experience of more than 50 years, we boast a
              management team of seasoned achievers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t, i) => (
              <div key={i} className="neu-card p-8 flex flex-col items-center text-center gap-4">
                {/* Avatar */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}cc, ${t.color})`,
                    boxShadow: `0 8px 20px ${t.color}40`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <h4
                    className="font-bold mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1rem",
                      color: "var(--text-dark)",
                    }}
                  >
                    {t.name}
                  </h4>
                  <p
                    className="text-xs font-semibold mb-3"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    {t.role}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-light)" }}>
                    {t.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-gold-style inline-flex mb-4">✦ Partnerships</span>
            <h2 className="section-title mb-4">
              Our Local <span className="gold-text">Partners</span>
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="neu-flat p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Adels Hub", desc: "Fashion and accessories partner bringing premium product lines to our catalogue.", emoji: "👑" },
              { name: "D'Divas Hub", desc: "Hair and fashion accessories partner specializing in beauty solutions for every woman.", emoji: "💇‍♀️" },
            ].map((p, i) => (
              <div key={i} className="neu-flat-sm p-8 flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(232,201,107,0.25))",
                    border: "1px solid rgba(201,168,76,0.4)",
                  }}
                >
                  {p.emoji}
                </div>
                <div>
                  <h4
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem",
                      color: "var(--text-dark)",
                    }}
                  >
                    {p.name}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-light)" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="neu-flat p-12">
            <span className="badge badge-gold-style inline-flex mb-6">✦ Work With Us</span>
            <h2 className="section-title mb-4">
              Ready to Experience{" "}
              <span className="shimmer-text">Kazmaya World?</span>
            </h2>
            <p className="section-sub mb-8 max-w-lg mx-auto">
              Whether you're looking for school essentials, fashion accessories, or a
              business partnership — we're here for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/catalogue"
                className="neu-btn px-8 py-4 font-semibold text-sm"
                style={{ color: "var(--purple-dark)" }}
              >
                <span className="gold-text">Browse Catalogue</span>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 font-semibold text-sm rounded-full border-2 transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: "var(--purple-dark)",
                  color: "var(--purple-dark)",
                  background: "transparent",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
