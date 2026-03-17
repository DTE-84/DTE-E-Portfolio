"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import BgAnimation from "../../components/BgAnimation";
export default function CaseStudyPCSP() {
  useEffect(() => {
    // Force green theme for case study page
    document.documentElement.removeAttribute('data-theme');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let id = entry.target.getAttribute("id");
            if (id === "conclusion") id = "appendix";
            document.querySelectorAll(".toc-item").forEach((item) => {
              item.classList.toggle(
                "active",
                item.getAttribute("data-section") === id,
              );
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "-25% 0px -25% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const tocLinks = [
    { id: "challenge", label: "01 // The Challenge" },
    { id: "solution", label: "02 // The Solution" },
    { id: "execution", label: "03 // The Execution" },
    { id: "impact", label: "04 // The Impact" },
    { id: "appendix", label: "05 // Appendix" },
  ];

  const domains = [
    { num: "01", label: "Demographics & Legal" },
    { num: "02", label: "Communication Profile" },
    { num: "03", label: "Likes & Dislikes" },
    { num: "04", label: "Important People" },
    { num: "05", label: "Vision for a Good Life" },
    { num: "06", label: "Health, Safety & Risk" },
    { num: "07", label: "Legal Rights & Satisfaction" },
    { num: "08", label: "Contributors & Admin" },
    { num: "09", label: "Measurable Outcomes" },
  ];

  const impactRows = [
    {
      metric: "Audit Rejection",
      before: "Medium Risk",
      after: "Low Risk",
    },
    {
      metric: "Drafting Time",
      before: "~15–20 Min / Goal",
      after: "< 2 Minutes",
    },
    {
      metric: "Audit Compliance",
      before: "Inconsistent Active Phrasing",
      after: "100% Active Phrasing",
    },
    {
      metric: "IT Overhead",
      before: "Complex Security Requirements",
      after: "Zero (Browser Only)",
    },
    {
      metric: "Revision Cycles",
      before: "Frequent Rejections",
      after: "First-Pass Approval",
    },
    {
      metric: "Communication Docs",
      before: "Inconsistent / Missing",
      after: "Structured + Charted",
    },
    {
      metric: "Plan Portability",
      before: "Locked to One Machine",
      after: ".pcsp File / PDF",
    },
    {
      metric: "Person-Centered Data",
      before: "Freeform / Overlooked",
      after: "Structured Profiles",
    },

    {
      metric: "Outcome Goals",
      before: "Single Goal Per Plan",
      after: "Unlimited Multi-Goal",
    },
    {
      metric: "PHI Draft Retention",
      before: "Indefinite / Unmanaged",
      after: "30-Day Auto-Expiry",
    },
    {
      metric: "Unsaved Work",
      before: "Lost on Tab Close",
      after: "4-Second Auto-Save",
    },
    {
      metric: "Workstation Compliance",
      before: "No Session Controls",
      after: "30-Min Idle Timeout",
    },
  ];

  const solutionFeatures = [
    {
      icon: "solar:widget-add-linear",
      title: "Modular Builder",
      body: "A dropdown-driven building block approach converts casual goal language into standardized SMART goals instantly. Each of the nine PCSP sections is self-contained and collapses cleanly for focused drafting.",
    },
    {
      icon: "solar:library-linear",
      title: "Clinical Word Bank",

      body: "Pre-loaded with Missouri-approved active verb structures — Instructional, Maintenance, Physical/Direct, Modeling, and Verbal Prompts — to enforce audit-ready language on the first draft, not the third revision.",
    },
    {
      icon: "solar:chat-square-like-linear",
      title: "Communication Profiling",
      body: "Captures primary language, sign language type, multi-select method checkboxes, evaluation status, identified barriers, and a dynamic behavior-to-response chart — all per Missouri DD guidelines.",
    },
    {
      icon: "solar:users-group-rounded-linear",
      title: "Person-Centered Supports",
      body: "Dedicated sections for what the individual genuinely likes and dislikes, plus an unlimited dynamic roster of important people — each with relationship type, shared activities, and frequency of contact.",
    },
    {
      icon: "solar:diskette-linear",
      title: "Portable File System",
      body: "Plans save as .pcsp files locally, reload on demand with full fidelity, print as clean PDFs, or persist as browser drafts — zero cloud dependency, zero IT involvement.",
    },
    {
      icon: "solar:shield-check-linear",
      title: "HCBS & Due Process",
      body: "Automated workflows for federal HCBS Rule compliance and Missouri Due Process. Captures less restrictive alternatives, historical patterns, and measurable criteria for lifting rights restrictions.",
    },
    {
      icon: "solar:shield-keyhole-linear",
      title: "HIPAA Privacy Mode",
      body: "A single toggle replaces all visible PHI with anonymized placeholders in the live preview — enabling safe screen-sharing during supervision and team meetings without ever exposing client data.",
    },

    {
      icon: "solar:cloud-check-linear",
      title: "Auto-Save & Restore",
      body: "A 4-second debounced auto-save writes session state to local browser storage after every change. On next load, the tool prompts to restore any session saved within the past 48 hours — zero work lost on unexpected tab closure.",
    },
    {
      icon: "solar:alarm-linear",
      title: "HIPAA Idle Timeout",
      body: "After 30 minutes of inactivity, the system surfaces a workstation policy warning. Dismissing the prompt clears the auto-save and reloads the page — satisfying HIPAA's unattended workstation requirements without IT configuration.",
    },
    {
      icon: "solar:target-linear",
      title: "Multi-Goal Outcomes Engine",
      body: "Section 9 now supports unlimited measurable outcome goals per plan — each with its own domain, support method, frequency, responsible provider, and start/end dates. All goals serialize into the .pcsp export and restore with full fidelity.",
    },
  ];

  const executionSteps = [
    {
      num: "01",
      title: "Regulatory Discovery",
      body: 'Before writing a line of code, I conducted a full read of Missouri 9 CSR 45-3.010 and the "Good Life" Framework to map every required clinical trigger. The nine-domain PCSP structure, active treatment language requirements, and HCBS federal compliance rules all had to be baked into the logic before the UI could be designed. The first challenge was regulatory, not technical.',
    },
    {
      num: "02",
      title: "Zero-Knowledge Architecture",
      body: "Every other option — a hosted web app, a shared database, a cloud-synced form — introduced either a HIPAA risk or an IT bottleneck. A single-file HTML/JS deployment with zero external dependencies eliminated both problems simultaneously. By processing everything in the browser's volatile RAM, I bypassed the need for server infrastructure entirely. No POST requests. No databases. No BAA. No licensing cost.",
    },
    {
      num: "03",
      title: "Communication Module",
      body: "Built a structured profiling system covering primary language, sign language type, a multi-select method checklist (Verbal, AAC Device, PECS, Gestures, Eye Gaze, Facial Expressions, Vocalizations, Behavior as Communication), evaluation status with conditional barrier documentation, and a fully dynamic Communication Chart. Each chart row maps a behavior to its meaning and the correct staff response — a direct Missouri DD compliance requirement that previously went undocumented.",
    },
    {
      num: "04",
      title: "Likes, Dislikes & Person-Centered Supports",
      body: "Designed dedicated form sections for capturing what the individual genuinely enjoys — favorite activities, foods, and places — alongside dislikes, triggers, and sensory sensitivities. This feeds directly into the narrative and ensures plans reflect the individual's actual life, not clinical boilerplate. The difference matters during audits.",
    },
    {
      num: "05",
      title: "Important People Engine",
      body: "Engineered a dynamic multi-entry system for documenting the people who matter most to the individual. Each entry captures name, relationship, and an unlimited list of shared activities with frequency of contact. Staff can add or remove people and activities on the fly — the narrative auto-updates in real time. This satisfies the Natural Supports documentation requirement without a separate system.",
    },
    {
      num: "06",
      title: "Clinical Data Expansion",
      body: "Expanded the engine to cover the full Missouri State Audit Checklist — including complex data structures for detailed medication protocols (PRN psychotropics), comprehensive family medical history, mandatory HCBS housing compliance triggers, health parameter tracking (Weight, Blood Pressure, Blood Sugar, Seizure Logs, Bowel Logs), and multi-select legal role classification.",
    },
    {
      num: "07",
      title: "Portable File System (.pcsp)",
      body: "Implemented a complete save/restore pipeline using a custom .pcsp format. On export, the full plan state — dynamic entries, checkboxes, narratives, communication chart rows, important people, outcome goals — serializes to a locally stored JSON file. On import, a single file upload or drag-and-drop onto the workspace auto-fills the entire form in seconds, with full fidelity.",
    },

    {
      num: "08",
      title: "HIPAA Compliance Hardening (v2.0)",
      body: "Added a 4-second debounced auto-save with 48-hour restore prompt, 30-minute HIPAA idle session timeout, and 30-day automatic PHI draft expiry with in-panel expiry warnings. All dynamic innerHTML rendering was secured with an HTML escape helper to prevent injection via user-supplied input. The print stylesheet was updated to stamp a HIPAA confidentiality footer on every printed page.",
    },
    {
      num: "09",
      title: "Multi-Goal Outcomes Engine (v2.0)",
      body: "Redesigned Section 9 from a single-goal builder into an unlimited multi-goal system. Each goal card is self-contained — domain, active verb, goal template, frequency, responsible provider, and date range — and can be added, removed, or reordered independently. All goals serialize into the .pcsp export and generate a numbered, audit-ready narrative block.",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-space selection:bg-accent/30 selection:text-white relative overflow-hidden">
      <style jsx global>{`
        .toc-item.active .toc-link {
          color: #00ffcc !important;
          text-shadow: 0 0 15px rgba(0, 255, 204, 0.6);
          transform: translateX(8px);
        }
        .toc-item.active::before {
          content: "";
          position: absolute;
          left: -1px;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #00ffcc;
          box-shadow: 0 0 15px #00ffcc;
          z-index: 10;
        }
        .toc-item {
          transition: all 0.4s ease;
        }
      `}</style>
      <BgAnimation />
      
      {/* Ambient background overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,_var(--theme-accent),_transparent_70%)]" />
      </div>

      {/* ── TOC ── */}
      <nav className="toc-nav fixed left-10 top-1/2 -translate-y-1/2 w-[180px] z-[100] hidden xl:block">
        <ul className="toc-list list-none pl-0 border-l border-white/5">
          {tocLinks.map(({ id, label }, i) => (
            <li
              key={id}
              className={`toc-item relative py-2.5 pl-5 transition-all${i === 0 ? " active" : ""}`}
              data-section={id}
            >
              <a
                href={`#${id}`}
                className="toc-link text-white/40 no-underline text-[0.7rem] font-orbitron uppercase tracking-[0.15em] block transition-all hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-5xl mx-auto relative p-4 md:p-12">
        {/* ── HEADER ── */}
        <header className="mb-12">
          <div className="flex justify-between items-start mb-12">
            <Link
              href="/"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60 hover:text-accent transition-colors flex items-center gap-2"
            >
              <Icon icon="solar:arrow-left-linear" /> Return
            </Link>
            <div className="text-right">
              <span className="block text-[7px] font-mono text-accent/40 mb-1 uppercase tracking-widest">
                ARCHIVE_ID: 2026_PCSP_PRO_V2
              </span>
              <div className="inline-block px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-[9px] font-black uppercase tracking-[0.4em]">
                CASE STUDY
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="lg:order-2 text-right">
              <h1 className="text-5xl md:text-7xl font-orbitron uppercase leading-none mb-8 glow-text tracking-normal text-white">
                PCSP Assistant <br />
                <span className="text-accent italic">Pro</span>
              </h1>
              <div className="flex flex-wrap justify-end gap-x-8 gap-y-4 pt-8 border-t border-[#00ffcc]/20">
                {[
                  {
                    label: "Role",
                    value: "Product Designer",
                    color: "text-white/90",
                  },
                  {
                    label: "Client",
                    value: "MCSDD (MO DMH)",
                    color: "text-white/90",
                  },
                  { label: "Security", value: "HIPAA", color: "text-red-400" },
                  {
                    label: "Stack",
                    value: "Vanilla JS",
                    color: "text-white/90",
                  },
                  // ── Added version tag ──
                  { label: "Version", value: "v2.0", color: "text-accent" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="text-right">
                    <span className="block text-[10px] font-black text-accent/50 uppercase tracking-widest mb-1">
                      {label}
                    </span>
                    <span
                      className={`text-sm font-bold uppercase tracking-tight ${color}`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ── HERO IMAGE ── */}
        <div className="mb-32 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffcc]/20 to-transparent blur opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative rounded-2xl overflow-hidden border border-accent/40 bg-black aspect-[21/9]">
            <Image
              src="/DTE-E-Portfolio/assets/pcsp1.png"
              alt="PCSP Assistant Pro interface"
              fill
              quality={80}
              priority
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[12px] font-mono text-accent uppercase tracking-[0.3em]">
                System Active // Missouri DMH Engine v2.0
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-32">
          {/* ── 01 // THE CHALLENGE ── */}
          <section
            id="challenge"
            className="grid lg:grid-cols-3 gap-12 pt-[100px]"
          >
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black uppercase tracking-tight sticky top-12 font-orbitron">
                <span className="text-[#00ffcc]/40">01 //</span> The{" "}
                <span className="text-[#00ffcc]">Challenge</span>
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div className="relative">
                <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00ffcc] to-transparent opacity-40" />
                <div className="absolute right-0 left-0 bottom-0 h-[3px] bg-gradient-to-r from-[#00ffcc] to-transparent opacity-40" />
                <p className="text-lg text-white/95 font-medium leading-relaxed pr-6 pb-6">
                  Marion County MCSDD case managers were dedicating significant time to documentation — an opportunity to streamline their workflow and accelerate service delivery.
                </p>
              </div>
              <p className="text-base text-white/70 leading-relaxed">
                Each Person Centered Service Plan required documenting nine clinical domains with precision. Missouri state auditors require specific active language structures —{" "}
                <em className="text-[#00ffcc]">
                  &quot;Staff will provide instructional support to learn how to use the AAC device&quot;
                </em>{" "}
                rather than{" "}
                <em className="text-white/90">
                  &quot;will try to improve communication&quot;
                </em>
                . The goal was to help staff achieve audit-ready language on the first draft, accelerating approval timelines and service delivery.
              </p>

              <div className="grid gap-6">
                <div className="p-6 rounded-xl border border-[#00ffcc]/20 bg-white/5 backdrop-blur-sm">
                  <h4 className="text-[#00ffcc] text-[14px] font-black uppercase tracking-widest mb-3 font-orbitron">
                    The Administrative Burden
                  </h4>
                  <p className="text-base text-white/85">
                    Case Managers spent a significant amount of their week on manual data entry
                    across disconnected systems — demographics, communication
                    profiles, personal preferences, relationships, health risk,
                    and measurable outcomes, all by hand. The result was extreme
                    documentation fatigue and organizational burnout at the
                    frontline.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-[#00ffcc]/20 bg-white/5 backdrop-blur-sm">
                  <h4 className="text-[#00ffcc] text-[14px] font-black uppercase tracking-widest mb-3 font-orbitron">
                    The Compliance Gap
                  </h4>
                  <p className="text-base text-white/85">
                    State auditors require rigorous Active Treatment language,
                    structured communication profiles, and documented
                    person-centered supports. Vague phrasing, missing
                    communication barriers, or undocumented natural supports led
                    to rejected plans, delayed services, and compounding audit
                    risk — on plans that staff had already spent hours writing.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-red-500/30 bg-white/5 backdrop-blur-sm">
                  <h4 className="text-red-400 text-[14px] font-black uppercase tracking-widest mb-3 font-orbitron">
                    The HIPAA Constraint
                  </h4>
                  <p className="text-base text-white/85">
                    Standard cloud tools — Notion, Google Docs, shared drives —
                    were prohibited. No BAA, no compliance. Any solution
                    handling PHI had to meet HIPAA&apos;s Security Rule without
                    transmitting data to any external server. That constraint
                    ruled out virtually every off-the-shelf tool on the market.
                    It also meant session management, idle timeouts, and PHI
                    retention policies all had to be engineered client-side.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── 02 // THE SOLUTION ── */}
          <section
            id="solution"
            className="grid lg:grid-cols-3 gap-12 pt-[100px]"
          >
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black uppercase tracking-tight sticky top-12 font-orbitron">
                <span className="text-[#00ffcc]/40">02 //</span> The{" "}
                <span className="text-[#00ffcc]">Solution</span>
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-5">
                <div className="relative">
                  <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00ffcc] to-transparent opacity-40" />
                  <div className="absolute right-0 left-0 bottom-0 h-[3px] bg-gradient-to-r from-[#00ffcc] to-transparent opacity-40" />
                  <div className="pr-6 pb-6">
                    <p className="text-lg text-white/95 font-medium leading-relaxed">
                      The answer wasn&apos;t a SaaS platform or an enterprise
                      system. It was a single HTML file.
                    </p>
                  </div>
                </div>
                <p className="text-base text-white/70 leading-relaxed">
                  I engineered PCSP Assistant Pro as a{" "}
                  <span className="text-white font-semibold">
                    Zero-Footprint Logic Engine
                  </span>{" "}
                  — a clinical drafting tool that runs entirely in the
                  browser&apos;s volatile RAM. It processes sensitive PHI
                  locally, generates Missouri-compliant narrative language in
                  real time, and leaves no trace when the tab closes. No
                  servers. No POST requests. No IT tickets. No licensing cost.
                </p>
                <p className="text-base text-white/70 leading-relaxed">
                  The interface covers all nine PCSP domains in a single unified
                  workspace, from demographics to measurable outcomes — with a
                  clinical word bank, a dynamic communication chart, an
                  unlimited important-people roster, and a multi-goal outcomes
                  engine baked directly into the logic.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#00ffcc]/20 bg-[#00ffcc]/5 p-2 aspect-video">
                <Image
                  src="/DTE-E-Portfolio/assets/pcsp2.png"
                  alt="PCSP Workflow diagram"
                  fill
                  quality={80}
                  className="rounded-xl opacity-80 shadow-2xl w-full h-full object-cover hover:scale-105 transition-all duration-700 cursor-pointer"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {solutionFeatures.map(({ icon, title, body }) => (
                  <div key={title} className="space-y-3">
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-3 font-orbitron">
                      <Icon
                        icon={icon}
                        className="text-[#00ffcc] text-base flex-shrink-0"
                      />
                      {title}
                    </h4>
                    <p className="text-sm text-white/75 leading-relaxed">
                      {body.includes(".pcsp") ? (
                        <>
                          {body.split(".pcsp").map((part, i, arr) =>
                            i < arr.length - 1 ? (
                              <React.Fragment key={i}>
                                {part}
                                <span className="text-[#00ffcc] font-mono">
                                  .pcsp
                                </span>
                              </React.Fragment>
                            ) : (
                              part
                            ),
                          )}
                        </>
                      ) : (
                        body
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 03 // THE EXECUTION ── */}
          <section
            id="execution"
            className="grid lg:grid-cols-3 gap-12 pt-[100px]"
          >
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black uppercase tracking-tight sticky top-12 font-orbitron">
                <span className="text-[#00ffcc]/40">03 //</span> The{" "}
                <span className="text-[#00ffcc]">Execution</span>
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-12">
              <div className="relative">
                <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00ffcc] to-transparent opacity-40" />
                <div className="absolute right-0 left-0 bottom-0 h-[3px] bg-gradient-to-r from-[#00ffcc] to-transparent opacity-40" />
                <p className="text-base text-white/70 leading-relaxed pr-6 pb-6">
                  The execution wasn&apos;t linear. Every architectural decision
                  was a deliberate tradeoff between compliance, usability, and
                  maintainability — built for staff who needed a tool, not a
                  tutorial.
                </p>
              </div>

              <div className="space-y-8">
                {executionSteps.map(({ num, title, body }) => (
                  <div key={num} className="flex gap-6 items-start group">
                    <div className="text-[#00ffcc] font-black font-space text-3xl opacity-20 italic flex-shrink-0 group-hover:opacity-40 transition-opacity">
                      {num}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold uppercase tracking-widest text-base font-orbitron">
                        {title}
                      </h4>
                      <p className="text-sm text-white/75 leading-relaxed">
                        {body.includes(".pcsp") ? (
                          <>
                            {body.split(".pcsp").map((part, i, arr) =>
                              i < arr.length - 1 ? (
                                <React.Fragment key={i}>
                                  {part}
                                  <span className="text-[#00ffcc] font-mono">
                                    .pcsp
                                  </span>
                                </React.Fragment>
                              ) : (
                                part
                              ),
                            )}
                          </>
                        ) : (
                          body
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#00ffcc]/20 bg-[#00ffcc]/5 p-2 aspect-video">
                <Image
                  src="/DTE-E-Portfolio/assets/pcsp3.png"
                  alt="Clinical Logic Builder interface"
                  fill
                  quality={80}
                  className="rounded-xl opacity-80 shadow-2xl w-full h-full object-cover hover:scale-105 transition-all duration-700 cursor-pointer"
                />
              </div>

              {/* 9 Domains */}
              <div className="p-6 rounded-xl border border-[#00ffcc]/20 bg-white/5">
                <h4 className="text-[#00ffcc] text-[13px] font-black uppercase tracking-widest mb-6 font-orbitron">
                  Full Section Architecture — 9 PCSP Domains
                </h4>
                <div className="grid md:grid-cols-3 gap-3">
                  {domains.map(({ num, label }) => (
                    <div
                      key={num}
                      className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5 hover:border-[#00ffcc]/20 transition-colors"
                    >
                      <span className="text-[#00ffcc]/30 font-mono text-[11px] font-black flex-shrink-0">
                        {num}
                      </span>
                      <span className="text-white/80 text-[12px] font-bold uppercase tracking-wide">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 04 // THE IMPACT ── */}
          <section
            id="impact"
            className="grid lg:grid-cols-3 gap-12 pt-[100px]"
          >
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black uppercase tracking-tight sticky top-12 font-orbitron">
                <span className="text-[#00ffcc]/40">04 //</span> The{" "}
                <span className="text-[#00ffcc]">Impact</span>
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-12">
              <div className="relative">
                <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00ffcc] to-transparent opacity-40" />
                <div className="absolute right-0 left-0 bottom-0 h-[3px] bg-gradient-to-r from-[#00ffcc] to-transparent opacity-40" />
                <p className="text-base text-white/70 leading-relaxed pr-6 pb-6">
                  The shift from passive to active documentation wasn&apos;t
                  incremental — it was structural. Every metric below reflects a
                  process that no longer requires rework.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr>
                      {["Metric", "Pre-Deployment", "Post-Deployment"].map(
                        (h) => (
                          <th
                            key={h}
                            className="text-[#00ffcc] uppercase text-[0.7rem] tracking-[0.2em] p-3 font-orbitron"
                          >
                            {h}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {impactRows.map(({ metric, before, after }) => (
                      <tr
                        key={metric}
                        className="bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                      >
                        <td className="p-4 border-t border-b border-l border-white/5 rounded-l-lg font-bold text-white">
                          {metric}
                        </td>
                        <td className="p-4 border-t border-b border-white/5 text-white/60 italic">
                          {before}
                        </td>
                        <td className="p-4 border-t border-b border-r border-white/5 rounded-r-lg text-[#00ffcc] font-black uppercase tracking-widest">
                          {after}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── 05 // TECHNICAL APPENDIX ── */}
          <section
            id="appendix"
            className="grid lg:grid-cols-3 gap-12 pt-[100px]"
          >
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black uppercase tracking-tight sticky top-12 font-orbitron">
                <span className="text-[#00ffcc]/40">05 //</span> Technical{" "}
                <span className="text-[#00ffcc]">Appendix</span>
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-12">
              {/* I. Data Lifecycle */}
              <div className="space-y-6">
                <h3 className="text-white font-bold uppercase tracking-widest text-base border-b border-accent/40 pb-2 font-orbitron">
                  I. Data Lifecycle Management
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  The primary security feature is its{" "}
                  <span className="text-white font-semibold">
                    Stateless Architecture
                  </span>
                  . Unlike SaaS platforms, this tool functions as a pure
                  client-side processor — data exists only for the duration of
                  the session.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Zero-Persistence",
                      body: "All logic executes in browser RAM. Data never leaves volatile memory during a live session.",
                    },
                    {
                      title: 'The "Refresh" Wipe',
                      body: "Closing the tab instantly purges all session data. No database, no POST requests, no residual trace.",
                    },
                    {
                      title: ".pcsp Export",
                      body: "When persistence is needed, the full plan state serializes to a local .pcsp file. The CM controls where it lives — agency drive, encrypted USB, or secure folder.",
                    },
                    {
                      title: "Browser Drafts",
                      body: "Up to 20 in-progress drafts persist in localStorage on the local machine only — never synced, never transmitted. Drafts auto-expire and are purged after 30 days per HIPAA retention policy.",
                    },
                    {
                      title: "Idle Session Timeout",
                      body: "After 30 minutes of inactivity, the system presents a HIPAA workstation policy prompt. Dismissing it clears the auto-save and reloads — satisfying unattended workstation requirements without IT configuration.",
                    },
                    {
                      title: "Auto-Save & Restore",
                      body: "A 4-second debounced write saves session state to localStorage after every change. A restore prompt appears on next load if an auto-save younger than 48 hours is detected.",
                    },
                  ].map(({ title, body }) => (
                    <div
                      key={title}
                      className="p-4 rounded-lg bg-white/5 border border-[#00ffcc]/20"
                    >
                      <span className="text-[#00ffcc] text-[13px] font-black uppercase block mb-2 font-orbitron">
                        {title}
                      </span>
                      <p className="text-[13px] text-white/75 leading-relaxed">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* II. Clinical Logic */}
              <div className="space-y-6">
                <h3 className="text-white font-bold uppercase tracking-widest text-base border-b border-accent/40 pb-2 font-orbitron">
                  II. Missouri Clinical Logic
                </h3>
                <div className="p-6 rounded-xl bg-black border border-accent/40 font-mono text-sm space-y-1">
                  <div>
                    <span className="text-zinc-600">
                      Active verb structures (Missouri-approved)
                    </span>
                  </div>
                  {[
                    [
                      "Instructional",
                      "instructional support to learn how to {goal}",
                    ],
                    [
                      "Maintenance",
                      "maintenance support to continue to {goal}",
                    ],
                    [
                      "Physical/Direct",
                      "physical and direct support to {goal}",
                    ],
                    ["Modeling", "modeling and demonstration to {goal}"],
                    ["Verbal Prompts", "verbal prompts and cues to {goal}"],
                  ].map(([label, val]) => (
                    <div key={label}>
                      <span className="text-purple-400">{label}: </span>
                      <span className="text-yellow-200">
                        &quot;Staff will provide {val}&quot;
                      </span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <span className="text-zinc-400">Frequency: </span>
                    <span className="text-yellow-200">
                      &quot;{"{frequency}"} | Provider: {"{provider}"}&quot;
                    </span>
                  </div>
                  <div className="text-zinc-400">
                    Monitoring: SC Quarterly &amp; Provider Monthly.
                  </div>
                </div>
                <p className="text-xs text-white/50 italic">
                  Variable sanitization: user input is HTML-escaped before
                  rendering into the DOM to prevent injection via names,
                  relationship fields, or goal text.
                </p>
              </div>

              {/* III. Dynamic Data */}
              <div className="space-y-6">
                <h3 className="text-white font-bold uppercase tracking-widest text-base border-b border-accent/40 pb-2 font-orbitron">
                  III. Dynamic Data Architecture
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Several PCSP sections require an unbounded number of entries —
                  legal representatives, communication chart rows, important
                  people and their activities, and outcome goals. Fixed forms
                  don&apos;t work here: a client might have two guardians or
                  six, one goal or nine. Each section manages entries as
                  in-memory JavaScript arrays, rendered to the DOM on every
                  state change and serialized with full fidelity on{" "}
                  <span className="text-[#00ffcc] font-mono">.pcsp</span>{" "}
                  export.
                </p>
                <div className="p-6 rounded-xl bg-black border border-accent/40 font-mono text-sm space-y-1">
                  {[
                    // ── FIXED: added goalsData ──
                    ["legalReps", "guardians, POA, custodians"],
                    ["commChartRows", "behavior → meaning → staff response"],
                    ["importantPeople", "person → relationship → activities[]"],
                    ["goalsData", "domain → verb → template → provider[]"],
                  ].map(([varName, comment]) => (
                    <div key={varName}>
                      <span className="text-purple-400">{varName}</span>
                      <span className="text-zinc-400"> = [] </span>
                      <span className="text-zinc-600">{"//"}{comment}</span>
                    </div>
                  ))}
                  <div className="pt-2 text-zinc-600">
                    all arrays serialize into .pcsp on export
                  </div>
                  <div className="text-zinc-600">
                    and restore with full fidelity on import
                  </div>
                </div>
              </div>

              {/* IV. UI Components */}
              <div className="space-y-6">
                <h3 className="text-white font-bold uppercase tracking-widest text-base border-b border-accent/40 pb-2 font-orbitron">
                  IV. Interactive UI Components
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Custom lightweight multi-select dropdowns with animated tag
                  systems handle complex, multi-dimensional data capture —
                  learning styles, health parameters, legal authority roles —
                  while maintaining a clean, single-page UI footprint. No
                  framework overhead. No third-party component libraries. Every
                  interaction is purpose-built for clinical context. Section
                  completion indicators (green dot / gray dot) give coordinators
                  an instant visual audit of plan completeness at a glance.
                </p>
              </div>

              {/* V. Output Pipeline */}
              <div className="space-y-6">
                <h3 className="text-white font-bold uppercase tracking-widest text-base border-b border-accent/40 pb-2 font-orbitron">
                  V. Output Pipeline
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      icon: "solar:printer-linear",
                      title: "Print / PDF",
                      body: "A dedicated print stylesheet strips all UI chrome and stamps a HIPAA confidentiality footer on every page. Outputs a clean, PCSP-formatted document ready for signature or filing.",
                    },
                    {
                      icon: "solar:diskette-linear",
                      title: ".pcsp File",
                      body: "Full plan state exported as a portable JSON-based file. Drag-and-drop or file-select auto-fills every field — static and dynamic — on re-import.",
                    },
                    {
                      icon: "solar:copy-linear",
                      title: "Clipboard",
                      body: "One-click copy of the full narrative summary for direct paste into CIMOR, MOEDIWEB, or any agency system.",
                    },
                  ].map(({ icon, title, body }) => (
                    <div
                      key={title}
                      className="p-4 rounded-lg bg-white/5 border border-[#00ffcc]/20 text-center"
                    >
                      <Icon
                        icon={icon}
                        className="text-[#00ffcc] text-2xl mx-auto mb-2"
                      />
                      <span className="text-[#00ffcc] text-[13px] font-black uppercase block mb-2 font-orbitron">
                        {title}
                      </span>
                      <p className="text-[12px] text-white/65 leading-relaxed">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* VI. Deployment */}
              <div className="space-y-4">
                <h3 className="text-white font-bold uppercase tracking-widest text-base border-b border-accent/40 pb-2 font-orbitron">
                  VI. Deployment Strategy
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Hosted on the agency&apos;s{" "}
                  <span className="text-white font-semibold">
                    internal drive
                  </span>
                  , it inherits existing Windows Active Directory permissions —
                  no separate login system required. Staff open the file in any
                  modern browser. No installation, no IT ticket, no licensing
                  cost. The &quot;server&quot; was already on every desk.
                </p>
              </div>
            </div>
          </section>

          {/* ── 06 // CONCLUSION ── */}
          <section id="conclusion" className="pb-32">
            <div className="circuit-border p-12 bg-[#00ffcc]/5 rounded-2xl text-center border border-[#00ffcc]/20">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-8 font-orbitron">
                <span className="text-[#00ffcc]/40">06 //</span> Conclusion
              </h2>
              <p className="text-lg font-space text-white/75 max-w-3xl mx-auto leading-relaxed mb-4">
                This project sits at an unusual intersection: clinical
                compliance, zero-infrastructure security, and a genuine need to
                reduce burnout for frontline staff.
              </p>
              <p className="text-lg font-space text-white/75 max-w-3xl mx-auto leading-relaxed mb-4">
                The constraint of &quot;no cloud tools&quot; that initially
                seemed like a limitation turned out to be the design brief. A
                stateless, browser-based architecture wasn&apos;t a workaround —
                it was the right answer. By keeping everything in volatile
                memory, I eliminated both the HIPAA risk and the IT bottleneck
                in a single architectural decision.
              </p>
              <p className="text-lg font-space text-white/75 max-w-3xl mx-auto leading-relaxed mb-12">
                The result covers every Missouri PCSP domain, satisfies
                HIPAA&apos;s Security Rule without a BAA or a server, enforces
                PHI retention policies client-side, and gets case managers from
                blank page to audit-ready narrative in under two minutes.
                That&apos;s the kind of problem frontend engineering is uniquely
                positioned to solve.
              </p>
              <div className="flex justify-center gap-8 flex-wrap">
                <a
                  href="https://dte-84.github.io/PCSP-assistant-PRO/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#00ffcc] text-[#0a0a0c] font-bold uppercase tracking-widest text-xs rounded hover:scale-105 transition-all"
                >
                  Launch Live App
                </a>
                <Link
                  href="/"
                  className="px-8 py-4 border border-[#00ffcc]/20 text-[#00ffcc] font-black uppercase tracking-widest text-xs rounded hover:bg-[#00ffcc]/5 transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-[#00ffcc]/20 text-center">
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-40 text-[#00ffcc]">
          Portfolio 2026
        </p>
      </footer>
    </div>
  );
}
