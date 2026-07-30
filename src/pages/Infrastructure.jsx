import CTA from "../components/CTA";
import { NumberedIndex, IndustriesMarquee, CutoutArch } from "../components/SolutionsKit";
import infrastructureBg from "../assets/INFRASTRUCTURE SOLUTIONS.png";
import whyInfrastructureBg from "../assets/Why Infrastructure Matters.webp";
import constructionImg from "../assets/residential-building-under-construction-on-transparent-background-png.png";
import siteEngineersImg from "../assets/5.png";
import innovation from "../assets/86de25bf5b2b497bb8be816e43e60bc0.webp";
import { ShieldCheck, Leaf, ArrowRight } from "lucide-react";

export default function Infrastructure({ go }) {
  return (
    <div data-screen-label="Infrastructure Solutions">
      <section style={{ position: "relative", backgroundColor: "#191919", backgroundImage: `linear-gradient(  rgba(0, 0, 0, 0.57), rgba(25, 25, 25, 0.7)), url(${infrastructureBg})`, backgroundSize: "cover", backgroundPosition: "center", padding: "170px clamp(20px,4vw,56px) clamp(70px,8vw,110px)", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(circle at 55% 30%,#000,transparent 75%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", width: "100%" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 22 }}>INFRASTRUCTURE</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(36px,5.2vw,74px)", color: "#fff", maxWidth: 1000 }}>Building the Foundations for <span className="gradtext">Better Experiences</span></h1>
          <p data-reveal data-delay="2" className="shown" style={{ marginTop: 24, fontSize: "clamp(17px,1.4vw,20px)", lineHeight: 1.7, color: "rgba(255,255,255,.78)", maxWidth: 640 }}>Creating resilient environments that support growth, inspire confidence, and deliver lasting value through thoughtful infrastructure solutions.</p>
          <button data-reveal data-delay="3" className="shown mag" onClick={() => go("contact")} style={{ marginTop: 34, background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8 }}>Talk to Our Infrastructure Team <ArrowRight size={18} /></button>
        </div>
      </section>

      {/* Intro Description */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h3 data-reveal style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919", marginBottom: 24 }}>Infrastructure Built to Serve Its Purpose.</h3>
          <p data-reveal data-delay="1" style={{ fontSize: 18, lineHeight: 1.7, color: "#6E6A61", marginBottom: 16 }}>Infrastructure is the foundation on which businesses operate, industries grow, and people thrive. Today, it goes beyond physical assets—it must support operations, empower people, enable technology, and drive sustainability.</p>
          <p data-reveal data-delay="2" style={{ fontSize: 18, lineHeight: 1.7, color: "#6E6A61", marginBottom: 16 }}>At Catalyst Service Solutions, our Industrial &amp; Infrastructure Projects Division brings together experience, engineering capabilities, and project execution expertise to deliver solutions designed around these realities. Across diverse industrial and commercial environments, we help organisations create facilities that are functional, efficient, safe, and built for long-term performance.</p>
          <p data-reveal data-delay="3" style={{ fontSize: 18, lineHeight: 1.7, color: "#6E6A61" }}>Our approach is rooted in the belief that infrastructure should do more than meet specifications—it should serve its purpose. By understanding each project's operational needs, challenges, and aspirations, we bring together the right expertise and resources to create high-performing environments that deliver lasting value to our clients and the people they serve.</p>
        </div>
      </section>

      {/* Why Infrastructure Matters */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{ position: "relative", borderRadius: 36, overflow: "hidden", minHeight: 420, background: `url(${whyInfrastructureBg}) center/cover no-repeat` }}>
            <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.15)" }}></div>
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>The Bigger Picture</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>One Partner Across Every Discipline</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Our integrated approach brings a broad range of infrastructure capabilities under a single framework—from civil and structural works to PEB, MEP, HVAC, electrical systems, fire protection, water treatment, STP, and landscaping—designed to work together rather than operate as disconnected services.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>This single-window model gives clients greater visibility, coordination, and control throughout the project lifecycle. The objective is not simply to complete individual scopes of work, but to ensure the entire infrastructure ecosystem works together to support operational and business goals.</p>
          </div>
        </div>
      </section>

      {/* Our Infrastructure Solutions */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Our Capabilities</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919", marginBottom: 20 }}>Bringing Every Critical Element Together</h2>
          <p data-reveal data-delay="2" style={{ maxWidth: 820, fontSize: 17, lineHeight: 1.7, color: "#6E6A61", marginBottom: 44 }}>Our integrated infrastructure model spans civil and interior works, structural and architectural works, PEB, MEP, HVAC, electrical systems, firefighting, plumbing and sanitary works, fabrication and piping, water treatment, STP and ETP solutions, industrial factory works, and external development—coordinated within a single connected framework.</p>
          <NumberedIndex items={[
            ["EPC & Contracting", "Coordinated engineering, procurement, and construction expertise that brings diverse project requirements together under a structured execution approach—helping clients manage complexity while maintaining focus on quality, timelines, and performance."],
            ["Turnkey Projects", "A single-partner model for complex infrastructure requirements, coordinating multiple disciplines within one project framework to create a more streamlined journey from initial planning through completion."],
            ["Civil, Structural & Architectural Works", "The physical foundation of every successful project—functional, durable, and purpose-driven environments developed around the specific requirements of each site and operation."],
            ["PEB Solutions", "Efficient, flexible pre-engineered building solutions for industrial and commercial environments, designed around project requirements, functionality, and execution efficiency."],
            ["MEP, HVAC & Electrical Systems", "Integrated building systems that function reliably and efficiently, creating the essential technical environment facilities need to operate effectively and support the people and processes within them."],
            ["Fire & Life Safety", "Fire fighting and life safety solutions designed to protect people, assets, and operations while contributing to safer and more resilient environments."],
            ["Water & Wastewater Infrastructure", "Water treatment, STP, and ETP capabilities that support responsible water management and help organisations meet their infrastructure needs with greater resource efficiency."],
            ["Fabrication, Piping & Industrial Works", "Specialised fabrication, piping, and industrial factory capabilities that respond to the specific processes and operating conditions of technically demanding environments."]
          ]} />
        </div>
      </section>

      {/* Construction */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{ position: "relative", minHeight: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={constructionImg} alt="Construction" style={{ width: "100%", maxHeight: 520, objectFit: "contain" }} />
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Integrated Execution</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>From Engineering Complexity to Integrated Execution</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Large-scale infrastructure rarely involves a single discipline. Civil and structural works, building systems, mechanical and electrical services, safety infrastructure, and water management all come together. When these are managed through fragmented partnerships, projects gain more interfaces, more dependencies, and greater potential for delays.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Our Industrial &amp; Infrastructure Projects Division was established to solve exactly this. Instead of treating every scope as a separate assignment, we look at the project as one connected ecosystem—understanding how each discipline influences the others and coordinating a seamless journey from planning and engineering to execution and completion.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, fontWeight: 500, color: "#191919" }}>The structure supports the services. The services support the operations. Every element works together to serve the purpose of the facility.</p>
          </div>
        </div>
      </section>

      {/* Engineering & Project Management */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div style={{ order: 2 }} data-reveal>
            <CutoutArch src={siteEngineersImg} alt="Catalyst engineers reviewing plans on site" tint="rgba(67,147,74,.1)" />
          </div>
          <div style={{ order: 1 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#377B3D", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#43934A" }}></span>Project Experience</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Experience From Being Where Complexity Happens</h2>
            <div data-reveal data-delay="2" style={{ marginTop: 26, display: "flex", alignItems: "baseline", gap: 14 }}>
              <span style={{ fontSize: "clamp(48px,6vw,72px)", fontWeight: 700, color: "#191919", lineHeight: 1 }}>100<span style={{ color: "#43934A" }}>+</span></span>
              <span style={{ fontSize: 17, color: "#6E6A61", lineHeight: 1.5, maxWidth: 240 }}>industrial &amp; commercial projects delivered across India and overseas</span>
            </div>
            <p data-reveal data-delay="3" style={{ marginTop: 24, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Our portfolio spans specialised and large-scale environments—industrial facilities, specialised infrastructure, large-scale kitchens, data centre environments, and other complex developments where infrastructure must perform reliably under demanding conditions.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Each project deepens our understanding of what it takes to coordinate multiple disciplines, manage site realities, and deliver infrastructure that meets the requirements of the organisation it serves.</p>
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div data-reveal style={{ position: "relative", borderRadius: 36, overflow: "hidden", minHeight: 420 }}>
            <img src={innovation} alt="Construction" style={{ width: "130%", maxHeight: 520, objectFit: "contain" }} />
          </div>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><ShieldCheck size={20} color="#FF7F00" />Safety & Responsible Execution</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Every Project Has People Depending on It</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Infrastructure is ultimately created for people, and the safety of those delivering and using it must remain central to every project. Our approach is built around an integrated view of health, safety, and environmental responsibility.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>We work to create safe working environments through responsible contract practices, first-aid and medical preparedness, hygiene practices, and continuous awareness across project sites.</p>
            <p data-reveal data-delay="4" style={{ marginTop: 16, fontSize: 17, fontWeight: 500, color: "#191919" }}>Safety is not simply a compliance requirement—it is a way of life, driving a strong safety culture and our ultimate goal of Zero Harm.</p>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <IndustriesMarquee
        kicker="Where We Work"
        title="Environments That Keep the World Moving"
        sub="Infrastructure requirements change from one industry to another. Our cross-sector experience helps us approach each project with context—understanding that the right solution responds to operational reality, not just a technical specification."
        industries={[
          "Chemical", "Food", "Pharma", "Automotive", "Data Centres",
          "Steel Plants", "Refineries", "Airports", "Warehouses", "Commercial Developments",
          "IT Parks", "Railways", "Roads & Flyovers"
        ]}
      />

      {/* Why Catalyst */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48, maxWidth: 820, marginInline: "auto" }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#377B3D", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><Leaf size={20} color="#43934A" />Sustainable Infrastructure</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Building for Performance. Thinking Beyond the Project.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>The energy a facility consumes, the water it uses, and the resources it needs to operate all shape its long-term footprint. As organisations focus on sustainability and ESG performance, we help integrate resource efficiency, technology-enabled operations, and responsible solutions into the environments we create.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            {[
              ["Water Management", "Water treatment, STP, and ETP solutions that support responsible use and reduce operational impact."],
              ["Energy Efficiency", "Infrastructure designed to balance operational performance with lower energy consumption over its lifecycle."],
              ["Technology & Resource Optimisation", "Technology-enabled operations and resource-conscious design that improve efficiency across the facility."],
              ["Renewable & Green Initiatives", "Broader sustainable solutions including renewable energy, EV charging, and composting."]
            ].map(([title, desc], i) => (
              <div key={i} data-reveal data-delay={String(Math.min(i % 3, 3))} style={{ borderTop: "2px solid #43934A", paddingTop: 20 }}>
                <div style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: ".08em", color: "#377B3D", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                <h4 style={{ fontSize: 19, fontWeight: 600, color: "#191919", marginBottom: 12 }}>{title}</h4>
                <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Infrastructure That Creates Lasting Value */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>A Partner for the Journey</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919", marginBottom: 20 }}>From Project Complexity to Operational Confidence</h2>
          <p data-reveal data-delay="2" style={{ marginTop: 8, fontSize: 18, lineHeight: 1.7, color: "#6E6A61", marginBottom: 16 }}>Every infrastructure project represents an investment of capital, time, and organisational focus—and creates the physical environment in which people will work and businesses will operate for years to come. By combining multiple disciplines, experienced teams, and integrated thinking, we help clients navigate complexity with greater confidence.</p>
          <p data-reveal data-delay="3" style={{ fontSize: 18, lineHeight: 1.7, color: "#191919", fontWeight: 500 }}>Because the best outcome is not simply a completed structure. It is an environment that performs as intended, supports the people within it, and continues to create value for the organisation that built it.</p>
        </div>
      </section>

      <CTA
        go={go}
        title="What Will You Build Next?"
        subtitle="INFRASTRUCTURE"
        primaryLabel="Talk to Our Infrastructure Team"
        primaryPage="contact"
        secondaryLabel="Start With Your Vision"
        secondaryPage="contact"
      />
    </div>
  );
}
