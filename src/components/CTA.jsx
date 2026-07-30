import { ArrowRight } from "lucide-react";

export default function CTA({ go, title, subtitle, primaryLabel = "Partner With Us →", primaryPage = "contact", secondaryLabel, secondaryPage, image }) {
  const renderLabel = (label) => {
    if (!label) return null;
    const cleanLabel = label.replace(" →", "").replace("→", "").trim();
    const hasArrow = label.includes("→");
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        {cleanLabel}
        {hasArrow && <ArrowRight size={18} />}
      </span>
    );
  };

  return (
    <section style={{padding:"clamp(20px,4vw,56px)"}}>
      <div data-reveal style={{maxWidth:1300,margin:"0 auto",position:"relative",borderRadius:40,overflow:"hidden",background:"linear-gradient(135deg,#191919,#242424)",padding:"clamp(60px,9vw,120px) clamp(28px,5vw,80px)",textAlign:"center"}}>
        {image && <div style={{position:"absolute",inset:0,backgroundImage:`url(${image})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>}
        <div style={{position:"absolute",inset:0,background:image ? "rgba(10,10,10,.62)" : "radial-gradient(50% 70% at 20% 20%,rgba(255,127,0,.25),transparent 60%),radial-gradient(50% 70% at 80% 80%,rgba(67,147,74,.25),transparent 60%)"}}></div>
        {!image && <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",backgroundSize:"50px 50px",maskImage:"radial-gradient(circle at 50% 50%,#000,transparent 70%)"}}></div>}
        <div style={{position:"relative"}}>
          {subtitle && <div style={{fontFamily:"Inter Tight",fontSize:"clamp(22px,2.6vw,32px)",fontWeight:500,color:"rgba(255,255,255,.85)",marginBottom:10}}>{subtitle}</div>}
          <h2 style={{fontSize:"clamp(34px,5vw,64px)",color:"#fff"}}>{title}</h2>
          <div style={{display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",marginTop:38}}>
            <button className="mag" onClick={() => go(primaryPage)} style={{background:"#FF7F00",color:"#fff",fontWeight:600,fontSize:16,padding:"17px 36px",borderRadius:999,boxShadow:"0 12px 34px rgba(255,127,0,.4)",cursor:"pointer"}}>{renderLabel(primaryLabel)}</button>
            {secondaryLabel && <button className="mag" onClick={() => go(secondaryPage)} style={{background:"rgba(255,255,255,.08)",color:"#fff",fontWeight:600,fontSize:16,padding:"17px 36px",borderRadius:999,border:"1px solid rgba(255,255,255,.2)",cursor:"pointer"}}>{renderLabel(secondaryLabel)}</button>}
          </div>
        </div>
      </div>
    </section>
  );
}
