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
                        <Navbar onContactClick={() => setIsContactOpen(true)} theme={theme} onThemeToggle={toggleTheme} />

                        <main id="main-content" className="relative z-10 bg-transparent">
                                <Hero />

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
