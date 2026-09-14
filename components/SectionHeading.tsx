"use client";
import { motion } from "framer-motion";
export default function SectionHeading({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-10">
      <motion.div initial={{x:-40,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{type:"spring",stiffness:120,damping:16}} className="flex items-center gap-3">
        <span className="diagonal-lines w-10 h-5 slash-sm" />
        <p className="text-xs font-display tracking-[0.3em] text-crimson">{kicker.toUpperCase()}</p>
      </motion.div>
      <motion.h2 initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{delay:.05}} className="font-display text-4xl md:text-6xl font-black mt-3 uppercase leading-none">{title}</motion.h2>
      {sub && <p className="text-muted mt-3 max-w-2xl">{sub}</p>}
      <div className="h-1 mt-6 bg-gradient-to-r from-crimson via-crimson/20 to-transparent slash-sm" />
    </div>
  );
}
