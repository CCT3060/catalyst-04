import { useState, useEffect } from "react";
import CTA from "../components/CTA";
import { Sprout, Users, Award, Search, Lightbulb, Globe, TrendingUp, ArrowRight, MapPin, Briefcase, Clock, X, CheckCircle2, AlertCircle } from "lucide-react";
import careerBg from "../assets/career.webp";
import caFooterImg from "../assets/cafooter.webp";

// ─── Config ────────────────────────────────────────────────────────────────
const API_BASE = "/admin/api";

// ─── Apply Modal ──────────────────────────────────────────────────────────
function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", cover_letter: "" });
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [state, setState] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useState(null);

  const ALLOWED_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  const ALLOWED_EXTS  = ["pdf", "doc", "docx"];
  const MAX_SIZE_MB   = 5;

  const validateFile = (file) => {
    if (!file) return "";
    const ext = file.name.split(".").pop().toLowerCase();
    if (!ALLOWED_EXTS.includes(ext)) return "Only PDF, DOC, or DOCX files are accepted.";
    if (file.size > MAX_SIZE_MB * 1024 * 1024) return `File must be under ${MAX_SIZE_MB} MB.`;
    return "";
  };

  const handleFileChange = (file) => {
    const err = validateFile(file);
    setResumeError(err);
    setResumeFile(err ? null : file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (resumeError) return;
    setState("loading");
    setErrorMsg("");

    // Use FormData so the resume file is sent as multipart
    const fd = new FormData();
    fd.append("job_id",       job.id);
    fd.append("job_title",    job.title);
    fd.append("name",         form.name);
    fd.append("email",        form.email);
    fd.append("phone",        form.phone);
    fd.append("cover_letter", form.cover_letter);
    if (resumeFile) fd.append("resume", resumeFile);

    try {
      const res = await fetch(`${API_BASE}/apply.php`, {
        method: "POST",
        body: fd,   // no Content-Type header — browser sets multipart boundary automatically
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setState("success");
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMsg("Unable to connect to server. Please try again later.");
      setState("error");
    }
  };

  const inputStyle = {
    width: "100%", padding: "13px 16px", borderRadius: 14,
    border: "1px solid rgba(25,25,25,.12)", fontSize: 15,
    fontFamily: "inherit", outline: "none", boxSizing: "border-box",
    transition: "border-color .2s",
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,.65)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <div style={{
        background: "#fff", borderRadius: 28, width: "100%", maxWidth: 540,
        maxHeight: "90vh", overflowY: "auto", boxShadow: "0 32px 80px rgba(0,0,0,.35)",
      }}>
        {/* Header */}
        <div style={{ padding: "24px 28px 20px", borderBottom: "1px solid rgba(25,25,25,.08)", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: 20, color: "#191919" }}>Apply Now</div>
            <div style={{ fontSize: 14, color: "#6E6A61", marginTop: 4 }}>{job.title} &bull; {job.location}</div>
          </div>
          <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: "50%", background: "#F9F7F3", border: "1px solid rgba(25,25,25,.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <X size={16} color="#191919" />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px" }}>
          {state === "success" ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <CheckCircle2 size={52} color="#43934A" style={{ margin: "0 auto 16px" }} />
              <div style={{ fontFamily: "Outfit", fontSize: 22, fontWeight: 700, color: "#191919" }}>Application Sent!</div>
              <p style={{ fontSize: 15, color: "#6E6A61", marginTop: 10, lineHeight: 1.65 }}>
                Thank you for applying. Our team will review your application and get in touch.
              </p>
              <button onClick={onClose} className="mag" style={{ marginTop: 24, background: "#0373ff", color: "#fff", fontWeight: 600, fontSize: 15, padding: "13px 30px", borderRadius: 999 }}>
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {state === "error" && (
                <div style={{ background: "rgba(239,68,68,.08)", border: "1px solid rgba(239,68,68,.2)", borderRadius: 12, padding: "11px 14px", display: "flex", gap: 10, alignItems: "flex-start", color: "#ef4444", fontSize: 14 }}>
                  <AlertCircle size={16} style={{ flexShrink: 0, marginTop: 1 }} />
                  {errorMsg}
                </div>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <input
                  type="text" placeholder="Full Name *" value={form.name} required
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#0373ff")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(25,25,25,.12)")}
                />
                <input
                  type="tel" placeholder="Phone Number" value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#0373ff")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(25,25,25,.12)")}
                />
              </div>
              <input
                type="email" placeholder="Email Address *" value={form.email} required
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#0373ff")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(25,25,25,.12)")}
              />
              <textarea
                placeholder="Cover Letter / Why you'd like to join Catalyst…"
                value={form.cover_letter} rows={4}
                onChange={(e) => setForm((f) => ({ ...f, cover_letter: e.target.value }))}
                style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
                onFocus={(e) => (e.target.style.borderColor = "#0373ff")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(25,25,25,.12)")}
              />

              {/* ── Resume Upload ── */}
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#191919", letterSpacing: ".4px", textTransform: "uppercase", marginBottom: 8 }}>
                  Resume / CV <span style={{ fontWeight: 400, color: "#6E6A61", textTransform: "none", letterSpacing: 0 }}>(PDF, DOC, DOCX — max 5 MB)</span>
                </div>

                {resumeFile ? (
                  /* File selected — show preview card */
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "rgba(3,115,255,.05)", border: "1.5px solid rgba(3,115,255,.25)", borderRadius: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(3,115,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0373ff" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#191919", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{resumeFile.name}</div>
                      <div style={{ fontSize: 12, color: "#6E6A61", marginTop: 2 }}>{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => { setResumeFile(null); setResumeError(""); }}
                      style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(239,68,68,.1)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
                    >
                      <X size={14} color="#ef4444" />
                    </button>
                  </div>
                ) : (
                  /* Drop zone */
                  <label
                    style={{
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      gap: 8, padding: "22px 16px", borderRadius: 14, cursor: "pointer",
                      border: `2px dashed ${dragOver ? "#0373ff" : resumeError ? "#ef4444" : "rgba(25,25,25,.15)"}`,
                      background: dragOver ? "rgba(3,115,255,.04)" : "#FAFAFA",
                      transition: "all .2s",
                    }}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFileChange(f); }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(3,115,255,.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0373ff" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#191919" }}>
                        Drop your resume here, or <span style={{ color: "#0373ff" }}>browse</span>
                      </div>
                      <div style={{ fontSize: 12, color: "#6E6A61", marginTop: 3 }}>PDF, DOC, DOCX up to 5 MB</div>
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      style={{ display: "none" }}
                      onChange={(e) => { const f = e.target.files[0]; if (f) handleFileChange(f); }}
                    />
                  </label>
                )}

                {resumeError && (
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6, fontSize: 12, color: "#ef4444" }}>
                    <AlertCircle size={13} /> {resumeError}
                  </div>
                )}
              </div>

              <button
                type="submit" className="mag"
                disabled={state === "loading" || !!resumeError}
                style={{ background: "#0373ff", color: "#fff", fontWeight: 700, fontSize: 15, padding: "15px 28px", borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, opacity: (state === "loading" || resumeError) ? .6 : 1 }}
              >
                {state === "loading" ? "Submitting…" : <>Submit Application <ArrowRight size={17} /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Job Card ──────────────────────────────────────────────────────────────
function JobCard({ job, onApply }) {
  const typeColors = {
    "Full-Time": { bg: "rgba(3,115,255,.1)", color: "#0373ff" },
    "Part-Time": { bg: "rgba(245,158,11,.1)", color: "#d97706" },
    "Contract":  { bg: "rgba(168,85,247,.1)", color: "#7c3aed" },
    "Internship":{ bg: "rgba(34,197,94,.1)", color: "#16a34a" },
  };
  const tc = typeColors[job.type] || typeColors["Full-Time"];

  return (
    <div className="lift" style={{ background: "#fff", border: "1px solid rgba(25,25,25,.08)", borderRadius: 24, padding: "28px 30px", display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Title & type */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <h3 style={{ fontSize: 20, color: "#191919", fontFamily: "Outfit", fontWeight: 600, lineHeight: 1.3 }}>{job.title}</h3>
        <span style={{ background: tc.bg, color: tc.color, fontWeight: 600, fontSize: 12, padding: "4px 12px", borderRadius: 999, flexShrink: 0, whiteSpace: "nowrap" }}>{job.type}</span>
      </div>

      {/* Meta */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
        {job.department && (
          <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#6E6A61" }}>
            <Briefcase size={14} color="#0373ff" /> {job.department}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#6E6A61" }}>
          <MapPin size={14} color="#0373ff" /> {job.location}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#6E6A61" }}>
          <Clock size={14} color="#0373ff" /> {new Date(job.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 14, color: "#6E6A61", lineHeight: 1.65, flex: 1 }}>
        {job.description.length > 200 ? job.description.slice(0, 200) + "…" : job.description}
      </p>

      {/* Requirements */}
      {job.requirements && (
        <div style={{ background: "#F9F7F3", borderRadius: 12, padding: "12px 14px", fontSize: 13, color: "#46433C", lineHeight: 1.6 }}>
          <div style={{ fontWeight: 600, fontSize: 12, color: "#191919", marginBottom: 4, textTransform: "uppercase", letterSpacing: ".5px" }}>Requirements</div>
          {job.requirements.length > 160 ? job.requirements.slice(0, 160) + "…" : job.requirements}
        </div>
      )}

      {/* Apply button */}
      <button
        className="mag"
        onClick={() => onApply(job)}
        style={{ marginTop: 4, background: "#0373ff", color: "#fff", fontWeight: 600, fontSize: 14, padding: "13px 22px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 7, alignSelf: "flex-start" }}
      >
        Apply Now <ArrowRight size={16} />
      </button>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function Careers({ go }) {
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [jobsError, setJobsError] = useState(false);
  const [applyingJob, setApplyingJob] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/jobs.php`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setJobs(data.jobs);
        else setJobsError(true);
      })
      .catch(() => setJobsError(true))
      .finally(() => setLoadingJobs(false));
  }, []);

  return (
    <div data-screen-label="Careers">
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px clamp(20px,4vw,56px) 60px", overflow: "hidden", backgroundImage: `linear-gradient(rgba(25, 25, 25, 0.45), rgba(25, 25, 25, 0.45)), url(${careerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "relative", maxWidth: 1240, width: "100%", margin: "0 auto" }}>
          <div data-reveal className="shown" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0373ff", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 22 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Careers</div>
          <h1 data-reveal data-delay="1" className="shown" style={{ fontSize: "clamp(36px,5.4vw,76px)", color: "#fff", maxWidth: 1000 }}>Life at <span className="gradtext">Catalyst</span></h1>
          <p data-reveal data-delay="2" className="shown" style={{ marginTop: 26, maxWidth: 800, fontSize: "clamp(16px,1.3vw,19px)", lineHeight: 1.7, color: "rgba(255,255,255,.7)" }}>Catalyst is more than a workplace—it's a community of thinkers, creators, and problem-solvers united by a shared purpose: enhancing everyday well-being.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 60 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Who We Are</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.8vw,50px)", color: "#191919" }}>A community united by purpose</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#46433C" }}>Catalyst is more than a workplace—it's a community of thinkers, creators, and problem-solvers united by a shared purpose: enhancing everyday well-being. We empower our people to challenge conventions, embrace new ideas, and grow through meaningful opportunities.</p>
            <p data-reveal data-delay="3" style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>By fostering a culture of trust, innovation, and belonging, we create an environment where talent flourishes, careers evolve, and every contribution helps build a lasting impact.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} data-3col>
            {[[Sprout, "Grow with Purpose", "Shape your career while making a meaningful difference in communities and organizations.", ""], [Users, "Collaborate & Innovate", "Work alongside passionate colleagues who bring diverse expertise and perspectives.", "1"], [Award, "Be Recognized", "Contribute meaningfully and be valued for the impact you create.", "2"]].map(([Icon, name, desc, delay], i) => (
              <div key={i} data-reveal data-delay={delay || undefined} className="lift" style={{ background: "#F9F7F3", border: "1px solid rgba(25,25,25,.07)", borderRadius: 30, padding: 34 }}>
                <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(3,115,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0373ff" }}><Icon size={24} /></div>
                <h3 style={{ fontSize: 22, color: "#191919", marginTop: 18 }}>{name}</h3>
                <p style={{ fontSize: "14.5px", color: "#6E6A61", lineHeight: 1.65, marginTop: 10 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#F9F7F3" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 50 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0258cc", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18 }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Open Positions</div>
            <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(30px,3.8vw,50px)", color: "#191919" }}>Find Your Place at Catalyst</h2>
            <p data-reveal data-delay="2" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "#6E6A61" }}>We are looking for talented, motivated individuals who want to make a difference. Explore opportunities across our integrated solutions divisions.</p>
          </div>

          {/* Loading state */}
          {loadingJobs && (
            <div style={{ display: "flex", justifyContent: "center", padding: "60px 0" }}>
              <div style={{ width: 40, height: 40, border: "3px solid rgba(3,115,255,.15)", borderTopColor: "#0373ff", borderRadius: "50%", animation: "spin .8s linear infinite" }} />
            </div>
          )}

          {/* Error state */}
          {!loadingJobs && jobsError && (
            <div data-reveal style={{ background: "#fff", border: "1px solid rgba(25,25,25,.08)", borderRadius: 32, padding: "clamp(30px,4vw,50px)", textAlign: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: 20, background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444", margin: "0 auto 20px" }}><Search size={32} /></div>
              <h3 style={{ fontSize: 22, color: "#191919" }}>Couldn't load job openings</h3>
              <p style={{ fontSize: 15, color: "#6E6A61", marginTop: 10, lineHeight: 1.65, maxWidth: 400, margin: "10px auto 0" }}>Make sure the PHP server is running. In the meantime, send us your profile directly.</p>
              <button className="mag" onClick={() => setApplyingJob({ id: null, title: 'General Application', location: 'India' })} style={{ marginTop: 24, background: "#0373ff", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8 }}>Express Your Interest <ArrowRight size={17} /></button>
            </div>
          )}

          {/* No jobs */}
          {!loadingJobs && !jobsError && jobs.length === 0 && (
            <div data-reveal style={{ background: "#fff", border: "1px solid rgba(25,25,25,.08)", borderRadius: 32, padding: "clamp(30px,4vw,50px)", textAlign: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: 20, background: "rgba(3,115,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0373ff", margin: "0 auto 20px" }}><Search size={32} /></div>
              <h3 style={{ fontSize: 24, color: "#191919" }}>Open Positions Coming Soon</h3>
              <p style={{ fontSize: 16, color: "#6E6A61", marginTop: 12, maxWidth: 480, margin: "12px auto 0", lineHeight: 1.7 }}>We are always looking for exceptional talent. Send us your profile and we will reach out when opportunities that match your skills become available.</p>
              <button className="mag" onClick={() => setApplyingJob({ id: null, title: 'General Application', location: 'India' })} style={{ marginTop: 30, background: "#0373ff", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8 }}>Express Your Interest <ArrowRight size={18} /></button>
            </div>
          )}

          {/* Job cards */}
          {!loadingJobs && !jobsError && jobs.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(360px,1fr))", gap: 24 }}>
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} onApply={setApplyingJob} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Culture */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,4vw,56px)", background: "#191919", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(50% 60% at 80% 20%,rgba(3,115,255,.16),transparent 60%),radial-gradient(50% 60% at 15% 90%,rgba(67,147,74,.14),transparent 60%)" }}></div>
        <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Caveat, cursive", color: "#0373ff", fontWeight: 600, fontSize: 24, letterSpacing: "0", marginBottom: 18, justifyContent: "center" }}><span style={{ width: 26, height: 2, background: "#0373ff" }}></span>Our Culture</div>
          <h2 data-reveal data-delay="1" style={{ fontSize: "clamp(28px,3.8vw,50px)", color: "#fff" }}>Where People Come First</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 50, textAlign: "left" }} data-3col>
            {[[Lightbulb, "Innovation", "We embrace new ideas, challenge conventions, and continuously seek better ways to serve our clients and communities.", ""], [Globe, "Diversity", "Our strength comes from diverse perspectives and backgrounds that drive richer solutions and stronger outcomes.", "1"], [TrendingUp, "Growth", "We invest in developing our people, providing pathways for continuous learning, advancement, and meaningful impact.", "2"]].map(([Icon, name, desc, delay], i) => (
              <div key={i} data-reveal data-delay={delay || undefined} className="lift" style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 24, padding: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(3,115,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0373ff", marginBottom: 14 }}><Icon size={22} /></div>
                <h4 style={{ fontSize: 18, color: "#fff", marginTop: 8 }}>{name}</h4>
                <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,.6)", lineHeight: 1.6, marginTop: 8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA go={go} title="Ready to Make an Impact?" primaryLabel="Explore Opportunities" onPrimaryClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })} secondaryLabel="Learn About Us" secondaryPage="about" image={caFooterImg} />

      {/* Apply modal */}
      {applyingJob && <ApplyModal job={applyingJob} onClose={() => setApplyingJob(null)} />}
    </div>
  );
}
