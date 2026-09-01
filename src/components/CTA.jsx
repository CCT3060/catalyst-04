import { ArrowRight } from "lucide-react";

export default function CTA({ go, title, subtitle, primaryLabel = "Partner With Us →", primaryPage = "contact", onPrimaryClick, secondaryLabel, secondaryPage, image }) {
  const clean = label => (label ? label.replace(/→/g, "").trim() : null);
  const support = subtitle && subtitle.trim()
    ? subtitle
    : "One conversation is all it takes — tell us where you are and where you want to go, and we'll bring the right expertise together.";

  return (
    <section style={{ padding: "clamp(20px,4vw,56px)" }}>
      <div data-reveal style={{ maxWidth: 1300, margin: "0 auto", position: "relative", borderRadius: 40, overflow: "hidden", background: "#141414", padding: "clamp(56px,8vw,110px) clamp(28px,5.5vw,90px)" }}>
        {image && <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>}
        <div style={{ position: "absolute", inset: 0, background: image
          ? "linear-gradient(97deg, rgba(8,8,8,.93) 30%, rgba(8,8,8,.62) 62%, rgba(8,8,8,.32) 100%)"
          : "radial-gradient(46% 62% at 92% 4%, rgba(3,115,255,.2), transparent 70%), radial-gradient(42% 58% at 2% 96%, rgba(67,147,74,.16), transparent 70%)" }}></div>
        <div style={{ position: "relative", maxWidth: 660 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#8FBCFF", fontWeight: 600, fontSize: 24, marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Ready when you are</div>
          <h2 style={{ fontSize: "clamp(32px,4.4vw,58px)", color: "#fff", lineHeight: 1.06 }}>{title}</h2>
          <p style={{ marginTop: 20, fontSize: "clamp(15px,1.3vw,17px)", lineHeight: 1.7, color: "rgba(255,255,255,.68)", maxWidth: 560 }}>{support}</p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 28px", marginTop: 36 }}>
            <button className="cta-btn" onClick={() => onPrimaryClick ? onPrimaryClick() : go(primaryPage)}>
              {clean(primaryLabel)}
              <span className="cta-chip"><ArrowRight size={19} /></span>
            </button>
            {secondaryLabel && (
              <button className="cta-ghost" onClick={() => go(secondaryPage)}>
                {clean(secondaryLabel)}
                <ArrowRight size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
