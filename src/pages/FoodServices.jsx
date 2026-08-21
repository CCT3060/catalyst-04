import CTA from "../components/CTA";
import { Kicker, SectionHead, IndustriesMarquee, PhoneFrame, CutoutArch } from "../components/SolutionsKit";
import foodTeamImg from "../assets/2.png";
import chefImg from "../assets/Gemini_Generated_Image_56k6u556k6u556k6.png";
import joiFoodImg from "../assets/WhatsApp Image 2026-07-07 at 4.39.50 PM.jpeg";
import foodHeroImg from "../assets/foodbg.jpg";
import { ArrowRight, ArrowUpRight, Zap, HeartPulse, GraduationCap, Users, BadgeCheck, UtensilsCrossed } from "lucide-react";

const MENU = [
  ["Workplace Dining", "Contemporary dining programs that enhance employee wellbeing through diverse menus, healthy choices, and engaging workplace experiences.", "CORPORATE", "our most-loved program"],
  ["Industrial & Manufacturing Catering", "Reliable, high-volume catering designed for manufacturing plants, automobile facilities, heavy engineering, pharmaceuticals, chemical industries, and power sectors.", "INDUSTRIAL"],
  ["Patient Dining", "Nutrition-focused meal programs that support recovery while meeting clinical dietary requirements and the highest standards of food safety.", "HEALTHCARE"],
  ["Educational Institutions", "Balanced, nutritious dining experiences for schools, colleges, and universities that promote healthy eating and student wellbeing.", "EDUCATION"],
  ["Cafeterias & Food Courts", "Modern dining spaces offering multiple cuisines, cafÃ© concepts, grab-and-go options, and flexible food experiences.", "ALL CAMPUSES"],
  ["Events & Conferences", "Professional catering services for conferences, corporate events, business meetings, and special occasions with seamless execution.", "EVENTS"],
  ["Guest House Management", "Complete dining and hospitality management designed to provide premium guest experiences with personalized service and quality cuisine.", "HOSPITALITY"],
];

const IMPACTS = [
  [Zap, "Energizes workforces", "Dining programs that fuel productivity and team performance."],
  [HeartPulse, "Supports recovery", "Nutrition-led meals that aid patient health and healing."],
  [GraduationCap, "Enriches learning", "Healthy dining that supports focus and student wellbeing."],
  [Users, "Strengthens culture", "Food that brings people together and builds belonging."],
];

const JOI_FEATURES = [
  ["Pre-meal ordering", "Order ahead for a seamless, queue-free dining experience."],
  ["Quick service restaurants", "Fast, quality food across multiple cuisine concepts."],
  ["CafÃ© & grab-and-go", "Flexible counter formats for every pace of workday."],
  ["Digital food ordering", "Smart platforms that simplify choices and speed service."],
];

const WHY_CATALYST = [
  ["Tailored food programs", "Every dining solution is designed around operational needs, workforce preferences, and organizational culture."],
  ["Culinary expertise", "Experienced chefs and nutrition professionals deliver meals that balance taste, nutrition, and consistency."],
  ["Technology-enabled operations", "Smart ordering, digital management, and operational insights improve efficiency and customer experience."],
  ["Quality & food safety", "Robust quality systems and hygiene standards ensure confidence in every meal served."],
  ["Scalable delivery", "From executive dining to high-volume industrial catering, our operations adapt seamlessly to every environment."],
  ["Hospitality-led approach", "Every interaction is designed to create welcoming, engaging, and memorable dining experiences."],
];

const INDUSTRIES = [
  "Automobiles", "Heavy Engineering", "Pharmaceuticals", "Chemical & Ceramics",
  "Power & Energy", "IT & ITeS", "Corporate Workplaces", "Healthcare & Patient Dining", "Educational Institutions",
];

export default function FoodServices({ go }) {
  return (
    <div data-screen-label="Food Services">

      {/* Hero — light, appetizing, editorial */}
      <section style={{ position: "relative", background: "#F9F7F3", padding: "clamp(140px,16vh,180px) clamp(20px,4vw,56px) clamp(50px,6vw,80px)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(50% 60% at 96% 10%, rgba(67,147,74,.1), transparent 70%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }} data-2col>
          <div>
            <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#377B3D", fontWeight: 600, fontSize: 24, marginBottom: 20 }}><span style={{ width: 26, height: 2, background: "#43934A" }}></span>Food Services</div>
            <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(38px,5vw,72px)", color: "#191919", lineHeight: 1.04 }}>Nourishing experiences. Enabling performance.</h1>
            <p data-reveal data-delay="2" className="shown" style={{ marginTop: 24, fontSize: "clamp(16px,1.35vw,19px)", lineHeight: 1.7, color: "#46433C", maxWidth: 540 }}>Food shapes experiences far beyond the dining table — influencing wellbeing, productivity, and everyday engagement. We design and run the food programs behind India's workplaces, hospitals, and campuses.</p>
            <div data-reveal data-delay="3" className="shown" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 26px", marginTop: 32 }}>
              <button className="mag" onClick={() => go("contact")} style={{ background: "#191919", color: "#fff", fontWeight: 600, fontSize: 15.5, padding: "16px 32px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 9 }}>Talk to our team <ArrowRight size={17} /></button>
              <button onClick={() => document.getElementById("food-menu")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "none", color: "#191919", fontFamily: "Outfit", fontWeight: 600, fontSize: 15, display: "inline-flex", alignItems: "center", gap: 7, padding: "14px 2px", borderBottom: "1px solid rgba(25,25,25,.3)" }}>See the menu <ArrowUpRight size={15} /></button>
            </div>
            <div data-reveal data-delay="4" className="shown" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 34 }}>
              <span className="fs-chip"><BadgeCheck size={15} /> FSSAI-certified kitchens</span>
              <span className="fs-chip"><UtensilsCrossed size={15} /> XX M+ meals served annually</span>
            </div>
          </div>
          <div data-reveal data-delay="2" className="shown" style={{ position: "relative" }}>
            <div className="fs-arch" style={{ height: "clamp(380px,52vh,540px)", boxShadow: "0 30px 80px rgba(25,25,25,.16)" }}>
              <img src={foodHeroImg} alt="Fresh food prepared by Catalyst kitchens" data-no-reveal style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", right: "clamp(0px,2vw,18px)", bottom: -14, fontFamily: "Caveat, cursive", fontWeight: 600, fontSize: 23, color: "#377B3D", transform: "rotate(-3deg)" }}>fresh from our kitchens, every day</div>
          </div>
        </div>
      </section>

      {/* Overview — cutout team on green arch */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div>
            <Kicker color="#377B3D" dash="#43934A">Overview</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Food experiences that create value far beyond the plate</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.75, color: "#46433C" }}>Food influences wellbeing, productivity, collaboration, recovery, and everyday engagement.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>We partner with organizations to design food environments that combine nutrition, hospitality, operational excellence, and innovation — from corporate workplaces and industrial facilities to hospitals, educational institutions, and guest houses.</p>
          </div>
          <div data-reveal data-delay="1">
            <CutoutArch src={foodTeamImg} alt="The Catalyst culinary team" tint="rgba(67,147,74,.1)" />
          </div>
        </div>
      </section>

      {/* Why Food Matters — sticky narrative + impact ledger */}
      <section style={{ padding: "clamp(70px,9vw,120px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(40px,6vw,90px)", alignItems: "start" }} data-2col>
          <div style={{ position: "sticky", top: 120 }}>
            <Kicker color="#377B3D" dash="#43934A">Why Food Matters</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Great food creates lasting impressions</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.75, color: "#46433C" }}>By combining quality ingredients, culinary expertise, smart operations, and exceptional hospitality, Catalyst transforms everyday dining into an experience that contributes to healthier, happier, and more engaged environments.</p>
          </div>
          <div data-reveal data-delay="1">
            {IMPACTS.map(([Icon, name, desc], i) => (
              <div key={i} className="fs-imp-row">
                <div className="fs-imp-ico"><Icon size={21} /></div>
                <div>
                  <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 19, color: "#191919" }}>{name}</div>
                  <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.6, marginTop: 6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Menu — dotted-leader service index */}
      <section id="food-menu" style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3", borderTop: "1px solid rgba(25,25,25,.06)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 60px", flexWrap: "wrap", marginBottom: "clamp(30px,4vw,48px)" }}>
            <div style={{ maxWidth: 620 }}>
              <Kicker color="#377B3D" dash="#43934A">Our Food Solutions</Kicker>
              <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>A menu for every environment</h2>
            </div>
            <p data-reveal data-delay="2" style={{ maxWidth: 380, fontSize: 16, lineHeight: 1.7, color: "#6E6A61", paddingBottom: 8 }}>Seven dining programs, each designed around the pace, people, and purpose of the place it serves.</p>
          </div>
          <div data-reveal>
            {MENU.map(([name, desc, tag, note], i) => (
              <div key={i} className="fs-menu-row">
                <div className="fs-menu-top">
                  <span className="fs-menu-name">{name}{note && <span className="fs-menu-note">{note}</span>}</span>
                  <span className="fs-menu-dots"></span>
                  <span className="fs-menu-tag">{tag}</span>
                </div>
                <p className="fs-menu-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOI Food — product spotlight on dark */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#161616", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(55% 65% at 82% 12%, rgba(3,115,255,.16), transparent 65%), radial-gradient(45% 55% at 8% 95%, rgba(67,147,74,.12), transparent 70%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }} data-2col>
          <div>
            <Kicker color="#8FBCFF" dash="#0373ff">JOI Foods</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)" }}>Smart dining for modern workplaces</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,.72)", maxWidth: 560 }}>JOI Food brings together technology and hospitality to deliver a seamless dining experience — greater convenience, faster service, and more choice, transforming traditional cafeterias into vibrant dining destinations.</p>
            <div data-reveal data-delay="3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "26px 32px", marginTop: 38 }} data-2col>
              {JOI_FEATURES.map(([name, desc], i) => (
                <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,.14)", paddingTop: 16 }}>
                  <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 16.5, color: "#fff" }}>{name}</div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,.6)", lineHeight: 1.6, marginTop: 6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal data-delay="1" style={{ display: "flex", justifyContent: "center" }}>
            <PhoneFrame src={joiFoodImg} alt="JOI Food app" width="clamp(230px,24vw,290px)" />
          </div>
        </div>
      </section>

      {/* Culinary Excellence & Innovation — image + twin editorial columns */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "stretch" }} data-2col>
          <div data-reveal className="fs-arch" style={{ minHeight: 400 }}>
            <img src={chefImg} alt="Culinary excellence in action" data-no-reveal style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 44 }}>
            <div>
              <Kicker color="#377B3D" dash="#43934A">Culinary Excellence</Kicker>
              <h3 data-reveal data-delay="1" style={{ fontSize: "clamp(24px,2.6vw,34px)", color: "#191919" }}>Every meal begins with passion</h3>
              <p data-reveal data-delay="2" style={{ marginTop: 16, fontSize: 16.5, lineHeight: 1.75, color: "#46433C" }}>Our chefs and nutrition experts combine regional flavours, global inspirations, and evolving food trends to create menus that are balanced, innovative, and memorable — prepared with care and purpose.</p>
            </div>
            <div style={{ borderTop: "1px solid rgba(25,25,25,.12)", paddingTop: 36 }}>
              <Kicker>Innovation</Kicker>
              <h3 data-reveal data-delay="1" style={{ fontSize: "clamp(24px,2.6vw,34px)", color: "#191919" }}>Shaping the future of food services</h3>
              <p data-reveal data-delay="2" style={{ marginTop: 16, fontSize: 16.5, lineHeight: 1.75, color: "#46433C" }}>From electric kitchens and modern QSR concepts to smart ordering platforms, Catalyst continuously explores new ways to improve efficiency, dining experiences, and operational performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries — kinetic marquee */}
      <IndustriesMarquee
        title="Tailored for every sector"
        sub="Our food solutions are tailored to the unique needs of diverse industries and institutional environments."
        industries={INDUSTRIES}
      />

      {/* Why Catalyst — growing-rule columns */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionHead kicker="Why Catalyst" kickerColor="#377B3D" dashColor="#43934A" title="What makes our food services different" maxWidth={680} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(28px,3.5vw,48px)", rowGap: 44 }} data-3col>
            {WHY_CATALYST.map(([name, desc], i) => (
              <div key={i} data-reveal data-delay={String(i % 3)} className="fs-why-card">
                <h4 style={{ fontSize: 19, fontWeight: 600, color: "#191919" }}>{name}</h4>
                <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.65, marginTop: 10 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA go={go} title="Let's Reimagine Everyday Dining" subtitle="Whether you're managing a corporate workplace, an industrial facility, a healthcare institution, or an educational campus, Catalyst partners with you to create dining experiences that bring together nutrition, hospitality, and operational excellence." primaryLabel="Explore Food Solutions â†’" primaryPage="contact" secondaryLabel="Connect with Our Food Experts" secondaryPage="contact" />
    </div>
  );
}
