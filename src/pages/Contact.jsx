import { useState } from "react";
import { MapPin, Mail, Handshake, CheckCircle2, Plus, ArrowRight } from "lucide-react";

export default function Contact({ go }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  const faqs = [
    ["What industries does Catalyst serve?", "Catalyst serves corporate & commercial spaces, manufacturing & industrial, infrastructure & smart cities, education & community living, and healthcare environments across India."],
    ["How does Catalyst's integrated model benefit organizations?", "By combining food services, facilities management, infrastructure, healthcare technology, and workforce solutions under one partner, organizations gain simplicity, consistency, and greater overall value."],
    ["Does Catalyst operate across India?", "Yes. Catalyst supports organizations across multiple locations in India, with a growing national footprint built through trusted partnerships."],
    ["How can I explore a partnership with Catalyst?", "Reach out through this contact form or email us directly. Our team will get in touch to understand your requirements and explore how we can create value together."],
    ["What certifications does Catalyst hold?", "Catalyst holds ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, FSSAI Certified Operations, and aligns with NABH Healthcare Support Practices."],
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div data-screen-label="Contact">
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px clamp(20px,4vw,56px) 60px", overflow: "hidden", backgroundImage: "linear-gradient(rgba(25, 25, 25, 0.19), rgba(25, 25, 25, 0.24)), url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "relative", maxWidth: 1240, width: "100%", margin: "0 auto" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#FF7F00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 22 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Contact</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(36px,5.4vw,76px)", color: "#fff", maxWidth: 1000 }}>Let's <span className="gradtext">Create Impact</span> Together</h1>
          <p data-reveal data-delay="2" className="shown" style={{ marginTop: 26, maxWidth: 760, fontSize: "clamp(16px,1.3vw,19px)", lineHeight: 1.7, color: "rgba(255,255,255,.7)" }}>Ready to transform your environments? Our team is here to explore how Catalyst can create meaningful outcomes for your organization.</p>
        </div>
      </section>

      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)" }} data-2col>
          <div>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>Business Inquiries</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,46px)", color: "#191919" }}>Partner with Catalyst</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Whether you are looking to optimize your facilities, enhance food services, implement healthcare technology, or build your workforce, our team is ready to help.</p>

            <div data-reveal data-delay="3" style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 20 }}>
              {[[MapPin, "Office Locations", "India — National Footprint"], [Mail, "Business Inquiries", "Connect with our solutions team"], [Handshake, "Partnerships", "Building long-term relationships"]].map(([Icon, label, val], i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 16, background: "rgba(255,127,0,0.1)", border: "1px solid rgba(255,127,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF7F00", flexShrink: 0 }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15, color: "#191919" }}>{label}</div>
                    <div style={{ fontSize: 14, color: "#6E6A61", marginTop: 2 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div data-reveal data-delay="4" style={{ marginTop: 40, padding: 28, borderRadius: 28, background: "linear-gradient(135deg,#191919,#242424)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 60% at 80% 20%,rgba(255,127,0,.2),transparent 60%)" }}></div>
              <div style={{ position: "relative" }}>
                <div style={{ fontFamily: "Inter Tight", fontSize: 18, fontWeight: 600, color: "#fff" }}>Wherever you operate,<br />we can help you thrive.</div>
                <div style={{ marginTop: 12, fontSize: 14, color: "rgba(255,255,255,.65)", lineHeight: 1.6 }}>ISO 9001 · ISO 14001 · ISO 45001 · FSSAI · NABH-Aligned</div>
              </div>
            </div>
          </div>

          <div data-reveal data-delay="1">
            {sent ? (
              <div style={{ background: "#F9F7F3", border: "1px solid rgba(25,25,25,.08)", borderRadius: 32, padding: "clamp(30px,4vw,50px)", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16, color: "#43934A" }}>
                  <CheckCircle2 size={56} />
                </div>
                <h3 style={{ fontSize: 24, color: "#191919" }}>Message Sent!</h3>
                <p style={{ fontSize: 16, color: "#6E6A61", marginTop: 12, lineHeight: 1.7 }}>Thank you for reaching out. Our team will get back to you shortly.</p>
                <button className="mag" onClick={() => setSent(false)} style={{ marginTop: 24, background: "#191919", color: "#fff", fontWeight: 600, fontSize: 14, padding: "12px 26px", borderRadius: 999 }}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[["name", "Full Name", "text"], ["company", "Company Name", "text"]].map(([field, placeholder, type]) => (
                    <div key={field}>
                      <input type={type} placeholder={placeholder} value={form[field]} onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))} required style={{ width: "100%", padding: "14px 18px", borderRadius: 16, border: "1px solid rgba(25,25,25,.12)", fontSize: 15, fontFamily: "inherit", outline: "none", boxSizing: "border-box", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = "#FF7F00"} onBlur={e => e.target.style.borderColor = "rgba(25,25,25,.12)"} />
                    </div>
                  ))}
                </div>
                {[["email", "Business Email", "email"], ["phone", "Phone Number", "tel"]].map(([field, placeholder, type]) => (
                  <input key={field} type={type} placeholder={placeholder} value={form[field]} onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))} required={field === "email"} style={{ width: "100%", padding: "14px 18px", borderRadius: 16, border: "1px solid rgba(25,25,25,.12)", fontSize: 15, fontFamily: "inherit", outline: "none", boxSizing: "border-box", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = "#FF7F00"} onBlur={e => e.target.style.borderColor = "rgba(25,25,25,.12)"} />
                ))}
                <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} style={{ width: "100%", padding: "14px 18px", borderRadius: 16, border: "1px solid rgba(25,25,25,.12)", fontSize: 15, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: "#fff", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = "#FF7F00"} onBlur={e => e.target.style.borderColor = "rgba(25,25,25,.12)"}>
                  <option value="">Select a Service Area</option>
                  <option value="food">Food Services</option>
                  <option value="ifm">Integrated Facilities Management</option>
                  <option value="infra">Infrastructure Solutions</option>
                  <option value="htm">Healthcare Technology Management</option>
                  <option value="workforce">Workforce Solutions</option>
                  <option value="general">General Inquiry</option>
                </select>
                <textarea placeholder="Tell us about your requirements..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={5} style={{ width: "100%", padding: "14px 18px", borderRadius: 16, border: "1px solid rgba(25,25,25,.12)", fontSize: 15, fontFamily: "inherit", outline: "none", resize: "vertical", boxSizing: "border-box", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = "#FF7F00"} onBlur={e => e.target.style.borderColor = "rgba(25,25,25,.12)"}></textarea>
                <button type="submit" className="mag" style={{ background: "#FF7F00", color: "#fff", fontWeight: 600, fontSize: 16, padding: "16px 32px", borderRadius: 999, boxShadow: "0 8px 24px rgba(255,127,0,.35)", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#D96D00", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 14, justifyContent: "center" }}><span style={{ width: 26, height: 2, background: "#FF7F00" }}></span>FAQs</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.4vw,44px)", color: "#191919" }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faqq" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ border: "1px solid rgba(25,25,25,.08)", borderRadius: 20, overflow: "hidden", cursor: "pointer" }}>
                <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  <div style={{ fontFamily: "Inter Tight", fontWeight: 600, fontSize: 16, color: "#191919" }}>{faq[0]}</div>
                  <div style={{ color: "#D96D00", flexShrink: 0, transition: "transform .3s", transform: openFaq === i ? "rotate(45deg)" : "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Plus size={20} />
                  </div>
                </div>
                {openFaq === i && <div style={{ padding: "0 24px 20px", fontSize: 15, color: "#6E6A61", lineHeight: 1.7 }}>{faq[1]}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
