import React, { useState } from "react";
import { MessageSquare, X, ChevronRight, ArrowLeft, Send } from "lucide-react";

const SECTORS = [
  { id: "oil-gas",        label: "Oil & Gas",                icon: "🛢️", desc: "Offshore and onshore catering, accommodation vessel management, and integrated facility operations for energy sector sites." },
  { id: "corporate",      label: "Corporate & Commercial",   icon: "🏢", desc: "End-to-end integrated facility services for corporate campuses, offices, and commercial spaces." },
  { id: "healthcare",     label: "Healthcare",               icon: "🏥", desc: "Healthcare technology management, biomedical engineering, and clinical facility services." },
  { id: "hospitality",    label: "Hospitality & Food",       icon: "🍽️", desc: "Large-scale food services, dining programs, vending solutions, and catering management." },
  { id: "infrastructure", label: "Infrastructure",           icon: "🏗️", desc: "End-to-end infrastructure project support — from planning and procurement to delivery and handover." },
  { id: "education",      label: "Education",                icon: "🎓", desc: "Campus facility management, housekeeping, and support services for schools, colleges, and universities." },
  { id: "manufacturing",  label: "Manufacturing & Industrial", icon: "🏭", desc: "Factory and plant facility management, workforce solutions, and operational support services." },
  { id: "marine",         label: "Marine & Offshore",        icon: "⚓", desc: "Vessel catering, crew management services, and accommodation vessel operations across global waters." },
];

const QUESTIONS = [
  { id: "sector",   text: "Which sector are you in?" },
  { id: "services", text: "What services does Catalyst offer?" },
  { id: "contact",  text: "I'd like to get in touch" },
];

const SERVICES = [
  ["🍽️", "Food Services",               "Large-scale dining and catering programs"],
  ["🏢", "Facilities Management",        "Engineering, soft & technical services"],
  ["🏗️", "Infrastructure Solutions",    "Projects from plan to handover"],
  ["🏥", "Healthcare Tech Management",   "Biomedical & clinical engineering"],
  ["👥", "Workforce Solutions",          "Staffing, payroll & compliance"],
];

export default function FloatingActions({ go }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("home"); // home | sectors | sector-detail | services
  const [activeSector, setActiveSector] = useState(null);

  const handleQuestion = (id) => {
    if (id === "sector")   { setStep("sectors"); return; }
    if (id === "services") { setStep("services"); return; }
    if (id === "contact")  { go?.("contact"); setOpen(false); }
  };

  const handleSector = (sector) => {
    setActiveSector(sector);
    setStep("sector-detail");
  };

  const handleClose = () => {
    setOpen(false);
    // Reset state after the panel has slid away
    setTimeout(() => { setStep("home"); setActiveSector(null); }, 320);
  };

  const navigate = (page) => { go?.(page); setOpen(false); };

  return (
    <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999, display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-end" }}>

      {/* ── Chat panel ── */}
      <div style={{
        position: "absolute", bottom: 66, right: 0,
        width: 340,
        borderRadius: 20,
        background: "#fff",
        boxShadow: "0 20px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)",
        overflow: "hidden",
        transform: open ? "scale(1) translateY(0)" : "scale(0.9) translateY(20px)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transformOrigin: "bottom right",
        transition: "transform 0.3s cubic-bezier(0.16,0.84,0.44,1), opacity 0.3s cubic-bezier(0.16,0.84,0.44,1)",
      }}>

        {/* Header */}
        <div style={{ background: "linear-gradient(135deg, #0373ff 0%, #025dd4 100%)", padding: "16px 18px 14px", color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>💬</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14.5, letterSpacing: "-0.01em" }}>Catalyst Solutions</div>
                <div style={{ fontSize: 11.5, opacity: 0.78, marginTop: 1 }}>How can we help?</div>
              </div>
            </div>
            <button onClick={handleClose} aria-label="Close chat" style={{ background: "rgba(255,255,255,0.18)", border: "none", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.18)"}>
              <X size={13} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "16px 16px 12px", minHeight: 260, maxHeight: 400, overflowY: "auto" }}>

          {/* ── Home step ── */}
          {step === "home" && (
            <div>
              <p style={{ fontSize: 13.5, color: "#6E6A61", marginBottom: 14, lineHeight: 1.55 }}>
                Hi there 👋 Pick a question to get started.
              </p>
              {QUESTIONS.map(q => (
                <button key={q.id} onClick={() => handleQuestion(q.id)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "11px 14px", marginBottom: 8, borderRadius: 12, border: "1.5px solid rgba(3,115,255,0.2)", background: "rgba(3,115,255,0.04)", color: "#191919", cursor: "pointer", textAlign: "left", fontSize: 13.5, fontFamily: "Outfit, sans-serif", fontWeight: 500, transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(3,115,255,0.1)"; e.currentTarget.style.borderColor = "#0373ff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(3,115,255,0.04)"; e.currentTarget.style.borderColor = "rgba(3,115,255,0.2)"; }}>
                  {q.text}
                  <ChevronRight size={14} style={{ color: "#0373ff", flexShrink: 0, marginLeft: 8 }} />
                </button>
              ))}
            </div>
          )}

          {/* ── Sectors list ── */}
          {step === "sectors" && (
            <div>
              <button onClick={() => setStep("home")} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: "#0373ff", fontSize: 12.5, fontWeight: 600, cursor: "pointer", marginBottom: 12, padding: "2px 0", fontFamily: "Outfit, sans-serif" }}>
                <ArrowLeft size={12} /> Back
              </button>
              <p style={{ fontSize: 13, color: "#6E6A61", marginBottom: 10, lineHeight: 1.5 }}>Select your sector:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {SECTORS.map(s => (
                  <button key={s.id} onClick={() => handleSector(s)}
                    style={{ display: "flex", alignItems: "center", gap: 9, width: "100%", padding: "9px 11px", borderRadius: 10, border: "1px solid rgba(25,25,25,0.1)", background: "#F9F7F3", color: "#191919", cursor: "pointer", textAlign: "left", fontSize: 13.5, fontFamily: "Outfit, sans-serif", fontWeight: 500, transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(3,115,255,0.08)"; e.currentTarget.style.borderColor = "#0373ff"; e.currentTarget.style.color = "#0258cc"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#F9F7F3"; e.currentTarget.style.borderColor = "rgba(25,25,25,0.1)"; e.currentTarget.style.color = "#191919"; }}>
                    <span style={{ fontSize: 17, flexShrink: 0 }}>{s.icon}</span>
                    <span style={{ flex: 1 }}>{s.label}</span>
                    <ChevronRight size={12} style={{ color: "#A8A296", flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Sector detail ── */}
          {step === "sector-detail" && activeSector && (
            <div>
              <button onClick={() => setStep("sectors")} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: "#0373ff", fontSize: 12.5, fontWeight: 600, cursor: "pointer", marginBottom: 14, padding: "2px 0", fontFamily: "Outfit, sans-serif" }}>
                <ArrowLeft size={12} /> All Sectors
              </button>
              <div style={{ background: "linear-gradient(135deg, rgba(3,115,255,0.06), rgba(3,115,255,0.03))", borderRadius: 14, padding: "16px", border: "1px solid rgba(3,115,255,0.12)" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{activeSector.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15.5, color: "#191919", marginBottom: 8, letterSpacing: "-0.01em" }}>{activeSector.label}</div>
                <p style={{ fontSize: 13.5, color: "#6E6A61", lineHeight: 1.6 }}>{activeSector.desc}</p>
              </div>
              <button onClick={() => navigate("contact")}
                style={{ marginTop: 12, width: "100%", padding: "11px", borderRadius: 12, background: "#0373ff", color: "#fff", border: "none", cursor: "pointer", fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 13.5, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#025dd4"}
                onMouseLeave={e => e.currentTarget.style.background = "#0373ff"}>
                Talk to Our Team <Send size={13} />
              </button>
            </div>
          )}

          {/* ── Services list ── */}
          {step === "services" && (
            <div>
              <button onClick={() => setStep("home")} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: "#0373ff", fontSize: 12.5, fontWeight: 600, cursor: "pointer", marginBottom: 12, padding: "2px 0", fontFamily: "Outfit, sans-serif" }}>
                <ArrowLeft size={12} /> Back
              </button>
              <p style={{ fontSize: 13, color: "#6E6A61", lineHeight: 1.5, marginBottom: 10 }}>Catalyst's five integrated service lines:</p>
              {SERVICES.map(([icon, name, desc]) => (
                <div key={name} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: "1px solid rgba(25,25,25,0.07)", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 17, marginTop: 1, flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13.5, color: "#191919" }}>{name}</div>
                    <div style={{ fontSize: 12, color: "#8A857B", marginTop: 2 }}>{desc}</div>
                  </div>
                </div>
              ))}
              <button onClick={() => navigate("contact")}
                style={{ marginTop: 14, width: "100%", padding: "11px", borderRadius: 12, background: "#0373ff", color: "#fff", border: "none", cursor: "pointer", fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 13.5, transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#025dd4"}
                onMouseLeave={e => e.currentTarget.style.background = "#0373ff"}>
                Get in Touch
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: "10px 14px", borderTop: "1px solid rgba(25,25,25,0.08)", background: "#FAFAF8", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "#A8A296", fontFamily: "Outfit, sans-serif" }}>Catalyst Solutions</span>
          <button onClick={() => navigate("contact")}
            style={{ padding: "7px 14px", borderRadius: 8, background: "#191919", color: "#fff", border: "none", cursor: "pointer", fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: "-0.01em" }}>
            Contact Us
          </button>
        </div>
      </div>

      {/* ── Toggle button ── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          width: 52, height: 52, borderRadius: "50%",
          background: open ? "#191919" : "#0373ff",
          color: "#fff", border: "none",
          boxShadow: open
            ? "0 8px 24px rgba(0,0,0,0.22)"
            : "0 8px 24px rgba(3,115,255,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          transition: "background 0.25s ease, box-shadow 0.25s ease, transform 0.25s cubic-bezier(0.16,0.84,0.44,1)",
          transform: open ? "rotate(-8deg) scale(1.05)" : "scale(1)",
        }}>
        {open ? <X size={21} /> : <MessageSquare size={21} />}
      </button>
    </div>
  );
}
