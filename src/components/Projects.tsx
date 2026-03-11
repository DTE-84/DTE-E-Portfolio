"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

interface Project {
        id: string;
        title: string;
        category: string;
        year: string;
        description: string;
        tags: string[];
        image: string;
        video?: string;
        link: string;
        caseStudy?: string;
        featured: boolean;
        hidden?: boolean;
}

const VideoPlayer: React.FC<{ src: string; poster: string }> = ({ src, poster }) => {
        const videoRef = useRef<HTMLVideoElement>(null);

        useEffect(() => {
                const observer = new IntersectionObserver(
                        (entries) => {
                                entries.forEach((entry) => {
                                        if (entry.isIntersecting) {
                                                videoRef.current?.play().catch(() => {});
                                        } else {
                                                videoRef.current?.pause();
                                        }
                                });
                        },
                        { threshold: 0.2 }
                );

                if (videoRef.current) {
                        observer.observe(videoRef.current);
                }

                return () => observer.disconnect();
        }, []);

        return (
                <video
                        ref={videoRef}
                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                        loop
                        muted
                        playsInline
                        poster={poster}
                >
                        <source src={src} type='video/mp4' />
                </video>
        );
};

const Projects: React.FC = () => {

        const deployments: Project[] = [                {
                        id: "NEST_LEGACY",
                        title: "NestLegacy",
                        category: "Enterprise Wealth Technology",
                        year: "2026",
                        description:
                                "AI-driven lead intelligence engine for the $84 trillion wealth transfer. Orchestrates behavioral financial modeling to bridge the trust gap between inheritors and fiduciary experts.",
                        tags: ["React 19", "Behavioral Finance", "Lead Intelligence"],
                        image: "/assets/novaui.png",
                        link: "https://dte-84.github.io/NestLegacy/",
                        featured: true,
                },
                {
                        id: "PCSP_ASSISTANT",
                        title: "PCSP Assistant Pro",
                        category: "Healthcare Compliance Engine",
                        year: "2025",
                        description:
                                "Clinical data validation engine synthesizing unstructured patient narratives with Missouri DMH/HCBS compliance frameworks; features zero-knowledge PHI security and automated documentation logic.",
                        tags: ["Next.js", "Compliance Logic", "HIPAA"],
                        image: "/assets/pcsp1.png",
                        video: "/assets/CaseStudy-PCSP-1771755500766.mp4",
                        link: "https://dte-84.github.io/case-study-pcsp/",
                        caseStudy: "/case-study-pcsp",
                        featured: true,
                },
                {
                        id: "PULSE_FINANCE",
                        title: "Pulse",
                        category: "Behavioral Intelligence",
                        year: "2026",
                        description:
                                "Integrated financial data ecosystem (Plaid API, AWS S3 unstructured metadata, and MongoDB) utilizing a Python/FastAPI backend to deliver real-time behavioral insights and multi-source wealth forecasting.",
                        tags: ["Python FastAPI", "Data Science", "AWS"],
                        image: "/assets/novaui.png",
                        video: "/assets/DTESolutionsFinanceTrack.mp4",
                        link: "https://dte-84.github.io/Pulse/",
                        featured: true,
                },
                {
                        id: "CADDIE_FLUFF",
                        title: "Fluff",
                        category: "IoT Telemetry Engine",
                        year: "2026",
                        description:
                                "Multi-source telemetry engine orchestrating real-time GPS coordinates, historical player databases, and audible distance-to-pin assistant for tour-grade performance analysis.",
                        tags: ["React 19", "Geospatial", "IoT"],
                        image: "/assets/fluff/FLUFF-GPS.png",
                        video: "/assets/Fluff.mp4",
                        link: "https://dte-84.github.io/Fluff/",
                        featured: true,
                }
        ];

        const archives: Project[] = [
                {
                        id: "PULSE_ARCHIVE",
                        title: "Pulse Logic Engine",
                        category: "Behavioral Prototype",
                        year: "2026",
                        description:
                                "Initial architectural breakdown of the Behavioral Financial Conscience. Explores the core psychological frameworks and data orchestration logic that birthed Nova.",
                        tags: ["Behavioral Logic", "Fintech Architecture"],
                        image: "/assets/novaui.png",
                        video: "/assets/DTESolutionsFinanceTrack.mp4",
                        link: "/hub/pulse-breakdown.html",
                        featured: true,
                },
                {
                        id: "FLUFF_ARCHIVE",
                        title: "Fluff Telemetry Hub",
                        category: "IoT Documentation",
                        year: "2026",
                        description:
                                "Deep technical specification for the PGA-grade telemetry engine. Documents the geospatial processing and audible assistant protocols.",
                        tags: ["IoT Telemetry", "Geospatial Logic"],
                        image: "/assets/fluff/FLUFF-GPS.png",
                        video: "/assets/Fluff.mp4",
                        link: "https://dte-84.github.io/Fluff/",
                        featured: true,
                },
                {
                        id: "KW_MODELING",
                        title: "Key Wallis Modeling",
                        category: "High-Fidelity UX",
                        year: "2025",
                        description:
                                "A boutique digital portfolio designed for high-impact visual storytelling. Features immersive scroll dynamics and gallery-focused architecture.",
                        tags: ["UX Design", "Framer Motion", "React"],
                        image: "/assets/kwportfront.png",
                        video: "/assets/KWModeling-1771900067138.mp4",
                        link: "https://kw-portfolio-kappa.vercel.app/",
                        featured: true,
                },
                {
                        id: "SI_KNIGHT",
                        title: "Si Knight Gaming",
                        category: "Interactive Media Hub",
                        year: "2024",
                        description:
                                "A centralized gaming nexus aggregating multi-platform content. Demonstrates advanced DOM manipulation and responsive media grid layouts.",
                        tags: ["Vanilla JS", "CSS3", "Media"],
                        image: "/assets/siknighthome.png",
                        video: "/assets/SiKnight-1771896141464.mp4",
                        link: "https://dte-84.github.io/SiKnight/",
                        featured: true,
                },
                {
                        id: "SANTI_CARS",
                        title: "Santi Cars",
                        category: "Commercial Inventory System",
                        year: "2024",
                        description:
                                "A dynamic automotive inventory platform featuring custom filtering logic and high-resolution asset management.",
                        tags: ["Inventory Logic", "Frontend Eng", "UI"],
                        image: "/assets/santicars.png",
                        video: "/assets/CarSales.mp4",
                        link: "https://dte-84.github.io/CarSalesInv/",
                        featured: true,
                }
        ];

        const ProjectRow = ({ project, index }: { project: Project, index: number }) => {
                const isEven = index % 2 === 0;
                return (
                        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}>
                                {/* Project Visual */}
                                <div className='w-full lg:w-3/5 perspective-1000'>
                                        <Link 
                                                href={project.link}
                                                target="_blank"
                                                className='block relative rounded-2xl overflow-hidden thumbnail-glow transform transition-all duration-700 group-hover:rotate-y-2 aspect-video bg-black/50'
                                        >
                                                {project.video ? (
                                                        <VideoPlayer src={project.video} poster={project.image} />
                                                ) : (
                                                        <Image
                                                                src={project.image}
                                                                alt={project.title}
                                                                fill
                                                                className='object-cover transition-transform duration-700 group-hover:scale-105'
                                                        />
                                                )}
                                                <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60'></div>
                                                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                                        <div className='w-20 h-20 rounded-full bg-[var(--theme-accent)]/20 backdrop-blur-md border border-[var(--theme-accent)] flex items-center justify-center'>
                                                                <Icon icon='solar:arrow-right-up-linear' className='text-[var(--theme-accent)] text-3xl' />
                                                        </div>
                                                </div>
                                        </Link>
                                </div>

                                {/* Project Intel */}
                                <div className={`w-full lg:w-2/5 flex flex-col ${isEven ? 'items-start' : 'items-start lg:items-end lg:text-right'}`}>
                                        <div className='flex items-center gap-4 mb-6'>
                                                <span className='font-mono text-[var(--theme-accent)] text-xs tracking-widest border border-[var(--theme-accent)]/30 px-3 py-1 rounded-full'>
                                                        REF_ID: {project.id}
                                                </span>
                                                <span className='font-mono text-[var(--theme-text-dim)] text-xs'>
                                                        {"// "} {project.year}
                                                </span>
                                        </div>

                                        <h3 className='text-4xl md:text-5xl font-bold text-white mb-6 leading-none group-hover:text-[var(--theme-accent)] transition-colors duration-300'>
                                                {project.title}
                                        </h3>

                                        <div className={`flex flex-wrap gap-2 mb-8 ${isEven ? 'justify-start' : 'justify-start lg:justify-end'}`}>
                                                {project.tags.map((tag) => (
                                                        <span
                                                                key={tag}
                                                                className='px-3 py-1 bg-white/5 border border-white/10 text-[var(--theme-text-dim)] text-xs font-mono rounded hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] transition-colors'
                                                        >
                                                                {tag}
                                                        </span>
                                                ))}
                                        </div>

                                        <p className={`text-[var(--theme-text-dim)] text-lg leading-relaxed mb-10 ${isEven ? 'border-l-2 pl-6' : 'border-l-2 lg:border-l-0 lg:border-r-2 pl-6 lg:pl-0 lg:pr-6'} border-[var(--theme-accent)]/20`}>
                                                {project.description}
                                        </p>

                                        <div className='flex gap-6'>
                                                {project.caseStudy && (
                                                        <Link
                                                                href={project.caseStudy}
                                                                className='flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs hover:text-[var(--theme-accent)] transition-colors'
                                                        >
                                                                Read Case Study
                                                                <Icon icon='solar:document-text-linear' className='text-lg' />
                                                        </Link>
                                                )}
                                                <Link
                                                        href={project.link}
                                                        target='_blank'
                                                        className='flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs hover:text-[var(--theme-accent)] transition-colors'
                                                >
                                                        Launch Terminal
                                                        <Icon icon='solar:arrow-right-up-linear' className='text-lg' />
                                                </Link>
                                        </div>
                                </div>
                        </div>
                );
        };

        return (
                <section id='projects' className='relative py-32 bg-transparent'>
                        <div className='container-main'>
                                {/* 02 // DEPLOYMENTS */}
                                <div className='flex flex-col md:flex-row justify-between items-end mb-24'>
                                        <div>
                                                <div className='flex items-center gap-4 mb-4'>
                                                        <div className='w-12 h-[1px] bg-[var(--theme-accent)]'></div>
                                                        <span className='font-orbitron text-[var(--theme-accent)] tracking-[0.3em] text-sm font-bold'>
                                                                02 // DEPLOYMENTS
                                                        </span>
                                                </div>
                                                <h2 className='text-5xl md:text-7xl font-black text-white uppercase tracking-tighter'>
                                                        DTE <br />
                                                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-secondary)]'>
                                                                Solutions
                                                        </span>
                                                </h2>
                                        </div>
                                        <div className='hidden md:block'>
                                                <div className='flex items-center gap-2 text-[var(--theme-text-dim)] font-mono text-xs'>
                                                        <div className='w-2 h-2 rounded-full bg-[var(--theme-accent)] animate-pulse'></div>
                                                        ACTIVE PRODUCTION STATE
                                                </div>
                                        </div>
                                </div>

                                <div className='flex flex-col gap-40 mb-60'>
                                        {deployments.map((project, index) => (
                                                <ProjectRow key={project.id} project={project} index={index} />
                                        ))}
                                </div>

                                {/* 03 // ARCHIVE */}
                                <div className='flex flex-col md:flex-row justify-between items-end mb-24'>
                                        <div>
                                                <div className='flex items-center gap-4 mb-4'>
                                                        <div className='w-12 h-[1px] bg-white/20'></div>
                                                        <span className='font-orbitron text-white/40 tracking-[0.3em] text-sm font-bold'>
                                                                03 // ARCHIVE
                                                        </span>
                                                </div>
                                                <h2 className='text-5xl md:text-7xl font-black text-white/20 uppercase tracking-tighter'>
                                                        Legacy <br />
                                                        <span className='text-white/10'>
                                                                Solutions
                                                        </span>
                                                </h2>
                                        </div>
                                </div>

                                <div className='flex flex-col gap-40'>
                                        {archives.map((project, index) => (
                                                <ProjectRow key={project.id} project={project} index={index + 1} /> // index+1 to start archives zipper differently
                                        ))}
                                </div>
                        </div>
                </section>
        );
};

export default Projects;

