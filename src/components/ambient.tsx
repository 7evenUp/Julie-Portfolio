"use client";

import { useEffect, useRef } from "react";

/** A real CSS perspective scene; pointer motion never causes React re-renders. */
export function AmbientSculpture() {
  const sculpture = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sculpture.current;
    const hero = element?.closest("section");
    if (!element || !hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    function move(event: PointerEvent) {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = hero!.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        element!.style.setProperty("--pointer-x", `${x * 24}deg`);
        element!.style.setProperty("--pointer-y", `${y * -24}deg`);
      });
    }
    hero.addEventListener("pointermove", move);
    return () => { hero.removeEventListener("pointermove", move); cancelAnimationFrame(frame); };
  }, []);

  return (
    <div className="sculpture-scene" aria-hidden="true" ref={sculpture}>
      <div className="sculpture-orbit">
        {Array.from({ length: 9 }, (_, i) => <span className="sculpture-ring" key={i} style={{ transform: `rotateY(${i * 20}deg)` }} />)}
      </div>
      <span className="sculpture-star">✳</span>
    </div>
  );
}
