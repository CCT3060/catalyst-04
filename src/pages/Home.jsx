import { useState, useEffect, useRef } from "react";
import CTA from "../components/CTA";
import HeroSlider from "../components/HeroSlider";
import partnerImg from "../assets/Partnerwithus.webp";
import { Globe } from "@/components/ui/cobe-globe";
import aboutusImg from "../assets/image.png";
import imgCert1 from "../assets/certificate/12db7e13-6038-4d36-a1d1-effa675dbf02.webp";
import imgCert2 from "../assets/certificate/ISO-logo-1.webp";
import imgCert3 from "../assets/certificate/images (1).webp";
import imgCert4 from "../assets/certificate/images (2).webp";
import imgCert5 from "../assets/certificate/images (3).webp";
import imgCert6 from "../assets/certificate/images (4).webp";
import imgCert7 from "../assets/certificate/images (5).webp";
import isoImg14001 from "../assets/certificate/iso-14001-2015-certification-250x250.webp";
import isoImg45001 from "../assets/certificate/45001 2015.png";
import isoImg9001 from "../assets/certificate/9001 2015.png";
import { UtensilsCrossed, Building2, Factory, Stethoscope, Users, ArrowRight, ArrowUpRight } from "lucide-react";
import foodServiceImg from "../assets/foodhome.webp";
import fmImg from "../assets/ifmhome.webp";
import workforceImg from "../assets/workforce_gen.webp";
import AnimatedNumber from "../components/AnimatedNumber";
import about2 from "../assets/image2.png";
import about3 from "../assets/about3.webp";
import about4 from "../assets/about4.webp";
import LinkedInPosts from "../components/LinkedInPosts";



const SECTORS = [
  { num: "01", name: "Corporate & Commercial Spaces", desc: "Workplaces are more than buildings, they are where ideas grow, teams connect, and performance takes shape. We help organizations create engaging, high-performing environments that elevate employee experiences and support business success.", bg: "#191919", img: "homecor.webp", page: null },
  { num: "02", name: "Manufacturing & Industrial Infrastructure", desc: "Powering the environments that drive industry forward. From manufacturing facilities to logistics networks and critical infrastructure, we create high-performing environments that strengthen operational continuity, workforce experience, and business resilience.", bg: "#43934A", img: "homemane.webp", page: null },
  { num: "03", name: " Public Sector & Smart Cities", desc: "As cities and public spaces continue to evolve, organizations require trusted partners who can support large-scale infrastructure and community environments. Our approach focuses on creating sustainable environments that support future-ready communities.", bg: "#242424", img: "image3.png", page: null },
  { num: "04", name: "Education", desc: "Educational institutions are more than places of learning—they are environments that shape future generations. From schools and universities to student residences, Catalyst creates safe, hygienic, and inspiring campuses that foster academic excellence, student well-being, and seamless day-to-day operations. Our integrated solutions help educators focus on what matters most: empowering students to learn, grow, and thrive.", bg: "#0258cc", img: "education1.webp", page: null },
  { num: "05", name: "Community Living", desc: "Communities flourish when people feel safe, connected, and cared for. Catalyst partners with residential communities and integrated townships to deliver thoughtfully managed environments that prioritize comfort, safety, sustainability, and operational excellence. Through integrated facility management, food services, infrastructure support, and community-focused solutions, we help create vibrant living spaces where residents can enjoy a higher quality of life.", bg: "#FFB800", img: "living.webp", page: null },
  { num: "06", name: "Healthcare ", desc: "Supporting better care through people, technology, and operational excellence. We support hospitals, healthcare institutions, and life sciences organizations enhance patient experiences, optimize clinical operations, and maximize the performance of critical healthcare technologies while maintaining the highest standards of safety, compliance, and care quality.", bg: "#2E5D33", img: "healthcare.webp", page: "htm" },
];



const SOLUTIONS = [
  { page: "ifm", name: "Integrated Facilities Management", icon: Building2, img: fmImg, tagline: "Technical, soft, and business support services working as one system, so every environment performs seamlessly, every day." },
  { page: "infra", name: "Infrastructure Solutions", icon: Factory, img: "/sectors/infrastructure.webp", tagline: "Design, build, and upkeep of the physical backbone that keeps organizations moving — reliably, safely, and sustainably." },
  { page: "food", name: "Food Services", icon: UtensilsCrossed, img: foodServiceImg, tagline: "Safe, nutritious, and memorable dining experiences — crafted for workplaces, hospitals, campuses, and communities, delivered at scale." },
  { page: "workforce", name: "Workforce Solutions", icon: Users, img: workforceImg, tagline: "Trained, verified, and dependable teams that bring service excellence to every environment we serve." },
  { page: "htm", name: "Healthcare Technology Management", icon: Stethoscope, img: "/sectors/healthcare.webp", tagline: "Lifecycle management of critical medical technology — maximizing uptime, compliance, and the quality of patient care." },

];



const CERTS = [
  { name: "ISO 9001:2015", image: isoImg9001, label: "Quality Management System" },
  { name: "ISO 45001:2018", image: isoImg45001, label: "Health & Safety Management Systems" },
  { name: "ISO 14001:2015", image: isoImg14001, label: "Environmental Management Systems" },
  { name: "ISO 9001", image: imgCert1 },
  { name: "ISO 14001", image: imgCert2 },
  { name: "ISO 45001", image: imgCert3 },
  { name: "FSSAI", image: imgCert4 },
  { name: "NABH", image: imgCert5 },
  { name: "ESG", image: imgCert6 },
  { name: "Regulatory", image: imgCert7 },
];

export default function Home({ go }) {
  const [activeSector, setActiveSector] = useState(0);
  const [activeSolution, setActiveSolution] = useState(0);

  // ── Cert scroll: auto-scroll + drag-to-scroll ──
  const certScrollRef = useRef(null);
  const dragState = useRef({ dragging: false, startX: 0, scrollLeft: 0, resumeTimer: null });

  useEffect(() => {
    const el = certScrollRef.current;
    if (!el) return;
    const speed = 0.7;
    let rafId;
    let paused = false;

    const tick = () => {
      if (!paused) {
        el.scrollLeft += speed;
        // infinite loop: when we reach the halfway point reset to start
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };

    // Mouse drag
    const onMouseDown = e => {
      dragState.current.dragging = true;
      dragState.current.startX = e.pageX - el.offsetLeft;
      dragState.current.scrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
      pause();
      clearTimeout(dragState.current.resumeTimer);
    };
    const onMouseMove = e => {
      if (!dragState.current.dragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - dragState.current.startX) * 1.4;
      el.scrollLeft = dragState.current.scrollLeft - walk;
    };
    const onMouseUp = () => {
      dragState.current.dragging = false;
      el.style.cursor = "grab";
      dragState.current.resumeTimer = setTimeout(resume, 1200);
    };

    // Touch drag
    const onTouchStart = e => {
      dragState.current.startX = e.touches[0].pageX;
      dragState.current.scrollLeft = el.scrollLeft;
      pause();
      clearTimeout(dragState.current.resumeTimer);
    };
    const onTouchMove = e => {
      const x = e.touches[0].pageX;
      const walk = (dragState.current.startX - x) * 1.2;
      el.scrollLeft = dragState.current.scrollLeft + walk;
    };
    const onTouchEnd = () => {
      dragState.current.resumeTimer = setTimeout(resume, 1200);
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseUp);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(dragState.current.resumeTimer);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseUp);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  useEffect(() => {
    const onMove = e => {
      document.querySelectorAll('[data-glow-card]').forEach(card => {
        card.style.setProperty('--x', e.clientX);
        card.style.setProperty('--y', e.clientY);
      });
    };
    document.addEventListener('pointermove', onMove);
    return () => document.removeEventListener('pointermove', onMove);
  }, []);
  return (
    <div data-screen-label="Home">

      {/* Hero */}
      <HeroSlider go={go} />

      {/* About snippet */}
      <section style={{ padding: "clamp(50px,7vw,90px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }} data-split>
          <div style={{ position: "relative", height: 520 }}>
            {/* Box 1 (Top Left) */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "48%", height: "48%", borderRadius: 24, overflow: "hidden", border: "6px solid #F9F7F3", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", zIndex: 1 }}>
              <img loading="lazy" src={aboutusImg} alt="About Catalyst" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            {/* Box 2 (Middle Right) */}
            <div style={{ position: "absolute", top: "15%", right: 0, width: "55%", height: "55%", borderRadius: 24, overflow: "hidden", border: "6px solid #F9F7F3", boxShadow: "0 20px 40px rgba(0,0,0,0.12)", zIndex: 2 }}>
              <img loading="lazy" src={about2} alt="Team Collaboration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            {/* Box 3 (Bottom Left) */}
            <div style={{ position: "absolute", bottom: "10%", left: "5%", width: "42%", height: "42%", borderRadius: 24, overflow: "hidden", border: "6px solid #F9F7F3", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", zIndex: 3 }}>
              <img loading="lazy" src={about3} alt="Meeting" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            {/* Box 4 (Bottom Right) */}
            <div style={{ position: "absolute", bottom: 0, right: "10%", width: "45%", height: "30%", borderRadius: 24, overflow: "hidden", border: "6px solid #F9F7F3", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", zIndex: 4 }}>
              <img loading="lazy" src={about4} alt="Office Space" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>About Catalyst</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.6vw,50px)", color: "#191919" }}>An integrated services partner built around people</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 24, fontSize: 18, lineHeight: 1.7, color: "#46433C" }}>Catalyst delivers an integrated portfolio of services dedicated to enhancing the environments where people work, heal, learn, live, and connect. </p>
            <p data-reveal data-delay="3" style={{ marginTop: 18, fontSize: 18, lineHeight: 1.7, color: "#6E6A61" }}>By combining operational excellence, technology, and human-centered solutions, we help organizations improve performance, elevate experiences, and create lasting value.</p>
            <button data-reveal data-delay="4" className="mag" onClick={() => go("about")} style={{ marginTop: 34, background: "#191919", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8 }}>Discover our story <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

      {/* Solutions Ecosystem — expanding capability strip */}
      <section style={{ padding: "clamp(50px,7vw,90px) clamp(20px,4vw,56px)", background: "#F9F7F3", overflow: "hidden" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 60px", flexWrap: "wrap", marginBottom: "clamp(36px,4.5vw,60px)" }}>
            <div style={{ maxWidth: 620 }}>
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Solutions Ecosystem</div>
              <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,4vw,52px)", color: "#191919" }}>Multiple capabilities. One integrated system.</h2>
            </div>
            <p data-reveal data-delay="2" style={{ maxWidth: 400, fontSize: 16.5, lineHeight: 1.7, color: "#6E6A61", paddingBottom: 8 }}>When specialized expertise works in harmony, performance improves and meaningful outcomes follow — explore each capability to see how.</p>
          </div>

          {/* Desktop / tablet — interactive expanding panels */}
          <div data-reveal data-ecostrip className="eco-strip">
            {SOLUTIONS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.page}
                  className={`eco-panel${activeSolution === i ? " on" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={s.name}
                  onMouseEnter={() => setActiveSolution(i)}
                  onFocus={() => setActiveSolution(i)}
                  onClick={() => go(s.page)}
                  onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(s.page); } }}
                >
                  <div className="eco-bg" style={{ backgroundImage: `url(${s.img})` }}></div>
                  <div className="eco-shade"></div>
                  <div className="eco-top">
                    <span className="eco-ico"><Icon size={19} /></span>
                    <span className="eco-idx">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="eco-vtitle">{s.name}</div>
                  <div className="eco-body">
                    <h3 className="eco-name">{s.name}</h3>
                    <p className="eco-tag">{s.tagline}</p>
                    <span className="eco-cta">EXPLORE <ArrowUpRight size={15} /></span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile — stacked capability cards */}
          <div data-reveal data-solutions-mobile style={{ display: "none", flexDirection: "column", gap: 14 }}>
            {SOLUTIONS.map(s => {
              const Icon = s.icon;
              return (
                <div key={s.page} onClick={() => go(s.page)} style={{ position: "relative", minHeight: 120, borderRadius: 22, overflow: "hidden", backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.78) 40%, rgba(10,10,10,.3)), url(${s.img})`, backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, padding: "18px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ width: 42, height: 42, borderRadius: 999, background: "rgba(255,255,255,.13)", border: "1px solid rgba(255,255,255,.32)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon size={18} /></span>
                    <div>
                      <div style={{ color: "#fff", fontFamily: "Outfit", fontWeight: 600, fontSize: 17, lineHeight: 1.3, maxWidth: 220 }}>{s.name}</div>
                      <div style={{ color: "rgba(255,255,255,.65)", fontSize: 11.5, fontWeight: 600, letterSpacing: ".14em", marginTop: 6 }}>LEARN MORE</div>
                    </div>
                  </div>
                  <span style={{ width: 40, height: 40, borderRadius: 999, background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.35)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <ArrowRight size={18} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors — editorial index + sticky visual */}
      <section style={{ background: "#F9F7F3", position: "relative" }}>
        <div style={{ padding: "clamp(50px,7vw,90px) clamp(20px,4vw,56px) 0" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 60px", flexWrap: "wrap", marginBottom: "clamp(36px,4.5vw,60px)" }}>
              <div style={{ maxWidth: 620 }}>
                <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Sectors We Serve</div>
                <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,4vw,52px)", color: "#191919" }}>Every environment presents unique challenges and opportunities</h2>
              </div>
              <p data-reveal data-delay="2" style={{ maxWidth: 400, fontSize: 16.5, lineHeight: 1.7, color: "#6E6A61", paddingBottom: 8 }}>Catalyst combines industry expertise, integrated services, and technology-driven solutions to create healthier, safer, and more efficient environments.</p>
            </div>

            <div className="sec-grid" data-reveal data-delay="2">
              {/* Left — sector index */}
              <div>
                {SECTORS.map((s, i) => (
                  <div key={i} className={`sec-row${activeSector === i ? " on" : ""}`}>
                    <button className="sec-head" onMouseEnter={() => setActiveSector(i)} onClick={() => setActiveSector(i)} aria-expanded={activeSector === i}>
                      <span className="sec-num">{s.num}</span>
                      <span className="sec-name">{s.name}</span>
                      <span className="sec-arr"><ArrowUpRight size={16} /></span>
                    </button>
                    <div className="sec-body">
                      <div className="sec-body-in">
                        <div data-sector-inline-img style={{ display: "none", height: 180, borderRadius: 16, overflow: "hidden", marginBottom: 16, backgroundColor: s.bg, backgroundImage: `url(/sectors/${s.img})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        <p>{s.desc}</p>
                        {s.page && <span className="sec-link" onClick={() => go(s.page)}>Explore this sector <ArrowRight size={15} /></span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right — sticky crossfading visual */}
              <div data-sector-sticky style={{ position: "sticky", top: 96 }}>
                <div style={{ position: "relative", height: "clamp(460px,60vh,580px)", borderRadius: 28, overflow: "hidden", boxShadow: "0 30px 80px rgba(25,25,25,.16)" }}>
                  {SECTORS.map((s, i) => (
                    <div key={i} aria-hidden={activeSector !== i} style={{ position: "absolute", inset: 0, backgroundColor: s.bg, backgroundImage: `linear-gradient(to top, rgba(10,10,10,.52) 0%, rgba(10,10,10,.08) 45%), url(/sectors/${s.img})`, backgroundSize: "cover", backgroundPosition: "center", opacity: activeSector === i ? 1 : 0, transform: activeSector === i ? "scale(1)" : "scale(1.06)", transition: "opacity .7s ease, transform 1.2s cubic-bezier(.16,.84,.44,1)" }}></div>
                  ))}
                  <div aria-hidden key={`num-${activeSector}`} className="sector-swap" style={{ position: "absolute", top: 20, right: 28, fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(72px,7vw,104px)", lineHeight: 1, color: "rgba(255,255,255,.22)", userSelect: "none" }}>{SECTORS[activeSector].num}</div>
                  <div key={`cap-${activeSector}`} className="sector-swap" style={{ position: "absolute", left: 26, right: 26, bottom: 24 }}>
                    <div style={{ display: "inline-flex", padding: "7px 14px", borderRadius: 999, background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.3)", backdropFilter: "blur(8px)", color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: ".12em" }}>SECTOR {SECTORS[activeSector].num}</div>
                    <div style={{ marginTop: 12, fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(20px,1.9vw,26px)", letterSpacing: "-.01em", lineHeight: 1.2, color: "#fff" }}>{SECTORS[activeSector].name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "clamp(50px,6vw,80px) clamp(20px,4vw,56px)" }}>
          <div data-reveal style={{ textAlign: "center", fontSize: "clamp(18px,2vw,26px)", fontFamily: "Outfit", fontWeight: 500, color: "#46433C", maxWidth: 900, margin: "0 auto", lineHeight: 1.5 }}>Wherever people work, learn, heal, live, or connect, Catalyst creates environments that enable well-being, inspire performance, and deliver lasting value.</div>
        </div>
      </section>

      {/* Foundations — dark metrics board */}
      <section style={{ padding: "clamp(50px,7vw,90px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div data-reveal className="fdn-panel">
            <div style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 60px", flexWrap: "wrap", marginBottom: "clamp(30px,4vw,52px)" }}>
              <div style={{ maxWidth: 600 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#8FBCFF", fontWeight: 600, fontSize: 24, marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Our Foundations</div>
                <h2 style={{ fontSize: "clamp(28px,3.6vw,46px)", color: "#fff" }}>People are at the heart of every great experience</h2>
              </div>
              <p style={{ maxWidth: 400, fontSize: 15.5, lineHeight: 1.7, color: "rgba(255,255,255,.62)", paddingBottom: 6 }}>Our foundations define how we create value — a commitment to operational excellence, innovation, and responsibility towards people, communities, and the environment.</p>
            </div>

            <div style={{ position: "relative" }}>
              <div className="fdn-cap">THE SCALE WE OPERATE AT</div>
              <div className="fdn-grid">
                {[["15+", "States", "Built on trust, performance, and long-term collaboration."], ["13+", "Years", "Delivering integrated solutions across diverse industries."], ["150+", "Locations", "Supporting organizations across India."], ["8,000+", "Workforce", "Driving excellence through skilled and dedicated professionals."]].map(([num, label, desc], i) => (
                  <div key={i} className="fdn-cell">
                    <div className="fdn-tick"></div>
                    <div className="fdn-num"><AnimatedNumber value={num} /></div>
                    <div className="fdn-lbl">{label}</div>
                    <div className="fdn-dsc">{desc}</div>
                  </div>
                ))}
              </div>

              <div className="fdn-cap" style={{ marginTop: "clamp(26px,3vw,40px)" }}>THE IMPACT WE DELIVER, EVERY YEAR</div>
              <div className="fdn-grid">
                {[["2Lac+", "Meals Served", "Nourishing workplaces, communities, and institutions every day."], ["75MN+", "Sq. Ft. Managed", "Maintaining safe, efficient, and high-performing environments."]].map(([num, label, desc], i) => (
                  <div key={i} className={`fdn-cell ${i === 0 ? "lg:col-start-2" : ""}`}>
                    <div className="fdn-tick"></div>
                    <div className="fdn-num"><AnimatedNumber value={num} /></div>S
                    <div className="fdn-lbl">{label}</div>
                    <div className="fdn-dsc">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: "clamp(50px,7vw,90px) 0", background: "#fff", borderTop: "1px solid rgba(25,25,25,.06)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(30px,4vw,48px)" }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 10, justifyContent: "center" }}><span style={{ width: 28, height: 2, background: "#0373ff" }}></span>CERTIFICATIONS &amp; ACCREDITATIONS<span style={{ width: 28, height: 2, background: "#43934A" }}></span></div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.6vw,46px)", color: "#191919", lineHeight: 1.05 }}>Built on standards you can trust</h2>
          </div>
        </div>

        {/* Drag-scroll track */}
        <div
          ref={certScrollRef}
          data-reveal
          style={{
            display: "flex",
            overflowX: "scroll",
            gap: 26,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 10,
            paddingBottom: 18,
            cursor: "grab",
            userSelect: "none",
            scrollbarWidth: "none",          /* Firefox */
            msOverflowStyle: "none",         /* IE/Edge */
            maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          }}
          className="cert-drag-track"
        >
          {[...CERTS, ...CERTS].map((cert, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: cert.label ? "flex-start" : "center", padding: cert.label ? "16px 18px 14px" : "18px", flex: "none", width: "clamp(215px,18vw,260px)", height: cert.label ? 180 : 160, borderRadius: 24, background: "transparent", gap: 0, pointerEvents: "none" }}>
              <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img loading="lazy" src={cert.image} alt={cert.name} style={{ maxWidth: "100%", maxHeight: 110, width: "auto", objectFit: "contain", display: "block" }} />
              </div>
              {cert.label && (
                <div style={{ width: "100%", textAlign: "center", fontSize: 12, fontWeight: 600, color: "#46433C", letterSpacing: ".01em", lineHeight: 1.35, paddingTop: 8 }}>{cert.label}</div>
              )}
            </div>
          ))}
        </div>

        {/* Drag hint */}
        <div style={{ textAlign: "center", marginTop: 14 }}>
          <span style={{ fontSize: 12, color: "#9E9A93", fontWeight: 500, letterSpacing: ".06em", display: "inline-flex", alignItems: "center", gap: 6 }}>
          </span>
        </div>
      </section>

      {/* LinkedIn Posts – Official API */}
      <section style={{ padding: "clamp(56px,7vw,96px) 0", background: "#F4F2EF" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px,4vw,52px)" }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, marginBottom: 10, justifyContent: "center" }}>
              <span style={{ width: 28, height: 2, background: "#0373ff" }}></span>LATEST UPDATES<span style={{ width: 28, height: 2, background: "#43934A" }}></span>
            </div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(26px,3.4vw,44px)", color: "#191919", lineHeight: 1.05 }}>Follow us on LinkedIn</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 12, fontSize: 17, color: "#6E6A61" }}>Stay connected with our latest insights, news and updates.</p>
          </div>
          <LinkedInPosts limit={6} />
        </div>
      </section>

      <CTA go={go} title="Let's Create Impact Together" subtitle="" primaryLabel="Partner With Us" primaryPage="contact" secondaryLabel="Explore Sectors" secondaryPage="sectors" image={partnerImg} />
    </div>
  );
}
