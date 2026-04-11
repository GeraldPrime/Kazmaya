"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Classic Black Mary Jane",
    desc: "Elegant T-bar school shoe with perforated heart detailing. Perfect for everyday school wear — durable and stylish.",
    img: "/images/processed/shoe-black-front.png",
    tag: "Bestseller",
    color: "Black",
    cat: "School Shoes",
    features: ["Genuine leather upper", "Cushioned insole", "Non-slip sole", "T-bar buckle"],
  },
  {
    id: 2,
    name: "Premium Black T-Bar",
    desc: "Durable buckle-strap school shoe in premium leather finish. Side profile shows the beautiful T-bar silhouette.",
    img: "/images/processed/shoe-black-side.png",
    tag: "New Arrival",
    color: "Black",
    cat: "School Shoes",
    features: ["Premium leather", "Silver buckle", "Padded collar", "Breathable lining"],
  },
  {
    id: 3,
    name: "Nova Black",
    desc: "Premium school shoe by NOVA. Superior craftsmanship, local excellence, global quality.",
    img: "/images/processed/shoe-nova-black.png",
    tag: "Trendy",
    color: "Black",
    cat: "School Shoes",
    features: ["Quality assured", "Buckle strap", "Durable sole", "Premium leather"],
  },
  {
    id: 4,
    name: "Rich Brown Leather",
    desc: "Classic brown T-bar with gold-tone buckle hardware. Rich chocolate-brown leather with contrasting stitching.",
    img: "/images/processed/shoe-brown-side1.png",
    tag: "Popular",
    color: "Brown",
    cat: "School Shoes",
    features: ["Chocolate leather", "Gold buckle", "T-bar design", "Robust sole"],
  },
  {
    id: 5,
    name: "Black Comfort Velcro",
    desc: "Velcro-strap school shoes for all-day comfort. Easy on, easy off — perfect for younger pupils.",
    img: "/images/processed/shoe-black-pair1.png",
    tag: "Comfort Fit",
    color: "Black",
    cat: "School Shoes",
    features: ["Velcro fastening", "Memory foam insole", "Wide toe box", "Easy to wear"],
  },
  {
    id: 6,
    name: "Dark Brown Classic",
    desc: "Rich leather T-strap with decorative perforations. Classic design that never goes out of style.",
    img: "/images/processed/shoe-brown-side2.png",
    tag: "Classic",
    color: "Brown",
    cat: "School Shoes",
    features: ["Dark brown leather", "Decorative perforations", "T-strap design", "Durable"],
  },
  {
    id: 7,
    name: "Black Brogue Pair",
    desc: "Heart-perforated T-bar pair. Beautiful brogue detailing with a modern touch.",
    img: "/images/processed/shoe-black-pair2.png",
    tag: "Trendy",
    color: "Black",
    cat: "School Shoes",
    features: ["Brogue detailing", "Heart perforations", "Buckle strap", "Premium finish"],
  },
  {
    id: 8,
    name: "Chestnut Brown Pair",
    desc: "Rich chestnut T-bar pair with contrast stitching. The bold Kazmaya branding inside tells the quality story.",
    img: "/images/processed/shoe-brown-pair.png",
    tag: "Premium",
    color: "Brown",
    cat: "School Shoes",
    features: ["Chestnut leather", "Contrast stitching", "Kazmaya branded", "Gold buckle"],
  },
  {
    id: 9,
    name: "Comfylatch Velcro",
    desc: "Easy-on velcro strap school shoe — durable, comfortable, and built for active school days. No laces needed.",
    img: "/images/shoe-comfylatch-black.jpeg",
    tag: "School Ready",
    color: "Black",
    cat: "School Shoes",
    features: ["Velcro strap", "Cushioned insole", "Durable sole", "Easy to wear"],
  },
  {
    id: 10,
    name: "Naija Stylez Tassel Loafer",
    desc: "Premium tassel loafers with a high-gloss leather finish. Smart and stylish.",
    img: "/images/shoe-naijastylez-black.jpeg",
    tag: "Premium",
    color: "Black",
    cat: "School Shoes",
    features: ["Tassel detail", "High-gloss leather", "Premium quality", "Slip-on style"],
  },
  {
    id: 11,
    name: "LUXSTEP Premium Slip-On",
    desc: "Premium leather slip-on with elastic gusset for effortless all-day comfort. Sleek, refined, and timeless.",
    img: "/images/shoe-luxstep-black.jpeg",
    tag: "Luxury",
    color: "Black",
    cat: "School Shoes",
    features: ["Full-grain leather", "Elastic gusset", "Cushioned footbed", "Sleek profile"],
  },
  {
    id: 12,
    name: "PlayPro Tassel Loafer",
    desc: "Proudly made in Nigeria — PlayPro tassel loafer with a glossy finish. Built for school, styled for confidence.",
    img: "/images/shoe-playpro-black.jpeg",
    tag: "Premium",
    color: "Black",
    cat: "School Shoes",
    features: ["Premium quality", "Tassel detail", "Glossy leather", "Durable sole"],
  },
  {
    id: 13,
    name: "Classact Velcro",
    desc: "The Classact — velcro strap school shoe proudly made in Nigeria. Classy, comfortable, and built to last.",
    img: "/images/shoe-classact-black.jpeg",
    tag: "Premium",
    color: "Black",
    cat: "School Shoes",
    features: ["Premium quality", "Velcro strap", "Premium leather", "Cushioned insole"],
  },
  {
    id: 14,
    name: "Voyager Lace-Up",
    desc: "Be Bold with the Voyager — lace-up school shoe made in Nigeria. Smart Oxford silhouette for everyday wear.",
    img: "/images/shoe-voyager-black.jpeg",
    tag: "Be Bold",
    color: "Black",
    cat: "School Shoes",
    features: ["Premium quality", "Lace-up style", "Oxford silhouette", "Robust sole"],
  },
  {
    id: 15,
    name: "Rosie Velcro Cutout",
    desc: "Rosie — velcro cutout school shoe made in Nigeria. Lightweight perforated design for breathable all-day wear.",
    img: "/images/shoe-rosie-black.jpeg",
    tag: "Premium",
    color: "Black",
    cat: "School Shoes",
    features: ["Premium quality", "Perforated design", "Velcro strap", "Breathable"],
  },
  {
    id: 16,
    name: "Astro Brogue Lace-Up",
    desc: "The Astro — bold brogue lace-up made in Nigeria. Premium perforated detailing with a smart Oxford finish.",
    img: "/images/shoe-astro-black.jpeg",
    tag: "Premium",
    color: "Black",
    cat: "School Shoes",
    features: ["Premium quality", "Brogue detailing", "Lace-up", "Oxford finish"],
  },
  {
    id: 17,
    name: "Coco Slip-On",
    desc: "The Coco — sleek slip-on school shoe made in Nigeria. Effortless style with a cushioned, comfortable fit.",
    img: "/images/shoe-coco-black.jpeg",
    tag: "Premium",
    color: "Black",
    cat: "School Shoes",
    features: ["Premium quality", "Slip-on style", "Cushioned fit", "Sleek leather"],
  },
  {
    id: 18,
    name: "Xmas Tree Tee — Black",
    desc: "Festive Christmas tree print unisex T-shirt. Fun, bold, and perfect for the holiday season.",
    img: "/images/shirt-xmas-black.jpg",
    tag: "Festive",
    color: "Black",
    cat: "Fashion",
    features: ["Unisex fit", "Festive print", "Soft fabric", "Holiday edition"],
  },
  {
    id: 19,
    name: "Xmas Reindeer Tee — White",
    desc: "Classic white reindeer & Christmas tree print T-shirt. A wardrobe staple for the festive season.",
    img: "/images/shirt-xmas-white.jpg",
    tag: "Festive",
    color: "White",
    cat: "Fashion",
    features: ["Unisex fit", "Reindeer print", "Soft fabric", "Holiday edition"],
  },
  {
    id: 20,
    name: "Reindeer Fairisle Tee — Black",
    desc: "Bold fairisle reindeer pattern on premium black tee. Stand out this Christmas in style.",
    img: "/images/shirt-reindeer-black.jpg",
    tag: "Festive",
    color: "Black",
    cat: "Fashion",
    features: ["Unisex fit", "Fairisle pattern", "Premium fabric", "Holiday edition"],
  },
  {
    id: 21,
    name: "Merry Christmas Tee",
    desc: "Say it loud — Merry Christmas! Festive graphic tee perfect for the holiday season.",
    img: "/images/shirt-merrychristmas-black.jpg",
    tag: "Festive",
    color: "Black",
    cat: "Fashion",
    features: ["Unisex fit", "Graphic print", "Soft fabric", "Holiday edition"],
  },
];

const colorFilters = ["All", "Black", "Brown", "White"];

export default function CataloguePage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof products[0] | null>(null);

  const filtered = filter === "All" ? products
    : filter === "Fashion" ? products.filter((p) => p.cat === "Fashion")
    : products.filter((p) => p.color === filter);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden catalogue-hero-section">
        <Image
          src="/images/heroes/catalogue-hero.jpg"
          alt="Kazmaya World shoe collection"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,10,60,0.78) 0%, rgba(107,33,168,0.65) 50%, rgba(201,168,76,0.20) 100%)",
          }}
        />
        <div
          className="relative z-10 flex items-end justify-center px-6 catalogue-hero-inner"
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
              ✦ Our Products
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
              Product{" "}
              <span className="shimmer-text">Catalogue</span>
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
              Durable, comfortable, and stylish school shoes for every child — built to last,
              designed to impress.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section style={{ padding: "2rem 1.5rem 2rem" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-3 flex-wrap">
              {colorFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                  style={
                    filter === f
                      ? {
                          background: "linear-gradient(135deg, var(--purple-dark), var(--purple-mid))",
                          color: "#fff",
                          boxShadow: "0 4px 15px rgba(107,33,168,0.3)",
                        }
                      : {
                          background: "var(--bg)",
                          color: "var(--text-mid)",
                          boxShadow: "4px 4px 10px #c8bfe0, -4px -4px 10px #ffffff",
                        }
                  }
                >
                  {f === "Black" ? "⚫ Black"
                    : f === "Brown" ? "🟤 Brown"
                    : f === "White" ? "⚪ White"
                    : f === "Fashion" ? "👕 Fashion"
                    : "✦ All Styles"}{" "}
                  {f === "Fashion" ? `(${products.filter((p) => p.cat === "Fashion").length})`
                    : f !== "All" ? `(${products.filter((p) => p.color === f && p.cat !== "Fashion").length})`
                    : ""}
                </button>
              ))}
            </div>
            <p className="text-sm" style={{ color: "var(--text-light)" }}>
              Showing {filtered.length} of {products.length} products
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((p) => (
              <article key={p.id} className="neu-card p-0 overflow-hidden group cursor-pointer" onClick={() => setSelected(p)}>
                {/* Image */}
                <div
                  className="relative h-60 flex items-center justify-center p-6 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(107,33,168,0.04), rgba(201,168,76,0.06))",
                  }}
                >
                  <span
                    className="absolute top-3 right-3 badge badge-gold-style"
                    style={{ fontSize: "0.62rem", zIndex: 10, position: "absolute" }}
                  >
                    {p.tag}
                  </span>
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={210}
                    height={190}
                    className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ filter: "drop-shadow(0 16px 28px rgba(0,0,0,0.18))" }}
                  />
                  {/* Color dot */}
                  <span
                    className="absolute bottom-3 left-3 w-3 h-3 rounded-full border-2 border-white"
                    style={{
                      background: p.color === "Black" ? "#1a1a2e" : "#6b3a2a",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                    }}
                  />
                </div>
                {/* Details */}
                <div className="p-5">
                  <span className="badge badge-purple-style mb-2 inline-flex" style={{ fontSize: "0.6rem" }}>
                    {p.cat}
                  </span>
                  <h3
                    className="font-semibold mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.95rem",
                      color: "var(--text-dark)",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-xs mb-4 leading-relaxed line-clamp-2" style={{ color: "var(--text-light)" }}>
                    {p.desc}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelected(p); }}
                      className="flex-1 neu-btn py-2 text-xs font-semibold"
                      style={{ color: "var(--purple-dark)" }}
                    >
                      <span className="gold-text">View Details</span>
                    </button>
                    <Link
                      href="/contact"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2 text-xs font-semibold text-center rounded-full border transition-all duration-300 hover:shadow-md"
                      style={{
                        borderColor: "var(--gold)",
                        color: "var(--gold-dark)",
                      }}
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT MODAL ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(30,10,60,0.5)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="neu-flat max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-10 relative"
            onClick={(e) => e.stopPropagation()}
            style={{ borderRadius: "28px" }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--bg)",
                boxShadow: "4px 4px 10px #c8bfe0, -4px -4px 10px #ffffff",
                color: "var(--text-dark)",
              }}
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div
                className="rounded-2xl flex items-center justify-center p-8 h-56"
                style={{
                  background: "linear-gradient(135deg, rgba(107,33,168,0.06), rgba(201,168,76,0.08))",
                }}
              >
                <Image
                  src={selected.img}
                  alt={selected.name}
                  width={200}
                  height={180}
                  className="object-contain"
                  style={{ filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.2))" }}
                />
              </div>

              <div>
                <span className="badge badge-gold-style inline-flex mb-3">{selected.tag}</span>
                <h2
                  className="mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "var(--text-dark)",
                  }}
                >
                  {selected.name}
                </h2>
                <p className="text-xs font-semibold mb-4" style={{ color: "var(--gold-dark)" }}>
                  {selected.cat}
                </p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-light)" }}>
                  {selected.desc}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-semibold mb-3" style={{ color: "var(--text-mid)" }}>
                    KEY FEATURES
                  </p>
                  <ul className="flex flex-col gap-2">
                    {selected.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-light)" }}>
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                          style={{ background: "linear-gradient(135deg, var(--gold-dark), var(--gold-light))" }}
                        >
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="block w-full py-3.5 rounded-full text-sm font-semibold text-center text-white transition-all hover:scale-[1.02] hover:shadow-xl"
                  style={{ background: "linear-gradient(135deg, #6b21a8, #7c3aed)" }}
                  onClick={() => setSelected(null)}
                >
                  Enquire About This Product ✦
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MORE COMING ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #3b0764, #6b21a8, #4c1d95)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(201,168,76,0.2) 0%, transparent 50%)",
              }}
            />
            <h2
              className="relative z-10 text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 700,
              }}
            >
              More Products <span className="shimmer-text">Coming Soon</span>
            </h2>
            <p className="relative z-10 mb-8 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}>
              We&apos;re constantly expanding our catalogue with fashion accessories, bags, beauty
              products, festive wear, and Adire designs.
            </p>
            <Link
              href="/contact"
              className="relative z-10 inline-block px-10 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light))",
                color: "#1e0a3c",
              }}
            >
              Enquire for More Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
