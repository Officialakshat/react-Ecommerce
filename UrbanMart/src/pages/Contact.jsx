import { useState, useRef, useEffect } from "react";

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

const TOPICS = [
  "Order Inquiry",
  "Product Question",
  "Returns & Exchanges",
  "Wholesale",
  "Press & Media",
  "General Feedback",
];

const CONTACT_INFO = [
  {
    icon: "◎",
    label: "Email Us",
    value: "hello@maisonarc.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: "✦",
    label: "Call Us",
    value: "+1 (800) 628-4762",
    sub: "Mon–Fri, 9am–6pm EST",
  },
  {
    icon: "◈",
    label: "Visit Us",
    value: "14 Mercer Street",
    sub: "New York, NY 10013",
  },
];

const FAQS = [
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 3–7 business days. Express 1–2. International orders typically arrive within 10–14 business days.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 30 days of delivery. Items must be unused and in original packaging. Contact us to initiate a return.",
  },
  {
    q: "Do you offer wholesale pricing?",
    a: "Yes — we work with select retailers. Please use the contact form with 'Wholesale' selected and include your business details.",
  },
  {
    q: "Are your products sustainably sourced?",
    a: "Every supplier is vetted for ethical and sustainable practices. We publish our sourcing standards on our About page.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "1rem 1.25rem",
    background: focusedField === field ? "#fff" : "#faf8f5",
    border: `1px solid ${focusedField === field ? "#b8966e" : "#ddd5c8"}`,
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.95rem",
    color: "#1a1714",
    transition: "border-color 0.25s, background 0.25s",
    outline: "none",
    borderRadius: "2px",
  });

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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .serif { font-family: 'Playfair Display', Georgia, serif; }
        .sans { font-family: 'Jost', sans-serif; }
        .gold { color: #b8966e; }
        .info-card { border: 1px solid #e8e0d4; transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s; }
        .info-card:hover { border-color: #b8966e; transform: translateY(-4px); box-shadow: 0 12px 40px rgba(184,150,110,0.12); }
        .topic-btn { font-family: 'Jost',sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.6rem 1.1rem; background: #f0ebe3; border: 1px solid #e0d4c4; cursor: pointer; transition: all 0.2s; color: #6b5e52; border-radius: 2px; }
        .topic-btn:hover { background: #e8dfd0; border-color: #c8b89a; }
        .topic-btn.active { background: #1a1714; color: #d4c4b0; border-color: #1a1714; }
        .cta-btn { background: #1a1714; color: #faf8f5; font-family: 'Jost',sans-serif; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.78rem; padding: 1rem 2.5rem; border: 1px solid #1a1714; cursor: pointer; transition: background 0.3s, color 0.3s; width: 100%; }
        .cta-btn:hover { background: #b8966e; border-color: #b8966e; color: #1a1714; }
        .faq-item { border-bottom: 1px solid #e8e0d4; overflow: hidden; }
        .faq-btn { width: 100%; background: none; border: none; cursor: pointer; padding: 1.5rem 0; display: flex; justify-content: space-between; align-items: center; text-align: left; }
        .nav-link { text-decoration: none; color: #6b5e52; font-family: 'Jost',sans-serif; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 300; }
        textarea { resize: vertical; }
        select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23b8966e' stroke-width='1.5' fill='none'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1.25rem center; padding-right: 3rem !important; }
      `}</style>

      {/* NAV */}
      <nav
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
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {["Shop", "About"].map((l) => (
            <a key={l} href="#" className="nav-link">
              {l}
            </a>
          ))}
        </div>
        <span
          className="serif"
          style={{ fontSize: "1.5rem", letterSpacing: "0.05em" }}
        >
          Maison<span className="gold">•</span>Arc
        </span>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {["Journal", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              className="nav-link"
              style={{
                color: l === "Contact" ? "#1a1714" : "#6b5e52",
                borderBottom: l === "Contact" ? "1px solid #b8966e" : "none",
                paddingBottom: "2px",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO HEADER */}
      <section
        style={{
          padding: "7vw 6vw 5vw",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6vw",
          alignItems: "center",
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
            Get in Touch
          </div>
          <h1
            className="serif"
            style={{
              fontSize: "clamp(2.8rem,5vw,5.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "1.75rem",
            }}
          >
            We'd love to
            <br />
            <em style={{ color: "#b8966e" }}>hear from you.</em>
          </h1>
          <p
            className="sans"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#5a4f45",
              fontWeight: 300,
              maxWidth: "420px",
            }}
          >
            Whether you have a question about an order, need product advice, or
            just want to share feedback — our team is here and genuinely happy
            to help.
          </p>
        </div>

        {/* Contact info cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {CONTACT_INFO.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="info-card"
                style={{
                  background: "#faf8f5",
                  padding: "1.5rem 2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  borderRadius: "2px",
                }}
              >
                <div
                  className="serif"
                  style={{
                    fontSize: "1.6rem",
                    color: "#b8966e",
                    width: "32px",
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div
                    className="sans"
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#a89a8a",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    className="serif"
                    style={{
                      fontSize: "1.05rem",
                      color: "#1a1714",
                      marginBottom: "0.15rem",
                    }}
                  >
                    {c.value}
                  </div>
                  <div
                    className="sans"
                    style={{
                      fontSize: "0.78rem",
                      color: "#8a7a6a",
                      fontWeight: 300,
                    }}
                  >
                    {c.sub}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section
        style={{
          padding: "2vw 6vw 8vw",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "6vw",
          alignItems: "start",
        }}
      >
        {/* FORM */}
        <Reveal>
          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e0d4",
              padding: "3.5rem",
              borderRadius: "2px",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>
                  ✦
                </div>
                <h3
                  className="serif"
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    color: "#1a1714",
                  }}
                >
                  Message Received
                </h3>
                <p
                  className="sans"
                  style={{
                    color: "#6b5e52",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    maxWidth: "340px",
                    margin: "0 auto 2rem",
                  }}
                >
                  Thank you for reaching out. We'll get back to you within 24
                  hours.
                </p>
                <button
                  className="cta-btn"
                  style={{ width: "auto", padding: "0.9rem 2rem" }}
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", topic: "", message: "" });
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: "2.5rem" }}>
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
                    Send a Message
                  </div>
                  <h2
                    className="serif"
                    style={{ fontSize: "1.9rem", lineHeight: 1.15 }}
                  >
                    How can we help?
                  </h2>
                </div>

                {/* Topic selector */}
                <div style={{ marginBottom: "2rem" }}>
                  <label
                    className="sans"
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#8a7a6a",
                      display: "block",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Topic
                  </label>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                  >
                    {TOPICS.map((t) => (
                      <button
                        key={t}
                        className={`topic-btn${form.topic === t ? " active" : ""}`}
                        onClick={() => setForm((f) => ({ ...f, topic: t }))}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {[
                    ["name", "Your Name", "text"],
                    ["email", "Email Address", "email"],
                  ].map(([field, ph, type]) => (
                    <div key={field}>
                      <label
                        className="sans"
                        style={{
                          fontSize: "0.72rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "#8a7a6a",
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {ph}
                      </label>
                      <input
                        type={type}
                        placeholder={ph}
                        value={form[field]}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, [field]: e.target.value }))
                        }
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        style={inputStyle(field)}
                      />
                    </div>
                  ))}
                </div>

                {/* Message */}
                <div style={{ marginBottom: "2rem" }}>
                  <label
                    className="sans"
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#8a7a6a",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us what's on your mind..."
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...inputStyle("message"), resize: "vertical" }}
                  />
                </div>

                <button className="cta-btn" onClick={handleSubmit}>
                  Send Message →
                </button>
                <p
                  className="sans"
                  style={{
                    fontSize: "0.75rem",
                    color: "#a89a8a",
                    marginTop: "1rem",
                    fontWeight: 300,
                  }}
                >
                  We typically respond within 24 hours on business days.
                </p>
              </>
            )}
          </div>
        </Reveal>

        {/* SIDEBAR: FAQ + Map */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Reveal>
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
                Quick Answers
              </div>
              <h2
                className="serif"
                style={{ fontSize: "1.7rem", marginBottom: "1.75rem" }}
              >
                Common Questions
              </h2>
              <div>
                {FAQS.map((f, i) => (
                  <div key={i} className="faq-item">
                    <button
                      className="faq-btn"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span
                        className="serif"
                        style={{
                          fontSize: "1rem",
                          color: "#1a1714",
                          lineHeight: 1.4,
                          paddingRight: "1rem",
                        }}
                      >
                        {f.q}
                      </span>
                      <span
                        style={{
                          color: "#b8966e",
                          fontSize: "1.2rem",
                          fontFamily: "monospace",
                          flexShrink: 0,
                          transition: "transform 0.3s",
                          transform:
                            openFaq === i ? "rotate(45deg)" : "rotate(0)",
                        }}
                      >
                        +
                      </span>
                    </button>
                    <div
                      style={{
                        maxHeight: openFaq === i ? "200px" : "0",
                        overflow: "hidden",
                        transition:
                          "max-height 0.4s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      <p
                        className="sans"
                        style={{
                          fontSize: "0.9rem",
                          lineHeight: 1.75,
                          color: "#6b5e52",
                          fontWeight: 300,
                          paddingBottom: "1.25rem",
                        }}
                      >
                        {f.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Store Hours */}
          <Reveal delay={0.1}>
            <div
              style={{
                background: "#1a1714",
                padding: "2.5rem",
                borderRadius: "2px",
              }}
            >
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
                Store Hours
              </div>
              <h3
                className="serif"
                style={{
                  color: "#faf8f5",
                  fontSize: "1.35rem",
                  marginBottom: "1.5rem",
                }}
              >
                Visit Our Showroom
              </h3>
              {[
                ["Monday – Friday", "10:00 am – 7:00 pm"],
                ["Saturday", "11:00 am – 6:00 pm"],
                ["Sunday", "Closed"],
              ].map(([day, hours]) => (
                <div
                  key={day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    padding: "0.7rem 0",
                  }}
                >
                  <span
                    className="sans"
                    style={{
                      fontSize: "0.85rem",
                      color: "#a89a8a",
                      fontWeight: 300,
                    }}
                  >
                    {day}
                  </span>
                  <span
                    className="sans"
                    style={{
                      fontSize: "0.85rem",
                      color: hours === "Closed" ? "#6b5e52" : "#d4c4b0",
                      fontWeight: 400,
                    }}
                  >
                    {hours}
                  </span>
                </div>
              ))}
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="sans"
                  style={{
                    fontSize: "0.78rem",
                    color: "#8a8078",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  14 Mercer Street, SoHo
                  <br />
                  New York, NY 10013
                </div>
              </div>
            </div>
          </Reveal>

          {/* Social */}
          <Reveal delay={0.15}>
            <div
              style={{
                background: "#f0ebe3",
                padding: "2rem",
                borderRadius: "2px",
                border: "1px solid #e0d4c4",
              }}
            >
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
                Follow Along
              </div>
              <p
                className="sans"
                style={{
                  fontSize: "0.9rem",
                  color: "#6b5e52",
                  fontWeight: 300,
                  lineHeight: 1.6,
                  marginBottom: "1.25rem",
                }}
              >
                Join our community for daily inspiration and first access to new
                arrivals.
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {["Instagram", "Pinterest", "TikTok"].map((s) => (
                  <button
                    key={s}
                    style={{
                      fontFamily: "'Jost',sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "0.55rem 1rem",
                      background: "#fff",
                      border: "1px solid #ddd5c8",
                      cursor: "pointer",
                      color: "#6b5e52",
                      transition: "all 0.2s",
                      borderRadius: "2px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#1a1714";
                      e.target.style.color = "#d4c4b0";
                      e.target.style.borderColor = "#1a1714";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#fff";
                      e.target.style.color = "#6b5e52";
                      e.target.style.borderColor = "#ddd5c8";
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
