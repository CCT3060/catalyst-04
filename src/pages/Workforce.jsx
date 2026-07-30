import CTA from "../components/CTA";
import { Kicker, SectionHead, NumberedIndex, CutoutArch } from "../components/SolutionsKit";
import staffingBg from "../assets/12.png";
import workforceImg from "../assets/1.png";
import futureImg from "../assets/workforce_future_1784028629761.png";
import { ArrowRight } from "lucide-react";

const SOLUTIONS = [
  {
    accent: "#FF7F00",
    kickerColor: "#D96D00",
    label: "Manpower Staffing & Deployment",
    paras: [
      "From workforce planning to timely deployment, we help organizations access the right talent for their operational requirements.",
      "Our structured approach enables businesses to manage workforce needs efficiently across locations while maintaining continuity and performance.",
    ],
    items: [
      "Workforce planning and manpower deployment",
      "Multi-location staffing support",
      "Scalable workforce models",
      "Operational manpower management",
      "Workforce continuity and support",
    ],
  },
  {
    accent: "#43934A",
    kickerColor: "#377B3D",
    label: "Field Force Management",
    paras: [
      "For businesses where performance happens on the ground, visibility and accountability matter. Our field-force solutions help organizations manage distributed teams with greater control through structured attendance, location tracking, real-time updates, and performance reporting.",
    ],
    items: [
      "Field-force deployment",
      "Attendance and workforce tracking",
      "Geo-tagging and geo-fencing",
      "Real-time workforce monitoring",
      "Productivity and performance reporting",
    ],
  },
  {
    accent: "#FF7F00",
    kickerColor: "#D96D00",
    label: "Payroll Management",
    paras: [
      "Payroll is more than processing salaries. It is about accuracy, timeliness, trust, and peace of mind. Our technology-enabled payroll solutions help streamline payroll processing, attendance integration, and employee lifecycle management through centralized systems.",
    ],
    items: [
      "End-to-end payroll processing",
      "Attendance management",
      "Employee lifecycle tracking",
      "Centralized workforce records",
      "Payroll reporting and MIS",
    ],
    close: "We help organizations make every payroll cycle more accurate, transparent, and dependable.",
  },
  {
    accent: "#43934A",
    kickerColor: "#377B3D",
    label: "Compliance Management",
    paras: [
      "A reliable workforce requires a strong compliance foundation. Catalyst supports organizations with structured processes and compliance checks designed to help maintain statutory discipline and reduce operational risks.",
      "Our approach focuses on ensuring workforce processes are aligned with applicable statutory norms, documentation requirements, and organizational policies.",
    ],
    quote: "Because compliance is not just a requirement. It is a responsibility towards every person who works with you.",
  },
  {
    accent: "#FF7F00",
    kickerColor: "#D96D00",
    label: "Workforce MIS & Reporting",
    paras: [
      "Better workforce decisions begin with better visibility.",
      "Our reporting systems provide organizations with structured insights into attendance, deployment, workforce performance, and operational metrics—helping decision-makers move from assumptions to informed action.",
    ],
    items: [
      "Daily, weekly, and monthly MIS",
      "Attendance reports",
      "Deployment status",
      "Workforce performance metrics",
      "Operational updates",
      "Centralized reporting",
    ],
  },
];

const TECH = [
  ["HRMS Platform", "Centralized management of payroll, attendance, and employee lifecycle processes."],
  ["Client Dashboard", "Real-time MIS and reports that give clients greater transparency and support data-driven decision-making."],
  ["Mobile Applications", "Field-force tracking, attendance capture, and real-time reporting from the ground."],
  ["Admin & Control Panel", "Centralized monitoring, location and dealer mapping, and operational oversight across distributed teams."],
];

const INDUSTRIES = [
  ["FMCG", "Supporting distributed teams and fast-moving operations with scalable manpower and field-force solutions."],
  ["Beverages", "Helping businesses manage on-ground teams and operational workforce requirements across locations."],
  ["FMCD", "Providing structured workforce support for sales, retail, and field operations."],
  ["Telecom", "Enabling distributed workforce management with technology-backed monitoring and reporting."],
  ["Logistics", "Supporting execution-driven operations with reliable manpower deployment and workforce visibility."],
  ["Retail", "Helping organizations build consistent teams across stores, markets, and customer-facing environments."],
  ["Allied Sectors", "Flexible workforce solutions designed around unique operational requirements."],
];

const WHY = [
  ["Pan-India Capability", "A distributed service capability that enables workforce support across multiple locations with centralized control."],
  ["Reliable Deployment", "A structured approach to manpower planning and deployment aligned with operational timelines."],
  ["Technology-Enabled Visibility", "Digital tools and dashboards that bring greater transparency to workforce operations."],
  ["Compliance-Led Processes", "Defined processes and regular checks designed to support statutory and operational compliance."],
  ["Scalable Workforce Solutions", "Flexible solutions that can adapt as your workforce requirements evolve."],
  ["Operational Consistency", "Regular reporting, monitoring, and process discipline that help maintain continuity across locations."],
  ["Human-Centric Approach", "Because every workforce is made up of people—not just positions, numbers, or attendance records."],
];

export default function Workforce({ go }) {
  return (
    <div data-screen-label="Workforce Solutions">
      {/* Hero */}
      <section style={{ position: "relative", backgroundColor: "#191919", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(25, 25, 25, 0.7)), url(${staffingBg})`, backgroundSize: "cover", backgroundPosition: "center", padding: "170px clamp(20px,4vw,56px) clamp(70px,8vw,110px)", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(circle at 55% 30%,#000,transparent 75%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", width: "100%" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, marginBottom: 22 }}>WORKFORCE SOLUTIONS</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(34px,5vw,72px)", color: "#fff", maxWidth: 1000, lineHeight: 1.1 }}>The Right People. The Right Support. The Right <span className="gradtext">Impact.</span></h1>
          <p data-reveal data-delay="2" className="shown" style={{ marginTop: 24, fontSize: "clamp(17px,1.4vw,20px)", lineHeight: 1.7, color: "rgba(255,255,255,.78)", maxWidth: 640 }}>End-to-end staffing and workforce solutions — sourcing, deployment, payroll, compliance, and visibility, managed as one.</p>
          <button data-reveal data-delay="3" className="shown mag" onClick={() => go("contact")} style={{ marginTop: 34, background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8 }}>Build Your Workforce with Catalyst <ArrowRight size={18} /></button>
        </div>
      </section>

      {/* About Staffing — people cutout on arch */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal>
            <CutoutArch src={workforceImg} alt="The people behind every Catalyst workforce" tint="rgba(255,127,0,.09)" />
          </div>
          <div>
            <Kicker>About Staffing</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>More Than Manpower. A Workforce You Can Rely On.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 16.5, lineHeight: 1.7, color: "#46433C" }}>A workforce is more than a number on a roster. It is the people who represent your organization, serve your customers, execute your operations, and keep your business moving every day.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 14, fontSize: 16.5, lineHeight: 1.7, color: "#6E6A61" }}>With a pan-India service capability, we support businesses across locations and sectors with structured manpower deployment, field-force solutions, payroll management, and statutory compliance.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 14, fontSize: 16.5, lineHeight: 1.7, color: "#6E6A61" }}>Our approach combines human understanding, operational discipline, and technology-enabled control to create a workforce ecosystem that is efficient for businesses and supportive for people.</p>
            <p data-reveal data-delay="5" style={{ marginTop: 14, fontSize: 16.5, lineHeight: 1.7, color: "#191919", fontWeight: 500 }}>Because when your people are supported, your business moves forward.</p>
          </div>
        </div>
      </section>

      {/* Solutions intro */}
      <section style={{ padding: "clamp(70px,9vw,120px) clamp(20px,4vw,56px) 0", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <Kicker color="#377B3D" dash="#43934A">Our Solutions</Kicker>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919", marginBottom: 20 }}>One Workforce Partner. Multiple Solutions.</h2>
          <p data-reveal data-delay="2" style={{ fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>Whether you need people on the ground, payroll managed with precision, or real-time visibility into your workforce, Catalyst brings together the capabilities you need under one integrated solution.</p>
        </div>
      </section>

      {/* Solution blocks — alternating, ruled lists */}
      {SOLUTIONS.map((s, idx) => (
        <section key={s.label} style={{ padding: "clamp(50px,7vw,90px) clamp(20px,4vw,56px)", background: idx % 2 === 0 ? "#F9F7F3" : "#fff" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
            <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
              <Kicker color={s.kickerColor} dash={s.accent}>{s.label}</Kicker>
              {s.paras.map((p, i) => (
                <p key={i} data-reveal data-delay={String(i + 1)} style={{ marginTop: i === 0 ? 4 : 14, fontSize: 16.5, lineHeight: 1.7, color: i === 0 ? "#46433C" : "#6E6A61" }}>{p}</p>
              ))}
              {s.close && <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 16, fontWeight: 500, color: "#191919" }}>{s.close}</p>}
            </div>
            <div style={{ order: idx % 2 === 0 ? 2 : 1 }} data-reveal data-delay="1">
              {s.items ? (
                <div style={{ borderLeft: `2px solid ${s.accent}`, paddingLeft: "clamp(24px,3vw,40px)" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: s.kickerColor, marginBottom: 6 }}>Solution includes:</div>
                  {s.items.map((item, i) => (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 14, alignItems: "baseline", padding: "13px 0", borderBottom: i === s.items.length - 1 ? "none" : "1px solid rgba(25,25,25,.1)" }}>
                      <span style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: ".06em", color: s.accent }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ fontSize: 16, color: "#46433C", lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ background: "linear-gradient(160deg,#191919,#2b2b2b)", borderRadius: 32, padding: "clamp(30px,4vw,48px)", color: "#fff", boxShadow: "0 20px 50px rgba(0,0,0,.12)" }}>
                  <div style={{ fontFamily: "Caveat, cursive", fontSize: 56, lineHeight: 1, color: s.accent, marginBottom: 12 }}>&ldquo;</div>
                  <p style={{ fontSize: "clamp(18px,2vw,24px)", lineHeight: 1.5, fontWeight: 500 }}>{s.quote}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Technology — dark band, ruled columns */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#191919", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(50% 60% at 88% 15%,rgba(255,127,0,.12),transparent 60%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <SectionHead
            dark
            kicker="Technology-Enabled Workforce Management"
            title="Technology That Keeps Your Workforce Connected"
            sub="Managing a distributed workforce requires more than spreadsheets and phone calls. Catalyst combines human-led workforce management with technology-enabled solutions for greater visibility, faster reporting, and better operational control."
            maxWidth={780}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "clamp(28px,3.5vw,48px)" }} data-4col>
            {TECH.map(([name, desc], i) => (
              <div key={i} data-reveal data-delay={String(Math.min(i, 3))} style={{ borderTop: "2px solid rgba(255,255,255,.9)", paddingTop: 20 }}>
                <div style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: ".08em", color: "#FF7F00", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                <h4 style={{ fontSize: 19, fontWeight: 600, color: "#fff" }}>{name}</h4>
                <p style={{ fontSize: 14.5, color: "rgba(255,255,255,.65)", lineHeight: 1.65, marginTop: 10 }}>{desc}</p>
              </div>
            ))}
          </div>
          <p data-reveal style={{ maxWidth: 700, margin: "56px auto 0", textAlign: "center", fontFamily: "Caveat, cursive", fontSize: "clamp(24px,2.4vw,32px)", lineHeight: 1.45, color: "rgba(255,255,255,.9)" }}>Technology gives us the visibility. People bring the understanding. Together, they create a smarter workforce solution.</p>
        </div>
      </section>

      {/* Industries — editorial numbered rows */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionHead
            kicker="Industries We Serve"
            kickerColor="#377B3D"
            dashColor="#43934A"
            title="Workforce Solutions Built Around Your Industry"
            sub="Every industry works differently. Every workforce has different demands. Catalyst brings sector understanding and operational experience to help organizations manage workforce requirements with greater confidence."
            maxWidth={760}
          />
          <NumberedIndex items={INDUSTRIES} />
        </div>
      </section>

      {/* Why Catalyst — ruled columns */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionHead kicker="Why Catalyst" title="Why Organizations Choose Catalyst" maxWidth={680} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(28px,3.5vw,48px)", rowGap: 44 }} data-3col>
            {WHY.map(([title, desc], i) => (
              <div key={i} data-reveal data-delay={String(i % 3)} style={{ borderTop: "2px solid #191919", paddingTop: 20 }}>
                <div style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: ".08em", color: "#D96D00", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                <h4 style={{ fontSize: 19, fontWeight: 600, color: "#191919" }}>{title}</h4>
                <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.65, marginTop: 10 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Catalyst Difference */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div>
            <Kicker color="#377B3D" dash="#43934A">The Catalyst Difference</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(26px,3.2vw,42px)", color: "#191919" }}>We Manage the Workforce. You Focus on What Moves Your Business Forward.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Managing people at scale comes with complexity—recruitment, deployment, attendance, payroll, compliance, reporting, and performance. Catalyst brings these moving parts together through an integrated workforce management approach.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>With Catalyst as your workforce partner, your organization gains the ability to focus on its core business while we help manage the operational complexities of your workforce.</p>
          </div>
          <div data-reveal data-delay="1" style={{ background: "linear-gradient(160deg,#191919,#2b2b2b)", borderRadius: 32, padding: "clamp(36px,5vw,56px)", color: "#fff", position: "relative", overflow: "hidden" }}>
            <img src={futureImg} alt="" data-no-reveal style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }} />
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: "clamp(22px,2.6vw,32px)", lineHeight: 1.4, fontWeight: 600 }}>You bring the vision.</div>
              <div style={{ fontSize: "clamp(22px,2.6vw,32px)", lineHeight: 1.4, fontWeight: 600, color: "#FF7F00" }}>We bring the workforce.</div>
              <div style={{ fontSize: "clamp(22px,2.6vw,32px)", lineHeight: 1.4, fontWeight: 600 }}>Together, we create the momentum to move forward.</div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        go={go}
        title="Your Workforce Is Your Business in Motion."
        subtitle="Whether you are expanding into new locations, managing a distributed field force, or looking to simplify your workforce operations, we bring together the people, processes, and technology to make it happen."
        primaryLabel="Let's Build a Workforce That Moves You Forward"
        primaryPage="contact"
        secondaryLabel="Talk to Our Workforce Solutions Team"
        secondaryPage="contact"
      />
    </div>
  );
}
