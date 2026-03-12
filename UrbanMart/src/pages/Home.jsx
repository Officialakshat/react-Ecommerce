import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Shop", "About", "Journal", "Contact"];

const FEATURED = [
  {
    id: 1,
    name: "Linen Throw Blanket",
    category: "Home & Living",
    price: "$89",
    tag: "Bestseller",
    color: "#d4c0aa",
  },
  {
    id: 2,
    name: "Ceramic Pour-Over Set",
    category: "Kitchen",
    price: "$124",
    tag: "New",
    color: "#a8b8b0",
  },
  {
    id: 3,
    name: "Leather Journal",
    category: "Stationery",
    price: "$58",
    tag: "Curated",
    color: "#b8a898",
  },
  {
    id: 4,
    name: "Brass Desk Lamp",
    category: "Lighting",
    price: "$210",
    tag: "Editor's Pick",
    color: "#c8b870",
  },
];

const CATEGORIES = [
  { name: "Home & Living", count: "142 items", symbol: "⌂" },
  { name: "Apparel", count: "98 items", symbol: "◈" },
  { name: "Kitchen", count: "76 items", symbol: "◎" },
  { name: "Stationery", count: "54 items", symbol: "✦" },
];

const TESTIMONIALS = [
  {
    quote:
      "Every order has been impeccable. The curation is genuinely unlike anything else online.",
    name: "Sophie R.",
    location: "London, UK",
  },
  {
    quote:
      "I've stopped shopping anywhere else. The quality speaks for itself after the first purchase.",
    name: "Marcus T.",
    location: "New York, US",
  },
  {
    quote:
      "Packaging alone made me feel like I'd bought something truly special.",
    name: "Aiko M.",
    location: "Tokyo, JP",
  },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.85s ease ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  // const [hoveredProduct, setHoveredProduct] = useState(null);
  const [marqueePos, setMarqueePos] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let frame;
    let pos = 0;
    const animate = () => {
      pos -= 0.4;
      if (pos < -1200) pos = 0;
      setMarqueePos(pos);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const marqueeText = [
    "Quality Goods",
    "✦",
    "Ethically Sourced",
    "◈",
    "Worldwide Shipping",
    "◎",
    "Curated Selection",
    "✦",
    "Quality Goods",
    "◈",
    "Ethically Sourced",
    "✦",
    "Worldwide Shipping",
    "◎",
    "Curated Selection",
    "◈",
  ];

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: "#faf8f5",
        color: "#1a1714",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .serif { font-family: 'Playfair Display', Georgia, serif; }
        .sans { font-family: 'Jost', sans-serif; }
        .gold { color: #b8966e; }
        .product-card { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease; cursor: pointer; }
        .product-card:hover { transform: translateY(-8px); box-shadow: 0 24px 60px rgba(26,23,20,0.12); }
        .product-card:hover .product-cta { opacity: 1; transform: translateY(0); }
        .product-cta { opacity: 0; transform: translateY(8px); transition: opacity 0.3s ease, transform 0.3s ease; }
        .cat-card { transition: background 0.3s, transform 0.3s, box-shadow 0.3s; cursor: pointer; }
        .cat-card:hover { background: #1a1714 !important; transform: translateY(-4px); box-shadow: 0 16px 40px rgba(26,23,20,0.18); }
        .cat-card:hover * { color: #d4c4b0 !important; }
        .cat-card:hover .cat-symbol { color: #b8966e !important; }
        .cta-btn { background: #1a1714; color: #faf8f5; font-family: 'Jost',sans-serif; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.78rem; padding: 1rem 2.5rem; border: 1px solid #1a1714; cursor: pointer; transition: background 0.3s, color 0.3s; display: inline-block; }
        .cta-btn:hover { background: transparent; color: #1a1714; }
        .cta-btn.gold-btn { background: #b8966e; border-color: #b8966e; color: #1a1714; }
        .cta-btn.gold-btn:hover { background: transparent; color: #b8966e; }
        .cta-btn.outline { background: transparent; color: #1a1714; border-color: #c8b89a; }
        .cta-btn.outline:hover { background: #1a1714; color: #faf8f5; border-color: #1a1714; }
        .nav-link { text-decoration: none; color: #6b5e52; font-family: 'Jost',sans-serif; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 300; transition: color 0.2s; }
        .nav-link:hover { color: #1a1714; }
        input, textarea { outline: none; }
        input:focus, textarea:focus { border-color: #b8966e !important; }
        .tag-pill { font-family: 'Jost',sans-serif; font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; padding: 0.3rem 0.8rem; background: rgba(26,23,20,0.82); color: #d4c4b0; border-radius: 1px; position: absolute; top: 1rem; left: 1rem; }
      `}</style>

      {/* ANNOUNCEMENT BAR */}
      <div
        style={{
          background: "#1a1714",
          color: "#c8a97e",
          padding: "0.6rem 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            transform: `translateX(${marqueePos}px)`,
          }}
        >
          {marqueeText.map((t, i) => (
            <span
              key={i}
              className="sans"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginRight: "2.5rem",
                color:
                  t === "✦" || t === "◈" || t === "◎" ? "#b8966e" : "#a89a8a",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* NAV */}

      {/* HERO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "90vh",
          maxHeight: "900px",
        }}
      >
        {/* Left */}
        <div
          style={{
            padding: "8vw 5vw 8vw 6vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#faf8f5",
          }}
        >
          <div style={{ animation: "fadeUp 1s ease both" }}>
            <div
              className="sans"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#b8966e",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "28px",
                  height: "1px",
                  background: "#b8966e",
                }}
              />
              New Collection 2024
            </div>
            <h1
              className="serif"
              style={{
                fontSize: "clamp(3rem, 5.5vw, 6rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}
            >
              Things worth
              <br />
              <em style={{ color: "#b8966e" }}>keeping</em>
              <br />
              forever.
            </h1>
            <p
              className="sans"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.85,
                color: "#5a4f45",
                fontWeight: 300,
                maxWidth: "400px",
                marginBottom: "3rem",
              }}
            >
              Thoughtfully curated goods that bring lasting beauty to your
              everyday life. No trends. No compromises.
            </p>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <button className="cta-btn">Shop Collection</button>
              <button className="cta-btn outline">Our Story →</button>
            </div>
            <div style={{ marginTop: "3.5rem", display: "flex", gap: "3rem" }}>
              {[
                ["12K+", "Customers"],
                ["50+", "Countries"],
                ["500+", "Products"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div
                    className="serif"
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      color: "#1a1714",
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </div>
                  <div
                    className="sans"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#a89a8a",
                      marginTop: "4px",
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Hero Visual */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background:
              "linear-gradient(160deg, #e8dfd0 0%, #d4c4aa 40%, #c4b090 100%)",
          }}
        >
          {/* Decorative layers */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(184,150,110,0.25) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "10%",
              width: "180px",
              height: "180px",
              border: "1px solid rgba(184,150,110,0.3)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              left: "8%",
              width: "100px",
              height: "100px",
              border: "1px solid rgba(184,150,110,0.2)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              textAlign: "center",
            }}
          >
            <div
              className="serif"
              style={{
                fontSize: "8rem",
                color: "rgba(184,150,110,0.25)",
                fontWeight: 700,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              MA
            </div>
            <div
              style={{
                width: "50px",
                height: "1px",
                background: "rgba(184,150,110,0.5)",
                margin: "1rem auto",
              }}
            />
            <div
              className="sans"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(120,90,60,0.6)",
              }}
            >
              Est. 2014
            </div>
          </div>
          {/* Corner tag */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "2rem",
              background: "rgba(26,23,20,0.85)",
              padding: "1.25rem 1.5rem",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              className="sans"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#b8966e",
                marginBottom: "4px",
              }}
            >
              Featured
            </div>
            <div
              className="serif"
              style={{ color: "#faf8f5", fontSize: "1.05rem" }}
            >
              Autumn Edit
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div
        style={{
          background: "#f0ebe3",
          borderTop: "1px solid #e8e0d4",
          borderBottom: "1px solid #e8e0d4",
          padding: "1.25rem 0",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", gap: "3rem", whiteSpace: "nowrap" }}>
          {[...Array(3)].map((_, gi) =>
            [
              "Free Shipping Over $75",
              "✦",
              "30-Day Returns",
              "◈",
              "Sustainably Sourced",
              "◎",
              "Handpicked Quality",
              "✦",
            ].map((t, i) => (
              <span
                key={`${gi}-${i}`}
                className="sans"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color:
                    t === "✦" || t === "◈" || t === "◎" ? "#b8966e" : "#8a7060",
                }}
              >
                {t}
              </span>
            )),
          )}
        </div>
      </div>

      {/* CATEGORIES */}
      <section style={{ padding: "7vw 6vw" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "3.5rem",
              }}
            >
              <div>
                <div
                  className="sans"
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#b8966e",
                    marginBottom: "0.75rem",
                  }}
                >
                  Explore
                </div>
                <h2
                  className="serif"
                  style={{
                    fontSize: "clamp(1.8rem,3.5vw,3rem)",
                    lineHeight: 1.1,
                  }}
                >
                  Shop by Category
                </h2>
              </div>
              <button
                className="cta-btn outline"
                style={{ whiteSpace: "nowrap" }}
              >
                View All →
              </button>
            </div>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.25rem",
            }}
          >
            {CATEGORIES.map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="cat-card"
                  style={{
                    background: "#f0ebe3",
                    padding: "2.5rem 2rem",
                    borderRadius: "2px",
                    border: "1px solid #e8e0d4",
                  }}
                >
                  <div
                    className="cat-symbol serif"
                    style={{
                      fontSize: "2rem",
                      color: "#b8966e",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {c.symbol}
                  </div>
                  <h3
                    className="serif"
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "0.4rem",
                      color: "#1a1714",
                    }}
                  >
                    {c.name}
                  </h3>
                  <div
                    className="sans"
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#a89a8a",
                    }}
                  >
                    {c.count}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ background: "#f0ebe3", padding: "7vw 6vw" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "3.5rem",
              }}
            >
              <div>
                <div
                  className="sans"
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#b8966e",
                    marginBottom: "0.75rem",
                  }}
                >
                  Handpicked
                </div>
                <h2
                  className="serif"
                  style={{
                    fontSize: "clamp(1.8rem,3.5vw,3rem)",
                    lineHeight: 1.1,
                  }}
                >
                  Featured Products
                </h2>
              </div>
              <button
                className="cta-btn outline"
                style={{ whiteSpace: "nowrap" }}
              >
                Full Collection →
              </button>
            </div>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
            }}
          >
            {FEATURED.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <div
                  className="product-card"
                  style={{
                    background: "#faf8f5",
                    borderRadius: "2px",
                    overflow: "hidden",
                    border: "1px solid #e8e0d4",
                  }}
                  // onMouseEnter={() => setHoveredProduct(p.id)}
                  // onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Image placeholder */}
                  <div
                    style={{
                      aspectRatio: "3/3.5",
                      background: `linear-gradient(145deg, ${p.color}55, ${p.color}99)`,
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="tag-pill">{p.tag}</div>
                    <div
                      className="serif"
                      style={{
                        fontSize: "3rem",
                        color: p.color,
                        fontWeight: 700,
                        opacity: 0.4,
                      }}
                    >
                      M
                    </div>
                    <div
                      className="product-cta"
                      style={{
                        position: "absolute",
                        bottom: "1rem",
                        left: "1rem",
                        right: "1rem",
                      }}
                    >
                      <button
                        className="cta-btn"
                        style={{
                          width: "100%",
                          textAlign: "center",
                          fontSize: "0.7rem",
                          padding: "0.75rem",
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <div
                      className="sans"
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#a89a8a",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {p.category}
                    </div>
                    <h3
                      className="serif"
                      style={{
                        fontSize: "1rem",
                        marginBottom: "0.6rem",
                        color: "#1a1714",
                      }}
                    >
                      {p.name}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="serif"
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#1a1714",
                        }}
                      >
                        {p.price}
                      </span>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "#b8966e",
                          fontFamily: "'Jost',sans-serif",
                          letterSpacing: "0.1em",
                        }}
                      >
                        ★★★★★
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "500px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #2a221c, #1a1714)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "7vw",
          }}
        >
          <div>
            <div
              className="sans"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#b8966e",
                marginBottom: "1.5rem",
              }}
            >
              This Season
            </div>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(2rem,4vw,3.5rem)",
                color: "#faf8f5",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              The Autumn
              <br />
              <em style={{ color: "#c8a97e" }}>Edit 2024</em>
            </h2>
            <p
              className="sans"
              style={{
                color: "#a89a8a",
                fontWeight: 300,
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "380px",
              }}
            >
              Warm textures, grounded tones, and objects that make a home feel
              truly lived-in. Our most thoughtful collection yet.
            </p>
            <button className="cta-btn gold-btn">Explore Edit</button>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(160deg, #e0d4c0, #c8b898)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "20%",
              right: "15%",
              width: "160px",
              height: "160px",
              border: "1px solid rgba(184,150,110,0.3)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "10%",
              width: "80px",
              height: "80px",
              border: "1px solid rgba(184,150,110,0.2)",
            }}
          />
          <div
            className="serif"
            style={{
              fontSize: "6rem",
              color: "rgba(184,150,110,0.2)",
              fontWeight: 700,
              userSelect: "none",
            }}
          >
            AW
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "7vw 6vw", background: "#faf8f5" }}>
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <Reveal>
            <div
              className="sans"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#b8966e",
                marginBottom: "1rem",
              }}
            >
              Voices
            </div>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(1.8rem,3vw,2.8rem)",
                marginBottom: "4rem",
              }}
            >
              What Our Customers Say
            </h2>
          </Reveal>
          <div style={{ position: "relative", minHeight: "160px" }}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  position: i === 0 ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  opacity: i === activeTestimonial ? 1 : 0,
                  transform:
                    i === activeTestimonial
                      ? "translateY(0)"
                      : "translateY(20px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  pointerEvents: i === activeTestimonial ? "auto" : "none",
                }}
              >
                <blockquote
                  className="serif"
                  style={{
                    fontSize: "clamp(1.1rem,2vw,1.45rem)",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    color: "#3a342e",
                    marginBottom: "1.5rem",
                  }}
                >
                  "{t.quote}"
                </blockquote>
                <div
                  className="sans"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    color: "#1a1714",
                  }}
                >
                  {t.name}
                </div>
                <div
                  className="sans"
                  style={{
                    fontSize: "0.72rem",
                    color: "#a89a8a",
                    marginTop: "2px",
                  }}
                >
                  {t.location}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.6rem",
              marginTop: "3rem",
            }}
          >
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: i === activeTestimonial ? "28px" : "8px",
                  height: "8px",
                  background: i === activeTestimonial ? "#b8966e" : "#d4c4b0",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <Reveal>
        <section
          style={{ background: "#1a1714", padding: "6vw", textAlign: "center" }}
        >
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <div
              className="sans"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#b8966e",
                marginBottom: "1.25rem",
              }}
            >
              Stay Connected
            </div>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(2rem,3.5vw,3rem)",
                color: "#faf8f5",
                marginBottom: "1rem",
                lineHeight: 1.15,
              }}
            >
              First to know.
              <br />
              <em style={{ color: "#c8a97e" }}>Always.</em>
            </h2>
            <p
              className="sans"
              style={{
                color: "#8a8078",
                fontWeight: 300,
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              New arrivals, seasonal edits, and exclusive offers — delivered to
              your inbox with care.
            </p>
            <div
              style={{
                display: "flex",
                gap: "0",
                maxWidth: "440px",
                margin: "0 auto",
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: 1,
                  padding: "1rem 1.25rem",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRight: "none",
                  color: "#faf8f5",
                  fontFamily: "'Jost',sans-serif",
                  fontSize: "0.9rem",
                }}
              />
              <button
                className="cta-btn gold-btn"
                style={{ whiteSpace: "nowrap", borderRadius: 0 }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #e8e0d4",
          padding: "3rem 6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#faf8f5",
        }}
      >
        <span
          className="serif"
          style={{ fontSize: "1.2rem", color: "#6b5e52" }}
        >
          Maison<span className="gold">•</span>Arc
        </span>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {["Privacy", "Terms", "Shipping", "Returns"].map((l) => (
            <a
              key={l}
              href="#"
              className="sans"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#a89a8a",
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </div>
        <span
          className="sans"
          style={{ fontSize: "0.72rem", color: "#a89a8a" }}
        >
          © 2024 Maison Arc
        </span>
      </footer>
    </div>
  );
}
