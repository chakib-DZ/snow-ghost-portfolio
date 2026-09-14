"use client";
import { useState } from "react";
const links = [["About","#about"],["Skills","#skills"],["Work","#work"],["Studio","#studio"],["Contact","#contact"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-pitch/90 backdrop-blur border-b-2 border-crimson">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="slash bg-crimson text-white font-display font-black px-3 py-1.5 text-sm tracking-tight leading-none">SNOW<br/>GHOST</span>
          <span className="font-display text-sm tracking-widest hidden sm:block">GAMES<span className="text-crimson">.</span></span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm font-bold tracking-wide">
          {links.map(([l,h]) => <a key={h} href={h} className="hover:text-crimson hover:-skew-x-12 transition-all">{l.toUpperCase()}</a>)}
          <a href="#contact" className="slash-sm btn-flip bg-crimson text-white font-display px-5 py-2.5">HIRE ME</a>
        </div>
        <button className="md:hidden font-display" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
      </nav>
      {open && <div className="md:hidden px-5 pb-4 flex flex-col gap-3 bg-pitch border-t border-crimson/40 font-bold">{links.map(([l,h]) => <a key={h} href={h} onClick={()=>setOpen(false)}>{l.toUpperCase()}</a>)}</div>}
    </header>
  );
}
