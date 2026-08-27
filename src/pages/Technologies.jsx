import React, { useEffect, useRef } from "react";
import CTA from "../components/CTA";
import heroBg from "../assets/techhome.webp";
import partnerImg from "../assets/techfooter.webp";
import { Utensils, Box, ShieldCheck, TrendingUp, Package, Contact, Stethoscope, MessageSquare, FolderKanban, ClipboardCheck } from "lucide-react";

export default function Technologies({ go }) {
  const products = [
    {
      name: "JOI FOOD",
      category: "Food Tech",
      icon: Utensils,
      color: "#F59E0B",
      description: "An all-in-one operating system for modern food service and corporate cafeterias. It unifies pre-meal bookings to eliminate waste, omni-channel QSR operations, and precise KOT & Pantry inventory management.",
      features: [
        "Zero-Waste & Pre-Booking",
        "Omni-Channel QSR Operations",
        "Precision KOT & Pantry Inventory",
        "Real-Time Cafeteria Analytics",
        "Digital Meal Tokens & Kiosks",
        "Automated Stock Replenishment"
      ]
    },
    {
      name: "Tech Platform For Food",
      category: "Food Tech",
      icon: Box,
      color: "#10B981",
      description: "End-to-end visibility and control for food manufacturing, distribution, and catering. Streamlines your entire food supply chain from recipe management to batch tracking and procurement.",
      features: [
        "Recipe Management & Standardization",
        "Batch Traceability & Quality Audit",
        "Procurement Automation",
        "Demand Forecasting",
        "Production Planning & Yield Analytics",
        "Supply Chain Visibility"
      ]
    },
    {
      name: "Facility Management Tech Platform",
      category: "Operations",
      icon: ShieldCheck,
      color: "#3B82F6",
      description: "Paperless facility management offering Geo-tagged and Time-stamped proof of maintenance activities with instant escalation. Ensures 100% compliance.",
      features: [
        "Geo-Fenced Audits & Time-Stamping",
        "Real-Time Photo Proof Verification",
        "Auto-Escalation & SLA Tracking",
        "Paperless Preventive Maintenance",
        "Asset History & Barcode/QR Tagging",
        "100% Compliance & Audit Reports"
      ]
    },
    {
      name: "Assetpro For Healthcare",
      category: "Health Care",
      icon: Stethoscope,
      color: "#F43F5E",
      description: "Comprehensive app designed to manage hospital machines, equipment maintenance, and soft services, ensuring seamless healthcare operations.",
      features: [
        "Biomedical Machine Maintenance",
        "Soft Services & Ward Management",
        "Real-Time Leadership Dashboards",
        "Asset Registration & QR Tagging",
        "Preventive & Corrective SLA Tracking",
        "NABH, JCI & NABL Audit Readiness"
      ]
    },
    {
      name: "Feedback Management",
      category: "Operations",
      icon: MessageSquare,
      color: "#6366F1",
      description: "Customized platform to collect, analyze, and act on customer feedback in real-time across various industries. Turn feedback into business growth.",
      features: [
        "Customizable Multi-Touchpoint Forms",
        "Omni-Channel Collection (QR, Kiosk, Web)",
        "Real-Time Analytics & Sentiment Trends",
        "Automated Issue Escalation & Workflows",
        "CSAT & NPS Benchmarking",
        "Actionable Operational Intelligence"
      ]
    },
    {
      name: "Project Management",
      category: "Projects & Engineering",
      icon: FolderKanban,
      color: "#0284C7",
      description: "Integrated project planning, execution tracking, and milestone management platform for industrial, commercial, and infrastructure builds.",
      features: [
        "End-to-End Milestone Tracking",
        "Real-Time Site Progress Dashboards",
        "Resource & Manpower Allocation",
        "Vendor & Subcontractor Coordination",
        "Budget & BOQ Variance Analytics",
        "Digital Snag List & Handover Reports"
      ]
    },
    {
      name: "HSEQ Audit Tech Platform",
      category: "Safety & Quality",
      icon: ClipboardCheck,
      color: "#8B5CF6",
      description: "Comprehensive Health, Safety, Environment, and Quality (HSEQ) audit platform empowering teams to conduct paperless inspections, log incidents, and track CAPA in real-time.",
      features: [
        "Mobile HSEQ Digital Audits",
        "Instant Incident Reporting & CAPA",
        "Geo-Tagged & Time-Stamped Inspections",
        "ISO 9001, 14001 & 45001 Compliance",
        "Risk Assessment & Hazard Mapping",
        "Automated Audit Analytics & Dashboards"
      ]
    }
  ];

  return (
    <div data-screen-label="Technologies">
      {/* Hero */}
      <section style={{ position: "relative", background: "#191919", padding: "230px clamp(20px,4vw,56px) clamp(130px,10vw,180px)", minHeight: "65vh", overflow: "hidden", backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }}></div>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(55% 60% at 75% 15%,rgba(67,147,74,.22),transparent 60%),radial-gradient(55% 60% at 10% 95%,rgba(3,115,255,.2),transparent 60%)" }}></div>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(circle at 60% 30%,#000,transparent 75%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0373ff", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 22 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Technology Solutions</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(36px,5.4vw,76px)", color: "#fff", maxWidth: 1000, lineHeight: 1.1 }}>Empowering Operations with Digital Innovation</h1>
          <p data-reveal data-delay="2" className="shown" style={{ marginTop: 26, maxWidth: 760, fontSize: "clamp(16px,1.3vw,19px)", lineHeight: 1.7, color: "rgba(255,255,255,.7)" }}>Catalyst brings together cutting-edge technology and deep industry expertise to transform how organizations manage food services, facilities, workforce, and healthcare operations.</p>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff", position: "relative", zIndex: 1, marginTop: -100, borderRadius: "48px 48px 0 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 60 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Our Products</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.8vw,50px)", color: "#191919", lineHeight: 1.2 }}></h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>Our suite of digital products is designed to optimize performance, eliminate waste, ensure compliance, and deliver actionable insights across every touchpoint of your business.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 30 }}>
            {products.map((prod, i) => {
              const Icon = prod.icon;
              return (
                <div key={i} data-reveal data-delay={String(i % 4)} className="lift" style={{ background: "#FDFBF8", border: "1px solid rgba(25,25,25,.07)", borderRadius: 24, padding: "34px", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: `${prod.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: prod.color }}>
                      <Icon size={28} />
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: prod.color, letterSpacing: ".1em", textTransform: "uppercase", background: `${prod.color}10`, padding: "6px 12px", borderRadius: 20 }}>
                      {prod.category}
                    </div>
                  </div>
                  <h3 style={{ fontSize: 24, color: "#1E3B24", fontFamily: "Outfit", fontWeight: 600, marginBottom: 12 }}>{prod.name}</h3>
                  <p style={{ fontSize: 15, color: "#6E6A61", lineHeight: 1.6, flex: 1, marginBottom: 24 }}>
                    {prod.description}
                  </p>

                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: "#191919", marginBottom: 12 }}>Key Features</h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {prod.features.map((feat, fi) => (
                        <div key={fi} style={{ fontSize: 13, color: "#46433C", background: "#fff", border: "1px solid rgba(25,25,25,.09)", padding: "6px 12px", borderRadius: 8, fontWeight: 500, boxShadow: "0 1px 2px rgba(0,0,0,0.02)" }}>
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA go={go} title="Ready to Transform Your Operations?" primaryLabel="Schedule a Demo" primaryPage="contact" secondaryLabel="Contact Us" secondaryPage="contact" image={partnerImg} />
    </div>
  );
}
