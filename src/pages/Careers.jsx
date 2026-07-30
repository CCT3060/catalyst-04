import CTA from "../components/CTA";
import { Sprout, Users, Award, Search, Lightbulb, Globe, TrendingUp, ArrowRight } from "lucide-react";

export default function Careers({ go }) {
  return (
    <div data-screen-label="Careers">
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px clamp(20px,4vw,56px) 60px", overflow: "hidden", backgroundImage: "linear-gradient(rgba(25, 25, 25, 0.17), rgba(25, 25, 25, 0.13)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "relative", maxWidth: 1240, width: "100%", margin: "0 auto" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 22 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Careers</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(36px,5.4vw,76px)", color: "#fff", maxWidth: 1000 }}>Life at <span className="gradtext">Catalyst</span></h1>
          <p data-reveal data-delay="2" className="shown" style={{ marginTop: 26, maxWidth: 800, fontSize: "clamp(16px,1.3vw,19px)", lineHeight: 1.7, color: "rgba(255,255,255,.7)" }}>Catalyst is more than a workplace—it's a community of thinkers, creators, and problem-solvers united by a shared purpose: enhancing everyday well-being.</p>
        </div>
      </section>

      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 60 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Who We Are</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.8vw,50px)", color: "#191919" }}>A community united by purpose</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Catalyst is more than a workplace—it's a community of thinkers, creators, and problem-solvers united by a shared purpose: enhancing everyday well-being. We empower our people to challenge conventions, embrace new ideas, and grow through meaningful opportunities.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>By fostering a culture of trust, innovation, and belonging, we create an environment where talent flourishes, careers evolve, and every contribution helps build a lasting impact.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} data-3col>
            {[[Sprout, "Grow with Purpose", "Shape your career while making a meaningful difference in communities and organizations.", ""], [Users, "Collaborate & Innovate", "Work alongside passionate colleagues who bring diverse expertise and perspectives.", "1"], [Award, "Be Recognized", "Contribute meaningfully and be valued for the impact you create.", "2"]].map(([Icon, name, desc, delay], i) => (
              <div key={i} data-reveal data-delay={delay || undefined} className="lift" style={{ background: "#F9F7F3", border: "1px solid rgba(25,25,25,.07)", borderRadius: 30, padding: 34 }}>
                <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(255,127,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF7F00" }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: 22, color: "#191919", marginTop: 18 }}>{name}</h3>
                <p style={{ fontSize: "14.5px", color: "#6E6A61", lineHeight: 1.65, marginTop: 10 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 50 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Open Positions</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.8vw,50px)", color: "#191919" }}>Find Your Place at Catalyst</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>We are looking for talented, motivated individuals who want to make a difference. Explore opportunities across our integrated solutions divisions.</p>
          </div>

          <div data-reveal style={{ background: "#fff", border: "1px solid rgba(25,25,25,.08)", borderRadius: 32, padding: "clamp(30px,4vw,50px)", textAlign: "center" }}>
            <div style={{ width: 64, height: 64, borderRadius: 20, background: "rgba(255,127,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF7F00", margin: "0 auto 20px" }}>
              <Search size={32} />
            </div>
            <h3 style={{ fontSize: 24, color: "#191919" }}>Open Positions Coming Soon</h3>
            <p style={{ fontSize: 16, color: "#6E6A61", marginTop: 12, maxWidth: 480, margin: "12px auto 0", lineHeight: 1.7 }}>We are always looking for exceptional talent. Send us your profile and we will reach out when opportunities that match your skills become available.</p>
            <button className="mag" onClick={() => go("contact")} style={{ marginTop: 30, background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8 }}>Express Your Interest <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#191919", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(50% 60% at 80% 20%,rgba(255,127,0,.16),transparent 60%),radial-gradient(50% 60% at 15% 90%,rgba(67,147,74,.14),transparent 60%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18, justifyContent: "center" }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Our Culture</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.8vw,50px)", color: "#fff" }}>Where People Come First</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 50, textAlign: "left" }} data-3col>
            {[[Lightbulb, "Innovation", "We embrace new ideas, challenge conventions, and continuously seek better ways to serve our clients and communities.", ""], [Globe, "Diversity", "Our strength comes from diverse perspectives and backgrounds that drive richer solutions and stronger outcomes.", "1"], [TrendingUp, "Growth", "We invest in developing our people, providing pathways for continuous learning, advancement, and meaningful impact.", "2"]].map(([Icon, name, desc, delay], i) => (
              <div key={i} data-reveal data-delay={delay || undefined} className="lift" style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 24, padding: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(255,127,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF7F00", marginBottom: 14 }}>
                  <Icon size={22} />
                </div>
                <h4 style={{ fontSize: 18, color: "#fff", marginTop: 8 }}>{name}</h4>
                <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,.6)", lineHeight: 1.6, marginTop: 8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA go={go} title="Ready to Make an Impact?" primaryLabel="Explore Opportunities →" primaryPage="contact" secondaryLabel="Learn About Us" secondaryPage="about" />
    </div>
  );
}
