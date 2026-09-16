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
            <motion.a layout key={p.slug} href={p.link} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} exit={{opacity:0,scale:.95}} whileHover={{scale:1.02}} className="card-hover group bg-charcoal border border-white/10 border-t-4 border-t-crimson p-5 block slash">
              <div className="h-28 grid place-items-center text-5xl mb-4 bg-pitch border border-white/10 group-hover:bg-crimson transition-colors">{p.slug === "fern-rope-tracker" ? <FernRopeIcon /> : p.preview}</div>
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
