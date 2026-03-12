import { useState, useEffect, useRef } from "react";

const stats = [
  { number: "12K+", label: "Happy Customers" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "50+", label: "Countries Served" },
  { number: "2014", label: "Year Founded" },
];

const team = [
  {
    name: "Elena Marsh",
    role: "Founder & CEO",
    bio: "Visionary behind the brand, Elena built this company from a single idea into a global presence.",
    initials: "EM",
    color: "#c8a97e",
  },
  {
    name: "James Colton",
    role: "Head of Design",
    bio: "With 15+ years in luxury retail design, James shapes every visual touchpoint of our brand.",
    initials: "JC",
    color: "#8ca8a0",
  },
  {
    name: "Priya Nair",
    role: "Customer Experience",
    bio: "Priya ensures every interaction with our brand leaves customers delighted and coming back.",
    initials: "PN",
    color: "#a09abc",
  },
];

const values = [
  {
    icon: "✦",
    title: "Quality First",
    desc: "Every product is handpicked and vetted to meet our uncompromising standards.",
  },
  {
    icon: "◈",
    title: "Sustainable Sourcing",
    desc: "We partner only with suppliers who share our commitment to ethical practices.",
  },
  {
    icon: "⬡",
    title: "Community Driven",
    desc: "Our customers shape what we carry — we listen, adapt, and grow together.",
  },
  {
    icon: "◎",
    title: "Transparent Pricing",
    desc: "No hidden fees, no inflated markups. Just honest value for exceptional products.",
  },
];

function useInView(threshold = 0.15) {
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

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function About() {
  const [hoveredTeam, setHoveredTeam] = useState(null);

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#faf8f5",
        color: "#1a1714",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #faf8f5; }
        .serif { font-family: 'Playfair Display', Georgia, serif; }
        .sans { font-family: 'Jost', sans-serif; }
        .gold { color: #b8966e; }
        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          color: #1a1714;
          line-height: 1;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 7vw, 6.5rem);
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        .ornament {
          display: inline-block;
          color: #b8966e;
          margin: 0 0.5rem;
          font-size: 0.7em;
          vertical-align: middle;
        }
        .team-card:hover .team-overlay { opacity: 1; }
        .team-overlay { opacity: 0; transition: opacity 0.4s ease; }
        .divider-line {
          display: flex; align-items: center; gap: 1.5rem; margin: 2rem 0;
        }
        .divider-line::before, .divider-line::after {
          content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #c8b89a, transparent);
        }
        .value-card {
          border: 1px solid #e8e0d4;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .value-card:hover {
          border-color: #b8966e;
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(184,150,110,0.12);
        }
        .cta-btn {
          background: #1a1714;
          color: #faf8f5;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-size: 0.78rem;
          padding: 1rem 2.5rem;
          border: 1px solid #1a1714;
          cursor: pointer;
          transition: background 0.3s, color 0.3s;
          display: inline-block;
          text-decoration: none;
        }
        .cta-btn:hover { background: transparent; color: #1a1714; }
        .cta-btn.outline {
          background: transparent;
          color: #1a1714;
          border-color: #c8b89a;
        }
        .cta-btn.outline:hover { background: #1a1714; color: #faf8f5; border-color: #1a1714; }
        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* NAV */}
      {/* <nav
        className="sans"
        style={{
          padding: "1.5rem 6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e8e0d4",
          background: "#faf8f5",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <span
          className="serif"
          style={{ fontSize: "1.4rem", letterSpacing: "0.05em" }}
        >
          Maison<span className="gold">•</span>Arc
        </span>
        <div
          className="sans"
          style={{
            display: "flex",
            gap: "2.5rem",
            fontSize: "0.78rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6b5e52",
          }}
        >
          {["Shop", "About", "Journal", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                textDecoration: "none",
                color: l === "About" ? "#1a1714" : "#6b5e52",
                fontWeight: l === "About" ? 500 : 300,
                borderBottom: l === "About" ? "1px solid #b8966e" : "none",
                paddingBottom: "2px",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </nav> */}

      {/* HERO */}
      <section
        style={{
          padding: "8vw 6vw 6vw",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6vw",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
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
              marginBottom: "1.5rem",
            }}
          >
            Our Story{" "}
            <span style={{ margin: "0 0.8rem", opacity: 0.5 }}>—</span> Est.
            2014
          </div>
          <h1 className="hero-title serif" style={{ marginBottom: "2rem" }}>
            Crafted with
            <br />
            <em style={{ color: "#b8966e" }}>intention.</em>
            <br />
            Built for you.
          </h1>
          <p
            className="sans"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#5a4f45",
              fontWeight: 300,
              maxWidth: "480px",
              marginBottom: "2.5rem",
            }}
          >
            We believe beautiful things should be accessible. Maison Arc was
            born from a simple conviction — that thoughtful design and genuine
            quality shouldn't be reserved for the few.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button className="cta-btn">Explore Products</button>
            <button className="cta-btn outline">Our Values</button>
          </div>
        </div>

        {/* Hero visual */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              background:
                "linear-gradient(135deg, #e8dfd4 0%, #d4c4b0 50%, #c8b49a 100%)",
              borderRadius: "2px",
              aspectRatio: "4/5",
              position: "relative",
              overflow: "hidden",
              maxWidth: "520px",
            }}
          >
            <div
              className="noise-bg"
              style={{ position: "absolute", inset: 0 }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                className="serif"
                style={{
                  fontSize: "5rem",
                  color: "#b8966e",
                  opacity: 0.3,
                  lineHeight: 1,
                }}
              >
                MA
              </div>
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background: "#b8966e",
                  opacity: 0.5,
                }}
              />
              <div
                className="sans"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#8a7060",
                  opacity: 0.7,
                }}
              >
                Maison Arc
              </div>
            </div>
            {/* Decorative corner */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                width: "60px",
                height: "60px",
                border: "1px solid rgba(184,150,110,0.4)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                left: "24px",
                width: "40px",
                height: "40px",
                border: "1px solid rgba(184,150,110,0.3)",
              }}
            />
          </div>
          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "-20px",
              background: "#1a1714",
              color: "#faf8f5",
              padding: "1.25rem 1.75rem",
              borderRadius: "2px",
              boxShadow: "0 20px 60px rgba(26,23,20,0.2)",
            }}
          >
            <div
              className="stat-num"
              style={{ color: "#faf8f5", fontSize: "2rem" }}
            >
              10+
            </div>
            <div
              className="sans"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#a89a8a",
                marginTop: "4px",
              }}
            >
              Years of Excellence
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <AnimatedSection>
        <section
          style={{
            background: "#1a1714",
            margin: "6vw 0 0",
            padding: "5vw 6vw",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  borderRight:
                    i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <div
                  className="stat-num"
                  style={{ color: "#c8a97e", marginBottom: "0.5rem" }}
                >
                  {s.number}
                </div>
                <div
                  className="sans"
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#8a8078",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* MISSION */}
      <AnimatedSection>
        <section
          style={{
            padding: "8vw 6vw",
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "8vw",
            alignItems: "start",
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
                marginBottom: "1rem",
              }}
            >
              Mission
            </div>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight: 1.15,
              }}
            >
              Why we <em style={{ color: "#b8966e" }}>exist</em>
            </h2>
          </div>
          <div>
            <p
              className="sans"
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.9,
                color: "#4a4038",
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              Maison Arc was founded on the belief that the marketplace had
              grown noisy — cluttered with fast, cheap, and forgettable. We set
              out to curate differently: fewer things, chosen better, delivered
              with care.
            </p>
            <p
              className="sans"
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#6b5e52",
                fontWeight: 300,
              }}
            >
              Every item in our collection passes through a rigorous selection
              process. We look for pieces that age gracefully, serve real needs,
              and bring lasting satisfaction — not just the dopamine hit of a
              new purchase.
            </p>
            <div className="divider-line">
              <span
                className="sans gold"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Our Promise
              </span>
            </div>
            <blockquote
              className="serif"
              style={{
                fontSize: "1.3rem",
                fontStyle: "italic",
                color: "#3a342e",
                lineHeight: 1.6,
                borderLeft: "2px solid #b8966e",
                paddingLeft: "1.5rem",
              }}
            >
              "We will never list a product we wouldn't personally stand
              behind."
            </blockquote>
          </div>
        </section>
      </AnimatedSection>

      {/* VALUES */}
      <section style={{ background: "#f0ebe3", padding: "8vw 6vw" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
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
                What We Stand For
              </div>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                Our Core Values
              </h2>
            </div>
          </AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
            }}
          >
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="value-card"
                  style={{
                    background: "#faf8f5",
                    padding: "2.5rem",
                    borderRadius: "2px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.8rem",
                      color: "#b8966e",
                      marginBottom: "1.25rem",
                      lineHeight: 1,
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3
                    className="serif"
                    style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="sans"
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      color: "#6b5e52",
                      fontWeight: 300,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: "8vw 6vw" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ marginBottom: "4rem" }}>
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
                The People
              </div>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                Faces Behind <em style={{ color: "#b8966e" }}>the Brand</em>
              </h2>
            </div>
          </AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
          >
            {team.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div
                  className="team-card"
                  style={{ cursor: "default", position: "relative" }}
                  onMouseEnter={() => setHoveredTeam(i)}
                  onMouseLeave={() => setHoveredTeam(null)}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      aspectRatio: "3/3.5",
                      background: `linear-gradient(145deg, ${m.color}33, ${m.color}66)`,
                      borderRadius: "2px",
                      marginBottom: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      border: "1px solid #e8e0d4",
                    }}
                  >
                    <span
                      className="serif"
                      style={{
                        fontSize: "3.5rem",
                        color: m.color,
                        fontWeight: 700,
                        opacity: 0.5,
                      }}
                    >
                      {m.initials}
                    </span>
                    <div
                      className="team-overlay"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(26,23,20,0.88)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2rem",
                      }}
                    >
                      <p
                        className="sans"
                        style={{
                          color: "#d4c4b0",
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                          textAlign: "center",
                          fontWeight: 300,
                        }}
                      >
                        {m.bio}
                      </p>
                    </div>
                  </div>
                  <h3
                    className="serif"
                    style={{ fontSize: "1.25rem", marginBottom: "0.3rem" }}
                  >
                    {m.name}
                  </h3>
                  <div
                    className="sans"
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#b8966e",
                    }}
                  >
                    {m.role}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <AnimatedSection>
        <section
          style={{
            margin: "0 6vw 8vw",
            background:
              "linear-gradient(135deg, #2a221c 0%, #1a1714 60%, #231e18 100%)",
            padding: "6vw",
            borderRadius: "2px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "200px",
              height: "200px",
              border: "1px solid rgba(184,150,110,0.15)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "-40px",
              width: "140px",
              height: "140px",
              border: "1px solid rgba(184,150,110,0.1)",
              borderRadius: "50%",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              className="sans"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#b8966e",
                marginBottom: "1.25rem",
              }}
            >
              Join the Community
            </div>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#faf8f5",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Ready to experience{" "}
              <em style={{ color: "#c8a97e" }}>the difference?</em>
            </h2>
            <p
              className="sans"
              style={{
                fontSize: "1rem",
                color: "#a89a8a",
                fontWeight: 300,
                maxWidth: "480px",
                margin: "0 auto 2.5rem",
                lineHeight: 1.8,
              }}
            >
              Browse our curated selection and discover products you'll actually
              love — backed by our quality guarantee.
            </p>
            <button
              className="cta-btn"
              style={{
                background: "#b8966e",
                borderColor: "#b8966e",
                color: "#1a1714",
              }}
            >
              Shop Now
            </button>
          </div>
        </section>
      </AnimatedSection>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #e8e0d4",
          padding: "3rem 6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          className="serif"
          style={{ fontSize: "1.1rem", color: "#6b5e52" }}
        >
          Maison<span className="gold">•</span>Arc
        </span>
        <span
          className="sans"
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: "#a89a8a",
          }}
        >
          © 2024 Maison Arc. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
