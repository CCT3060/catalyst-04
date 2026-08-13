import { ArrowUpRight, ArrowRight } from "lucide-react";

/* Shared building blocks for the five solution pages.
   Everything follows the site tokens: ink #191919, cream #F9F7F3,
   orange #0373ff / #0258cc, green #43934A / #377B3D, Caveat kickers. */

export function Kicker({ children, color = "#0258cc", dash = "#0373ff", style }) {
  return (
    <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color, fontWeight: 600, fontSize: 24, marginBottom: 18, ...style }}>
      <span style={{ width: 26, height: 2, background: dash }}></span>{children}
    </div>
  );
}

export function SectionHead({ kicker, kickerColor, dashColor, title, sub, center, dark, maxWidth = 760, style }) {
  return (
    <div style={{ maxWidth, marginBottom: 48, ...(center ? { marginInline: "auto", textAlign: "center" } : {}), ...style }}>
      {kicker && <Kicker color={kickerColor || (dark ? "#0373ff" : "#0258cc")} dash={dashColor || "#0373ff"}>{kicker}</Kicker>}
      <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: dark ? "#fff" : "#191919" }}>{title}</h2>
      {sub && <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: dark ? "rgba(255,255,255,.7)" : "#6E6A61" }}>{sub}</p>}
    </div>
  );
}

/* Light editorial hero shared by the service pages — cream canvas,
   arch-cropped imagery, handwritten note, proof chips */
export function ServiceHero({ go, kicker, kickerColor = "#0258cc", dash = "#0373ff", glow = "rgba(3,115,255,.08)", title, sub, ctaLabel = "Talk to our team", ctaPage = "contact", img, imgAlt = "", note, noteColor = "#0258cc", chips = [] }) {
  return (
    <section style={{ position: "relative", background: "#F9F7F3", padding: "clamp(140px,16vh,180px) clamp(20px,4vw,56px) clamp(50px,6vw,80px)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(50% 60% at 96% 10%, ${glow}, transparent 70%)` }}></div>
      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }} data-2col>
        <div>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: kickerColor, fontWeight: 600, fontSize: 24, marginBottom: 20 }}><span style={{ width: 26, height: 2, background: dash }}></span>{kicker}</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(36px,4.8vw,68px)", color: "#191919", lineHeight: 1.05 }}>{title}</h1>
          <p data-reveal data-delay="2" className="shown" style={{ marginTop: 24, fontSize: "clamp(16px,1.35vw,19px)", lineHeight: 1.7, color: "#46433C", maxWidth: 540 }}>{sub}</p>
          <div data-reveal data-delay="3" className="shown" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 26px", marginTop: 32 }}>
            <button className="mag" onClick={() => go(ctaPage)} style={{ background: "#191919", color: "#fff", fontWeight: 600, fontSize: 15.5, padding: "16px 32px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 9 }}>{ctaLabel} <ArrowRight size={17} /></button>
          </div>
          {chips.length > 0 && (
            <div data-reveal data-delay="4" className="shown" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 34 }}>
              {chips.map(([Icon, label], i) => (
                <span key={i} className={`fs-chip${dash === "#43934A" ? "" : " blue"}`}><Icon size={15} /> {label}</span>
              ))}
            </div>
          )}
        </div>
        <div data-reveal data-delay="2" className="shown" style={{ position: "relative" }}>
          <div className="fs-arch" style={{ height: "clamp(380px,52vh,540px)", boxShadow: "0 30px 80px rgba(25,25,25,.16)" }}>
            <img src={img} alt={imgAlt} data-no-reveal style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          {note && <div style={{ position: "absolute", right: "clamp(0px,2vw,18px)", bottom: -14, fontFamily: "Caveat, cursive", fontWeight: 600, fontSize: 23, color: noteColor, transform: "rotate(-3deg)" }}>{note}</div>}
        </div>
      </div>
    </section>
  );
}

/* Editorial numbered service index — replaces icon-card grids */
export function NumberedIndex({ items }) {
  return (
    <div>
      {items.map(([title, desc], i) => (
        <div key={i} data-reveal data-delay={String(Math.min(i % 4, 3))} className="svc-row">
          <div className="svc-num">{String(i + 1).padStart(2, "0")}</div>
          <h4 style={{ fontSize: "clamp(18px,1.8vw,23px)", fontWeight: 600, color: "#191919", lineHeight: 1.25 }}>{title}</h4>
          <p style={{ fontSize: 15.5, color: "#6E6A61", lineHeight: 1.65 }}>{desc}</p>
          <span className="svc-arrow"><ArrowUpRight size={18} /></span>
        </div>
      ))}
    </div>
  );
}

/* Kinetic industries band — replaces static chip clouds */
export function IndustriesMarquee({ kicker = "Industries We Serve", title, sub, industries }) {
  const half = Math.ceil(industries.length / 2);
  const rows = industries.length > 6 ? [industries.slice(0, half), industries.slice(half)] : [industries];
  return (
    <section style={{ padding: "clamp(80px,10vw,140px) 0", background: "#191919", color: "#fff", overflow: "hidden" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,56px)", textAlign: "center" }}>
        <Kicker color="#0373ff">{kicker}</Kicker>
        <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)" }}>{title}</h2>
        {sub && <p data-reveal data-delay="2" style={{ maxWidth: 720, margin: "22px auto 0", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.7)" }}>{sub}</p>}
      </div>
      {rows.map((row, r) => (
        <div key={r} className="cert-marquee" style={{ marginTop: r === 0 ? 56 : 30 }}>
          <div className={`cert-track${r % 2 ? " rev" : ""}`}>
            {[...row, ...row].map((name, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 28, paddingRight: 28, whiteSpace: "nowrap" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: "clamp(22px,2.6vw,34px)", letterSpacing: "-.02em", color: r % 2 ? "rgba(255,255,255,.35)" : "rgba(255,255,255,.9)" }}>{name}</span>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0373ff", flexShrink: 0 }}></span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

/* Device frame for real product screenshots — phone */
export function PhoneFrame({ src, alt = "", width = "clamp(210px,22vw,260px)", style }) {
  return (
    <div style={{ width, aspectRatio: "9/19", borderRadius: 44, background: "#111", border: "9px solid #191919", boxShadow: "0 30px 70px rgba(0,0,0,.28)", position: "relative", overflow: "hidden", flexShrink: 0, ...style }}>
      <div style={{ position: "absolute", top: 7, left: "50%", transform: "translateX(-50%)", width: 78, height: 20, background: "#191919", borderRadius: 11, zIndex: 10 }}></div>
      <img src={src} alt={alt} data-no-reveal style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
    </div>
  );
}

/* Device frame for real product screenshots — browser window */
export function BrowserFrame({ src, alt = "", url = "portal.catalystsolutions.eco", style }) {
  return (
    <div style={{ borderRadius: 18, overflow: "hidden", background: "#fff", border: "1px solid rgba(25,25,25,.1)", boxShadow: "0 30px 70px rgba(0,0,0,.18)", ...style }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "#F1EEE8", borderBottom: "1px solid rgba(25,25,25,.07)" }}>
        {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
          <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, flexShrink: 0 }}></span>
        ))}
        <div style={{ flex: 1, maxWidth: 380, margin: "0 auto", background: "#fff", borderRadius: 8, fontSize: 11.5, color: "#8A857B", textAlign: "center", padding: "4px 12px", border: "1px solid rgba(25,25,25,.06)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{url}</div>
        <span style={{ width: 30 }}></span>
      </div>
      <img src={src} alt={alt} data-no-reveal style={{ width: "100%", display: "block" }} />
    </div>
  );
}

/* Cutout photography standing on a brand arch */
export function CutoutArch({ src, alt = "", tint = "rgba(3,115,255,.1)", height = "clamp(360px,40vw,500px)", style }) {
  return (
    <div style={{ position: "relative", height, display: "flex", alignItems: "flex-end", justifyContent: "center", ...style }}>
      <div style={{ position: "absolute", left: "50%", bottom: 0, transform: "translateX(-50%)", width: "92%", height: "74%", background: tint, borderRadius: "999px 999px 32px 32px" }}></div>
      <img src={src} alt={alt} data-no-reveal style={{ position: "relative", width: "100%", maxHeight: "100%", objectFit: "contain", objectPosition: "bottom" }} />
    </div>
  );
}

/* Compact proof/stat strip */
export function StatStrip({ stats, dark }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit,minmax(200px,1fr))`, gap: 1, background: dark ? "rgba(255,255,255,.12)" : "rgba(25,25,25,.1)", border: `1px solid ${dark ? "rgba(255,255,255,.12)" : "rgba(25,25,25,.1)"}`, borderRadius: 24, overflow: "hidden" }}>
      {stats.map(([value, label, note], i) => (
        <div key={i} data-reveal data-delay={String(Math.min(i, 4))} style={{ background: dark ? "#191919" : "#fff", padding: "clamp(24px,3vw,38px) clamp(20px,2.4vw,32px)" }}>
          <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "clamp(30px,3.2vw,44px)", letterSpacing: "-.02em", lineHeight: 1, color: dark ? "#0373ff" : "#191919" }}>{value}</div>
          <div style={{ fontSize: 15.5, fontWeight: 600, marginTop: 12, color: dark ? "#fff" : "#191919" }}>{label}</div>
          {note && <p style={{ fontSize: 13.5, lineHeight: 1.55, marginTop: 6, color: dark ? "rgba(255,255,255,.6)" : "#6E6A61" }}>{note}</p>}
        </div>
      ))}
    </div>
  );
}
