// Simplified India silhouette (public-domain outline via the mapsicon project)
// with Catalyst office locations plotted at their real geographic positions.

import India from "@svg-maps/india";

const CITIES = [
  { name: "Pune", x: 130, y: 455, c: "#0373ff", anchor: "start" },
  { name: "Mumbai", x: 100, y: 450, c: "#FFB800", anchor: "end", hub: true },
  { name: "Hyderabad", x: 260, y: 434, c: "#43934A", anchor: "start" },
  { name: "Bengaluru", x: 247, y: 530, c: "#0373ff", anchor: "end" },
  { name: "Chennai", x: 285, y: 527, c: "#43934A", anchor: "start" },
];

export default function IndiaMap({ style }) {
  return (
    <svg viewBox={India.viewBox} style={style} role="img" aria-label="Map of India showing Catalyst office locations">
      <g>
        {India.locations.map(location => (
          <path key={location.id} d={location.path} fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.3)" strokeWidth="1" />
        ))}
      </g>
      {CITIES.map(city => (
        <g key={city.name}>
          {/* expanding ping ring, same rhythm as the Home presence markers */}
          <circle cx={city.x} cy={city.y} r={city.hub ? 18 : 13} fill="none" stroke={city.c} strokeWidth="3" opacity=".6">
            <animate attributeName="r" values={city.hub ? "18;46" : "13;36"} dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values=".6;0" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx={city.x} cy={city.y} r={city.hub ? 26 : 18} fill={city.c} opacity=".22" />
          <circle cx={city.x} cy={city.y} r={city.hub ? 14 : 10} fill={city.c} />
          <text
            x={city.x + (city.anchor === "start" ? 30 : -30)}
            y={city.y + 9}
            textAnchor={city.anchor}
            fill="rgba(255,255,255,.82)"
            fontSize="34"
            fontFamily="Outfit, sans-serif"
            fontWeight="500"
          >{city.name}</text>
        </g>
      ))}
    </svg>
  );
}
