import { useState, useEffect, useRef, useCallback } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
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
  return ["home","sectors","careers","contact","technologies"].includes(page);
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash.replace("#", "") || "home");
  const page = hash.split("?")[0] || "home";
  const [mobileOpen, setMobileOpen] = useState(false);
  const revealRef = useRef(null);

  const go = useCallback((p) => {
    setHash(p);
    setMobileOpen(false);
    window.history.pushState(null, "", "#" + p);
    if (!p.includes("?")) { try { window.scrollTo({ top: 0, behavior: "auto" }); } catch(e){} }
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

  const navMap = { home:"home", about:"about", food:"solutions", ifm:"solutions", infra:"solutions", htm:"solutions", workforce:"solutions", sectors:"sectors", careers:"careers", contact:"contact", technologies:"technologies" };
  const activeNav = navMap[page] || "home";

  const pages = { home: Home, about: About, food: FoodServices, ifm: Facilities, infra: Infrastructure, htm: HealthcareTech, workforce: Workforce, sectors: Sectors, careers: Careers, contact: Contact, technologies: Technologies };
  const PageComp = pages[page] || Home;

  return (
    <div style={{position:"relative",width:"100%"}}>
      <Nav go={go} darkHero={darkHero} activeNav={activeNav} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {mobileOpen && (
        <div style={{position:"fixed",inset:0,zIndex:99,background:"rgba(25,25,25,.97)",backdropFilter:"blur(20px)",display:"flex",flexDirection:"column",justifyContent:"center",gap:6,padding:"0 40px"}}>
          {["home","about","sectors","technologies","careers","contact"].map(p => (
            <span key={p} className="navlink nav-dark" onClick={() => go(p)} style={{fontSize:30,fontWeight:600,fontFamily:"Inter Tight",padding:"10px 0",textTransform:"capitalize"}}>{p === "home" ? "Home" : p.charAt(0).toUpperCase() + p.slice(1).replace(/([A-Z])/g,' $1')}</span>
          ))}
          <button onClick={() => setMobileOpen(false)} style={{position:"absolute",top:24,right:28,background:"transparent",color:"#fff",fontSize:30,border:"none",cursor:"pointer"}}>✕</button>
        </div>
      )}
      <main>
        <PageComp go={go} hash={hash} />
      </main>
      <Footer go={go} />
    </div>
  );
}
