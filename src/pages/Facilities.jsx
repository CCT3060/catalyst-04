import CTA from "../components/CTA";
import { Kicker, SectionHead, IndustriesMarquee, PhoneFrame, BrowserFrame, CutoutArch } from "../components/SolutionsKit";
import fmImage from "../assets/fm.png";
import ifmTeamImg from "../assets/3.png";
import ecleanAppImg from "../assets/image copy.png";
import portalImg from "../assets/image copy 2.png";
import innovationImg from "../assets/Gemini_Generated_Image_e5koqpe5koqpe5ko.png";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    accent: "#FF7F00",
    kickerColor: "#D96D00",
    label: "Engineering Services",
    title: "Ensuring Reliability. Maximizing Performance.",
    intro: "Our engineering teams maintain and optimize critical building infrastructure through preventive, predictive, and corrective maintenance strategies that improve asset life, minimize downtime, and ensure uninterrupted business operations.",
    listTitle: "Our capabilities include:",
    items: [
      "Mechanical, Electrical & Plumbing (MEP) Services",
      "Fire Protection Systems",
      "Building Management Systems (BMS)",
      "Repair & Maintenance Works",
      "Technical Operations & Specialized Engineering Support",
    ],
    close: "From critical utilities to complex building systems, we ensure every asset performs efficiently, safely, and consistently.",
  },
  {
    accent: "#43934A",
    kickerColor: "#377B3D",
    label: "Soft Services",
    title: "Enhancing Workplace Experience Through Operational Excellence",
    intro: "A workplace reflects the culture of an organization. Our soft services are designed to create clean, hygienic, aesthetically maintained, and employee-friendly environments that promote productivity, safety, and well-being.",
    listTitle: "Our services include:",
    items: [
      "Housekeeping & Janitorial Services",
      "Disinfection & Sanitization",
      "Integrated Pest Management",
      "Horticulture & Landscape Maintenance",
      "Façade Cleaning & Exterior Care",
    ],
    close: "With standardized processes, trained professionals, and quality-driven execution, we create environments that leave lasting impressions while supporting healthier workplaces.",
  },
  {
    accent: "#FF7F00",
    kickerColor: "#D96D00",
    label: "Production Support Services",
    title: "Strengthening Operations Beyond Facility Management",
    intro: "Efficient production depends on seamless operational support behind the scenes. Catalyst extends beyond conventional facility management by delivering end-to-end production support services that improve workflow efficiency, optimize resources, and enhance operational continuity.",
    listTitle: "Our expertise includes:",
    items: [
      "Production Support Manpower",
      "Production Facility Maintenance",
      "Material Handling & Internal Logistics",
      "Stores & Inventory Management",
      "Equipment Maintenance",
      "End-to-End Production Support Activities",
    ],
    close: "Our teams integrate directly into your operational ecosystem, ensuring smoother workflows, improved productivity, and optimized operational performance.",
  },
];

const INDUSTRIES = [
  "Manufacturing", "Automobile & Automotive", "Healthcare", "BFSI",
  "IT & ITES", "Educational Institutions", "Commercial Offices & Business Parks", "Logistics Parks & Warehouses",
];

export default function Facilities({ go }) {
  return (
    <div data-screen-label="Integrated Facility Management">
      {/* Hero */}
      <section style={{ position: "relative", background: "#191919", minHeight: "100vh", display: "flex", alignItems: "center", padding: "160px clamp(20px,4vw,56px) clamp(80px,10vw,140px)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${fmImage})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.4 }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", width: "100%" }}>
          <div style={{ maxWidth: 820 }}>
            <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, marginBottom: 22 }}>INTEGRATED FACILITY MANAGEMENT</div>
            <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(34px,5vw,72px)", color: "#fff", lineHeight: 1.1 }}>Creating Environments That <span className="gradtext">Perform Effortlessly</span></h1>
            <p data-reveal data-delay="2" className="shown" style={{ marginTop: 24, fontSize: "clamp(17px,1.4vw,20px)", lineHeight: 1.7, color: "rgba(255,255,255,.78)", maxWidth: 640 }}>Engineering excellence, workplace services, and operational support — integrated into one seamless ecosystem.</p>
            <button data-reveal data-delay="3" className="shown mag" onClick={() => go("contact")} style={{ marginTop: 34, background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8 }}>Talk to our team <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

      {/* Overview — cutout crew on arch */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div>
            <Kicker>Overview</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Creating Spaces That Perform. Environments That Thrive.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.75, color: "#46433C" }}>A well-managed facility does more than support operations—it strengthens people, protects assets, and creates environments where businesses can perform at their best.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>Our Integrated Facility Management solutions bring together engineering excellence, workplace services, and operational support into one seamless ecosystem. By integrating people, processes, and technology, we help organizations build safer, smarter, cleaner, and more productive workplaces.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>Whether it's a manufacturing plant operating around the clock, a healthcare institution where reliability is critical, or a modern corporate workplace focused on employee experience, Catalyst delivers customized IFM solutions that keep your operations running without interruption.</p>
          </div>
          <div data-reveal data-delay="1">
            <CutoutArch src={ifmTeamImg} alt="Catalyst facility teams at work" tint="rgba(67,147,74,.1)" />
          </div>
        </div>
      </section>

      {/* Solutions intro */}
      <section style={{ padding: "clamp(70px,9vw,120px) clamp(20px,4vw,56px) 0", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <Kicker color="#377B3D" dash="#43934A">Our Solutions</Kicker>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919", marginBottom: 20 }}>Comprehensive IFM Solutions Designed Around Business</h2>
          <p data-reveal data-delay="2" style={{ fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>Every facility has unique operational demands. Our integrated approach ensures every aspect of your infrastructure is managed proactively, efficiently, and with uncompromising attention to quality, safety, and compliance.</p>
        </div>
      </section>

      {/* Service blocks — alternating, ruled lists instead of boxed cards */}
      {SERVICES.map((s, idx) => (
        <section key={s.label} style={{ padding: "clamp(50px,7vw,90px) clamp(20px,4vw,56px)", background: idx % 2 === 0 ? "#F9F7F3" : "#fff" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
            <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
              <Kicker color={s.kickerColor} dash={s.accent}>{s.label}</Kicker>
              <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(24px,3vw,40px)", color: "#191919", lineHeight: 1.15 }}>{s.title}</h2>
              <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.75, color: "#46433C" }}>{s.intro}</p>
              <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 16, fontWeight: 500, color: "#191919" }}>{s.close}</p>
            </div>
            <div style={{ order: idx % 2 === 0 ? 2 : 1 }} data-reveal data-delay="1">
              <div style={{ borderLeft: `2px solid ${s.accent}`, paddingLeft: "clamp(24px,3vw,40px)" }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: s.kickerColor, marginBottom: 6 }}>{s.listTitle}</div>
                {s.items.map((item, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 14, alignItems: "baseline", padding: "14px 0", borderBottom: i === s.items.length - 1 ? "none" : "1px solid rgba(25,25,25,.1)" }}>
                    <span style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: ".06em", color: s.accent }}>{String(i + 1).padStart(2, "0")}</span>
                    <span style={{ fontSize: 16, color: "#46433C", lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Product spotlight — Company Portal + E-Cleaning app */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#191919", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(55% 65% at 15% 20%,rgba(67,147,74,.16),transparent 60%),radial-gradient(45% 55% at 90% 85%,rgba(255,127,0,.12),transparent 60%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <SectionHead
            dark
            kicker="Smart Facility Operations"
            title="Intelligence Behind Every Inspection"
            sub="Consistency begins with visibility. Our E-Cleaning Checklist, digital audits, mobile inspections, and real-time reporting give complete visibility into daily operations — enabling faster response times, standardized service delivery, and measurable performance across every facility."
            maxWidth={820}
          />
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "clamp(30px,5vw,70px)", alignItems: "center" }} data-2col>
            <div data-reveal>
              <BrowserFrame src={portalImg} alt="Catalyst Company Portal — live site scores and checklists" url="Catalyst Company Portal" />
            </div>
            <div data-reveal data-delay="1" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
              <PhoneFrame src={ecleanAppImg} alt="Catalyst E-Cleaning mobile app" width="clamp(190px,19vw,240px)" />
              <div style={{ textAlign: "center", maxWidth: 300 }}>
                <div style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 17 }}>One platform, web to pocket</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,.62)", marginTop: 8 }}>Site scores, checklists, and service requests — live for supervisors on the floor and leadership at a glance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{ position: "relative", borderRadius: 36, overflow: "hidden" }}>
            <img src={innovationImg} alt="Modern cleaning technology" data-no-reveal style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div>
            <Kicker>Innovation</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Rethinking the Future of Facility Management</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Innovation is embedded into the way we manage environments. From our E-Cleaning Checklist and digital quality inspections to smart workforce deployment and modern cleaning technologies, every process is designed to improve efficiency, consistency, and operational control.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>By continuously refining workflows, adopting advanced equipment, and leveraging real-time operational insights, Catalyst delivers facility management that is proactive, transparent, and ready for the future.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, fontWeight: 500, color: "#191919" }}>Innovation isn't about changing processes—it's about improving every experience those processes support.</p>
          </div>
        </div>
      </section>

      {/* Industries — kinetic marquee */}
      <IndustriesMarquee
        title="Tailored for Every Environment"
        sub="Our IFM expertise spans diverse industries, enabling us to understand sector-specific challenges and deliver tailored solutions that create measurable business value."
        industries={INDUSTRIES}
      />

      {/* Why Catalyst + The Catalyst Difference — one editorial split */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "clamp(40px,6vw,90px)", alignItems: "start" }} data-2col>
          <div>
            <Kicker color="#377B3D" dash="#43934A">Why Catalyst</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Your Space. Our Expertise. A Better Experience Every Day.</h2>
          </div>
          <div style={{ borderLeft: "2px solid rgba(25,25,25,.12)", paddingLeft: "clamp(24px,3vw,44px)" }}>
            <p data-reveal data-delay="1" style={{ fontSize: 17, lineHeight: 1.75, color: "#46433C" }}>Facility management today is no longer about maintaining buildings—it's about creating resilient workplaces that support people, improve operational performance, and enable sustainable growth. Catalyst combines technical expertise, process excellence, technology-driven operations, and highly trained teams to deliver integrated solutions that create lasting value.</p>
            <p data-reveal data-delay="2" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>A well-managed facility is one you rarely have to think about. It simply works. People arrive to a clean and welcoming workplace. Critical systems perform when they are needed. Operations run smoothly. Safety remains a priority. Every interaction feels considered.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>With a strong focus on safety, compliance, sustainability, and continuous improvement, we become more than a service provider—we become a trusted operational partner committed to your organization's long-term success.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: "#191919", fontWeight: 500 }}>Because facilities are not just about buildings and infrastructure. They are about people, performance, and the experiences that shape every working day.</p>
          </div>
        </div>
      </section>

      <CTA
        go={go}
        title="Let's Create Spaces That Work Better"
        subtitle="For your people and your business — Catalyst delivers integrated facility management that enhances operational performance, workplace experiences, and long-term value."
        primaryLabel="Explore Integrated Facilities Management"
        primaryPage="contact"
        secondaryLabel="Contact Us"
        secondaryPage="contact"
      />
    </div>
  );
}
