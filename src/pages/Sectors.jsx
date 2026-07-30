import { useEffect, useRef, useState } from "react";

const sectors = [
  {
    num: "01", color: "#FF7F00", labelColor: "#D96D00", label: "CORPORATE", title: "Corporate & Commercial Spaces",
    desc: "Workplaces are more than buildings, they are where ideas grow, teams connect, and performance takes shape. We help organizations create engaging, high-performing environments that elevate employee experiences and support business success.",
    tags: ["Workplace Experience", "Employee Well-Being", "Operational Efficiency", "Smart Work Environments", "Future-Ready Campuses"],
    tagline: "Creating workplaces that empower individuals and strengthen organizations.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    num: "02", color: "#43934A", labelColor: "#377B3D", label: "MANUFACTURING", title: "Manufacturing, Industrial & Infrastructure",
    desc: "Powering the environments that drive industry forward. From manufacturing facilities to logistics networks and critical infrastructure, we create high-performing environments that strengthen operational continuity, workforce experience, and business resilience.",
    tags: ["Critical Operations Support", "Infrastructure Reliability", "Safety & Risk Management", "Environmental Responsibility", "Sustainable Growth"],
    tagline: "Supporting the systems that power industries, communities, and progress.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    num: "03", color: "#FFB800", labelColor: "#b07c00", label: "INFRASTRUCTURE", title: "Infrastructure, Public Sector & Smart Cities",
    desc: "As cities and public spaces continue to evolve, organizations require trusted partners who can support large-scale infrastructure and community environments. Our approach focuses on creating sustainable environments that support future-ready communities.",
    tags: ["Community Engagement", "Destination Management", "Experience Design", "Service Excellence", "Future-Ready"],
    tagline: "Helping create memorable experiences that people return to again and again.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"
  },
  {
    num: "04", color: "#FF7F00", labelColor: "#D96D00", label: "EDUCATION", title: "Education",
    desc: "Educational institutions are more than places of learning—they are environments that shape future generations. From schools and universities to student residences, Catalyst creates safe, hygienic, and inspiring campuses that foster academic excellence, student well-being, and seamless day-to-day operations. Our integrated solutions help educators focus on what matters most: empowering students to learn, grow, and thrive.",
    tags: ["Campus Experience", "Safety & Compliance", "Student Well-Being", "Operational Excellence", "Sustainable Campuses"],
    tagline: "Supporting environments where curiosity grows and futures take shape.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200"
  },
  {
    num: "05", color: "#43934A", labelColor: "#377B3D", label: "LIVING", title: "Community Living",
    desc: "Communities flourish when people feel safe, connected, and cared for. Catalyst partners with residential communities and integrated townships to deliver thoughtfully managed environments that prioritize comfort, safety, sustainability, and operational excellence. Through integrated facility management, food services, infrastructure support, and community-focused solutions, we help create vibrant living spaces where residents can enjoy a higher quality of life.",
    tags: ["Community Experience", "Resident Well-Being", "Sustainable Living", "Safety & Comfort", "Long-Term Value Creation"],
    tagline: "Creating spaces that foster belonging and enrich everyday living.",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200"
  },
  {
    num: "06", color: "#FFB800", labelColor: "#b07c00", label: "HEALTHCARE", title: "Healthcare Technology Management",
    desc: "Supporting better care through people, technology, and operational excellence. We support hospitals, healthcare institutions, and life sciences organizations enhance patient experiences, optimize clinical operations, and maximize the performance of critical healthcare technologies while maintaining the highest standards of safety, compliance, and care quality.",
    tags: ["Clinical Support Environments", "Patient Experience", "Technology Reliability", "Safety & Compliance", "Operational Continuity"],
    tagline: "Supporting environments where care, trust, and excellence come together.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
  },
];

export default function Sectors({ go, hash }) {
  const [active, setActive] = useState(0);
  const blocksRef = useRef([]);

  // a block becomes active when it crosses a thin band at the upper-middle of the viewport
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const i = blocksRef.current.indexOf(e.target);
          if (i > -1) setActive(i);
        }
      });
    }, { rootMargin: "-45% 0px -54% 0px", threshold: 0 });
    blocksRef.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const jumpTo = (i) => blocksRef.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });

  useEffect(() => {
    if (hash && hash.includes("?section=")) {
      const idx = parseInt(hash.split("?section=")[1]);
      if (!isNaN(idx) && idx >= 0 && idx < sectors.length) {
        setTimeout(() => jumpTo(idx), 200);
      }
    } else {
      try { window.scrollTo({ top: 0, behavior: "auto" }); } catch(e){}
    }
  }, [hash]);

  return (
    <div data-screen-label="Sectors">
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px clamp(20px,4vw,56px) 60px", overflow: "hidden", backgroundImage: "linear-gradient(rgba(25, 25, 25, 0.74), rgba(25, 25, 25, 0.21)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "relative", maxWidth: 1240, width: "100%", margin: "0 auto" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 22 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Sectors</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(32px,4.4vw,64px)", color: "#fff", maxWidth: 1080 }}>Every Environment Has a Purpose. Every Purpose Deserves the <span className="gradtext">Right Ecosystem.</span></h1>
          <p data-reveal data-delay="2" className="shown" style={{ marginTop: 26, maxWidth: 820, fontSize: "clamp(16px,1.3vw,19px)", lineHeight: 1.7, color: "rgba(255, 255, 255, 1)" }}>No two environments are alike. A corporate workplace seeks productivity and collaboration. A hospital prioritizes care and reliability. An educational campus nurtures growth and discovery. A residential community values comfort and belonging.</p>
          <p data-reveal data-delay="3" className="shown" style={{ marginTop: 18, maxWidth: 820, fontSize: 16, lineHeight: 1.7, color: "rgba(255, 255, 255, 1)" }}>At Catalyst, we understand that every sector has unique challenges, expectations, and opportunities. Because the environments we shape today influence how people learn, work, heal, connect, and thrive tomorrow.</p>
        </div>
      </section>

      {/* Sectors — sticky visual scrollytelling */}
      <section style={{ padding: "clamp(70px,9vw,120px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>

          {/* index strip */}
          <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "clamp(44px,5vw,70px)" }}>
            {sectors.map((s, i) => (
              <button key={i} onClick={() => jumpTo(i)} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 18px", borderRadius: 999, background: active === i ? "#191919" : "#F9F7F3", border: "1px solid rgba(25,25,25,.08)", cursor: "pointer", transition: "background .35s, color .35s" }}>
                <span style={{ fontFamily: "Inter Tight", fontSize: 13, fontWeight: 600, color: s.color }}>{s.num}</span>
                <span style={{ fontSize: 12, letterSpacing: ".14em", fontWeight: 600, color: active === i ? "#fff" : "#191919", transition: "color .35s" }}>{s.label}</span>
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "start" }} data-2col>

            {/* left — content blocks, consistently aligned */}
            <div>
              {sectors.map((s, i) => (
                <article key={i} ref={el => { blocksRef.current[i] = el; }} style={{ minHeight: "58vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(36px,5vh,60px) 0", borderBottom: i < sectors.length - 1 ? "1px solid rgba(25,25,25,.07)" : "none", opacity: active === i ? 1 : 0.35, transition: "opacity .5s ease" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                    <span style={{ fontFamily: "Inter Tight", fontSize: 15, fontWeight: 600, color: s.color }}>{s.num}</span>
                    <span style={{ fontSize: 13, letterSpacing: ".18em", color: s.labelColor, fontWeight: 600 }}>{s.label}</span>
                  </div>
                  <h2 style={{ fontSize: "clamp(26px,3vw,40px)", color: "#191919", marginTop: 14 }}>{s.title}</h2>

                  {/* mobile-only inline image (sticky stage is hidden there) */}
                  <div data-sector-inline-img style={{ display: "none", borderRadius: 24, overflow: "hidden", marginTop: 20, height: 230 }}>
                    <img src={s.img} alt={s.label} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>

                  <p style={{ marginTop: 18, fontSize: "16.5px", lineHeight: 1.75, color: "#46433C" }}>{s.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22 }}>
                    {s.tags.map((tag, ti) => (
                      <span key={ti} style={{ padding: "8px 16px", borderRadius: 40, background: "#F9F7F3", border: "1px solid rgba(25,25,25,.08)", fontSize: 13, fontWeight: 500, color: "#191919" }}>{tag}</span>
                    ))}
                  </div>
                  <p style={{ marginTop: 20, fontFamily: "Caveat, cursive", fontSize: 22, fontWeight: 600, color: s.labelColor }}>{s.tagline}</p>
                </article>
              ))}
            </div>

            {/* right — sticky image stage with the sitewide curtain wipe */}
            <div data-sector-sticky style={{ position: "sticky", top: 104, height: "calc(100vh - 170px)", minHeight: 440, borderRadius: 36, overflow: "hidden", background: "#191919" }}>
              {sectors.map((s, i) => (
                <div key={i} aria-hidden={active !== i} style={{ position: "absolute", inset: 0, clipPath: i <= active ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)", transition: "clip-path .9s cubic-bezier(.77,0,.18,1)", willChange: "clip-path" }}>
                  <img src={s.img} alt="" loading={i === 0 ? "eager" : "lazy"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,15,15,.55) 0%, transparent 40%)" }}></div>
                  <div style={{ position: "absolute", top: 22, right: 30, fontFamily: "Inter Tight", fontWeight: 600, fontSize: "clamp(64px,7vw,110px)", lineHeight: 1, color: "rgba(255,255,255,.22)", userSelect: "none" }}>{s.num}</div>
                  <div style={{ position: "absolute", left: 26, bottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color }}></span>
                    <span style={{ color: "#fff", fontSize: 13, letterSpacing: ".18em", fontWeight: 600 }}>{s.label}</span>
                  </div>
                  <div style={{ position: "absolute", right: 28, bottom: 24, color: "rgba(255,255,255,.7)", fontFamily: "Inter Tight", fontSize: 14, fontWeight: 600 }}>{s.num} / 0{sectors.length}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#191919", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(50% 60% at 20% 20%,rgba(255,127,0,.16),transparent 60%),radial-gradient(50% 60% at 85% 90%,rgba(67,147,74,.16),transparent 60%)" }}></div>
        <div style={{ position: "relative", maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18, justifyContent: "center" }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Our Approach Across Sectors</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.8vw,50px)", color: "#fff" }}>Different Environments. One Philosophy.</h2>
          <p data-reveal data-delay="2" style={{ marginTop: 24, fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,.72)" }}>Every sector has its own challenges. Every environment has its own expectations. But one principle remains constant: <span style={{ color: "#fff", fontWeight: 600 }}>Great environments create better outcomes.</span></p>
          <p data-reveal data-delay="3" style={{ marginTop: 18, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.55)" }}>By combining operational excellence, innovation, sustainability, and a deep understanding of sector-specific needs, Catalyst helps organizations create environments that perform better, adapt faster, and deliver meaningful value over the long term.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginTop: 38 }}>
            <button className="mag" onClick={() => go("contact")} style={{ background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 16, padding: "17px 36px", borderRadius: 999 }}>Let's Create Impact Together! →</button>
            <button className="mag" onClick={() => go("careers")} style={{ background: "rgba(255,255,255,.08)", color: "#fff", fontWeight: 600, fontSize: 16, padding: "17px 36px", borderRadius: 999, border: "1px solid rgba(255,255,255,.2)" }}>Join Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}
