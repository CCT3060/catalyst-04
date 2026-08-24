import React from "react";
import { MessageSquare } from "lucide-react";
import whatsappImg from "../assets/whatsapp.png";

export default function FloatingActions({ go }) {
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("Hello Catalyst Team, I would like to inquire about your solutions.");

  return (
    <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999, display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-end" }}>
      {/* Messages / Quick Contact Button */}
      <button
        onClick={() => (go ? go("contact") : (window.location.hash = "#contact"))}
        aria-label="Send a message"
        title="Contact Us"
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "#0373ff",
          color: "#fff",
          border: "none",
          boxShadow: "0 8px 24px rgba(3,115,255,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "transform 0.25s ease, boxShadow 0.25s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <MessageSquare size={24} />
      </button>

      {/* WhatsApp Button using whatsapp.png */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        style={{
          width: 58,
          height: 58,
          borderRadius: "50%",
          boxShadow: "0 8px 26px rgba(37,211,102,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "transform 0.25s ease, boxShadow 0.25s ease",
          position: "relative",
          overflow: "hidden"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img 
          src={whatsappImg} 
          alt="WhatsApp" 
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
        />
      </a>
    </div>
  );
}
