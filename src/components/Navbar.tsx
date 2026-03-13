"use client";
import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useScrollLock } from "../hooks/useScrollLock";
import { useTrapFocus } from "../hooks/useTrapFocus";

interface NavbarProps {
  onContactClick?: () => void;
  theme?: string;
  onThemeToggle?: () => void;
}

export default function Navbar({ onContactClick, theme, onThemeToggle }: NavbarProps) {
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
                { href: "#contact", label: "Contact" },
        ];

        const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
                if (href === "#contact" && onContactClick) {
                        e.preventDefault();
                        onContactClick();
                        closeMenu();
                } else {
                        closeMenu();
                }
        };

        return (
                <>
                        <nav
                                className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled || isOpen ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-8"}`}>
                                <div className='max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center'>
                                        <div className='tech-logo-static flex items-center gap-3 cursor-default'>
                                                <div className="w-8 h-8 bg-accent/10 border border-accent flex items-center justify-center [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)]">
                                                        <span className="text-white font-black text-xs tracking-tighter">D</span>
                                                </div>
                                                <span className='text-xl font-black tracking-tighter text-white uppercase'>
                                                        DTE <span className="text-accent/60">Solutions</span>
                                                </span>
                                        </div>

                                        <div className='hidden md:flex gap-12 items-center'>
                                                {navLinks.map(({ href, label }) => (
                                                        <a
                                                                key={href}
                                                                href={href}
                                                                onClick={(e) => handleLinkClick(e, href)}
                                                                className='nav-link text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors'>
                                                                {label}
                                                        </a>
                                                ))}
                                                <a
                                                        href='/DTE-E-Portfolio/assets/DTE_Resume.pdf'
                                                        target='_blank'
                                                        className='px-6 py-2 border border-accent/40 text-accent text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all'>
                                                        Resume
                                                </a>
                                        </div>

                                        <div className='hidden md:flex items-center gap-4'>
                                                {onThemeToggle && (
                                                        <div
                                                                className='protocol-switch flex items-center gap-3 cursor-pointer'
                                                                onClick={onThemeToggle}>
                                                                <div className='slider w-9 h-[18px] bg-[#222] rounded-[20px] relative border border-accent'>
                                                                        <div
                                                                                className={`dot absolute w-3 h-3 top-0.5 bg-accent rounded-full transition-transform duration-300 ${theme === "yellow" ? "translate-x-[18px]" : "translate-x-0.5"}`}></div>
                                                                </div>
                                                                <span className='protocol-label text-[14px] font-bold text-accent tracking-widest uppercase font-space'>
                                                                        Protocol
                                                                </span>
                                                        </div>
                                                )}
                                                <Link
                                                        href='https://dte-84.github.io/DTE-E-Portfolio/v3'
                                                        className='group relative px-4 py-2 overflow-hidden border border-white/10 transition-all hover:border-accent/50'>
                                                        <span className='relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/70 group-hover:text-accent transition-colors'>
                                                                Switch to V3
                                                        </span>
                                                        <div className='absolute inset-0 z-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity' />
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
                                                onClick={(e) => handleLinkClick(e, href)}
                                                className='text-4xl font-black uppercase tracking-tighter text-white hover:text-accent transition-colors'>
                                                {label}
                                        </a>
                                ))}

                                <a
                                        href='/DTE-E-Portfolio/assets/DTE_Resume.pdf'
                                        target='_blank'
                                        className='mt-4 px-12 py-4 border border-accent/40 text-accent text-lg font-black uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all'
                                        onClick={closeMenu}>
                                        Resume
                                </a>
                        </div>
                </>
        );
}
