"use client";
import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollLock } from "../hooks/useScrollLock";
import { useTrapFocus } from "../hooks/useTrapFocus";

export default function Navbar() {
        const [isOpen, setIsOpen] = useState(false);
        const [scrolled, setScrolled] = useState(false);
        const mobileMenuRef = useRef<HTMLDivElement>(null);
        
        // Lock scroll and trap focus when mobile menu is open
        useScrollLock(isOpen);
        useTrapFocus(mobileMenuRef, isOpen, () => setIsOpen(false));

        useEffect(() => {
                const onScroll = () => setScrolled(window.scrollY > 50);
                window.addEventListener("scroll", onScroll);
                return () => window.removeEventListener("scroll", onScroll);
        }, []);

        const closeMenu = () => setIsOpen(false);
        const toggleMenu = () => setIsOpen((prev) => !prev);

        const navLinks = [
                { href: "#projects", label: "Work" },
                { href: "#about", label: "About" },
        ];

        return (
                <>
                        <nav
                                className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled || isOpen ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-8"}`}>
                                <div className='max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center'>
                                        <Link
                                                href='/v3'
                                                className='text-2xl font-black tracking-tighter text-white group z-[1001]'
                                                onClick={closeMenu}>
                                                <Image src="/assets/DREWMAINLOGO.png" alt="DTE" width={100} height={32} className="h-8 w-auto object-contain group-hover:scale-105 transition-transform" />
                                        </Link>

                                        <div className='hidden md:flex gap-12 items-center'>
                                                {navLinks.map(({ href, label }) => (
                                                        <a
                                                                key={href}
                                                                href={href}
                                                                className='nav-link text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors'>
                                                                {label}
                                                        </a>
                                                ))}
                                                <a
                                                        href='/resume'
                                                        target='_blank'
                                                        className='px-6 py-2 border border-accent/40 text-accent text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all'>
                                                        Resume
                                                </a>
                                        </div>

                                        <div className='hidden md:flex items-center'>
                                                <Link
                                                        href='/'
                                                        className='group relative px-4 py-2 overflow-hidden border border-white/10 transition-all hover:border-[#7dd3fc]/50'>
                                                        <span className='relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/70 group-hover:text-[#7dd3fc] transition-colors'>
                                                                Switch to V2.2
                                                        </span>
                                                        <div className='absolute inset-0 z-0 bg-[#7dd3fc]/5 opacity-0 group-hover:opacity-100 transition-opacity' />
                                                </Link>
                                        </div>

                                        <button
                                                className='md:hidden text-white z-[1001] p-2'
                                                onClick={toggleMenu}
                                                aria-label='Toggle Menu'
                                                aria-expanded={isOpen}>
                                                {isOpen ? (
                                                        <Icon icon='solar:close-circle-bold' className='text-3xl' />
                                                ) : (
                                                        <Icon icon='solar:hamburger-menu-linear' className='text-3xl' />
                                                )}
                                        </button>
                                </div>
                        </nav>

                        {/* Mobile Menu Overlay */}
                        <div
                                ref={mobileMenuRef}
                                role='dialog'
                                aria-modal='true'
                                aria-labelledby='mobile-menu-title'
                                className={`fixed inset-0 bg-black z-[999] flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
                                <h2 id='mobile-menu-title' className='sr-only'>
                                        Main Navigation
                                </h2>

                                {navLinks.map(({ href, label }) => (
                                        <a
                                                key={href}
                                                href={href}
                                                className='text-4xl font-black uppercase tracking-tighter text-white hover:text-accent transition-colors'
                                                onClick={closeMenu}>
                                                {label}
                                        </a>
                                ))}

                                <a
                                        href='/resume'
                                        target='_blank'
                                        className='mt-4 px-12 py-4 border border-accent/40 text-accent text-lg font-black uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all'
                                        onClick={closeMenu}>
                                        Resume
                                </a>
                        </div>
                </>
        );
}



