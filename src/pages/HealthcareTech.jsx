import CTA from "../components/CTA";
import { Kicker, SectionHead, NumberedIndex, PhoneFrame, BrowserFrame, CutoutArch, StatStrip } from "../components/SolutionsKit";
import healthcareBg from "../assets/Gemini_Generated_Image_sf1puasf1puasf1p.png";
import clinicalImg from "../assets/4.png";
import dashboardImg from "../assets/Screenshot 2026-07-13 161017.png";
import htmAppImg from "../assets/image.png";
import { ArrowRight } from "lucide-react";

const CAPABILITIES = [
  ["Biomedical Engineering Talent", "Dedicated on-site biomedical engineers manage equipment performance, troubleshoot issues, coordinate with OEMs, and support clinical teams across the hospital."],
  ["Asset Lifecycle Management", "From inventory creation and digital tagging to utilization monitoring and replacement planning — complete visibility into every medical asset throughout its lifecycle."],
  ["Preventive, Corrective & Calibration Services", "Structured preventive maintenance, responsive breakdown support, calibration management, and technical inspections that improve reliability and extend operational life."],
  ["Digital CMMS & Leadership Dashboards", "Real-time dashboards, service analytics, maintenance schedules, complaint tracking, and asset intelligence for complete operational visibility."],
  ["Vendor & Contract Management", "A single point of accountability coordinating OEMs, AMCs, CAMCs, spare parts, warranties, and service partners across multiple manufacturers."],
  ["User Training & Compliance", "Regular training for nursing and paramedical teams, documentation support, audit readiness, and compliance management for NABH, JCI, NABL, and regulatory expectations."],
  ["Clinical Engineering Support", "Specialized expertise supporting equipment assessments, performance optimization, regulatory compliance, and technology planning."],
];

const DELIVERS = [
  "Higher equipment uptime",
  "Faster response and resolution",
  "Reduced maintenance costs",
  "Simplified vendor coordination",
  "Better financial control",
  "Improved operational accountability",
];

const OUTCOMES = [
  ["95–98%", "Equipment Availability", "Sustained uptime across the biomedical ecosystem."],
  ["100%", "Preventive Maintenance", "Scheduled preventive maintenance completion."],
  ["100%", "Calibration Compliance", "Annual calibration completion."],
  ["SLA", "Faster Response", "Critical equipment response within defined SLA windows."],
  ["Monthly", "Leadership Visibility", "Dashboards and reporting that support informed decisions."],
];

const BEYOND = [
  ["Hospital Consulting", "Strategic solutions for better care outcomes.", "From operational assessments and workflow optimization to healthcare planning and advisory services, Catalyst works alongside healthcare leaders to improve efficiency, patient experience, and long-term institutional performance."],
  ["Healthcare Projects", "Designing healthcare infrastructure for tomorrow.", "Our project teams support the planning and execution of healthcare facilities with a focus on functionality, compliance, operational readiness, and future scalability."],
  ["Integrated Food & Facility Management", "Safe, efficient environments that enable wellbeing.", "Catalyst delivers integrated facility management, dining for patients, staff and visitors, housekeeping, infection-control support, and staffing solutions aligned with NABH and JCI expectations."],
];

const WHY = [
  ["Independent Technology Partner", "Vendor-neutral expertise focused on hospital outcomes rather than OEM interests."],
  ["Complete Lifecycle Ownership", "From asset registration to replacement planning, every stage of the equipment lifecycle is professionally managed."],
  ["Digital-led Operations", "Integrated CMMS, leadership dashboards, barcode tracking, and analytics provide complete visibility across the biomedical ecosystem."],
  ["Clinical Engineering Excellence", "Experienced biomedical engineers supporting operational reliability, regulatory compliance, and clinical continuity."],
  ["Single Point of Accountability", "One partner coordinating multiple OEMs, vendors, maintenance providers, and clinical stakeholders."],
  ["A Partner in Better Care", "Beyond maintaining equipment — we help build environments where technology, infrastructure, and support services improve patient outcomes."],
];

export default function HealthcareTech({ go }) {
  return (
    <div data-screen-label="Healthcare Technology Management">
      {/* Hero */}
      <section style={{ position: "relative", backgroundColor: "#191919", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(25, 25, 25, 0.7)), url(${healthcareBg})`, backgroundSize: "cover", backgroundPosition: "center", padding: "170px clamp(20px,4vw,56px) clamp(70px,8vw,110px)", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", width: "100%" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, marginBottom: 22 }}>HEALTHCARE TECHNOLOGY MANAGEMENT</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(34px,5vw,72px)", color: "#fff", maxWidth: 1000, lineHeight: 1.1 }}>One Hospital. One Ecosystem. <span className="gradtext">Uninterrupted Care.</span></h1>
          <p data-reveal data-delay="2" className="shown" style={{ marginTop: 22, fontSize: "clamp(17px,1.6vw,20px)", lineHeight: 1.7, color: "rgba(255,255,255,.78)", maxWidth: 720 }}>Expertise that keeps healthcare moving — ensuring every medical device is available, safe, compliant, and performing whenever clinicians need it.</p>
          <button data-reveal data-delay="3" className="shown mag" onClick={() => go("contact")} style={{ marginTop: 34, background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8 }}>Talk to our team <ArrowRight size={18} /></button>
        </div>
      </section>

      {/* Intro — clinical cutout */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div>
            <Kicker>Healthcare Technology Management</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Expertise That Keeps Healthcare Moving.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.75, color: "#46433C" }}>Healthcare Technology Management is more than maintaining biomedical equipment. Catalyst delivers comprehensive HTM as an Independent Service Organization — integrating clinical engineering, preventive and breakdown maintenance, digital asset data management, vendor coordination, calibration, and lifecycle planning into one accountable service model.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>By bringing together people, processes, technology, and data, we help hospitals maximize equipment uptime, optimize lifecycle costs, simplify compliance, and enable uninterrupted patient care.</p>
          </div>
          <div data-reveal data-delay="1">
            <CutoutArch src={clinicalImg} alt="Clinical care supported by reliable technology" tint="rgba(255,127,0,.09)" />
          </div>
        </div>
      </section>

      {/* Capabilities — numbered index */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionHead kicker="Our Capabilities" title="Everything Your Biomedical Ecosystem Needs" maxWidth={680} />
          <NumberedIndex items={CAPABILITIES} />
        </div>
      </section>

      {/* Service model */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div>
            <Kicker>Our Service Model</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>One Partner. Complete Accountability.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Managing hundreds of medical devices across multiple OEMs creates unnecessary complexity. Catalyst simplifies this through a centralized Healthcare Technology Management model that connects every clinical department with every equipment manufacturer through a single service partner.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, fontWeight: 500, color: "#191919" }}>Instead of managing multiple vendors, hospitals manage one trusted HTM partner.</p>
          </div>
          <div data-reveal data-delay="1" style={{ borderLeft: "2px solid #FF7F00", paddingLeft: "clamp(24px,3vw,40px)" }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "#D96D00", marginBottom: 6 }}>This integrated approach delivers:</div>
            {DELIVERS.map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 14, alignItems: "baseline", padding: "13px 0", borderBottom: i === DELIVERS.length - 1 ? "none" : "1px solid rgba(25,25,25,.1)" }}>
                <span style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: ".06em", color: "#FF7F00" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontSize: 16, color: "#46433C", lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product spotlight — CMMS dashboard + HTM mobile app */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#191919", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(55% 65% at 12% 18%,rgba(255,127,0,.14),transparent 60%),radial-gradient(45% 55% at 92% 80%,rgba(67,147,74,.12),transparent 60%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <SectionHead
            dark
            kicker="Digital CMMS & Leadership Dashboards"
            kickerColor="#FF7F00"
            title="Digital Intelligence for Smarter Hospitals"
            sub="Real-time dashboards, service analytics, maintenance schedules, complaint tracking, and asset intelligence give hospital leadership a connected view of their technology ecosystem — while engineers raise, track, and resolve issues from the ward floor."
            maxWidth={820}
          />
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "clamp(30px,5vw,70px)", alignItems: "center" }} data-2col>
            <div data-reveal>
              {/* TODO (follow-up): replace this dashboard screenshot with a version that removes the "ASHA" client name */}
              <BrowserFrame src={dashboardImg} alt="Catalyst CMMS leadership dashboard" url="Catalyst CMMS — Leadership Dashboard" />
            </div>
            <div data-reveal data-delay="1" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
              <PhoneFrame src={htmAppImg} alt="Catalyst HTM mobile app — asset details and issue reporting" width="clamp(190px,19vw,240px)" />
              <div style={{ textAlign: "center", maxWidth: 300 }}>
                <div style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 17 }}>Every asset, in your pocket</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,.62)", marginTop: 8 }}>Scan an asset, see its history, and report an issue in seconds — from any ward, any shift.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes — stat strip */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionHead
            kicker="Outcomes We Deliver"
            title="Measurable Performance. Accountable Results."
            sub="Every engagement is governed by measurable service levels and operational KPIs."
            maxWidth={720}
          />
          <StatStrip stats={OUTCOMES} />
        </div>
      </section>

      {/* Beyond equipment — ruled columns */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionHead
            center
            kicker="Beyond Equipment Maintenance"
            title="Integrated Expertise for Better Care"
            sub="Healthcare excellence requires more than well-managed equipment. It demands integrated expertise across planning, operations, and patient support."
            maxWidth={760}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(28px,3.5vw,48px)" }} data-3col>
            {BEYOND.map(([title, subtitle, desc], i) => (
              <div key={i} data-reveal data-delay={String(i)} style={{ borderTop: "2px solid #191919", paddingTop: 20 }}>
                <h4 style={{ fontSize: 20, fontWeight: 600, color: "#191919" }}>{title}</h4>
                <div style={{ fontSize: 15, fontWeight: 500, color: "#D96D00", margin: "8px 0 12px" }}>{subtitle}</div>
                <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Catalyst — ruled columns */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionHead kicker="Why Catalyst" kickerColor="#377B3D" dashColor="#43934A" title="The Catalyst Advantage" maxWidth={680} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(28px,3.5vw,48px)", rowGap: 44 }} data-3col>
            {WHY.map(([title, desc], i) => (
              <div key={i} data-reveal data-delay={String(i % 3)} style={{ borderTop: "2px solid #191919", paddingTop: 20 }}>
                <div style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: ".08em", color: "#377B3D", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                <h4 style={{ fontSize: 19, fontWeight: 600, color: "#191919" }}>{title}</h4>
                <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.65, marginTop: 10 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner note */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <Kicker>A Partner in Better Care</Kicker>
          <p data-reveal data-delay="1" style={{ marginTop: 24, fontSize: 18, lineHeight: 1.7, color: "#6E6A61" }}>Healthcare performs at its best when technology, infrastructure, and operational services work as one. By bringing together Healthcare Technology Management, Hospital Consulting, Healthcare Projects, and Integrated Food & Facility Management, Catalyst helps healthcare institutions create safer environments, strengthen clinical performance, and deliver exceptional care with confidence.</p>
        </div>
      </section>

      <CTA
        go={go}
        title="Empowering Better Care Through Smarter Technology"
        subtitle="HEALTHCARE TECHNOLOGY MANAGEMENT"
        primaryLabel="Explore Healthcare Technology Management"
        primaryPage="contact"
        secondaryLabel="Speak with Our Healthcare Experts"
        secondaryPage="contact"
      />
    </div>
  );
}
