"use client";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import BgAnimation from "../../components/BgAnimation";
import ContactModal from "../../components/ContactModal";

const RevealText: React.FC<{ text: string; isReverse?: boolean }> = ({
	text,
	isReverse = false,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const containerRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.15 },
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<p
			ref={containerRef}
			className={`transition-all duration-1000 ease-out ${
				isVisible
					? "opacity-100 translate-y-0"
					: `opacity-0 ${isReverse ? "-translate-y-4" : "translate-y-4"}`
			}`}>
			{text}
		</p>
	);
};

const Hero = () => {
	return (
		<section className='pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='flex flex-col gap-6'>
				<span className='text-accent font-mono text-xs tracking-[0.5em] uppercase font-bold'>
					Principal Engineer // STL
				</span>
				<h1 className='text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase'>
					Drew T<br />
					<span className='text-white/20 italic'>Ernst.</span>
				</h1>
				<div className='max-w-2xl mt-8'>
					<RevealText text='Engineering highly analytical systems where behavioral intelligence meets pure data integrity. Specializing in high-stakes clinical and financial infrastructure.' />
				</div>
			</div>
		</section>
	);
};

const ProjectCard = ({ project }: { project: any }) => {
	if (!project) return null;

	return (
		<div className='group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-accent/50'>
			{project.video && (
				<div className='relative aspect-video overflow-hidden bg-black'>
					<video
						src={project.video}
						className='w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500'
						autoPlay
						loop
						muted
						playsInline
					/>
				</div>
			)}
			<div className='flex flex-col gap-6 p-6'>
				<div className='flex justify-between items-start'>
					<div>
						<span className='text-[10px] font-mono text-accent uppercase tracking-widest mb-2 block'>
							{project.category} // {project.year}
						</span>
						<h3 className='text-2xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors'>
							{project.title}
						</h3>
					</div>
					<a
						href={project.link}
						target='_blank'
						className='text-white/40 hover:text-accent transition-colors'>
						<Icon icon='solar:arrow-right-up-linear' className='text-2xl' />
					</a>
				</div>
				<p className='text-sm text-zinc-400 leading-relaxed line-clamp-3'>
					{project.description}
				</p>
				<div className='flex flex-wrap gap-2'>
					{project.tags.map((tag: string) => (
						<span
							key={tag}
							className='text-[9px] font-mono uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/5 rounded text-zinc-500'>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

const Work = () => {
	const projects = [
		{
			id: "SetLogic",
			title: "SetLogic - Physical Performance Engine",
			category: "DTE Solutions",
			year: "2026",
			description:
				"AI-driven physical performance engine optimizing biomechanic trajectory through iterative coaching and metabolic data correlation.",
			tags: [
				"React 19",
				"Nutrition and Exercise",
				"Lead Intelligence",
				"Claude AI",
			],
			link: "https://dte-84.github.io/SetLogic/",
			video: "/DTE-E-Portfolio/assets/SetLogic.mp4",
		},
		{
			id: "NestLegacy",
			title: "NestLegacy - Wealth Transfer Engine",
			category: "Enterprise Fintech",
			year: "2026",
			description:
				"Digital trust layer for the $84 trillion wealth transfer. AI-driven lead intelligence bridging inheritors to fiduciary experts through behavioral financial modeling.",
			tags: ["React 19", "Behavioral Finance", "Lead Intelligence", "Nova AI"],
			link: "https://dte-84.github.io/NestLegacy/",
			video: "/DTE-E-Portfolio/assets/NestLegacy.mp4",
		},
		{
			id: "Pulse",
			title: "Pulse - Behavioral Intelligence Platform",
			category: "Behavioral Fintech",
			year: "2026",
			description:
				"High-fidelity financial dashboard utilizing behavioral psychology to detect spending rhythms and emotional triggers. Engineered with a FastAPI asynchronous backend and Nova AI integration.",
			tags: ["React 19", "FastAPI", "MongoDB", "Behavioral AI"],
			link: "https://dte-solutions.icu/pulse-breakdown.html",
			video: "/DTE-E-Portfolio/assets/Pulse.mp4",
		},
		{
			id: "Fluff",
			title: "Fluff - IoT Telemetry Engine",
			category: "Performance Analytics",
			year: "2026",
			description:
				"Multi-source telemetry suite orchestrating real-time GPS coordinates and historical player databases. Features an audible AI assistant for PGA-grade performance analysis.",
			tags: ["React 19", "Geospatial", "IoT Sync", "Biometrics"],
			link: "https://dte-84.github.io/Fluff/",
			video: "/DTE-E-Portfolio/assets/Fluff.mp4",
		},
		{
			id: "SIKNIGHT",
			title: "SiKnight Game Hub",
			category: "Interactive Media",
			year: "2026",
			description:
				"High-engagement gaming portal featuring an interactive engine, real-time leaderboard, and virtual currency.",
			tags: ["React", "Interactive", "Game Design"],
			link: "https://dte-84.github.io/SiKnight/",
			video: "/DTE-E-Portfolio/assets/siknight.mp4",
		},
		{
			id: "TONYS",
			title: "Landscaping Logic",
			category: "Commercial UI",
			year: "2026",
			description:
				"Service-oriented architecture featuring a custom interactive engine for visual data comparison.",
			tags: ["Vanilla JS", "UI/UX", "GSAP"],
			link: "https://tonyslandscapingllc.com",
			video: "/DTE-E-Portfolio/assets/TonysLandscaping.mp4",
		},
		{
			id: "PCSP",
			title: "PCSP Assistant Pro",
			category: "Clinical Documentation",
			year: "2026",
			description:
				"HIPAA-compliant clinical documentation engine for state government audits. Designed to streamline PCSP workflows through intelligent narrative modeling and zero-footprint data protocols.",
			tags: ["JavaScript", "HIPAA", "OOD", "Enterprise"],
			link: "https://dte-solutions.icu/pcsp-breakdown.html",
			video: "/DTE-E-Portfolio/assets/PCSP.mp4",
		},
	];

	return (
		<section
			id='work'
			className='py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5'>
			<div className='flex flex-col gap-12'>
				<h2 className='text-4xl font-black uppercase tracking-tighter'>
					Selected <span className='text-accent italic'>Works.</span>
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

const About = () => {
	return (
		<section
			id='about'
			className='py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5'>
			<div className='grid md:grid-cols-2 gap-16'>
				<div className='flex flex-col gap-8'>
					<h2 className='text-4xl font-black uppercase tracking-tighter'>
						The <span className='text-accent italic'>Philosophy.</span>
					</h2>
					<p className='text-lg text-zinc-400 leading-relaxed'>
						I bridge the gap between high-level engineering and strategic
						marketing. Every line of code is a communicative act; every UI
						pattern is a behavioral prompt.
					</p>
					<p className='text-zinc-500 leading-relaxed'>
						With a background in Public Relations and Marketing, I approach
						software not just as a technical challenge, but as a mechanism for
						trust acquisition and data integrity.
					</p>
				</div>
				<div className='bg-white/5 border border-white/10 rounded-3xl p-8 grid sm:grid-cols-2 gap-8'>
					<div className='flex items-center gap-4'>
						<div className='w-12 h-12 rounded-full border border-accent flex items-center justify-center shrink-0'>
							<Icon
								icon='solar:globus-linear'
								className='text-2xl text-accent'
							/>
						</div>
						<div>
							<h4 className='font-bold uppercase tracking-tight text-sm'>
								Enterprise Scaling
							</h4>
							<p className='text-[10px] text-zinc-500 uppercase tracking-widest'>
								Global Ready
							</p>
						</div>
					</div>
					<div className='flex items-center gap-4'>
						<div className='w-12 h-12 rounded-full border border-accent flex items-center justify-center shrink-0'>
							<Icon
								icon='solar:shield-check-linear'
								className='text-2xl text-accent'
							/>
						</div>
						<div>
							<h4 className='font-bold uppercase tracking-tight text-sm'>
								HIPAA / Data Safety
							</h4>
							<p className='text-[10px] text-zinc-500 uppercase tracking-widest'>
								Zero-Footprint
							</p>
						</div>
					</div>
					<div className='flex items-center gap-4'>
						<div className='w-12 h-12 rounded-full border border-accent flex items-center justify-center shrink-0'>
							<Icon
								icon='solar:brain-linear'
								className='text-2xl text-accent'
							/>
						</div>
						<div>
							<h4 className='font-bold uppercase tracking-tight text-sm'>
								Behavioral AI
							</h4>
							<p className='text-[10px] text-zinc-500 uppercase tracking-widest'>
								Predictive UX
							</p>
						</div>
					</div>
					<div className='flex items-center gap-4'>
						<div className='w-12 h-12 rounded-full border border-accent flex items-center justify-center shrink-0'>
							<Icon
								icon='solar:chat-round-line-linear'
								className='text-2xl text-accent'
							/>
						</div>
						<div>
							<h4 className='font-bold uppercase tracking-tight text-sm'>
								Strategic PR
							</h4>
							<p className='text-[10px] text-zinc-500 uppercase tracking-widest'>
								Narrative Design
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const ToolsOfTheTrade = () => {
	const tools = [
		{ name: "TypeScript", icon: "logos:typescript-icon" },
		{ name: "React 19", icon: "logos:react" },
		{ name: "Next.js", icon: "logos:nextjs-icon" },
		{ name: "Python", icon: "logos:python" },
		{ name: "FastAPI", icon: "logos:fastapi-icon" },
		{ name: "AWS", icon: "logos:aws" },
		{ name: "Docker", icon: "logos:docker-icon" },
		{ name: "MongoDB", icon: "logos:mongodb-icon" },
	];

	return (
		<section className='py-12 overflow-hidden border-y border-white/5 bg-white/[0.02]'>
			<div className='flex gap-12 items-center animate-marquee whitespace-nowrap'>
				{[...tools, ...tools].map((tool, index) => (
					<div
						key={index}
						className='flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100'>
						<Icon icon={tool.icon} className='text-xl' />
						<span className='font-mono text-[10px] uppercase tracking-[0.2em] font-bold'>
							{tool.name}
						</span>
					</div>
				))}
			</div>
		</section>
	);
};

const Footer = ({ onContactClick }: { onContactClick: () => void }) => {
	return (
		<footer className='py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5'>
			<div className='flex flex-col md:flex-row justify-between items-center gap-12'>
				<div className='flex flex-col gap-4 text-center md:text-left'>
					<h2 className='text-3xl font-black uppercase tracking-tighter italic text-accent'>
						Let's Link Up.
					</h2>
					<p className='text-zinc-500 text-sm'>
						STL MO // IL Division // © 2026 DTE Solutions
					</p>
				</div>
				<div className='flex gap-6'>
					<button
						onClick={onContactClick}
						className='px-8 py-4 bg-accent text-black font-black uppercase text-xs rounded-xl hover:scale-105 transition-all'>
						Direct Contact
					</button>
					<a
						href='/DTE-E-Portfolio/assets/DrewTErnst_Resume.pdf'
						target='_blank'
						className='px-8 py-4 border border-white/10 text-white font-black uppercase text-xs rounded-xl hover:bg-white/5 transition-all'>
						Resume.pdf
					</a>
				</div>
			</div>
		</footer>
	);
};

export default function Home() {
	const [isContactOpen, setIsContactOpen] = useState(false);

	return (
		<main className='bg-black min-h-screen text-white selection:bg-accent selection:text-black antialiased font-space relative overflow-hidden'>
			<BgAnimation />
			<Navbar onContactClick={() => setIsContactOpen(true)} />

			<div className='relative z-10'>
				<Hero />
				<ToolsOfTheTrade />
				<Work />
				<About />
				<Footer onContactClick={() => setIsContactOpen(true)} />
			</div>

			<ContactModal
				isOpen={isContactOpen}
				onClose={() => setIsContactOpen(false)}
			/>

			<style jsx global>{`
				@keyframes marquee {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				.animate-marquee {
					animation: marquee 30s linear infinite;
				}
				:root {
					--accent: #00ffcc;
				}
				.text-accent {
					color: var(--accent);
				}
				.bg-accent {
					background-color: var(--accent);
				}
				.border-accent {
					border-color: var(--accent);
				}
			`}</style>
		</main>
	);
}
