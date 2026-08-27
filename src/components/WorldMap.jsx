import React, { useState } from "react";
import mapImage from "../assets/woldmap.webp";

const REGIONS = [
  { name: "India", category: "South Asia", desc: "Headquarters & primary operations center" },
  { name: "Middle East", category: "UAE, Saudi Arabia, Qatar, Oman", desc: "Catering, FM & marine support" },
  { name: "Africa", category: "Egypt, Nigeria, Ghana, Angola", desc: "Infrastructure & operational services" },
  { name: "Southeast Asia", category: "Singapore, Malaysia, Thailand, Indonesia, Myanmar, Taiwan", desc: "Regional hubs & corporate solutions" },
  { name: "Europe", category: "Malta", desc: "Marine crew & vessel services branch" }
];

export default function WorldMap({ style }) {
  const [activeRegion, setActiveRegion] = useState(null);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", ...style }}>
      <div style={{ position: "relative", flex: 1, borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", background: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img loading="lazy" 
          src={mapImage} 
          alt="Catalyst Global Presence World Map" 
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} 
        />
      </div>

      <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: "8px 14px", alignItems: "center", justifyContent: "center" }}>
        {REGIONS.map((r, i) => (
          <span 
            key={i} 
            onMouseEnter={() => setActiveRegion(r)}
            onMouseLeave={() => setActiveRegion(null)}
            style={{ 
              fontSize: 12, 
              fontFamily: "Outfit, sans-serif", 
              fontWeight: 500, 
              padding: "4px 10px", 
              borderRadius: 999, 
              background: activeRegion?.name === r.name ? "rgba(3,115,255,0.25)" : "rgba(255,255,255,0.08)", 
              border: `1px solid ${activeRegion?.name === r.name ? "#0373ff" : "rgba(255,255,255,0.14)"}`, 
              color: "#fff", 
              cursor: "pointer", 
              transition: "all 0.2s" 
            }}
          >
            {r.name}
          </span>
        ))}
      </div>
    </div>
  );
}
