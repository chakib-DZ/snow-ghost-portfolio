"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects, Category } from "../data/portfolio";
const filters: Category[] = ["All", "Games", "Web", "Art"];
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
              <div className="h-28 grid place-items-center text-5xl mb-4 bg-pitch border border-white/10 group-hover:bg-crimson transition-colors">{p.preview}</div>
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
