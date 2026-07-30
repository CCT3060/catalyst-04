import CTA from "../components/CTA";
import { Kicker, SectionHead, NumberedIndex, IndustriesMarquee, PhoneFrame, CutoutArch } from "../components/SolutionsKit";
import foodTeamImg from "../assets/2.png";
import chefImg from "../assets/Gemini_Generated_Image_56k6u556k6u556k6.png";
import joiFoodImg from "../assets/WhatsApp Image 2026-07-07 at 4.39.50 PM.jpeg";
import foodHeroBg from "../assets/Gemini_Generated_Image_313s4z313s4z313s.png";
import { ArrowRight } from "lucide-react";

const SOLUTIONS = [
  ["Workplace Dining", "Contemporary dining programs that enhance employee wellbeing through diverse menus, healthy choices, and engaging workplace experiences."],
  ["Industrial & Manufacturing Catering", "Reliable, high-volume catering designed for manufacturing plants, automobile facilities, heavy engineering, pharmaceuticals, chemical industries, and power sectors."],
  ["Patient Dining", "Nutrition-focused meal programs that support recovery while meeting clinical dietary requirements and the highest standards of food safety."],
  ["Educational Institutions", "Balanced, nutritious dining experiences for schools, colleges, and universities that promote healthy eating and student wellbeing."],
  ["Cafeterias & Food Courts", "Modern dining spaces offering multiple cuisines, café concepts, grab-and-go options, and flexible food experiences."],
  ["Events & Conferences", "Professional catering services for conferences, corporate events, business meetings, and special occasions with seamless execution."],
  ["Guest House Management", "Complete dining and hospitality management designed to provide premium guest experiences with personalized service and quality cuisine."],
];

const IMPACTS = [
  ["Energizes Workforces", "Dining programs that fuel productivity and team performance."],
  ["Supports Recovery", "Nutrition-led meals that aid patient health and healing."],
  ["Enriches Learning", "Healthy dining that supports focus and student wellbeing."],
  ["Strengthens Culture", "Food that brings people together and builds belonging."],
];

const JOI_FEATURES = [
  ["Pre-Meal Ordering", "Order ahead for a seamless, queue-free dining experience."],
  ["Quick Service Restaurants", "Fast, quality food across multiple cuisine concepts."],
  ["Café & Grab-and-Go", "Flexible counter formats for every pace of workday."],
  ["Digital Food Ordering", "Smart platforms that simplify choices and speed service."],
];

const WHY_CATALYST = [
  ["Tailored Food Programs", "Every dining solution is designed around operational needs, workforce preferences, and organizational culture."],
  ["Culinary Expertise", "Experienced chefs and nutrition professionals deliver meals that balance taste, nutrition, and consistency."],
  ["Technology-Enabled Operations", "Smart ordering, digital management, and operational insights improve efficiency and customer experience."],
  ["Quality & Food Safety", "Robust quality systems and hygiene standards ensure confidence in every meal served."],
  ["Scalable Delivery", "From executive dining to high-volume industrial catering, our operations adapt seamlessly to every environment."],
  ["Hospitality-Led Approach", "Every interaction is designed to create welcoming, engaging, and memorable dining experiences."],
];

const INDUSTRIES = [
  "Automobiles", "Heavy Engineering", "Pharmaceuticals", "Chemical & Ceramics",
  "Power & Energy", "IT & ITeS", "Corporate Workplaces", "Healthcare & Patient Dining", "Educational Institutions",
];

export default function FoodServices({ go }) {
  return (
    <div data-screen-label="Food Services">

      {/* Hero */}
      <section style={{ position: "relative", backgroundColor: "#191919", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.7)), url(${foodHeroBg})`, backgroundSize: "cover", backgroundPosition: "center", padding: "170px clamp(20px,4vw,56px) clamp(70px,8vw,110px)", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", width: "100%" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, marginBottom: 22 }}>FOOD SERVICES</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(36px,5.5vw,76px)", color: "#fff", maxWidth: 860, lineHeight: 1.1 }}>Nourishing Experiences.<br />Enabling <span className="gradtext">Performance.</span></h1>
          <p data-reveal data-delay="2" className="shown" style={{ marginTop: 24, fontSize: "clamp(17px,1.4vw,20px)", lineHeight: 1.7, color: "rgba(255,255,255,.78)", maxWidth: 620 }}>Food has the power to shape experiences far beyond the dining table — influencing wellbeing, productivity, and everyday engagement.</p>
          <button data-reveal data-delay="3" className="shown mag" onClick={() => go("contact")} style={{ marginTop: 34, background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8 }}>Talk to our team <ArrowRight size={18} /></button>
        </div>
      </section>

      {/* Overview — cutout team on arch */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div>
            <Kicker>Overview</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Food experiences that create value far beyond the plate</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.75, color: "#46433C" }}>Food influences wellbeing, productivity, collaboration, recovery, and everyday engagement.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>At Catalyst, we partner with organizations to design food environments that combine nutrition, hospitality, operational excellence, and innovation — from corporate workplaces and industrial facilities to hospitals, educational institutions, and guest houses.</p>
          </div>
          <div data-reveal data-delay="1">
            <CutoutArch src={foodTeamImg} alt="The Catalyst culinary team" tint="rgba(255,127,0,.09)" />
          </div>
        </div>
      </section>

      {/* Why Food Matters — editorial list, no icon tiles */}
      <section style={{ padding: "clamp(70px,9vw,120px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }} data-2col>
          <div>
            <Kicker>Why Food Matters</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Great food creates lasting impressions</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.75, color: "#46433C" }}>Great food energizes workforces, supports patient recovery, enriches learning environments, and strengthens organizational culture.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: "#6E6A61" }}>By combining quality ingredients, culinary expertise, smart operations, and exceptional hospitality, Catalyst transforms everyday dining into an experience that contributes to healthier, happier, and more engaged environments.</p>
          </div>
          <div>
            {IMPACTS.map(([name, desc], i) => (
              <div key={i} data-reveal data-delay={String(i)} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 18, padding: "22px 0", borderTop: "1px solid rgba(25,25,25,.12)", borderBottom: i === IMPACTS.length - 1 ? "1px solid rgba(25,25,25,.12)" : "none", alignItems: "baseline" }}>
                <span style={{ fontFamily: "Caveat, cursive", fontSize: 30, fontWeight: 600, color: "#D96D00" }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 19, color: "#191919" }}>{name}</div>
                  <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.6, marginTop: 6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Food Solutions — numbered index */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionHead kicker="Our Food Solutions" title="Tailored dining for every environment" maxWidth={680} />
          <NumberedIndex items={SOLUTIONS} />
        </div>
      </section>

      {/* JOI Food — product spotlight on dark */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#191919", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 70% at 85% 15%,rgba(255,127,0,.14),transparent 60%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }} data-2col>
          <div>
            <Kicker color="#FF7F00">JOI Foods</Kicker>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)" }}>Smart Dining for Modern Workplaces</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,.75)" }}>JOI Food brings together technology and hospitality to deliver a seamless dining experience — greater convenience, faster service, and more choice, transforming traditional cafeterias into vibrant dining destinations.</p>
            <div style={{ marginTop: 36 }}>
              {JOI_FEATURES.map(([name, desc], i) => (
                <div key={i} data-reveal data-delay={String(i)} style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: 16, padding: "16px 0", borderTop: "1px solid rgba(255,255,255,.12)", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: ".08em", color: "#FF7F00" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 17, color: "#fff" }}>{name}</div>
                    <p style={{ fontSize: 14.5, color: "rgba(255,255,255,.62)", lineHeight: 1.6, marginTop: 4 }}>{desc}</p>
                  </div>
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
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "stretch" }} data-2col>
          <div data-reveal style={{ borderRadius: 36, overflow: "hidden", minHeight: 380 }}>
            <img src={chefImg} alt="Culinary excellence in action" data-no-reveal style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 44 }}>
            <div>
              <Kicker>Culinary Excellence</Kicker>
              <h3 data-reveal data-delay="1" style={{ fontSize: "clamp(24px,2.6vw,34px)", color: "#191919" }}>Every Meal Begins with Passion</h3>
              <p data-reveal data-delay="2" style={{ marginTop: 16, fontSize: 16.5, lineHeight: 1.75, color: "#46433C" }}>Our chefs and nutrition experts combine regional flavours, global inspirations, and evolving food trends to create menus that are balanced, innovative, and memorable — prepared with care and purpose.</p>
            </div>
            <div style={{ borderTop: "1px solid rgba(25,25,25,.12)", paddingTop: 36 }}>
              <Kicker color="#377B3D" dash="#43934A">Innovation</Kicker>
              <h3 data-reveal data-delay="1" style={{ fontSize: "clamp(24px,2.6vw,34px)", color: "#191919" }}>Shaping the Future of Food Services</h3>
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

      {/* Why Catalyst — ruled columns, no cards */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionHead kicker="Why Catalyst" title="What makes our food services different" maxWidth={680} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(28px,3.5vw,48px)", rowGap: 44 }} data-3col>
            {WHY_CATALYST.map(([name, desc], i) => (
              <div key={i} data-reveal data-delay={String(i % 3)} style={{ borderTop: "2px solid #191919", paddingTop: 20 }}>
                <div style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: ".08em", color: "#D96D00", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                <h4 style={{ fontSize: 19, fontWeight: 600, color: "#191919" }}>{name}</h4>
                <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.65, marginTop: 10 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA go={go} title="Let's Reimagine Everyday Dining" subtitle="Whether you're managing a corporate workplace, an industrial facility, a healthcare institution, or an educational campus, Catalyst partners with you to create dining experiences that bring together nutrition, hospitality, and operational excellence." primaryLabel="Explore Food Solutions →" primaryPage="contact" secondaryLabel="Connect with Our Food Experts" secondaryPage="contact" />
    </div>
  );
}
