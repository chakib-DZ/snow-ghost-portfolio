"use client";
import SectionHeading from "./SectionHeading";

const EMAIL = "chakib.makhlouf.dev@gmail.com";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const from = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="px-5 py-16 max-w-6xl mx-auto">
      <SectionHeading kicker="Co-op mode" title="Contact" sub="Freelance, full-time, or jam — inbox respawns fast." />
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-3">
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio Inquiry — Snow Ghost Games")}`} className="slash block bg-charcoal border-l-4 border-crimson p-5 font-display hover:bg-crimson transition-colors">✉ CHAKIB.MAKHLOUF.DEV@GMAIL.COM</a>
          <div className="flex gap-3">
            <a href="https://github.com" className="slash flex-1 text-center border-2 border-white p-4 font-display hover:bg-white hover:text-pitch transition-all">GITHUB</a>
            <a href="https://linkedin.com" className="slash flex-1 text-center border-2 border-white p-4 font-display hover:bg-white hover:text-pitch transition-all">LINKEDIN</a>
          </div>
          <p className="text-sm text-muted">📍 Algeria · Remote worldwide · AR / EN / FR</p>
        </div>
        <form onSubmit={handleSubmit} className="slash bg-charcoal border border-white/10 p-5 space-y-3">
          <input name="name" required placeholder="YOUR NAME" className="w-full bg-pitch border border-white/15 px-4 py-3 outline-none focus:border-crimson font-bold text-sm" />
          <input name="email" required type="email" placeholder="EMAIL" className="w-full bg-pitch border border-white/15 px-4 py-3 outline-none focus:border-crimson font-bold text-sm" />
          <textarea name="message" required rows={4} placeholder="MISSION BRIEF — project, timeline, budget…" className="w-full bg-pitch border border-white/15 px-4 py-3 outline-none focus:border-crimson text-sm" />
          <button className="slash-sm btn-flip w-full bg-crimson font-display py-3.5 shadow-neon">SEND TRANSMISSION →</button>
        </form>
      </div>
    </section>
  );
}
