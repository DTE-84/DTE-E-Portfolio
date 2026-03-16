"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useScrollLock } from "../hooks/useScrollLock";
import { Icon } from "@iconify/react";

interface VersionSelectorProps {
  isOpen?: boolean;
  forcedOpen?: boolean;
  onClose?: () => void;
}

export default function VersionSelector({ forcedOpen = false, onClose, isOpen = false }: VersionSelectorProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Lock scroll when the selector is visible
  useScrollLock(isVisible || forcedOpen || isOpen);

  // Check sessionStorage only on the client
  useEffect(() => {
    // sessionStorage check disabled for testing
    // if (!sessionStorage.getItem("dte-version-selected") && !forcedOpen) {
    //   setTimeout(() => setIsVisible(true), 0);
    // }
    setIsVisible(true);
  }, [forcedOpen]);

  const handleSelect = () => {
    sessionStorage.setItem("dte-version-selected", "true");
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible && !forcedOpen && !isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Select your destination"
    >
      {(forcedOpen || isOpen) && (
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-white/40 hover:text-[var(--theme-accent)] transition-colors p-4"
        >
          <Icon icon="bi:x-lg" className="text-3xl" />
        </button>
      )}

      <div className="text-center mb-16">
        <div className="text-accent font-mono text-[10px] uppercase tracking-[0.5em] mb-4 font-black">Gateway // DTE Solutions</div>
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
          Select <br/><span className="text-white/20">Solutions</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
        {/* PERSONAL PORTFOLIO - TEAL (LEFT) */}
        <Link
          href="/"
          onClick={handleSelect}
          className="group flex-1 p-10 bg-zinc-900/50 border border-[#00ffcc]/20 hover:border-[#00ffcc] transition-all duration-500 relative overflow-hidden rounded-3xl"
        >
          <div className="absolute top-6 left-6 text-[10px] font-bold uppercase tracking-widest text-zinc-600">Protocol V3.0 (High-Fidelity)</div>
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-black tracking-tighter text-white mb-2 uppercase group-hover:text-[#00ffcc] transition-colors">
              Portfolio<span className="text-[#00ffcc]">.</span>
            </h2>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              Immersive personal workspace showcasing full-stack engineering and public relations background.
            </p>
          </div>
        </Link>

        {/* BUSINESS HUB - WHITE (CENTER) */}
        <Link
          href="https://dte-84.github.io/DTE-Solutions-Hub/"
          onClick={handleSelect}
          className="group flex-1 p-10 bg-zinc-900 border-2 border-white/10 hover:border-white transition-all duration-500 relative overflow-hidden rounded-[40px] shadow-2xl flex flex-col items-center justify-center"
        >
          <div className="absolute top-6 left-6 text-[10px] font-black uppercase tracking-widest text-white/40 animate-pulse">Live Solutions</div>
          <div className="mb-6 relative w-20 h-20 group-hover:scale-110 transition-transform duration-500"></div>
            
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-tighter text-white mb-2 uppercase">
              Solutions Hub<span>.</span>
            </h2>
            <p className="text-zinc-400 text-sm font-medium leading-relaxed">
              Sophisticated applications solving real-world problems. Explore **PULSE** and **FLUFF** engineering environments.
            </p>
          </div>
        </Link>

        {/* MINIMALIST PORTFOLIO - BLUE (RIGHT) */}
        <Link
          href="/v3"
          onClick={handleSelect}
          className="group flex-1 p-10 bg-zinc-900/50 border border-[#00ffff]/20 hover:border-[#00ffff] transition-all duration-500 relative overflow-hidden rounded-3xl"
        >
          <div className="absolute top-6 left-6 text-[10px] font-bold uppercase tracking-widest text-zinc-600">Protocol V3.0 (Minimalist)</div>
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-black tracking-tighter text-white mb-2 uppercase group-hover:text-[#00ffff] transition-colors">
              Minimal<span className="text-[#00ffff]">.</span>
            </h2>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              Refined, content-focused architecture for rapid behavioral analysis review.
            </p>
          </div>
        </Link>
      </div>

      <p className="mt-20 text-[9px] font-mono text-zinc-800 uppercase tracking-[0.5em] text-center">
        DTE Solutions // STL STL Division // &copy; 2026
      </p>
    </div>
  );
}





