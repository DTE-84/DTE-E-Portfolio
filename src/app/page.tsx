"use client";

import React, { useEffect, useState, useRef } from "react";
import BgAnimation from "../components/BgAnimation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import VersionSelector from "../components/VersionSelector";
import ShatterPortal from "../components/ShatterPortal";
import { Icon } from "@iconify/react";

export default function Home() {
        const [theme, setTheme] = useState("blue");
        const [isGatewayOpen, setIsGatewayOpen] = useState(false);

        const toggleGateway = () => setIsGatewayOpen(!isGatewayOpen);

	const scrollToFooter = () => {
		const footer = document.getElementById('footer');
		if (footer) footer.scrollIntoView({ behavior: 'smooth' });
	};

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

                        {/* HIGH-FIDELITY NAVBAR */}
                        <nav className="fixed top-0 left-0 w-full z-[1000] border-b border-white/5 bg-black/40 backdrop-blur-md">
                                <div className="container-main h-20 flex items-center justify-between">
                                        <div className="nav-section-left flex-1 flex items-center gap-12">
                                                <div className="tech-logo">
                                                        <div className="logo-hex bg-accent/10 border border-accent px-4 py-2 [clip-path:polygon(15%_0,100%_0,85%_100%,0%_100%)] transition-all hover:skew-x-[-5deg] group cursor-default">
                                                                <span className="logo-text font-space text-[22px] font-black text-white tracking-[2.5px] [text-shadow:0_0_10px_rgba(var(--theme-accent-rgb),0.5)]">
                                                                        DTE
                                                                </span>
                                                        </div>
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
                                                                <a href="/" className="nav-link text-[10px] font-black uppercase tracking-[3px] text-accent/60 hover:text-accent transition-all duration-300">v2.2</a>
                                                        </li>
                                                        <li>
                                                                <a href="/v3" className="nav-link text-[10px] font-black uppercase tracking-[3px] text-violet-400 hover:text-violet-300 transition-all duration-300">v3</a>
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
                                <About />
                                <Projects />
                                <ShatterPortal />
                        </main>

                        <Footer onGatewayClick={toggleGateway} onContactClick={scrollToFooter} />

                        {isGatewayOpen && (
                                <VersionSelector isOpen={isGatewayOpen} onClose={toggleGateway} />
                        )}
                </div>
        );
}


