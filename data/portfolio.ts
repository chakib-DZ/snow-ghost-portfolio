export type Category = "All" | "Games" | "Web" | "Art";

export type Project = {
  slug: string;
  title: string;
  category: Exclude<Category, "All">;
  tagline: string;
  stack: string[];
  year: string;
  accent: string;
  preview: string;
  link?: string;
};

export const projects: Project[] = [
  { slug: "forgefall", title: "Forgefall — Arena Survivor", category: "Games", tagline: "Fast-paced top-down arena survivor: 20 waves, 9 weapons in 4 tiers, dash i-frames, final boss + endless mode.", stack: ["Godot 4", "GDScript", "HTML5", "itch.io"], year: "2026", accent: "#FB923C", preview: "⚒", link: "https://snow-ghost-games.itch.io/forgefall" },
  { slug: "i-see-you", title: "I See You — Stealth Jam", category: "Games", tagline: "Trijam #393: stealth dungeon where walls watch — freeze under stare, gather 5 shards, slay the Grand Eye.", stack: ["Godot 4", "GDScript", "HTML5", "Trijam #393"], year: "2026", accent: "#C084FC", preview: "👁", link: "https://snow-ghost-games.itch.io/i-see-you" },
  { slug: "bell-of-the-deep", title: "Bell of the Deep — Mini Jam", category: "Games", tagline: "Mini Jam 221: cold dungeon, warmth system, 3 shards, Guardian boss — ring the ancient bell.", stack: ["Godot 4", "GDScript", "HTML5", "Mini Jam 221"], year: "2026", accent: "#7DD3FC", preview: "🔔", link: "https://snow-ghost-games.itch.io/bell-of-the-deep" },
  { slug: "fern-rope-tracker", title: "Fern & Rope — Jump Rope Tracker", category: "Web", tagline: "Nature-inspired interval timer with MET-based calories, weekly goals and streak tracking. 100% local-first.", stack: ["Next.js", "TypeScript", "Tailwind", "Local-first"], year: "2026", accent: "#4ADE80", preview: "🌿", link: "https://fern-and-rope.vercel.app/" },
  { slug: "dev-dashboard", title: "Pulse — Realtime Dashboard", category: "Web", tagline: "Socket-driven telemetry UI with charts and dark gaming theme.", stack: ["React", "Node.js", "Socket.io"], year: "2023", accent: "#34D399", preview: "⬢" },
  { slug: "sprite-pack", title: "Haunted Pines — Sprite Pack", category: "Art", tagline: "48-frame run cycle + tiles + VFX sheets. CSP + Krita.", stack: ["Clip Studio", "Krita", "Photoshop"], year: "2025", accent: "#F0ABFC", preview: "✦" },
  { slug: "boss-sheets", title: "Snow Wraith — Boss Sheets", category: "Art", tagline: "Boss idle/attack/death sheets with glow-separated layers.", stack: ["Photoshop", "Spine 2D"], year: "2024", accent: "#93C5FD", preview: "☾" },
];

export const skills = [
  { group: "Game Dev", icon: "🎮", items: ["Godot Engine (GDScript)", "2D Physics & Logic", "TileMaps & Level Design", "Spine 2D Animation"], color: "border-ice/40" },
  { group: "Web Tech", icon: "🌐", items: ["React.js / Next.js", "Node.js / Express.js", "JavaScript / HTML5 / CSS3", "Tailwind CSS / MongoDB"], color: "border-violet-400/40" },
  { group: "Art & Design", icon: "🎨", items: ["Clip Studio Paint", "Adobe Photoshop / Krita", "2D Art & Sprite Sheets", "Pixel / VFX Polish"], color: "border-fuchsia-300/40" },
  { group: "Workflow", icon: "🛠", items: ["Git / GitHub", "VS Code", "Trilingual: AR / EN / FR", "Telecom MSc Systems Thinking"], color: "border-emerald-300/40" },
];
