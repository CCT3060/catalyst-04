import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const match = typeof value === "string" ? value.match(/^([\d,.]+)(.*)$/) : null;
  const hasComma = typeof value === "string" && value.includes(",");

  const numStr = match ? match[1].replace(/,/g, "") : value;
  const suffix = match ? match[2] : "";
  const target = parseFloat(numStr);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2000,
  });

  useEffect(() => {
    if (isInView && !isNaN(target)) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    if (isNaN(target)) return;
    
    return springValue.on("change", (latest) => {
      if (ref.current) {
        let displayVal = Math.floor(latest);
        if (hasComma) {
          displayVal = displayVal.toLocaleString("en-US");
        }
        ref.current.textContent = displayVal + suffix;
      }
    });
  }, [springValue, suffix, hasComma, target]);

  if (isNaN(target)) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>0{suffix}</span>;
}
