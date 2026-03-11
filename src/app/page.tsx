"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import BgAnimation from "../components/BgAnimation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import VersionSelector from "../components/VersionSelector";
import ContactModal from "../components/ContactModal";
import ScrollNav from "../components/ScrollNav";
import { Icon } from "@iconify/react";

// Tools of the Trade component integrated for v2.2 high-fidelity layout
const ToolsOfTheTrade = () => {
	return (
		<section id='tools' className='py-24 border-y border-white/5 bg-zinc-950/30 relative z-10'>
			<div className='container-main'>
				<div className='flex flex-col items-center gap-12 w-full'>
					<div className='flex items-center justify-center gap-4 md:gap-8 py-4'>
						<div className='h-[1px] w-8 md:w-12 bg-accent shadow-[0_0_10px_#00ffcc]'></div>
						<h4 className='text-[12px] md:text-[14px] font-bold text-accent uppercase tracking-[4px] md:tracking-[6px] whitespace-nowrap'>
							Tools of the Trade
						</h4>
						<div className='h-[1px] w-8 md:w-12 bg-accent shadow-[0_0_10px_#00ffcc]'></div>
					</div>

					<div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center w-full'>
						<div className='flex flex-col items-center gap-4'>
							<span className='text-[10px] font-mono uppercase tracking-[3px] text-white/40'>Systems & Core</span>
							<div className='flex flex-wrap justify-center gap-3 md:gap-4 max-w-[350px]'>
								{["React", "TypeScript", "Python", "Java", "C#", "Node.js"].map((tech) => (
									<div key={tech} className='flex items-center justify-center w-[100px] h-[38px] bg-accent/5 border border-accent/20 text-accent text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 hover:border-accent hover:backdrop-blur-md transition-all duration-300 cursor-default'>
										{tech}
									</div>
								))}
							</div>
						</div>
						<div className='w-12 h-[1px] bg-white/10 md:w-[1px] md:h-12'></div>
						<div className='flex flex-col items-center gap-4'>
							<span className='text-[10px] font-mono uppercase tracking-[3px] text-white/40'>Cloud & Database</span>
							<div className='flex flex-wrap justify-center gap-3 md:gap-4 max-w-[350px]'>
								{["AWS", "Azure", "Docker", "SQL", "Git", ".NET"].map((tech) => (
									<div key={tech} className='flex items-center justify-center w-[100px] h-[38px] bg-accent/5 border border-accent/20 text-accent text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 hover:border-accent hover:backdrop-blur-md transition-all duration-300 cursor-default'>
										{tech}
									</div>
								))}
							</div>
						</div>
						<div className='w-12 h-[1px] bg-white/10 md:w-[1px] md:h-12'></div>
						<div className='flex flex-col items-center gap-4'>
							<span className='text-[10px] font-mono uppercase tracking-[3px] text-white/40'>UI/UX & Method</span>
							<div className='flex flex-wrap justify-center gap-3 md:gap-4 max-w-[350px]'>
								{["Tailwind", "GSAP", "Figma", "OOD", "SDLC", "Agile"].map((tech) => (
									<div key={tech} className='flex items-center justify-center w-[100px] h-[38px] bg-accent/5 border border-accent/20 text-accent text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 hover:border-accent hover:backdrop-blur-md transition-all duration-300 cursor-default'>
										{tech}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default function Home() {
        const [theme, setTheme] = useState("blue");
        const [isGatewayOpen, setIsGatewayOpen] = useState(false);
        const [isContactOpen, setIsContactOpen] = useState(false);

        const toggleGateway = () => setIsGatewayOpen(!isGatewayOpen);

        const toggleTheme = () => {
                const newTheme = theme === "blue" ? "yellow" : "blue";
                setTheme(newTheme);
                document.documentElement.setAttribute("data-theme", newTheme);
        };

        useEffect(() => {
                document.documentElement.setAttribute("data-theme", "blue");
        }, []);

        return (
                <div className="min-h-screen relative overflow-hidden bg-black selection:bg-accent/30 font-space selection:text-white">
                        <BgAnimation />
                        <ScrollNav />

                        {/* HIGH-FIDELITY NAVBAR */}
                        <nav className="fixed top-0 left-0 w-full z-[1000] border-b border-white/5 bg-black/40 backdrop-blur-md">
                                <div className="container-main h-20 flex items-center justify-between">
                                        <div className="nav-section-left flex-1 flex items-center gap-12">
                                                <div className="tech-logo">
                                                        <Link href="/" className="logo-hex bg-accent/10 border border-accent px-4 py-2 [clip-path:polygon(15%_0,100%_0,85%_100%,0%_100%)] transition-all hover:skew-x-[-5deg] group cursor-pointer block">
                                                                <span className="logo-text font-space text-[22px] font-black text-white tracking-[2.5px] [text-shadow:0_0_10px_rgba(0,255,204,0.5)]">
                                                                        DTE
                                                                </span>
                                                        </Link>
                                                </div>

                                                <ul className="hidden lg:flex gap-10">
                                                        {["home", "about", "projects"].map((id) => (
                                                                <li key={id}>
                                                                        <a
                                                                                href={`#${id}`}
                                                                                className="nav-link text-[10px] font-black uppercase tracking-[3px] text-white/40 hover:text-accent transition-all duration-300"
                                                                        >
                                                                                {id}
                                                                        </a>
                                                                </li>
                                                        ))}
                                                        <li>
                                                                <Link href="/" className="nav-link text-[10px] font-black uppercase tracking-[3px] text-accent/60 hover:text-accent transition-all duration-300 border-b border-accent/30">v2.2</Link>
                                                        </li>
                                                        <li>
                                                                <Link href="/v3" className="nav-link text-[10px] font-black uppercase tracking-[3px] text-violet-400 hover:text-violet-300 transition-all duration-300">v3</Link>
                                                        </li>
                                                </ul>
                                        </div>

                                        <div className="nav-section-right flex-1 flex justify-end gap-4 items-center">
                                                <div
                                                        className="protocol-switch flex items-center gap-3 cursor-pointer"
                                                        onClick={toggleTheme}
                                                >
                                                        <div className="slider w-9 h-[18px] bg-[#222] rounded-[20px] relative border border-accent">
                                                                <div
                                                                        className={`dot absolute w-3 h-3 top-0.5 bg-accent rounded-full transition-transform duration-300 ${theme === "yellow" ? "translate-x-[18px]" : "translate-x-0.5"}`}
                                                                ></div>
                                                        </div>
                                                        <span className="protocol-label text-[14px] font-bold text-accent tracking-widest uppercase font-space hidden md:block">
                                                                Protocol
                                                        </span>
                                                </div>
                                        </div>
                                </div>
                        </nav>

                        <main id="main-content" className="relative z-10 bg-transparent">
                                <Hero />
                                <ToolsOfTheTrade />
                                <About />
                                <Projects />
                        </main>

                        <Footer onGatewayClick={toggleGateway} onContactClick={() => setIsContactOpen(true)} />

                        <VersionSelector isOpen={isGatewayOpen} onClose={toggleGateway} />

                        {isContactOpen && (
                                <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
                        )}
                </div>
        );
}
