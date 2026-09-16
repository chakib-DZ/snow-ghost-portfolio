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
  { slug: "frostbite-platformer", title: "Frostbite — 2D Platformer Prototype", category: "Games", tagline: "Tight coyote-time controls, TileMap levels, Spine 2D ghost dash.", stack: ["Godot 4", "GDScript", "TileMaps", "Spine 2D"], year: "2025", accent: "#22D3EE", preview: "❄", link: "#" },
  { slug: "ghost-dash", title: "Ghost Dash — Arcade Chaser", category: "Games", tagline: "Score-chaser with 2D physics, particles and frost trails.", stack: ["Godot", "GDScript", "2D Physics"], year: "2024", accent: "#7DD3FC", preview: "👻" },
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
