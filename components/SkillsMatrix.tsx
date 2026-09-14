"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
export default function SkillsMatrix() {
  return (
    <section id="skills" className="px-5 py-16 max-w-6xl mx-auto">
      <SectionHeading kicker="Skill tree" title="Arsenal" sub="Red borders. White type. Zero filler." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <motion.div key={s.group} initial={{y:24,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:i*.06}} whileHover={{scale:1.03}} className="card-hover bg-charcoal border-t-4 border-crimson p-5 slash">
            <p className="font-display text-crimson text-xs tracking-widest">0{i+1}</p>
            <h3 className="font-display text-lg mt-1 uppercase">{s.group}</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">{s.items.map(it => <li key={it} className="border-b border-white/10 pb-1.5"><span className="text-crimson font-bold">▸ </span>{it}</li>)}</ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
