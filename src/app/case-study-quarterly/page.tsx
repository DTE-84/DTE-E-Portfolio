"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShieldCheck, 
  BarChart3, 
  Zap, 
  FileCheck, 
  AlertCircle, 
  Search, 
  Cpu,
  ArrowRight,
  Mail,
  Globe,
  Activity,
  History,
  Lock
} from 'lucide-react';
import Link from 'next/link';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const QuarterlyCaseStudy = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.hero-reveal', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.3
      });

      // Section Reveals
      const reveals = gsap.utils.toArray('.reveal');
      reveals.forEach((el: any) => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="bg-[#0a0a0a] min-h-screen text-[#f5f5f5] selection:bg-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#c5a059]/20 border border-[#c5a059] flex items-center justify-center">
              <ShieldCheck className="text-[#c5a059] w-5 h-5" />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight uppercase">MCSDD // <span className="text-[#c5a059]">Quarterly Pro</span></span>
          </Link>
        </div>
        <div className="hidden md:flex gap-8 items-center text-xs font-bold uppercase tracking-widest">
          <a href="#problem" className="hover:text-[#c5a059] transition-colors">Failure Signal</a>
          <a href="#solution" className="hover:text-[#c5a059] transition-colors">Architecture</a>
          <a href="#telemetry" className="hover:text-[#c5a059] transition-colors">Telemetry</a>
          <a 
            href="https://dte-84.github.io/MCSDDQuarterly/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#c5a059] text-black px-4 py-2 rounded font-black hover:bg-[#d4b069] transition-all flex items-center gap-2 text-[10px]"
          >
            Portal Uplink <ArrowRight size={12} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-8 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="hero-reveal inline-block px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/20 text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em] mb-6">Mission Critical Compliance</div>
        <h1 className="hero-reveal text-6xl md:text-8xl max-w-5xl mb-8 leading-[1.1] font-heading font-extrabold italic">
          Automated <span className="text-[#c5a059]">Audit</span> Resilience.
        </h1>
        <p className="hero-reveal text-xl text-[#a0a0a0] max-w-2xl mb-12 font-medium">
          A high-fidelity compliance engine automating Missouri DMH reporting standards through deterministic validation and PCSP data inheritance.
        </p>
        <div className="hero-reveal flex gap-4">
          <a 
            href="https://dte-84.github.io/MCSDDQuarterly/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#c5a059] text-black px-8 py-4 rounded font-black hover:bg-[#d4b069] transition-all"
          >
            Launch Portal
          </a>
        </div>
      </section>

      {/* Metrics Node */}
      <section id="telemetry" className="px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { label: 'Audit Resilience', value: '95%+', sub: 'Exceeding 87% DMH Threshold', icon: FileCheck },
            { label: 'Completion Velocity', value: '~75%', sub: 'Reduction in Admin Bloat', icon: Zap },
            { label: 'Oversight Gap', value: '0%', sub: 'Solving 80% Supervisory Failure', icon: ShieldCheck },
            { label: 'Data Fidelity', value: '100%', sub: 'Direct PCSP Inheritance', icon: Cpu },
          ].map((item, i) => (
            <div key={i} className="reveal bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col items-center justify-center group text-center hover:border-[#c5a059]/50 transition-all backdrop-blur-sm">
              <item.icon className="text-[#c5a059] mb-4 w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-heading font-extrabold mb-1 text-[#c5a059]">{item.value}</div>
              <p className="text-[10px] text-[#c5a059] uppercase tracking-widest font-black mb-2">{item.label}</p>
              <p className="text-[9px] text-[#a0a0a0] uppercase tracking-tighter italic">{item.sub}</p>
            </div>
          ))}
        </div>
        <p className="reveal text-center text-[9px] text-[#a0a0a0] uppercase tracking-widest mt-8 opacity-50 italic">
          * Benchmarks calibrated against Missouri State Auditor and MMAC 2023-2026 performance reports.
        </p>
      </section>

      {/* The Failure Signal */}
      <section id="problem" className="px-8 py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl mb-8 font-heading italic">The <span className="text-[#c5a059]">Failure</span> Signal</h2>
            <p className="text-[#a0a0a0] mb-8 text-lg leading-relaxed">
              Missouri Case Management operates under intense MMAC scrutiny. Static documentation protocols have historically led to an 11% unallowable error rate, while recent state audits found rejection rates as high as 52% due to administrative friction. Quarterly Pro addresses the three primary triggers for Missouri DMH citations:
            </p>
            <div className="space-y-6">
              {[
                { title: 'Supervisory Deficit', desc: 'Solving the 80% oversight gap where required monthly reviews are historically bypassed.', icon: History },
                { title: 'MMAC Documentation Gaps', desc: 'Preventing denials from missing signatures, EVV mismatches, or unsigned plans of care.', icon: AlertCircle },
                { title: 'Utilization Volatility', desc: 'Identifying service delivery exceeding authorized limits before the billing cycle terminates.', icon: Activity }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-red-500/70 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-sm text-[#a0a0a0] leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal bg-white/5 border border-white/10 border-l-4 border-l-red-500/50 p-2 relative overflow-hidden flex items-center justify-center rounded-lg backdrop-blur-md">
             <img 
               src="/assets/pcsp1.png" 
               alt="MCSDD Quarterly Pro Interface" 
               className="w-full h-auto rounded opacity-90 group-hover:opacity-100 transition-opacity"
             />
             <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none"><AlertCircle size={40} /></div>
          </div>
        </div>
      </section>

      {/* The Structural Solution */}
      <section id="solution" className="px-8 py-32">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <div className="reveal inline-block px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/20 text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em] mb-6">Architectural Shield</div>
          <h2 className="reveal text-5xl md:text-6xl mb-8 font-heading italic">Validation <span className="text-[#c5a059]">Architecture</span></h2>
          <p className="reveal text-[#a0a0a0] text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Quarterly Pro acts as a deterministic middleware, sanitizing PCSP data against the April 2026 EVV Hard Launch and Oct 2025 HRST mandates to ensure 100% audit finality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { 
              title: 'EVV Synchronizer', 
              desc: 'Hard Launch protocol matching service units to EAS (EVV Aggregator Solution) records to prevent instant claim denials.',
              icon: Search
            },
            { 
              title: 'HRST Attestation', 
              desc: 'Oct 2025 compliance node enforcing the mandatory health risk planning team certification for every quarterly review.',
              icon: Cpu
            },
            { 
              title: 'Similarity Engine', 
              desc: 'Sanitizing narratives against "Rubber Stamping" citations—the root cause of Missouri\'s 11% unallowable error rates.',
              icon: BarChart3
            },
            { 
              title: 'Supervisory Node', 
              desc: 'Directly solving the 80% oversight gap through integrated monthly case review verification and digital timestamping.',
              icon: ShieldCheck
            }
          ].map((f, i) => (
            <div key={i} className="reveal bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col items-start hover:border-[#c5a059]/50 group h-full transition-all backdrop-blur-sm">
              <div className="w-12 h-12 rounded bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <f.icon className="text-[#c5a059] w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{f.title}</h3>
              <p className="text-sm text-[#a0a0a0] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Analytical Synthesis */}
      <section id="synthesis" className="px-8 py-40">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="w-16 h-1 bg-[#c5a059] mx-auto mb-12" />
          <h2 className="text-4xl md:text-5xl mb-12 font-heading italic leading-tight">
            "Quarterly Pro transforms static clinical data into <span className="text-[#c5a059]">Living Telemetry</span>, establishing a deterministic framework for Missouri state oversight."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <Lock className="text-[#c5a059] w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold uppercase tracking-widest">Drew Ernst</h4>
            <p className="text-xs text-[#a0a0a0] uppercase tracking-[0.3em] font-black italic">Lead Architect | DTE Solutions</p>
          </div>
        </div>
      </section>
      
      <footer className="px-8 py-16 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
             <span className="font-heading font-extrabold text-xl tracking-tight uppercase">DREW <span className="text-[#c5a059]">ERNST</span></span>
             <p className="text-[10px] text-[#a0a0a0] uppercase tracking-widest opacity-50 italic">Data Integrity & Systems Engineering</p>
          </div>
          <p className="text-[9px] text-[#a0a0a0] opacity-40 uppercase tracking-widest">© 2026 DTE Solutions LLC. Missouri DMH Compliance Protocol.</p>
        </div>
      </footer>
    </main>
  );
};

export default QuarterlyCaseStudy;