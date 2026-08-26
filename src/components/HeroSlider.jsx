import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "./HeroSlider.css";
import heroheath from "../assets/herohealth.png";

const AUTO_MS = 7000;

import hero1Img from "../assets/catalysthome1.png";
import hero4Img from "../assets/homeworkspace.png";

// Full-bleed cinematic hero. Each slide is one service line: a photographic
// environment (remote imagery), the slide's brand accent, and the client copy.
const SLIDES = [
  {
    id: "overview",
    kicker: "Catalyst",
    accent: "#0373ff",
    page: "food",
    lines: [
      [{ t: "People at the Heart of" }],
      [{ t: "Everything We " }, { t: "Do", a: true }],
    ],
    para: "We partner organizations build healthier workplaces, safer communities, smarter infrastructure, and exceptional everyday experiences through integrated solutions that enhance well-being and drive performance.",
    img: hero1Img,
    alt: "People at the heart of everything we do",
  },
  {
    id: "facilities",
    kicker: "Facility Management",
    accent: "#7CC584",
    page: "ifm",
    lines: [
      [{ t: "Spaces that" }],
      [{ t: "perform", a: true }],
    ],
    para: "We deliver integrated facility management solutions that create safe, efficient and sustainable environments, enhancing occupant experience while maximizing operational performance.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80",
    alt: "Modern glass office towers seen from below",
  },
  {
    id: "infra",
    kicker: "Infrastructure Solutions",
    accent: "#F5913D",
    page: "infra",
    lines: [
      [{ t: "Infrastructure that" }],
      [{ t: "stands " }, { t: "resilient", a: true }],
    ],
    para: "We design, build and maintain resilient infrastructure that supports business continuity, enables growth and delivers long-term value through future-ready solutions.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80",
    alt: "Construction site with steel framework rising",
  },
  {
    id: "food",
    kicker: "Food Services",
    accent: "#FF8F2A",
    page: "food",
    lines: [
      [{ t: "Food experiences" }],
      [{ t: "that " }, { t: "elevate", a: true }],
    ],
    para: "Food has the power to shape experiences far beyond the dining table. We design dining environments that combine nutrition, hospitality, and innovation — from workplaces to healthcare institutions and educational campuses.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80",
    alt: "Elegant restaurant dining room prepared for evening service",
  },

  {
    id: "people",
    kicker: "Workforce Solutions",
    accent: "#FFC14A",
    page: "workforce",
    lines: [
      [{ t: "People who make" }],
      [{ t: "the " }, { t: "difference", a: true }],
    ],
    para: "We provide skilled workforce solutions that empower organizations with the right talent to deliver exceptional service, operational excellence and sustainable growth.",
    img: hero4Img,
    alt: "Team of professionals collaborating around a table",
  },

  {
    id: "healthcare",
    kicker: "Healthcare Technology",
    accent: "#7CC584",
    page: "htm",
    lines: [
      [{ t: "One ecosystem" }],
      [{ t: "Uninterrupted " }, { t: "care", a: true }],
    ],
    para: "We manage the complete lifecycle of biomedical equipment across every department through a single point of accountability, maximizing equipment uptime and enabling uninterrupted patient care.",
    img: heroheath,
    alt: "Surgical team at work in a modern operating theatre",
  },
];

const N = SLIDES.length;

export default function HeroSlider({ go }) {
  const [state, setState] = useState({ current: 0, leaving: null });
  const { current, leaving } = state;
  const leaveTimer = useRef(null);
  const booted = useRef(false);

  const goTo = useCallback((i) => {
    setState(s => {
      const next = ((i % N) + N) % N;
      if (next === s.current) return s;
      booted.current = true;
      return { current: next, leaving: s.current };
    });
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setState(s => ({ ...s, leaving: null })), 1150);
  }, []);

  // auto-advance, restarts whenever the slide changes (manual or automatic)
  useEffect(() => {
    const t = setTimeout(() => goTo(current + 1), AUTO_MS);
    return () => clearTimeout(t);
  }, [current, goTo]);

  useEffect(() => () => clearTimeout(leaveTimer.current), []);

  const slide = SLIDES[current];

  return (
    <section
      className={`hx-hero${booted.current ? "" : " hx-boot"}`}
      style={{ "--hx-dur": `${AUTO_MS}ms` }}
      aria-roledescription="carousel"
      aria-label="Catalyst service lines"
    >
      {/* photographic layers — the leaving image sits below while the
          incoming one wipes over it and slowly settles */}
      <div className="hx-stack" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={`hx-layer${i === current ? " on" : ""}${i === leaving ? " out" : ""}`}
          >
            <img
              src={s.img}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : undefined}
            />
            <div className="hx-scrim"></div>
          </div>
        ))}
      </div>

      {SLIDES.map((s, i) => {
        const st = i === current ? "hx-enter" : i === leaving ? "hx-leave" : "";
        return (
          <div key={s.id} className={`hx-slide ${st}`} style={{ "--hxa": s.accent }} aria-hidden={i !== current}>
            <div className="hx-inner">
              <div className="hx-copy">
                <div className="hx-kicker"><span className="hx-kicker-dash"></span>{s.kicker}</div>
                <h1 className="hx-title">
                  {s.lines.map((line, li) => (
                    <span className="hx-line" key={li} style={{ "--ld": `${0.5 + li * 0.1}s` }}>
                      <span className="hx-line-in">
                        {line.map((seg, si) => (
                          <span key={si} className={seg.a ? "hx-accent" : undefined}>{seg.t}</span>
                        ))}
                      </span>
                    </span>
                  ))}
                </h1>
                <p className="hx-para">{s.para}</p>
                <div className="hx-btns">
                  <button className="hx-btn-fill mag" onClick={() => go(s.page || "food")}>
                    Explore solutions <ArrowRight size={16} />
                  </button>
                  <button className="hx-btn-ghost mag" onClick={() => go("contact")}>Partner with us</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* service index rail — navigation, position and autoplay progress in one */}
      <div className="hx-rail" role="tablist" aria-label="Service lines">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === current}
            aria-label={s.kicker}
            className={`hx-rail-item${i === current ? " on" : ""}`}
            style={{ "--hxa": s.accent }}
            onClick={() => goTo(i)}
          >
            <span className="hx-rail-name">{s.kicker}</span>
            <span className="hx-rail-track">
              {i === current && <span key={`fill-${current}`} className="hx-rail-fill"></span>}
            </span>
          </button>
        ))}
      </div>

      <div className="hx-foot" style={{ "--hxa": slide.accent }}>
        <button className="hx-arrow" aria-label="Previous slide" onClick={() => goTo(current - 1)}>
          <ChevronLeft size={16} />
        </button>
        <button className="hx-arrow" aria-label="Next slide" onClick={() => goTo(current + 1)}>
          <ChevronRight size={16} />
        </button>
        <span className="hx-count" aria-hidden="true">
          {String(current + 1).padStart(2, "0")}<em>/ {String(N).padStart(2, "0")}</em>
        </span>
      </div>

      <div className="hx-cue" aria-hidden="true">
        <span className="hx-cue-line"><span className="hx-cue-dot"></span></span>
        <span className="hx-cue-txt">Scroll</span>
      </div>
    </section>
  );
}
