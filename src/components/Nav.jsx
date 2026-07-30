import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, UtensilsCrossed, Building2, Factory, Stethoscope, Users, Briefcase, Landmark, GraduationCap, Home } from "lucide-react";

export default function Nav({ go, darkHero, activeNav, mobileOpen, setMobileOpen }) {
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const nav = navRef.current;
      if (!nav) return;
      if (window.scrollY > 40) {
        nav.style.background = "rgba(255, 255, 255, 0.82)";
        nav.style.backdropFilter = "blur(22px)";
        nav.style.webkitBackdropFilter = "blur(22px)";
        nav.style.boxShadow = "0 8px 30px rgba(25,25,25,.07)";
        nav.style.padding = "12px clamp(20px,4vw,56px)";
        nav.classList.remove("nav-dark");
      } else {
        nav.style.background = "transparent";
        nav.style.backdropFilter = "none";
        nav.style.webkitBackdropFilter = "none";
        nav.style.boxShadow = "none";
        nav.style.padding = "18px clamp(20px,4vw,56px)";
        if (darkHero) nav.classList.add("nav-dark");
        else nav.classList.remove("nav-dark");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [darkHero]);

  return (
    <nav ref={navRef} data-nav className={darkHero ? "nav-dark" : ""}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px clamp(20px,4vw,56px)", transition: "background .4s,backdrop-filter .4s,box-shadow .4s,padding .4s" }}>
      <div onClick={() => go("home")} style={{ display: "flex", alignItems: "center", gap: 11, cursor: "pointer" }}>
        <img src="/logo.webp" alt="Catalyst Logo" className="nav-logo" style={{ height: 38, width: "auto", flex: "none", transition: "filter 0.4s" }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 34 }} data-desktopnav>
        <span className={`navlink${activeNav === "home" ? " active" : ""}`} onClick={() => go("home")}>Home</span>
        <span className={`navlink${activeNav === "about" ? " active" : ""}`} onClick={() => go("about")}>About Us</span>
        <div className="sol-wrap" style={{ position: "relative", padding: "8px 0" }}>
          <span className={`navlink${activeNav === "solutions" ? " active" : ""}`} style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer" }}>
            Solutions <ChevronDown size={14} style={{ opacity: .8, transition: "transform .2s" }} />
          </span>
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, height: 14 }} />
          <div className="sol-menu" style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 14, width: 330, background: "rgba(255,255,255,.92)", backdropFilter: "blur(24px)", border: "1px solid rgba(25,25,25,.08)", borderRadius: 24, boxShadow: "0 24px 60px rgba(25,25,25,.18)", padding: 10 }}>
            {[["food", "Food Services"], ["ifm", "INTEGRATED FACILITY MANAGEMENT"], ["infra", "Infrastructure Solutions"], ["htm", "Healthcare Solutions"], ["workforce", "WORKFORCE SOLUTIONS"]].map(([p, name]) => {
              return (
                <div key={p} onClick={() => go(p)} className="solrow" style={{ display: "flex", alignItems: "center", padding: "12px 14px", borderRadius: 16, cursor: "pointer" }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#191919" }}>{name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sol-wrap" style={{ position: "relative", padding: "8px 0" }}>
          <span className={`navlink${activeNav === "sectors" ? " active" : ""}`} onClick={() => go("sectors")} style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer" }}>
            Sectors <ChevronDown size={14} style={{ opacity: .8, transition: "transform .2s" }} />
          </span>
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, height: 14 }} />
          <div className="sol-menu" style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 14, width: 340, background: "rgba(255,255,255,.92)", backdropFilter: "blur(24px)", border: "1px solid rgba(25,25,25,.08)", borderRadius: 24, boxShadow: "0 24px 60px rgba(25,25,25,.18)", padding: 10 }}>
            {[
              { id: "sectors?section=0", name: "Corporate & Commercial Spaces" },
              { id: "sectors?section=1", name: "Manufacturing, Industrial & Infrastructure" },
              { id: "sectors?section=2", name: "Infrastructure, Public Sector & Smart Cities" },
              { id: "sectors?section=3", name: "Education" },
              { id: "sectors?section=4", name: "Community Living" },
              { id: "htm", name: "Healthcare Technology Management" }
            ].map((s, i) => {
              return (
                <div key={i} onClick={() => go(s.id)} className="solrow" style={{ display: "flex", alignItems: "center", padding: "12px 14px", borderRadius: 16, cursor: "pointer" }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: "#191919", lineHeight: 1.25 }}>{s.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <span className={`navlink${activeNav === "technologies" ? " active" : ""}`} onClick={() => go("technologies")}>Technologies</span>
        <span className={`navlink${activeNav === "careers" ? " active" : ""}`} onClick={() => go("careers")}>Careers</span>
        <span className={`navlink${activeNav === "contact" ? " active" : ""}`} onClick={() => go("contact")}>Contact</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button className="mag" data-navcta onClick={() => go("contact")} style={{ background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 14, padding: "12px 22px", borderRadius: 999, boxShadow: "0 8px 24px rgba(255,127,0,.35)", whiteSpace: "nowrap" }}>Partner With Us</button>
        <button onClick={() => setMobileOpen(m => !m)} data-burger style={{ display: "none", background: "transparent", width: 42, height: 42, borderRadius: 999, border: "1px solid rgba(25,25,25,.12)", color: "#191919", alignItems: "center", justifyContent: "center" }}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
}
