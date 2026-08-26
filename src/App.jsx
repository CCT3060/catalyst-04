import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import Home from "./pages/Home";
import About from "./pages/About";
import FoodServices from "./pages/FoodServices";
import Facilities from "./pages/Facilities";
import Infrastructure from "./pages/Infrastructure";
import HealthcareTech from "./pages/HealthcareTech";
import Workforce from "./pages/Workforce";
import Sectors from "./pages/Sectors";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Technologies from "./pages/Technologies";
import { initImageReveal, killImageReveal } from "./lib/imageReveal";
function useDarkHero(page) {
  return ["home", "about", "sectors", "careers", "contact", "technologies"].includes(page);
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash.replace("#", "") || "home");
  const page = hash.split("?")[0] || "home";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const [mobileSecOpen, setMobileSecOpen] = useState(false);
  const revealRef = useRef(null);

  const go = useCallback((p) => {
    setHash(p);
    setMobileOpen(false);
    setMobileSolOpen(false);
    setMobileSecOpen(false);
    window.history.pushState(null, "", "#" + p);
    if (!p.includes("?")) { try { window.scrollTo({ top: 0, behavior: "auto" }); } catch (e) { } }
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash.replace("#", "") || "home");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const reveal = useCallback(() => {
    const vh = window.innerHeight;
    document.querySelectorAll("[data-reveal]:not(.shown)").forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) el.classList.add("shown");
    });
  }, []);

  useEffect(() => {
    revealRef.current = reveal;
    const t1 = setTimeout(reveal, 50);
    const t2 = setTimeout(reveal, 300);
    const t3 = setTimeout(reveal, 700);
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", reveal);
    };
  }, [page, reveal]);

  useEffect(() => {
    // after the page renders, attach the scrubbed clip-reveal to its images
    const t = setTimeout(initImageReveal, 60);
    return () => {
      clearTimeout(t);
      killImageReveal();
    };
  }, [page]);

  const darkHero = useDarkHero(page);

  const navMap = { home: "home", about: "about", solutions: "solutions", food: "solutions", ifm: "solutions", infra: "solutions", htm: "solutions", workforce: "solutions", sectors: "sectors", careers: "careers", contact: "contact", technologies: "technologies" };
  const activeNav = navMap[page] || "home";

  const pages = { home: Home, about: About, solutions: FoodServices, food: FoodServices, ifm: Facilities, infra: Infrastructure, htm: HealthcareTech, workforce: Workforce, sectors: Sectors, careers: Careers, contact: Contact, technologies: Technologies };
  const PageComp = pages[page] || Home;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Nav go={go} darkHero={darkHero} activeNav={activeNav} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(20,20,20,.98)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", display: "flex", flexDirection: "column", padding: "80px 28px 40px", overflowY: "auto" }}>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{ position: "absolute", top: 22, right: 24, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", width: 42, height: 42, borderRadius: "50%", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <X size={22} />
          </button>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span className="navlink nav-dark" onClick={() => go("home")} style={{ fontSize: 26, fontWeight: 600, fontFamily: "Outfit", padding: "8px 0", color: "#fff" }}>Home</span>
            <span className="navlink nav-dark" onClick={() => go("about")} style={{ fontSize: 26, fontWeight: 600, fontFamily: "Outfit", padding: "8px 0", color: "#fff" }}>About Us</span>

            {/* Solutions Accordion */}
            <div>
              <div
                onClick={() => setMobileSolOpen(s => !s)}
                style={{ fontSize: 26, fontWeight: 600, fontFamily: "Outfit", padding: "8px 0", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}
              >
                <span>Solutions</span>
                <ChevronDown size={22} style={{ transition: "transform 0.3s", transform: mobileSolOpen ? "rotate(180deg)" : "rotate(0deg)", opacity: 0.8 }} />
              </div>
              {mobileSolOpen && (
                <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingLeft: 14, paddingTop: 8, paddingBottom: 12, borderLeft: "2px solid rgba(3,115,255,0.6)", marginTop: 4 }}>
                  {[
                    ["food", "Food Services"],
                    ["ifm", "Integrated Facilities Management"],
                    ["infra", "Infrastructure Solutions"],
                    ["htm", "Healthcare Technology"],
                    ["workforce", "Workforce Solutions"],
                  ].map(([p, label]) => (
                    <span key={p} onClick={() => go(p)} style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "Outfit", fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                      {label}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Sectors Accordion */}
            <div>
              <div
                onClick={() => setMobileSecOpen(s => !s)}
                style={{ fontSize: 26, fontWeight: 600, fontFamily: "Outfit", padding: "8px 0", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}
              >
                <span>Sectors</span>
                <ChevronDown size={22} style={{ transition: "transform 0.3s", transform: mobileSecOpen ? "rotate(180deg)" : "rotate(0deg)", opacity: 0.8 }} />
              </div>
              {mobileSecOpen && (
                <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingLeft: 14, paddingTop: 8, paddingBottom: 12, borderLeft: "2px solid rgba(67,147,74,0.6)", marginTop: 4 }}>
                  {[
                    ["sectors?section=0", "Corporate & Commercial Spaces"],
                    ["sectors?section=1", "Manufacturing, Industrial & Infrastructure"],
                    ["sectors?section=2", "Infrastructure, Public Sector & Smart Cities"],
                    ["sectors?section=3", "Education"],
                    ["sectors?section=4", "Community Living"],
                    ["sectors?section=5", "Healthcare"],
                  ].map(([p, label]) => (
                    <span key={p} onClick={() => go(p)} style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "Outfit", fontWeight: 500, cursor: "pointer" }}>
                      {label}
                    </span>
                  ))}
                  <a href="https://cssgroup.ltd" target="_blank" rel="noreferrer" style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "Outfit", fontWeight: 500, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                    Energy <ArrowUpRight size={14} />
                  </a>
                </div>
              )}
            </div>

            <span className="navlink nav-dark" onClick={() => go("technologies")} style={{ fontSize: 26, fontWeight: 600, fontFamily: "Outfit", padding: "8px 0", color: "#fff" }}>Technologies</span>
            <span className="navlink nav-dark" onClick={() => go("careers")} style={{ fontSize: 26, fontWeight: 600, fontFamily: "Outfit", padding: "8px 0", color: "#fff" }}>Careers</span>
            <span className="navlink nav-dark" onClick={() => go("contact")} style={{ fontSize: 26, fontWeight: 600, fontFamily: "Outfit", padding: "8px 0", color: "#fff" }}>Contact</span>
          </div>

          <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            <button onClick={() => go("contact")} style={{ width: "100%", background: "#0373ff", color: "#fff", fontWeight: 600, fontSize: 16, padding: "15px", borderRadius: 999, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              Partner With Us <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      )}
      <main>
        <PageComp go={go} hash={hash} />
      </main>
      <FloatingActions go={go} />
      <Footer go={go} />
    </div>
  );
}
