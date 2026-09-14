"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_.9fr] gap-10 items-center relative z-10">
        <div>
          <motion.div initial={{x:-50,opacity:0}} animate={{x:0,opacity:1}} className="inline-flex items-center gap-2 bg-crimson text-white font-display text-xs px-4 py-2 slash-sm tracking-widest">● SNOW GHOST GAMES — EST. 2026</motion.div>
          <motion.h1 initial={{x:-60,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:.08,type:"spring",stiffness:80}} className="font-display font-black text-6xl md:text-8xl leading-[0.9] mt-5 uppercase">
            Chakib<br/><span className="bg-crimson px-2 slash-sm inline-block mt-1">Makhlouf</span><br/><span className="text-stroke">Dev × Art</span>
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}} className="mt-5 text-lg text-white/70 max-w-xl">
            Full-Stack & Game Developer — <b className="text-white">Godot 4</b> worlds + <b className="text-white">React / Next.js</b> apps + hand-drawn sprites. Telecom MSc. No blue glows. Only impact.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="slash-sm btn-flip bg-crimson font-display px-7 py-3.5 shadow-neon">▶ EXPLORE PROJECTS</a>
            <a href="#contact" className="slash-sm border-2 border-white font-display px-7 py-3.5 hover:bg-white hover:text-pitch transition-all">GET IN TOUCH</a>
          </div>
        </div>
        <motion.div initial={{scale:.9,opacity:0}} animate={{scale:1,opacity:1}} className="relative">
          <div className="slash bg-white p-[3px] shadow-neon">
            <div className="slash relative overflow-hidden bg-pitch">
              <div className="absolute inset-0 grid place-items-center bg-crimson">
                <p className="font-display text-center text-3xl leading-none">SNOW<br/>GHOST<br/>GAMES</p>
              </div>
              <img src="/logo.png" alt="Snow Ghost Games" className="relative w-full h-auto block" onError={(e)=>{(e.target as HTMLImageElement).style.display="none"}} />
            </div>
          </div>
          <div className="slash bg-white text-pitch p-4 mt-3 flex justify-between font-display text-sm">
            <span>HP 100/100</span><span className="text-crimson">◆ BOSS READY</span><span>LVL 01</span>
          </div>
        </motion.div>
      </div>
      <div className="mt-12 border-y-2 border-crimson py-3 overflow-hidden whitespace-nowrap font-display text-sm tracking-widest text-white/60">
        GODOT 4 ◆ GDSCRIPT ◆ SPINE 2D ◆ REACT ◆ NEXT.JS ◆ NODE ◆ TAILWIND ◆ MONGODB ◆ CLIP STUDIO ◆&nbsp;
      </div>
    </section>
  );
}
