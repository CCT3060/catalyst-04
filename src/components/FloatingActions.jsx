import React, { useState } from "react";
import { MessageSquare, X, ChevronRight, ArrowLeft, Send, CheckCircle2, AlertCircle } from "lucide-react";

const SECTORS = [
  { id: "oil-gas", label: "Oil & Gas", icon: "🛢️", desc: "Offshore and onshore catering, accommodation vessel management, and integrated facility operations for energy sector sites." },
  { id: "corporate", label: "Corporate & Commercial", icon: "🏢", desc: "End-to-end integrated facility services for corporate campuses, offices, and commercial spaces." },
  { id: "healthcare", label: "Healthcare", icon: "🏥", desc: "Healthcare technology management, biomedical engineering, and clinical facility services." },
  { id: "hospitality", label: "Hospitality & Food", icon: "🍽️", desc: "Large-scale food services, dining programs, vending solutions, and catering management." },
  { id: "infrastructure", label: "Infrastructure", icon: "🏗️", desc: "End-to-end infrastructure project support — from planning and procurement to delivery and handover." },
  { id: "education", label: "Education", icon: "🎓", desc: "Campus facility management, housekeeping, and support services for schools, colleges, and universities." },
  { id: "manufacturing", label: "Manufacturing & Industrial", icon: "🏭", desc: "Factory and plant facility management, workforce solutions, and operational support services." },
  { id: "marine", label: "Marine & Offshore", icon: "⚓", desc: "Vessel catering, crew management services, and accommodation vessel operations across global waters." },
];

const QUESTIONS = [
  { id: "sector", text: "Which sector are you in?" },
  { id: "services", text: "What services does Catalyst offer?" },
  { id: "contact", text: "I'd like to get in touch" },
];

const SERVICES = [
  ["🍽️", "Food Services", "Large-scale dining and catering programs"],
  ["🏢", "Facilities Management", "Engineering, soft & technical services"],
  ["🏗️", "Infrastructure Solutions", "Projects from plan to handover"],
  ["🏥", "Healthcare Tech Management", "Biomedical & clinical engineering"],
  ["👥", "Workforce Solutions", "Staffing, payroll & compliance"],
];

const API_BASE = "/admin/api";

export default function FloatingActions({ go }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("home"); // home | sectors | sector-detail | services | form | success
  const [activeSector, setActiveSector] = useState(null);

  // Form State
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [formState, setFormState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formContext, setFormContext] = useState(""); // what they are inquiring about

  const handleQuestion = (id) => {
    if (id === "sector") { setStep("sectors"); return; }
    if (id === "services") { setStep("services"); return; }
    if (id === "contact") {
      setFormContext("General Inquiry");
      setStep("form");
    }
  };

  const handleSector = (sector) => {
    setActiveSector(sector);
    setStep("sector-detail");
  };

  const openForm = (context) => {
    setFormContext(context);
    setStep("form");
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setStep("home");
      setActiveSector(null);
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
      setFormState("idle");
    }, 320);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_BASE}/contact.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          service: formContext,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormState("success");
        setStep("success");
      } else {
        setErrorMsg(data.error || "Something went wrong.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Unable to connect to server.");
      setFormState("error");
    }
  };

  const inputStyle = {
    width: "100%", padding: "10px 12px", borderRadius: 10,
    border: "1px solid rgba(25,25,25,.12)", fontSize: 13,
    fontFamily: "Outfit, sans-serif", outline: "none", boxSizing: "border-box",
    marginBottom: 10, background: "#fff"
  };

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
                <div style={{ fontWeight: 700, fontSize: 14.5, letterSpacing: "-0.01em" }}>Catalyst</div>
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
        <div style={{ padding: "16px 16px 12px", minHeight: 260, maxHeight: 400, overflowY: "auto", overscrollBehavior: "contain" }}>

          {/* ── Home step ── */}
          {step === "home" && (
            <div>
              <p style={{ fontSize: 13.5, color: "#6E6A61", marginBottom: 14, lineHeight: 1.55 }}>
                Hello 👋 <br /> Which service are you looking for?
              </p>
              {SERVICES.map(([icon, name]) => (
                <button key={name} onClick={() => openForm(name)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "11px 14px", marginBottom: 8, borderRadius: 12, border: "1.5px solid rgba(3,115,255,0.2)", background: "rgba(3,115,255,0.04)", color: "#191919", cursor: "pointer", textAlign: "left", fontSize: 13.5, fontFamily: "Outfit, sans-serif", fontWeight: 500, transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(3,115,255,0.1)"; e.currentTarget.style.borderColor = "#0373ff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(3,115,255,0.04)"; e.currentTarget.style.borderColor = "rgba(3,115,255,0.2)"; }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 16 }}>{icon}</span>
                    <span>{name}</span>
                  </div>
                  <ChevronRight size={14} style={{ color: "#0373ff", flexShrink: 0, marginLeft: 8 }} />
                </button>
              ))}
            </div>
          )}

          {/* ── Form step ── */}
          {step === "form" && (
            <div>
              <button onClick={() => setStep("home")} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: "#0373ff", fontSize: 12.5, fontWeight: 600, cursor: "pointer", marginBottom: 12, padding: "2px 0", fontFamily: "Outfit, sans-serif" }}>
                <ArrowLeft size={12} /> Back
              </button>
              <h4 style={{ fontSize: 15, fontWeight: 600, color: "#191919", marginBottom: 4 }}>Let's Talk</h4>
              <p style={{ fontSize: 12.5, color: "#6E6A61", marginBottom: 14 }}>Inquiry about: {formContext}</p>

              <form onSubmit={handleSubmit}>
                {formState === "error" && (
                  <div style={{ background: "rgba(239,68,68,.08)", borderRadius: 8, padding: "8px 10px", display: "flex", gap: 6, alignItems: "center", color: "#ef4444", fontSize: 12, marginBottom: 10 }}>
                    <AlertCircle size={14} /> {errorMsg}
                  </div>
                )}
                <input style={inputStyle} type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input style={inputStyle} type="email" placeholder="Email Address" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                <input style={inputStyle} type="tel" placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                <input style={inputStyle} type="text" placeholder="Company Name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                <textarea style={{ ...inputStyle, resize: "vertical", minHeight: 60 }} placeholder="Message (Optional)" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />

                <button type="submit" disabled={formState === "loading"}
                  style={{ marginTop: 4, width: "100%", padding: "11px", borderRadius: 12, background: "#0373ff", color: "#fff", border: "none", cursor: "pointer", fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 13.5, opacity: formState === "loading" ? 0.7 : 1 }}>
                  {formState === "loading" ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          )}

          {/* ── Success step ── */}
          {step === "success" && (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <CheckCircle2 size={48} color="#43934A" style={{ margin: "0 auto 12px" }} />
              <h4 style={{ fontSize: 18, fontWeight: 600, color: "#191919", marginBottom: 6 }}>Message Sent</h4>
              <p style={{ fontSize: 13, color: "#6E6A61", lineHeight: 1.5 }}>Thank you! Our team will get back to you shortly regarding your inquiry.</p>
              <button onClick={() => setStep("home")}
                style={{ marginTop: 20, padding: "9px 20px", borderRadius: 999, background: "#F9F7F3", border: "1px solid rgba(25,25,25,0.1)", color: "#191919", cursor: "pointer", fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 13 }}>
                Go Back
              </button>
            </div>
          )}

        </div>

        {/* Footer */}
        <div style={{ padding: "10px 14px", borderTop: "1px solid rgba(25,25,25,0.08)", background: "#FAFAF8", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "#A8A296", fontFamily: "Outfit, sans-serif" }}>Catalyst Solutions</span>
          <button onClick={() => openForm("General Contact")}
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
