import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Classic Black Mary Jane", desc: "Elegant T-bar school shoe with perforated heart detailing", img: "/images/processed/shoe-black-front.png", tag: "Bestseller", color: "Black", cat: "Girls' School" },
  { id: 2, name: "Premium Black T-Bar", desc: "Durable buckle-strap school shoe, premium leather finish", img: "/images/processed/shoe-black-side.png", tag: "New Arrival", color: "Black", cat: "Girls' School" },
  { id: 3, name: "Nova Black — Made in Nigeria", desc: "Proudly Nigerian-made school shoe, superior craftsmanship", img: "/images/processed/shoe-nova-black.png", tag: "Local Pride", color: "Black", cat: "Girls' School" },
  { id: 4, name: "Rich Brown Leather", desc: "Classic brown T-bar with gold-tone buckle hardware", img: "/images/processed/shoe-brown-side1.png", tag: "Popular", color: "Brown", cat: "Girls' School" },
  { id: 5, name: "Black Comfort Pair", desc: "Velcro-strap school shoes for all-day comfort", img: "/images/processed/shoe-black-pair1.png", tag: "Comfort Fit", color: "Black", cat: "Girls' School" },
  { id: 6, name: "Dark Brown Classic", desc: "Rich leather T-strap with decorative perforations", img: "/images/processed/shoe-brown-side2.png", tag: "Classic", color: "Brown", cat: "Girls' School" },
  { id: 7, name: "Black Brogue Pair", desc: "Heart-perforated T-bar pair, elegant school wear", img: "/images/processed/shoe-black-pair2.png", tag: "Trendy", color: "Black", cat: "Girls' School" },
  { id: 8, name: "Chestnut Brown Pair", desc: "Rich chestnut T-bar pair with contrast stitching", img: "/images/processed/shoe-brown-pair.png", tag: "Premium", color: "Brown", cat: "Girls' School" },
  { id: 9, name: "Comfylatch Velcro School Shoe", desc: "Easy-on velcro strap school shoe, built for active school days", img: "/images/shoe-comfylatch-black.jpeg", tag: "School Ready", color: "Black", cat: "School Shoes" },
  { id: 10, name: "Naija Stylez Tassel Loafer", desc: "Proudly Nigerian tassel loafers with high-gloss leather finish", img: "/images/shoe-naijastylez-black.jpeg", tag: "Made in Nigeria", color: "Black", cat: "Formal Shoes" },
  { id: 11, name: "LUXSTEP Premium Slip-On", desc: "Premium leather slip-on with elastic gusset for all-day comfort", img: "/images/shoe-luxstep-black.jpeg", tag: "Luxury", color: "Black", cat: "Formal Shoes" },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Combined Expertise" },
  { value: "100%", label: "Quality Assured" },
];

const categories = [
  { icon: "👟", label: "School Shoes" },
  { icon: "👜", label: "Bags & Accessories" },
  { icon: "👗", label: "Fashion & Apparel" },
  { icon: "💄", label: "Beauty Products" },
  { icon: "🎒", label: "Kids World" },
  { icon: "🌍", label: "Import & Export" },
];

const values = [
  { icon: "🏆", title: "World-Class Quality", body: "Materials sourced globally for the highest standards" },
  { icon: "❤️", title: "Customer-Centric", body: "Your satisfaction is our top priority" },
  { icon: "🌍", title: "Import & Export", body: "Global reach with local expertise" },
  { icon: "✨", title: "Creative Innovation", body: "Authenticity in every product we deliver" },
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: "80px" }}>

      {/* ══ HERO ══ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(107,33,168,0.16) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.14) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />

        <div className="kw-container home-hero-grid">
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <div>
              <span className="badge badge-gold-style" style={{ marginBottom: "1rem", display: "inline-flex" }}>
                ✦ Beauty & Fashion Accessories
              </span>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)", fontWeight: 800, lineHeight: 1.12, color: "var(--text-dark)" }}>
                Where <span className="shimmer-text">Comfort</span><br />
                Meets <span style={{ fontStyle: "italic", color: "var(--purple-dark)" }}>Style</span>
              </h1>
            </div>
            <p style={{ fontSize: "1.05rem", color: "var(--text-light)", lineHeight: 1.8, maxWidth: "480px" }}>
              Kazmaya World is your one-stop destination for premium school shoes,
              fashion accessories, beauty products, and school essentials.
              Quality you can trust — style you&apos;ll love.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/catalogue" className="neu-btn" style={{ padding: "1rem 2rem", fontWeight: 600, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--purple-dark)", textDecoration: "none" }}>
                <span className="gold-text">Shop Catalogue</span>
                <span style={{ color: "var(--gold)" }}>→</span>
              </Link>
              <Link href="/about" style={{ padding: "1rem 2rem", fontWeight: 600, fontSize: "0.9rem", borderRadius: "50px", border: "2px solid var(--purple-dark)", color: "var(--purple-dark)", textDecoration: "none" }}>
                Learn About Us
              </Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", paddingTop: "0.5rem" }}>
              {stats.map((s, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                  <span className="shimmer-text" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 800 }}>{s.value}</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-light)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-visual" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "420px" }}>
            <div style={{ position: "absolute", width: "360px", height: "360px", borderRadius: "50%", background: "var(--bg)", boxShadow: "24px 24px 64px #beb3d6, -24px -24px 64px #ffffff" }} />
            <div style={{ position: "absolute", width: "410px", height: "410px", borderRadius: "50%", border: "2px dashed rgba(201,168,76,0.35)", animation: "rotateSlow 30s linear infinite" }} />
            <div className="float-anim" style={{ position: "relative", zIndex: 2 }}>
              <Image src="/images/logo.jpeg" alt="Kazmaya World Logo" width={260} height={260} style={{ borderRadius: "28px", boxShadow: "14px 14px 32px #beb3d6, -14px -14px 32px #ffffff", objectFit: "contain" }} priority />
            </div>
            <div className="neu-flat-sm" style={{ position: "absolute", top: "20px", right: "10px", padding: "8px 14px", display: "flex", alignItems: "center", gap: "8px", animation: "floatY 4s ease-in-out infinite 0.5s", zIndex: 3 }}>
              <Image src="/images/processed/shoe-black-side.png" alt="" width={36} height={36} style={{ objectFit: "contain" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-dark)", whiteSpace: "nowrap" }}>Premium Quality</span>
            </div>
            <div className="neu-flat-sm" style={{ position: "absolute", bottom: "20px", left: "10px", padding: "8px 14px", display: "flex", alignItems: "center", gap: "8px", animation: "floatY 4s ease-in-out infinite 1.5s", zIndex: 3 }}>
              <Image src="/images/processed/shoe-brown-side1.png" alt="" width={36} height={36} style={{ objectFit: "contain" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-dark)", whiteSpace: "nowrap" }}>Made for Kids</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CATEGORIES ══ */}
      <section style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
        <div className="kw-container">
          <div className="home-cat-grid">
            {categories.map((c, i) => (
              <div key={i} className="neu-flat-sm hover-lift" style={{ padding: "1.25rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}>
                <span style={{ fontSize: "2rem" }}>{c.icon}</span>
                <span style={{ fontSize: "0.72rem", fontWeight: 600, textAlign: "center", color: "var(--text-mid)" }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED PRODUCTS ══ */}
      <section style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div className="kw-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge badge-purple-style" style={{ marginBottom: "1rem", display: "inline-flex" }}>✦ Our Collection</span>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              Featured <span className="gold-text">Products</span>
            </h2>
            <div className="divider-gold" style={{ width: "8rem", margin: "0 auto 1rem" }} />
            <p className="section-sub" style={{ maxWidth: "520px", margin: "0 auto" }}>
              Durable, comfortable, and stylish school shoes crafted for everyday wear — built to last all term long.
            </p>
          </div>

          <div className="home-prod-grid">
            {products.map((p) => (
              <article key={p.id} className="neu-card img-zoom" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ height: "220px", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", position: "relative", background: "linear-gradient(135deg, rgba(107,33,168,0.04), rgba(201,168,76,0.06))", overflow: "hidden" }}>
                  <span className="badge badge-gold-style" style={{ position: "absolute", top: "10px", right: "10px", fontSize: "0.62rem", zIndex: 10 }}>{p.tag}</span>
                  <Image src={p.img} alt={p.name} width={190} height={170} style={{ objectFit: "contain", filter: "drop-shadow(0 14px 28px rgba(0,0,0,0.18))" }} />
                  <span style={{ position: "absolute", bottom: "10px", left: "10px", width: "12px", height: "12px", borderRadius: "50%", background: p.color === "Black" ? "#1a1a2e" : "#6b3a2a", border: "2px solid white", boxShadow: "0 2px 6px rgba(0,0,0,0.3)" }} />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <span className="badge badge-purple-style" style={{ fontSize: "0.6rem", marginBottom: "0.5rem", display: "inline-flex" }}>{p.cat}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", fontWeight: 600, color: "var(--text-dark)", marginBottom: "0.4rem", lineHeight: 1.3 }}>{p.name}</h3>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-light)", lineHeight: 1.6, marginBottom: "1rem" }}>{p.desc}</p>
                  <Link href="/contact" className="neu-btn" style={{ display: "block", textAlign: "center", padding: "0.6rem", fontSize: "0.75rem", fontWeight: 600, color: "var(--purple-dark)", textDecoration: "none" }}>
                    <span className="gold-text">Enquire Now</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/catalogue" className="neu-btn" style={{ display: "inline-block", padding: "1rem 2.5rem", fontWeight: 600, fontSize: "0.9rem", color: "var(--purple-dark)", textDecoration: "none" }}>
              <span className="gold-text">View Full Catalogue →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ ABOUT SNIPPET ══ */}
      <section style={{ paddingBottom: "5rem" }}>
        <div className="kw-container">
          <div className="neu-flat home-about-card home-about-grid" style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <span className="badge badge-gold-style" style={{ display: "inline-flex", width: "fit-content" }}>✦ Who We Are</span>
              <h2 className="section-title">
                Fashion is an{" "}
                <span style={{ fontStyle: "italic", color: "var(--purple-dark)" }}>ageless adventure</span>
              </h2>
              <div className="divider-gold" style={{ width: "6rem", margin: 0 }} />
              <p className="section-sub">
                At Kazmaya World, we bring fashion constantly alive. We source raw materials
                both locally and internationally, manufacturing high-quality, affordable products.
              </p>
              <p className="section-sub">
                Our foundation of success is the commitment, diligence, and expertise
                of our team — from concept to delivery.
              </p>
              <Link href="/about" className="neu-btn" style={{ display: "inline-block", padding: "1rem 2rem", fontWeight: 600, fontSize: "0.9rem", width: "fit-content", color: "var(--purple-dark)", textDecoration: "none" }}>
                <span className="gold-text">Our Full Story →</span>
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {values.map((v, i) => (
                <div key={i} className="neu-flat-sm hover-lift-sm" style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{v.icon}</span>
                  <h4 style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--text-dark)" }}>{v.title}</h4>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-light)", lineHeight: 1.6 }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CIS PROGRAMME ══ */}
      <section style={{ paddingBottom: "5rem" }}>
        <div className="kw-container">
          <div className="home-cis-card" style={{ borderRadius: "28px", textAlign: "center", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #3b0764, #6b21a8, #2d1060)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
            <span className="badge badge-gold-style" style={{ marginBottom: "1.5rem", display: "inline-flex", position: "relative", zIndex: 1 }}>✦ Community Impact</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.3, marginBottom: "1rem", position: "relative", zIndex: 1 }}>
              Our CIS <span className="shimmer-text">Programme</span>
            </h2>
            <p style={{ maxWidth: "540px", margin: "0 auto 2rem", color: "rgba(255,255,255,0.76)", fontSize: "1rem", lineHeight: 1.8, position: "relative", zIndex: 1 }}>
              Kazmaya World gives back to society through our Community Impact & Support
              programme — reaching school pupils in public schools through shoes distribution and social activities.
            </p>
            <Link href="/contact" style={{ display: "inline-block", padding: "1rem 2.5rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.9rem", background: "linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light))", color: "#1e0a3c", textDecoration: "none", position: "relative", zIndex: 1 }}>
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CONTACT STRIP ══ */}
      <section style={{ paddingBottom: "5rem" }}>
        <div className="kw-container">
          <div className="neu-flat home-strip-grid">
            {[
              { icon: "📍", title: "Our Location", lines: ["Ogombo Road, Opp. Abraham Adesanya Estate, Ajah, Lagos"] },
              { icon: "📞", title: "Call Us", lines: ["08132776852", "07026232126"] },
            ].map((c, i) => (
              <div key={i} className="hover-lift-sm" style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div className="neu-flat-sm" style={{ width: "48px", height: "48px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.3rem", color: "var(--text-dark)" }}>{c.title}</p>
                  {c.lines.map((l, j) => <p key={j} style={{ fontSize: "0.78rem", color: "var(--text-light)", lineHeight: 1.6 }}>{l}</p>)}
                </div>
              </div>
            ))}
            <Link href="/contact" className="neu-btn" style={{ display: "inline-block", padding: "1rem 2rem", fontWeight: 600, fontSize: "0.85rem", color: "var(--purple-dark)", textDecoration: "none", whiteSpace: "nowrap" }}>
              <span className="gold-text">Get In Touch →</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
