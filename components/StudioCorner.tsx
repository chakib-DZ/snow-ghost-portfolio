"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
export default function StudioCorner() {
  return (
    <section id="studio" className="px-5 py-16">
      <div className="max-w-6xl mx-auto slash bg-crimson p-8 md:p-12 relative overflow-hidden shadow-neon">
        <div className="absolute inset-0 halftone opacity-30" />
        <p className="font-display text-xs tracking-[0.3em] relative">SNOW GHOST GAMES — STUDIO</p>
        <h2 className="font-display font-black text-4xl md:text-6xl uppercase leading-none mt-2 relative">Studio<br/>Corner</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-8 relative">
          {[["PROJECT WRAITH","Roguelite dash + haunted-pine TileMaps. Godot 4 prototype v0.2."],["LAB NOTES","Devlogs: coyote-time, Spine trails, red VFX polish."],["WISHLIST SOON","Steam page Q1. Mailing list below gets key #001."]].map(([t,d],i)=>(
            <motion.div key={t} initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:i*.07}} className="bg-pitch p-5 slash border border-white/10">
              <p className="font-display text-crimson text-xs">0{i+1}</p><h3 className="font-display mt-1">{t}</h3><p className="text-sm text-white/60 mt-2">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
