"use client";
export default function RedGrain() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]" aria-hidden>
      <div className="absolute inset-0 halftone opacity-40" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-crimson/20 blur-[100px]" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-crimson/10 blur-[120px]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-crimson" />
    </div>
  );
}
