import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let triggers = [];

// Premium scrubbed clip reveal: globally disabled per user request.
// The scroll-based image reveals are now kept exclusively for the sectors section
// which handles its own animations internally within Home.jsx.
export function initImageReveal() {
  killImageReveal();
  // Global image reveal disabled.
}

export function killImageReveal() {
  triggers.forEach(t => t && t.kill());
  triggers = [];
}
