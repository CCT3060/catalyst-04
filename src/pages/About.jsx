import { useEffect, useRef } from "react";
import CTA from "../components/CTA";
import heroBg from "../assets/12.png";
import visionMissionBg from "../assets/background_02.jpg";
import { FloatingPaths } from "@/components/ui/background-paths";
import partnerImg from "../assets/Partnerwithus.png";
import { ProfileCard } from "@/components/ui/profile-card";
import IndiaMap from "../components/IndiaMap";
import sankar from "../assets/sankar.png";
import { ShieldCheck, Heart, Star, Lightbulb, Leaf, MapPin } from "lucide-react";

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

export default function About({ go }) {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (cardsRef.current) {
      cardsRef.current.querySelectorAll("[data-ldr-card]").forEach(initTilt);
    }
  }, []);

  const leaders = [
    { name: 'Ram Mankari', role: 'Chairman & Managing Director', quote: '"Insert personal leadership quote/strength here."', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2023/06/1-Ram-Mankari.png', featured: true },
    { name: 'Sekhar Seshan', role: 'Strategy Advisor & Mentor', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2023/06/3-Shekar-Seshan.png', featured: true },
    { name: 'Dinesh Lamsal', role: 'Chief Executive Officer', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2023/06/2-Dinesh-Lamsal.jpg' },
    { name: 'Sachin Desai', role: 'Chief Human Resource Officer', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2023/06/6-Sachin-Desai.png' },
    { name: 'Parimal Dabhade', role: 'Chief Financial Officer', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2023/06/5-Parimal-Dabhade.png' },
    { name: 'Tarun Malik', role: 'Director – IFM', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2023/09/Tarun.pic-PP.jpg' },
    { name: 'Sontosh Lal', role: 'Chief Business Officer – IFM', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2026/06/santosh-1.png' },
    { name: 'Sudeep Suren', role: 'Vice President – Food Solutions', quote: '', image: 'https://www.catalystsolutions.eco/wp-content/uploads/2024/06/sudeep.jpg' },
    { name: 'Sankar Sreedharan', role: 'Vice President - Strategy & New Market', quote: '', image: sankar },

  ];

  return (
    <div data-screen-label="About">
      {/* Hero */}
      <section style={{ position: "relative", background: "#191919", padding: "230px clamp(20px,4vw,56px) clamp(130px,10vw,180px)", minHeight: "65vh", overflow: "hidden", backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }}></div>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(55% 60% at 75% 15%,rgba(67,147,74,.22),transparent 60%),radial-gradient(55% 60% at 10% 95%,rgba(255,127,0,.2),transparent 60%)" }}></div>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(circle at 60% 30%,#000,transparent 75%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 22 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>About Catalyst</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(36px,5.4vw,76px)", color: "#fff", maxWidth: 1000 }}>Every Great Experience Starts with the Right Environment</h1>
          <p data-reveal data-delay="2" className="shown" style={{ marginTop: 26, maxWidth: 760, fontSize: "clamp(16px,1.3vw,19px)", lineHeight: 1.7, color: "rgba(255,255,255,.7)" }}>Behind every productive workplace, every efficient facility, every well-managed healthcare institution, and every thriving community is an ecosystem designed to support people.</p>
        </div>
      </section>

      {/* Company Overview + Map */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} data-2col>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Company Overview</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Integrated solutions that help organizations perform at their best</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Catalyst delivers integrated solutions across facilities, food services, healthcare technology, infrastructure, and workforce management to help organizations perform at their best.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>By aligning operational excellence with human wellbeing, we create environments that inspire confidence, comfort, safety, and growth.</p>
          </div>
          <div data-reveal data-delay="1" style={{ position: "relative", borderRadius: 36, overflow: "hidden", background: "linear-gradient(160deg,#191919,#242424)", minHeight: 440, padding: 36 }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(45% 45% at 50% 40%,rgba(67,147,74,.22),transparent 60%)" }}></div>
            <div style={{ position: "relative", textAlign: "center", color: "#FF7F00", fontSize: 12, letterSpacing: ".2em", fontWeight: 600 }}>GROWING TOGETHER ACROSS REGIONS · INDIA</div>
            <div style={{ position: "relative", height: 340, marginTop: 10, display: "flex", justifyContent: "center" }}>
              <IndiaMap style={{ height: "100%", width: "auto" }} />
            </div>
            <div style={{ position: "relative", color: "rgba(255,255,255,.75)", fontSize: 14, lineHeight: 1.6, textAlign: "center", maxWidth: 420, margin: "0 auto" }}>Our footprint is built through meaningful partnerships, trusted relationships, and a shared commitment to excellence. Wherever we operate, our focus remains the same: Creating environments that support people, strengthen organizations, and contribute to sustainable growth.</div>
          </div>
        </div>

        <div style={{ maxWidth: 1240, margin: "70px auto 0", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }} data-4col>
          {[["XX+", "Locations", "Supporting diverse industries through integrated service excellence.", ""], ["XX,XXX+", "Workforce", "Delivering expertise, care, and commitment every day.", "1"], ["XX+", "Client Partnerships", "Built on trust, performance, and shared success.", "2"], ["XX M+", "Meals Served", "Nourishing communities and workplaces.", "3"], ["XX M+", "Sq. Ft. Managed", "Creating safe, efficient, and future-ready spaces.", "4"]].map(([num, label, desc, delay], i) => (
            <div key={i} data-reveal data-delay={delay || undefined} className="lift" style={{ textAlign: "center", padding: "26px 14px", borderRadius: 24, background: "#F9F7F3", border: "1px solid rgba(25,25,25,.06)" }}>
              <div style={{ fontFamily: "Inter Tight", fontSize: 30, fontWeight: 600, color: "#D96D00" }}>{num}</div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#191919", marginTop: 6 }}>{label}</div>
              <div style={{ fontSize: 12, color: "#6E6A61", marginTop: 4, lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ position: "relative", padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px) calc(clamp(80px,10vw,140px) + 100px)", backgroundImage: `url(${visionMissionBg})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: '50px' }}>
        <div style={{ position: "absolute", inset: 0 }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }} data-2col>
          <div data-reveal className="lift" style={{ position: "relative", padding: "clamp(10px,2vw,30px)" }}>
            <div style={{ position: "relative" }}>
              <div style={{ fontFamily: "Caveat, cursive", fontSize: 30, letterSpacing: ".2em", color: "#FF7F00", fontWeight: 600 }}>VISION</div>
              <h3 style={{ color: "#fff", fontSize: "clamp(24px,2.6vw,34px)", marginTop: 16, lineHeight: 1.25 }}>To create environments where wellbeing thrives</h3>
              <p style={{ color: "rgba(255,255,255,.8)", fontSize: 16, lineHeight: 1.7, marginTop: 18 }}></p>
            </div>
          </div>
          <div data-reveal data-delay="1" className="lift" style={{ position: "relative", padding: "clamp(10px,2vw,30px)" }}>
            <div style={{ position: "relative" }}>
              <div style={{ fontFamily: "Caveat, cursive", fontSize: 30, letterSpacing: ".2em", color: "#FF7F00", fontWeight: 600 }}>MISSION</div>
              <h3 style={{ color: "#fff", fontSize: "clamp(24px,2.6vw,34px)", marginTop: 16, lineHeight: 1.25 }}>We partner with organizations to build safe, sustainable, socially empowering environments that deliver exceptional experiences through integrated solutions</h3>
              <p style={{ color: "rgba(255,255,255,.8)", fontSize: 16, lineHeight: 1.7, marginTop: 18 }}></p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ position: "relative", zIndex: 1, marginTop: -100, borderRadius: "48px 48px 0 0", padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff", alignItems: "center" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 54 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Leadership Team</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.8vw,50px)", color: "#191919" }}>Leading with Purpose. Building with Vision.</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>At Catalyst, leadership is about more than managing businesses—it is about shaping environments where people, organizations, and communities can thrive. Our leadership team brings together diverse expertise across operations, infrastructure, food services, healthcare technology, workforce solutions, and business transformation. United by a shared commitment to innovation, excellence, and well-being, they guide Catalyst's journey toward building a more connected and sustainable future.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }}>
            {leaders.map((ldr, i) => {
              const isLastAndLonely = i === leaders.length - 1 && leaders.length % 4 === 1;
              return (
                <div 
                  key={i} 
                  data-reveal 
                  data-delay={i > 0 ? String(Math.min(i, 3)) : undefined}
                  style={isLastAndLonely ? { gridColumn: "1 / -1", display: "flex", justifyContent: "center" } : {}}
                >
                  <div style={{ width: isLastAndLonely ? "calc((100% - 66px) / 4)" : "100%" }}>
                    <ProfileCard name={ldr.name} role={ldr.role} image={ldr.image} onConnect={() => window.location.href = '#connect'} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "rgb(249, 247, 243)", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
        <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18, justifyContent: "center" }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>What Drives Us</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,4vw,52px)", color: "#191919" }}>Building Better Futures Through Better Environments</h2>
          <p data-reveal data-delay="2" style={{ marginTop: 24, fontSize: 18, lineHeight: 1.75, color: "#6E6A61" }}>The world is changing rapidly. Organizations need partners who can help them navigate complexity while keeping people at the center of every decision. Catalyst's leadership team is committed to creating integrated ecosystems that connect food, facilities, infrastructure, healthcare technology, and workforce solutions into experiences that improve everyday life.</p>
          <p data-reveal data-delay="3" style={{ marginTop: 28, fontFamily: "Inter Tight", fontSize: "clamp(20px,2.4vw,30px)", fontWeight: 600, color: "#191919", lineHeight: 1.4 }}>Because leadership is not measured by what we build for ourselves.<br /><span className="gradtext">It is measured by the impact we create for others.</span></p>
        </div>
      </section>

      {/* Journey */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 54 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Our Journey</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.8vw,50px)", color: "#191919" }}>Every journey leaves a mark</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Ours is reflected in the lives we've touched, the environments we've transformed, and the partnerships we've built. As we grow, our purpose remains unchanged. Catalyst's journey has been shaped by growth, transformation, and a commitment to creating meaningful impact. From our roots in support services to becoming a trusted integrated solutions partner, we have continuously evolved to meet the changing needs of organizations, communities, and workplaces. Today, we bring together expertise across food, facilities, infrastructure, workforce, and healthcare technology to create environments where people thrive and performance flourishes.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, position: "relative" }} data-4col>
            <div style={{ position: "absolute", top: 21, left: "6%", right: "6%", height: 2, background: "#FF7F00" }}></div>
            {[["01", "Roots in Support Services", "Our foundation began in delivering dependable, people-first support services.", "#FF7F00", "#D96D00"], ["02", "Continuous Evolution", "We evolved continuously to meet the changing needs of organizations, communities, and workplaces.", "#FF7F00", "#D96D00"], ["03", "Integrated Solutions Partner", "We became a trusted integrated solutions partner across multiple disciplines.", "#43934A", "#377B3D"], ["04", "Today & Beyond", "We bring together expertise across food, facilities, infrastructure, workforce, and healthcare technology to create environments where people thrive.", "gradient", "#191919"]].map(([num, title, desc, bc, tc], i) => (
              <div key={i} data-reveal data-delay={i > 0 ? String(i) : undefined} style={{ position: "relative", padding: "0 18px 0 0" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: bc === "gradient" ? "#FF7F00" : "#fff", border: bc !== "gradient" ? `2px solid ${bc}` : "none", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter Tight", fontWeight: 600, color: tc, position: "relative", zIndex: 2 }}>{num}</div>
                <h4 style={{ fontSize: 18, color: "#191919", marginTop: 20 }}>{title}</h4>
                <p style={{ fontSize: 14, color: "#6E6A61", lineHeight: 1.6, marginTop: 8 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div data-reveal style={{ marginTop: 50, textAlign: "center", fontFamily: "Inter Tight", fontSize: "clamp(20px,2.4vw,30px)", fontWeight: 500, color: "#191919" }}>Creating a better everyday experience for people everywhere.</div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 54 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Core Values</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.8vw,50px)", color: "#191919" }}>The Values That Define Us</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>At Catalyst, our values are more than guiding principles—they shape our culture, influence our decisions, and define the way we work with clients, employees, partners, and communities.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }} data-4col>
            {[[ShieldCheck, "Integrity", "Drives us to act with honesty, transparency, and accountability in everything we do.", ""], [Heart, "Care", "Inspires us to prioritize the well-being of people and create experiences that make a meaningful difference.", "1"], [Star, "Excellence", "Motivates us to continuously improve our services, processes, and performance standards.", "2"], [Lightbulb, "Innovation", "Encourages us to embrace new ideas, technologies, and approaches that create better outcomes.", "3"], [Leaf, "Responsibility", "Reminds us of our commitment to sustainability, ethical business practices, and positive impact for future generations.", "4"]].map(([Icon, name, desc, delay], i) => (
              <div key={i} data-reveal data-delay={delay || undefined} className="lift" style={{ background: "#fff", border: "1px solid rgba(25,25,25,.07)", borderRadius: 28, padding: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(255,127,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF7F00", marginBottom: 14 }}>
                  <Icon size={22} />
                </div>
                <h4 style={{ fontSize: 19, color: "#191919", marginTop: 8 }}>{name}</h4>
                <p style={{ fontSize: "13.5px", color: "#6E6A61", lineHeight: 1.6, marginTop: 8 }}>{desc}</p>
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
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Why Catalyst</div>
              <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Because every environment shapes an outcome</h2>
              <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>The spaces we experience every day influence how we perform, connect, recover, grow, and succeed. Yet most organizations manage these environments through fragmented solutions.<br /><br />At Catalyst, we believe the greatest impact happens when everything works together seamlessly. By bringing expertise, innovation, and operational excellence under one integrated approach, we help create environments that are more intuitive, resilient, and future-ready.<br /><br />Our role goes beyond delivering services. We help organizations unlock the full potential of their environments—creating experiences that strengthen performance, inspire confidence, and generate lasting value.</p>
            </div>
            <div>
              <div data-reveal style={{ fontSize: 12, letterSpacing: ".2em", color: "#D96D00", fontWeight: 600, marginBottom: 22 }}>WHAT SETS US APART</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} data-2col>
                {[["Integrated Thinking", ""], ["Designed Around Outcomes", "1"], ["Innovation That Solves Real Challenges", ""], ["Operational Excellence at Every Scale", "1"], ["National Reach with Local Understanding", ""], ["Sustainability Embedded by Design", "1"], ["Trusted Partnerships Built for the Long Term", ""], ["Consistent Experiences Across Every Environment", "1", true]].map(([name, delay, grad], i) => (
                  <div key={i} data-reveal data-delay={delay || undefined} className="lift" style={{ background: grad ? "#FF7F00" : "#F9F7F3", border: grad ? undefined : "1px solid rgba(25,25,25,.07)", borderRadius: 22, padding: 22 }}>
                    <div style={{ fontFamily: "Inter Tight", fontWeight: 600, fontSize: 16, color: "#191919" }}>{name}</div>
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
            <h2 data-reveal style={{ fontSize: "clamp(36px,4.5vw,56px)", color: "#1E3B24", fontFamily: "Inter Tight", fontWeight: 500 }}>
              Our <span style={{ color: "#D96D00", fontFamily: "Caveat, cursive", borderBottom: "3px solid #D96D00", paddingBottom: 6 }}>Offices</span>
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
                  <h3 style={{ fontSize: 20, color: "#1E3B24", fontFamily: "Inter Tight", fontWeight: 500 }}>{office.region}</h3>
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
