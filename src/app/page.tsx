"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
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
									<div key={tech} className='flex items-center justify-center w-[100px] h-[38px] bg-white/5 border border-white/20 text-white/80 text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white hover:backdrop-blur-md transition-all duration-300 cursor-default font-space'>
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
									<div key={tech} className='flex items-center justify-center w-[100px] h-[38px] bg-accent/5 border border-accent/20 text-accent text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 hover:border-accent hover:backdrop-blur-md transition-all duration-300 cursor-default font-space'>
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
									<div key={tech} className='flex items-center justify-center w-[100px] h-[38px] bg-sky-500/5 border border-sky-500/20 text-sky-400 text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 hover:border-sky-400 hover:backdrop-blur-md transition-all duration-300 cursor-default font-space'>
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
                document.documentElement.setAttribute("data-theme", newTheme === "blue" ? "default" : "yellow");
        };

        useEffect(() => {
                document.documentElement.setAttribute("data-theme", "default");
        }, []);

        return (
                <div className="min-h-screen relative overflow-hidden selection:bg-accent/30 font-space selection:text-white">
                        {/* Background Layer */}
                        <div className="fixed inset-0 bg-black -z-20" />
                        <BgAnimation />
                        <ScrollNav />

                        {/* HIGH-FIDELITY NAVBAR */}
                        <Navbar onContactClick={() => setIsContactOpen(true)} />

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
