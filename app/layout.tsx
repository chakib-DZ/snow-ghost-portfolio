import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import RedGrain from "../components/RedGrain";

export const metadata: Metadata = {
  title: "Chakib Makhlouf — Full-Stack & Game Developer | Snow Ghost Games",
  description: "Portfolio of Chakib Makhlouf: Godot, React/Next.js, 2D art. Home of Snow Ghost Games.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-pitch text-paper font-body antialiased">
        <RedGrain />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
