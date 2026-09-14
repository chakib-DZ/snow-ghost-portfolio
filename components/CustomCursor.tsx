"use client";
import { useEffect, useRef } from "react";
export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const d = dot.current!, r = ring.current!;
    let x = innerWidth/2, y = innerHeight/2, rx = x, ry = y, raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      d.style.transform = `translate(${x-4}px,${y-4}px) rotate(45deg)`;
      const t = (e.target as HTMLElement)?.closest("a,button");
      r.style.borderColor = t ? "#E30613" : "#fff";
      r.style.background = t ? "rgba(227,6,19,.18)" : "transparent";
    };
    const loop = () => { rx += (x-rx)*.2; ry += (y-ry)*.2; r.style.transform = `translate(${rx-18}px,${ry-18}px) rotate(45deg)`; raf = requestAnimationFrame(loop); };
    window.addEventListener("mousemove", move); raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", move); };
  }, []);
  return (<>
    <div ref={dot} className="custom-cursor-dot w-2 h-2 bg-crimson" style={{boxShadow:"0 0 12px #E30613"}} />
    <div ref={ring} className="custom-cursor-ring w-9 h-9 border-2 border-white/70 transition-colors" />
  </>);
}
