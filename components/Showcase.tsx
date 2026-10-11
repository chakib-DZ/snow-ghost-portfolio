"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects, Category } from "../data/portfolio";
const filters: Category[] = ["All", "Games", "Web", "Art"];
function FernRopeIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-label="Fern and rope">
      <ellipse cx="32" cy="29" rx="17" ry="20" stroke="white" strokeWidth="2.5" />
      <line x1="24" y1="47" x2="21" y2="53" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="47" x2="43" y2="53" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 12 C32 24 32 38 32 50" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 20 L24 14 M32 20 L40 14" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 26 L23 20 M32 26 L41 20" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 32 L23 26 M32 32 L41 26" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 38 L24 33 M32 38 L40 33" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 44 L25 40 M32 44 L39 40" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
function ForgefallIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-label="Forgefall anvil and flame">
      <path d="M32 8 C34.5 11 37 13.5 37 17 A5 5 0 0 1 27 17 C27 13.5 29.5 11 32 8 Z" stroke="#FB923C" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M12 24 H52 V30 H38 L35 40 H29 L26 30 H12 Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M22 45 H42 M24 49 H40" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-label="Watching eye">
      <path d="M8 32 C18 18 46 18 56 32 C46 46 18 46 8 32 Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="9" stroke="#C084FC" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="3" fill="#C084FC" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-label="Dungeon bell">
      <path d="M32 10 C22 10 18 22 18 32 L14 40 H50 L46 32 C46 22 42 10 32 10 Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="32" cy="44" r="3.5" fill="#7DD3FC" />
      <path d="M10 26 C8 30 8 34 10 38 M54 26 C56 30 56 34 54 38" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
export default function Showcase() {
  const [f, setF] = useState<Category>("All");
  const list = projects.filter(p => f === "All" || p.category === f);
  return (
    <section id="work" className="px-5 py-16 max-w-6xl mx-auto">
      <SectionHeading kicker="Select stage" title="Showcase" sub="Filter. Hover for crit. Click for details." />
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map(c => (
          <button key={c} onClick={() => setF(c)} className={`slash-sm font-display text-sm px-5 py-2.5 transition-all ${f===c?"bg-crimson text-white shadow-neon":"bg-white/5 border border-white/20 hover:border-crimson hover:text-crimson"}`}>{c.toUpperCase()}</button>
        ))}
      </div>
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {list.map(p => (
            <motion.a layout key={p.slug} href={p.link} target={p.link?.startsWith("http") ? "_blank" : undefined} rel={p.link?.startsWith("http") ? "noopener noreferrer" : undefined} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} exit={{opacity:0,scale:.95}} whileHover={{scale:1.02}} className="card-hover group bg-charcoal border border-white/10 border-t-4 border-t-crimson p-5 block slash">
              <div className="h-28 grid place-items-center text-5xl mb-4 bg-pitch border border-white/10 group-hover:bg-crimson transition-colors">{p.slug === "fern-rope-tracker" ? <FernRopeIcon /> : p.slug === "forgefall" ? <ForgefallIcon /> : p.slug === "i-see-you" ? <EyeIcon /> : p.slug === "bell-of-the-deep" ? <BellIcon /> : p.preview}</div>
              <p className="text-[11px] font-display tracking-widest text-crimson">{p.category.toUpperCase()} · {p.year}</p>
              <h3 className="font-display mt-1 group-hover:text-crimson transition-colors uppercase text-sm leading-tight">{p.title}</h3>
              <p className="text-sm text-muted mt-1">{p.tagline}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">{p.stack.map(s => <span key={s} className="text-[11px] px-2 py-1 bg-white/5 border border-white/15">{s}</span>)}</div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
