"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="px-5 py-16 max-w-6xl mx-auto">
      <SectionHeading kicker="Player 01" title="About Me" sub="Engineer by degree. Game dev by blood." />
      <div className="grid md:grid-cols-2 gap-5">
        <motion.div initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} className="slash bg-charcoal border-l-4 border-crimson p-7 leading-relaxed text-white/80">
          <p>I&apos;m <b className="text-white">Chakib Makhlouf</b> — Master&apos;s in Telecommunications (Sétif 1). I ship full-stack apps by day, haunted 2D worlds by night.</p>
          <p className="mt-4">Full loop: <span className="bg-crimson px-1 text-white font-bold">code → physics → levels → sprites</span> — Godot 4, Spine 2D, Photoshop / CSP.</p>
        </motion.div>
        <motion.div initial={{x:30,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} className="slash bg-crimson p-7 text-white">
          <p className="font-display tracking-widest text-xs">QUEST LOG</p>
          <ul className="mt-3 space-y-2 font-bold text-sm">
            <li>✓ Godot prototypes — physics, TileMaps, Spine</li>
            <li>✓ Next / Express / Mongo — auth, dashboards</li>
            <li>→ NOW: Pathfinder demo v0.2</li>
            <li>✕ NEXT: Steam page + Lore integration</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
