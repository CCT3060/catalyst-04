import { useEffect, useRef } from "react";
import createGlobe from "cobe";

/**
 * Interactive draggable globe using the cobe library.
 * Accepts markers as [{ id, location: [lat, lon] }].
 */
export function Globe({
  markers = [],
  markerColor = [1, 0.498, 0],
  baseColor = [0.04, 0.1, 0.2],
  glowColor = [0.7, 0.4, 0.15],
  dark = 1,
  mapBrightness = 5,
  markerSize = 0.07,
  markerElevation = 0.01,
  speed = 0.003,
  initialPhi = 1.5,
  theta = 0.3,
  diffuse = 1.2,
  mapSamples = 16000,
  style = {},
}) {
  const canvasRef = useRef(null);
  const globeRef = useRef(null);
  const phiRef = useRef(initialPhi);
  const draggingRef = useRef(null);   // stores clientX at drag start
  const movementRef = useRef(0);      // accumulated drag offset in px

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // â”€â”€ pointer interaction â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const onPointerDown = (e) => {
      draggingRef.current = e.clientX - movementRef.current;
      canvas.style.cursor = "grabbing";
    };
    const onPointerUp = () => {
      draggingRef.current = null;
      canvas.style.cursor = "grab";
    };
    const onPointerMove = (e) => {
      if (draggingRef.current !== null) {
        movementRef.current = e.clientX - draggingRef.current;
      }
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // â”€â”€ globe init â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const init = () => {
      const w = canvas.offsetWidth;
      if (!w || globeRef.current) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      globeRef.current = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: w * dpr,
        height: w * dpr,
        phi: initialPhi,
        theta,
        dark,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        markerElevation,
        markers: markers.map((m) => ({ location: m.location, size: markerSize })),
        onRender: (state) => {
          // auto-rotate unless user is dragging
          if (draggingRef.current === null) phiRef.current += speed;
          state.phi = phiRef.current + movementRef.current / 50;
          state.theta = theta;
          state.width = w * dpr;
          state.height = w * dpr;
        },
      });

      // fade in
      setTimeout(() => { if (canvas) canvas.style.opacity = "1"; }, 60);
    };

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      // canvas not yet laid out — wait for ResizeObserver
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) { ro.disconnect(); init(); }
      });
      ro.observe(canvas);
    }

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
      if (globeRef.current) { globeRef.current.destroy(); globeRef.current = null; }
    };
  }, []); // intentionally empty — globe is created once on mount

  return (
    <div style={{ position: "relative", aspectRatio: "1 / 1", userSelect: "none", ...style }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
    </div>
  );
}
