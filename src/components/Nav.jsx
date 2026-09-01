import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, UtensilsCrossed, Building2, Factory, Stethoscope, Users, Briefcase, Landmark, GraduationCap, Home, Zap, ArrowUpRight } from "lucide-react";

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
        <img loading="lazy" src="/logo.webp" alt="Catalyst Logo" className="nav-logo" style={{ height: 38, width: "auto", flex: "none", transition: "filter 0.4s" }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 34 }} data-desktopnav>
        <div className="nav-separator"></div>
        <span className={`navlink${activeNav === "home" ? " active" : ""}`} onClick={() => go("home")} style={{ cursor: "pointer" }}>Home</span>
        <span className={`navlink${activeNav === "about" ? " active" : ""}`} onClick={() => go("about")}>About Us</span>
        <div className="sol-wrap" style={{ position: "relative", padding: "8px 0" }}>
          <span className={`navlink${activeNav === "solutions" ? " active" : ""}`} style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer" }}>
            Solutions <ChevronDown size={14} style={{ opacity: .8, transition: "transform .2s" }} />
          </span>
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, height: 14 }} />
          <div className="sol-menu" style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 14, width: 330, background: "rgba(255,255,255,.96)", backdropFilter: "blur(24px)", border: "1px solid rgba(25,25,25,.08)", borderRadius: 20, boxShadow: "0 24px 60px rgba(25,25,25,.16)", padding: 8 }}>
            <div className="menu-cap">SOLUTIONS</div>
            {[
              ["ifm", Building2, "Integrated Facilities Management", "Engineering, soft & support services"],
              ["infra", Factory, "Infrastructure Solutions", "Projects from plan to handover"],
              ["food", UtensilsCrossed, "Food Services", "Dining programs designed at scale"],
              ["workforce", Users, "Workforce Solutions", "Staffing, payroll & compliance"],
              ["htm", Stethoscope, "Healthcare Technology", "Biomedical & clinical engineering"],

            ].map(([p, Icon, name, sub]) => (
              <div key={p} onClick={() => go(p)} className="menu-item">
                <span className="menu-ico"><Icon size={17} /></span>
                <div>
                  <div className="menu-name">{name}</div>
                  <div className="menu-sub">{sub}</div>
                </div>
                <ArrowUpRight className="menu-arr" size={14} />
              </div>
            ))}
          </div>
        </div>
        <div className="sol-wrap" style={{ position: "relative", padding: "8px 0" }}>
          <span className={`navlink${activeNav === "sectors" ? " active" : ""}`} onClick={() => go("sectors")} style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer" }}>
            Sectors <ChevronDown size={14} style={{ opacity: .8, transition: "transform .2s" }} />
          </span>
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, height: 14 }} />
          <div className="sol-menu" style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 14, width: 350, background: "rgba(255,255,255,.96)", backdropFilter: "blur(24px)", border: "1px solid rgba(25,25,25,.08)", borderRadius: 20, boxShadow: "0 24px 60px rgba(25,25,25,.16)", padding: 8 }}>
            <div className="menu-cap">SECTORS WE SERVE</div>
            {[
              ["sectors?section=0", Briefcase, "Corporate & Commercial Spaces"],
              ["sectors?section=1", Factory, "Manufacturing & Industrial Infrastructure"],
              ["sectors?section=2", Landmark, "Public Sector & Smart Cities"],
              ["sectors?section=3", GraduationCap, "Education"],
              ["sectors?section=4", Home, "Community Living"],
              ["sectors?section=5", Stethoscope, "Healthcare"]
            ].map(([id, Icon, name]) => (
              <div key={id} onClick={() => go(id)} className="menu-item">
                <span className="menu-ico"><Icon size={16} /></span>
                <div><div className="menu-name" style={{ fontSize: 13.5 }}>{name}</div></div>
                <ArrowUpRight className="menu-arr" size={14} />
              </div>
            ))}
            <a href="https://cssgroup.ltd" target="_blank" rel="noreferrer" className="menu-item">
              <span className="menu-ico"><Zap size={16} /></span>
              <div><div className="menu-name" style={{ fontSize: 13.5 }}>Energy</div></div>
              <ArrowUpRight className="menu-arr" size={14} />
            </a>
          </div>
        </div>
        <span className={`navlink${activeNav === "technologies" ? " active" : ""}`} onClick={() => go("technologies")}>Technologies</span>
        <span className={`navlink${activeNav === "careers" ? " active" : ""}`} onClick={() => go("careers")}>Careers</span>
        <span className={`navlink${activeNav === "contact" ? " active" : ""}`} onClick={() => go("contact")}>Contact</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button className="nav-cta" data-navcta onClick={() => go("contact?service=general")}>Partner With Us <ArrowUpRight size={15} /></button>
        <button onClick={() => setMobileOpen(m => !m)} data-burger style={{ display: "none", background: "transparent", width: 42, height: 42, borderRadius: 999, border: "1px solid rgba(25,25,25,.12)", color: "#191919", alignItems: "center", justifyContent: "center" }}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
}
