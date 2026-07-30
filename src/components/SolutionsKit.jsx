import { ArrowUpRight } from "lucide-react";

/* Shared building blocks for the five solution pages.
   Everything follows the site tokens: ink #191919, cream #F9F7F3,
   orange #FF7F00 / #D96D00, green #43934A / #377B3D, Caveat kickers. */

export function Kicker({ children, color = "#D96D00", dash = "#FF7F00", style }) {
  return (
    <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color, fontWeight: 600, fontSize: 24, marginBottom: 18, ...style }}>
      <span style={{ width: 26, height: 2, background: dash }}></span>{children}
    </div>
  );
}

export function SectionHead({ kicker, kickerColor, dashColor, title, sub, center, dark, maxWidth = 760, style }) {
  return (
    <div style={{ maxWidth, marginBottom: 48, ...(center ? { marginInline: "auto", textAlign: "center" } : {}), ...style }}>
      {kicker && <Kicker color={kickerColor || (dark ? "#FF7F00" : "#D96D00")} dash={dashColor || "#FF7F00"}>{kicker}</Kicker>}
      <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: dark ? "#fff" : "#191919" }}>{title}</h2>
      {sub && <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: dark ? "rgba(255,255,255,.7)" : "#6E6A61" }}>{sub}</p>}
    </div>
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
        <Kicker color="#FF7F00">{kicker}</Kicker>
        <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)" }}>{title}</h2>
        {sub && <p data-reveal data-delay="2" style={{ maxWidth: 720, margin: "22px auto 0", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.7)" }}>{sub}</p>}
      </div>
      {rows.map((row, r) => (
        <div key={r} className="cert-marquee" style={{ marginTop: r === 0 ? 56 : 30 }}>
          <div className={`cert-track${r % 2 ? " rev" : ""}`}>
            {[...row, ...row].map((name, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 28, paddingRight: 28, whiteSpace: "nowrap" }}>
                <span style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: "clamp(22px,2.6vw,34px)", letterSpacing: "-.02em", color: r % 2 ? "rgba(255,255,255,.35)" : "rgba(255,255,255,.9)" }}>{name}</span>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF7F00", flexShrink: 0 }}></span>
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
export function CutoutArch({ src, alt = "", tint = "rgba(255,127,0,.1)", height = "clamp(360px,40vw,500px)", style }) {
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
          <div style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 700, fontSize: "clamp(30px,3.2vw,44px)", letterSpacing: "-.02em", lineHeight: 1, color: dark ? "#FF7F00" : "#191919" }}>{value}</div>
          <div style={{ fontSize: 15.5, fontWeight: 600, marginTop: 12, color: dark ? "#fff" : "#191919" }}>{label}</div>
          {note && <p style={{ fontSize: 13.5, lineHeight: 1.55, marginTop: 6, color: dark ? "rgba(255,255,255,.6)" : "#6E6A61" }}>{note}</p>}
        </div>
      ))}
    </div>
  );
}
