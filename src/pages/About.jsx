import { useEffect, useRef, useState } from "react";
import CTA from "../components/CTA";
import { StatStrip } from "../components/SolutionsKit";
import { BeamsBackground } from "@/components/ui/beams-background";
import partnerImg from "../assets/Partnerwithus.png";
import { ProfileCard } from "@/components/ui/profile-card";
import IndiaMap from "../components/IndiaMap";
import sankar from "../assets/sankar.png";
import { ShieldCheck, Heart, Star, Lightbulb, Leaf, MapPin, Plus, ArrowUpRight, UtensilsCrossed, Building2, Factory, Stethoscope, Users } from "lucide-react";

function initTilt(card) {
  let rx = 0, ry = 0, trx = 0, tryV = 0, raf;
  function lerp(a, b, t) { return a + (b - a) * t; }
  function animate() {
    rx = lerp(rx, trx, 0.12);
    ry = lerp(ry, tryV, 0.12);
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    raf = requestAnimationFrame(animate);
  }
  card.addEventListener("mouseenter", () => { raf = requestAnimationFrame(animate); });
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    trx = -yPct * 14;
    tryV = xPct * 14;
  });
  card.addEventListener("mouseleave", () => {
    trx = 0; tryV = 0;
    setTimeout(() => { cancelAnimationFrame(raf); card.style.transform = ""; }, 500);
  });
}

const JOURNEY = [
  { year: "2013", img: "j1.svg", title: "CSS registered in India", desc: "The company takes root in Pune — its headquarters and first home.", note: "where it began" },
  { year: "2014", img: "j2.svg", title: "First onshore & offshore contract", desc: "Secured a contract for onshore and offshore activities, setting the pace for growth." },
  { year: "2015", img: "j3.svg", title: "Marine services at scale", desc: "Chosen to manage the largest accommodation vessel in service — 750 people on board." },
  { year: "2016", img: "j4.svg", title: "CSS PTE LTD, Singapore", desc: "A subsidiary registered in Singapore marks the first step beyond India.", note: "going global" },
  { year: "2017", img: "j5.svg", title: "Chartering, crew & a Malta branch", desc: "Vessel chartering, marine crew services, and FM join the portfolio, with a new branch in Malta." },
  { year: "2018", img: "j6.svg", title: "Supply & vending solutions", desc: "New supply and vending capabilities — sealed with a contract from an automobile giant." },
  { year: "2019", img: "j7.svg", title: "Facility management services", desc: "Facility management commences as a dedicated service line." },
  { year: "2023", img: "j8.svg", title: "CSS becomes Catalyst", desc: "Rebranded as Catalyst to represent a holistic, integrated service offering.", note: "a new identity", hero: true },
];

export default function About({ go }) {
  const cardsRef = useRef(null);
  const jnyRef = useRef(null);
  const [jnyProg, setJnyProg] = useState(0);

  useEffect(() => {
    if (cardsRef.current) {
      cardsRef.current.querySelectorAll("[data-ldr-card]").forEach(initTilt);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = jnyRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const passed = Math.min(r.height, Math.max(0, window.innerHeight * 0.6 - r.top));
      setJnyProg(passed / r.height);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const leaders = [
    { name: 'Ram Mankari', role: 'Chairman & Managing Director', quote: '"Insert personal leadership quote/strength here."', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2023/06/1-Ram-Mankari.png', featured: true },
    { name: 'Sekhar Seshan', role: 'Strategy Advisor & Mentor', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2023/06/3-Shekar-Seshan.png', featured: true },
    { name: 'Dinesh Lamsal', role: 'Chief Executive Officer', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2023/06/2-Dinesh-Lamsal.jpg' },
    { name: 'Sachin Desai', role: 'Chief Human Resource Officer', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2023/06/6-Sachin-Desai.png' },
    { name: 'Parimal Dabhade', role: 'Chief Financial Officer', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2023/06/5-Parimal-Dabhade.png' },
    { name: 'Tarun Malik', role: 'Director – IFM', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2023/09/Tarun.pic-PP.jpg' },
    { name: 'Santosh Lal', role: 'Chief Business Officer – IFM', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2026/06/santosh-1.png' },
    { name: 'Sudeep Suren', role: 'Vice President – Food Solutions', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2024/06/sudeep.jpg' },
    { name: 'Sankar Sreedharan', role: 'Vice President - Strategy & New Market', quote: '', image: sankar },

  ];

  return (
    <div data-screen-label="About">
      {/* Hero — light editorial, inline image chips */}
      <section style={{ position: "relative", background: "#F9F7F3", padding: "clamp(150px,18vh,200px) clamp(20px,4vw,56px) clamp(60px,8vw,100px)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(45% 55% at 92% 8%, rgba(3,115,255,.07), transparent 70%), radial-gradient(40% 50% at 4% 96%, rgba(67,147,74,.06), transparent 70%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, marginBottom: 24 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>About Catalyst</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(38px,5.6vw,80px)", color: "#191919", maxWidth: 1080, lineHeight: 1.08 }}>
            Environments where people work, heal, learn, and live.
          </h1>
          <p data-reveal data-delay="2" className="shown" style={{ marginTop: 28, maxWidth: 680, fontSize: "clamp(16px,1.3vw,19px)", lineHeight: 1.7, color: "#46433C" }}>Behind every productive workplace, every efficient facility, every well-managed healthcare institution, and every thriving community is an ecosystem designed to support people.</p>
        </div>
      </section>

      {/* Company Overview — service index + presence map */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "stretch" }} data-2col>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Company Overview</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Five disciplines. One standard of care.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#46433C", maxWidth: 540 }}>By aligning operational excellence with human wellbeing, Catalyst creates environments that inspire confidence, comfort, safety, and growth.</p>
            <div data-reveal data-delay="3" style={{ marginTop: 34 }}>
              <div className="ovw-cap">WHAT WE BRING TOGETHER</div>
              {[
                [UtensilsCrossed, "Food Services", "Dining programs designed at scale", "food"],
                [Building2, "Integrated Facilities Management", "Engineering, soft & support services", "ifm"],
                [Factory, "Infrastructure Solutions", "Projects from plan to handover", "infra"],
                [Stethoscope, "Healthcare Technology Management", "Biomedical & clinical engineering", "htm"],
                [Users, "Workforce Solutions", "Staffing, payroll & compliance", "workforce"],
              ].map(([Icon, name, sub, page]) => (
                <div key={page} className="ovw-row" onClick={() => go(page)} role="link" tabIndex={0} onKeyDown={e => { if (e.key === "Enter") go(page); }}>
                  <span className="ovw-ico"><Icon size={17} /></span>
                  <div>
                    <div className="ovw-name">{name}</div>
                    <div className="ovw-sub">{sub}</div>
                  </div>
                  <ArrowUpRight className="ovw-arr" size={16} />
                </div>
              ))}
            </div>
          </div>
          <div data-reveal data-delay="1" style={{ position: "relative", borderRadius: 36, overflow: "hidden", background: "#161616", padding: "clamp(26px,3vw,38px)", display: "flex", flexDirection: "column", minHeight: 520 }}>
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(46% 55% at 88% 4%, rgba(3,115,255,.15), transparent 70%), radial-gradient(45% 45% at 8% 96%, rgba(67,147,74,.16), transparent 65%)" }}></div>
            <div style={{ position: "relative", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <div style={{ fontFamily: "Outfit", fontSize: 11.5, letterSpacing: ".18em", fontWeight: 600, color: "rgba(255,255,255,.55)" }}>OUR PRESENCE · INDIA</div>
              <div style={{ fontFamily: "Caveat, cursive", fontWeight: 600, fontSize: 21, color: "#8FBCFF", transform: "rotate(-2deg)" }}>and growing</div>
            </div>
            <div style={{ position: "relative", flex: 1, marginTop: 14, display: "flex", justifyContent: "center", minHeight: 340 }}>
              <IndiaMap style={{ height: "100%", maxHeight: 420, width: "auto" }} />
            </div>
            <div style={{ position: "relative", marginTop: 16, borderTop: "1px solid rgba(255,255,255,.12)", paddingTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13.5, color: "rgba(255,255,255,.66)" }}>Five offices, one shared standard — wherever we operate.</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "Outfit", fontSize: 12, fontWeight: 600, letterSpacing: ".1em", color: "#fff" }}><MapPin size={13} /> 5 CITIES</span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1240, margin: "70px auto 0" }}>
          <StatStrip stats={[["100+", "Locations", "Supporting diverse industries through integrated service excellence."], ["6500+", "Workforce", "Delivering expertise, care, and commitment every day."], ["100+", "Client Partnerships", "Built on trust, performance, and shared success."], ["2Lac+", "Meals Served", "Nourishing communities and workplaces."], ["75MN+", "Sq. Ft. Managed", "Creating safe, efficient, and future-ready spaces."]]} />
        </div>
      </section>

      {/* Vision & Mission — split dark panel */}
      <section style={{ padding: "clamp(50px,7vw,90px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div data-reveal style={{ position: "relative", overflow: "hidden", background: "#161616", borderRadius: 36 }}>
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(46% 60% at 90% 0%, rgba(3,115,255,.16), transparent 70%), radial-gradient(42% 55% at 0% 100%, rgba(67,147,74,.13), transparent 70%)" }}></div>
            <div className="vm-grid" style={{ position: "relative" }}>
              <div className="vm-cell">
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#8FBCFF", fontWeight: 600, fontSize: 24 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Vision</div>
                <h3 style={{ color: "#fff", fontSize: "clamp(22px,2.4vw,32px)", marginTop: 18, lineHeight: 1.3, fontWeight: 500 }}>To create environments where wellbeing thrives.</h3>
              </div>
              <div className="vm-cell">
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#8FBCFF", fontWeight: 600, fontSize: 24 }}><span style={{ width: 26, height: 2, background: "#43934A" }}></span>Mission</div>
                <h3 style={{ color: "#fff", fontSize: "clamp(20px,1.9vw,26px)", marginTop: 18, lineHeight: 1.4, fontWeight: 500 }}>We partner with organizations to build safe, sustainable, socially empowering environments that deliver exceptional experiences through integrated solutions.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 60px", flexWrap: "wrap", marginBottom: "clamp(40px,5vw,56px)" }}>
            <div style={{ maxWidth: 560 }}>
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Leadership Team</div>
              <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.8vw,50px)", color: "#191919" }}>Leading with purpose. Building with vision.</h2>
            </div>
            <p data-reveal data-delay="2" style={{ maxWidth: 420, fontSize: 16, lineHeight: 1.7, color: "#6E6A61", paddingBottom: 6 }}>Diverse expertise across operations, infrastructure, food services, healthcare technology, workforce solutions, and business transformation — united by a shared commitment to innovation, excellence, and well-being.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 22 }}>
            {leaders.map((ldr, i) => (
              <div key={i} data-reveal data-delay={i > 0 ? String(Math.min(i, 3)) : undefined}>
                <ProfileCard name={ldr.name} role={ldr.role} image={ldr.image} onConnect={() => window.location.href = '#connect'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <BeamsBackground intensity="medium" className="!min-h-0">
        <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#8FBCFF", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18, justifyContent: "center" }}><span style={{ width: 26, height: 2, background: "#8FBCFF" }}></span>What Drives Us</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,4vw,52px)", color: "#FFFFFF" }}>Building Better Futures Through Better Environments</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 24, fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,0.7)" }}>The world is changing rapidly. Organizations need partners who can help them navigate complexity while keeping people at the center of every decision. Catalyst's leadership team is committed to creating integrated ecosystems that connect food, facilities, infrastructure, healthcare technology, and workforce solutions into experiences that improve everyday life.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 28, fontFamily: "Outfit", fontSize: "clamp(20px,2.4vw,30px)", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.4 }}>Because leadership is not measured by what we build for ourselves.<br /><span className="gradtext">It is measured by the impact we create for others.</span></p>
          </div>
        </section>
      </BeamsBackground>

      {/* Journey — dated spine timeline */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 60px", flexWrap: "wrap", marginBottom: "clamp(44px,5vw,70px)" }}>
            <div style={{ maxWidth: 600 }}>
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Our Journey</div>
              <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.8vw,50px)", color: "#191919" }}>Every journey leaves a mark</h2>
            </div>
            <p data-reveal data-delay="2" style={{ maxWidth: 420, fontSize: 16.5, lineHeight: 1.7, color: "#6E6A61", paddingBottom: 6 }}>From our roots in support services to a trusted integrated solutions partner — a decade of growth, reflected in the lives we've touched and the environments we've transformed.</p>
          </div>

          <div className="jny-wrap" ref={jnyRef}>
            <div className="jny-spine"><div className="jny-fill" style={{ height: `${jnyProg * 100}%` }}></div></div>
            {JOURNEY.map((m, i) => (
              <div key={m.year} className={`jny-row${i % 2 ? " flip" : ""}`} data-reveal>
                <div className="jny-year-cell">
                  <div className={`jny-year${m.hero ? " hero" : ""}`}>{m.year}</div>
                  {m.note && <div className="jny-note">{m.note}</div>}
                </div>
                <div className="jny-dot-cell"><span className={`jny-dot${(i + 0.5) / JOURNEY.length <= jnyProg ? " lit" : ""}`}></span></div>
                <div className="jny-content">
                  <img className="jny-img" src={`/journey/${m.img}`} alt={`${m.year} — ${m.title}`} loading="lazy" />
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div data-reveal style={{ marginTop: "clamp(50px,6vw,80px)", textAlign: "center", fontFamily: "Outfit", fontSize: "clamp(20px,2.4vw,30px)", fontWeight: 500, color: "#191919" }}>Creating a better everyday experience for people everywhere.</div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 54 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Core Values</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.8vw,50px)", color: "#191919" }}>The Values That Define Us</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>At Catalyst, our values are more than guiding principles—they shape our culture, influence our decisions, and define the way we work with clients, employees, partners, and communities.</p>
          </div>
          <div data-reveal>
            {[[ShieldCheck, "Integrity", "Drives us to act with honesty, transparency, and accountability in everything we do."], [Heart, "Care", "Inspires us to prioritize the well-being of people and create experiences that make a meaningful difference."], [Star, "Excellence", "Motivates us to continuously improve our services, processes, and performance standards."], [Lightbulb, "Innovation", "Encourages us to embrace new ideas, technologies, and approaches that create better outcomes."], [Leaf, "Responsibility", "Reminds us of our commitment to sustainability, ethical business practices, and positive impact for future generations."]].map(([Icon, name, desc], i) => (
              <div key={i} className="val-row">
                <div className="val-ico"><Icon size={21} /></div>
                <div className="val-name">{name}</div>
                <p className="val-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Catalyst / What Sets Apart */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(40px,6vw,80px)", alignItems: "start" }} data-2col>
            <div style={{ position: "sticky", top: 120 }}>
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Why Catalyst</div>
              <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Because every environment shapes an outcome</h2>
              <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>The spaces we experience every day influence how we perform, connect, recover, grow, and succeed. Yet most organizations manage these environments through fragmented solutions.<br /><br />We believe the greatest impact happens when everything works together — expertise, innovation, and operational excellence under one integrated approach.</p>
              <div data-reveal data-delay="3" style={{ marginTop: 28, paddingLeft: 20, borderLeft: "3px solid #0373ff" }}>
                <p style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: "clamp(17px,1.5vw,20px)", lineHeight: 1.55, color: "#191919" }}>Our role goes beyond delivering services — we help organizations unlock the full potential of their environments.</p>
              </div>
            </div>
            <div>
              <div data-reveal style={{ fontSize: 12, letterSpacing: ".2em", color: "#0258cc", fontWeight: 600, marginBottom: 14 }}>WHAT SETS US APART</div>
              <div data-reveal data-delay="1" className="apart-grid">
                {[["Integrated thinking", "Every service designed to work as one connected system."], ["Designed around outcomes", "We start from the result you need, not the service list."], ["Innovation that solves real challenges", "Technology applied where it genuinely improves daily operations."], ["Operational excellence at every scale", "The same rigor on one site or one hundred."], ["National reach, local understanding", "Pan-India presence, delivered with local context."], ["Sustainability embedded by design", "Responsible practices built into how we operate, not added on."], ["Partnerships built for the long term", "Relationships measured in years, not contracts."], ["Consistent experiences everywhere", "One standard of care, wherever people meet us."]].map(([name, line], i) => (
                  <div key={i} className="apart-cell">
                    <span className="apart-mark"><Plus size={15} /></span>
                    <div>
                      <div className="apart-t">{name}</div>
                      <div className="apart-d">{line}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(44px,5vw,70px)" }}>
            <h2 data-reveal style={{ fontSize: "clamp(36px,4.5vw,56px)", color: "#1E3B24", fontFamily: "Outfit", fontWeight: 500 }}>
              Our <span style={{ color: "#0258cc", fontFamily: "Caveat, cursive", borderBottom: "3px solid #0258cc", paddingBottom: 6 }}>Offices</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(20px,3vw,34px)" }}>
            {[
              {
                region: "Middle East",
                company: "Catalyst Catering Services LLC (CCS)",
                address: "Darwish Compound, Warehouse No.4,\nBuilding No: 3, DIP-2,\nDubai",
                email: "info@catalystgroupme.com"
              },
              {
                region: "India Office",
                company: "Catalyst Service Solutions Partners Private\nLimited",
                address: "401/402, Yash Tower, Opp. D.A.V Public\nSchool, Aundh, Pune – 411007",
                email: "sales@catalystsolutions.eco"
              },
              {
                region: "Singapore Office",
                company: "Comprehensive Support Services Pte. Ltd",
                address: "12 Woodlands Square, #02-75, Woods\nSquare Tower 1, Singapore – 737715",
                email: "sales@catalystsolutions.eco"
              }
            ].map((office, i) => (
              <div key={i} data-reveal data-delay={String(i)} className="lift" style={{ background: "#FDFBF8", border: "1px solid rgba(25,25,25,.06)", borderRadius: 16, padding: "clamp(30px,4vw,44px)", display: "flex", flexDirection: "column", gap: 16, boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <MapPin size={22} color="#E91E63" fill="#E91E63" />
                  <h3 style={{ fontSize: 20, color: "#1E3B24", fontFamily: "Outfit", fontWeight: 500 }}>{office.region}</h3>
                </div>
                <div style={{ fontSize: 14, color: "#6E6A61", lineHeight: 1.7, flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ marginBottom: 20, whiteSpace: "pre-line" }}>{office.company}</p>
                  <p style={{ whiteSpace: "pre-line", marginBottom: 24 }}>{office.address}</p>
                  <div style={{ borderTop: "1px solid rgba(25,25,25,.08)", paddingTop: 18, marginTop: "auto" }}>
                    <p style={{ fontWeight: 600, color: "#191919" }}>Email: <span style={{ fontWeight: 400 }}>{office.email}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA go={go} title="Let's Create Impact Together" primaryLabel="Partner With Us →" primaryPage="contact" secondaryLabel="Explore Solutions" secondaryPage="solutions" image={partnerImg} />
    </div>
  );
}
