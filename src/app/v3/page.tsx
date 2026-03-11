/* eslint-disable @typescript-eslint/no-explicit-any */
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

	const words = text.split(" ");

	return (
		<p
			ref={containerRef}
			className='text-zinc-400 text-lg md:text-xl leading-relaxed font-medium mb-12'>
			{words.map((word, i) => {
				const index = isReverse ? words.length - 1 - i : i;
				return (
					<React.Fragment key={i}>
						<span
							className='inline-block transition-all duration-[0.8s] ease-[cubic-bezier(0.23,1,0.32,1)]'
							style={{
								transitionDelay: `${index * 25}ms`,
								opacity: isVisible ? 1 : 0,
								filter: isVisible ? "blur(0)" : "blur(8px)",
								transform: isVisible ? "translateY(0)" : "translateY(8px)",
								marginRight: "0.25em",
							}}>
							{word}
						</span>{" "}
					</React.Fragment>
				);
			})}
		</p>
	);
};

const Hero = () => {
	return (
		<section
			id='home'
			className='min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pt-20'>
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,204,0.1),transparent_70%)] pointer-events-none'></div>
			<div className='max-w-5xl relative z-10 w-full'>
				<div className='flex flex-col items-center mb-6 animate-fade-in'>
					<span className='text-accent font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] mb-8 md:mb-12'>
						Frontend Architecture // Visual Engineering
					</span>

					<h1 className='text-[clamp(2.5rem,12vw,8rem)] font-black text-white leading-[0.95] tracking-tighter mb-8 md:mb-10 uppercase break-words'>
						DESIGNING <br />
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-white/90'>
							EXPERIENCE.
						</span>
					</h1>

					<h2 className='text-xl md:text-3xl lg:text-4xl font-black text-white tracking-[-0.05em] uppercase mb-8 [text-shadow:0_0_20px_rgba(0,255,204,0.3)]'>
						Drew T Ernst<span className='text-accent animate-pulse'>_</span>
					</h2>
				</div>
				<p className='text-zinc-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium px-4'>
					Specializing in high-fidelity interfaces that bridge the gap between
					complex logic and intuitive human interaction. DTE Solutions builds 
					sophisticated applications to solve global problems.
				</p>
				<div className='flex gap-6 justify-center'>
					<a
						href='#featured'
						className='px-10 py-4 bg-accent text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all hover:scale-105 active:scale-95'>
						View Solutions
					</a>
				</div>
			</div>
		</section>
	);
};

const ProjectCard = ({ project }: { project: any }) => {
	if (!project) return null;

	return (
		<div className='group relative overflow-hidden border border-white/5 bg-zinc-900/50 transition-all duration-700 hover:border-accent/40'>
			<div className='relative aspect-16/10 overflow-hidden'>
				{project.video ? (
					<video
						src={project.video}
						preload='metadata'
						poster={project.image}
						autoPlay
						muted
						loop
						playsInline
						className='absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100'
					/>
				) : (
					<Image
						src={project.image}
						alt={project.title}
						fill
						className='object-cover opacity-70 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100'
					/>
				)}
				<div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80' />
			</div>

			<div className='relative p-8'>
				<div className='mb-4 flex justify-between items-start'>
					<span className='text-[10px] font-bold uppercase tracking-widest text-accent'>
						{project.category}
					</span>
					<span className='font-mono text-[10px] text-zinc-500'>
						{project.year}
					</span>
				</div>

				<h3 className='mb-4 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-accent'>
					{project.title}
				</h3>

				<p className='mb-6 line-clamp-2 text-sm leading-relaxed text-zinc-400'>
					{project.description}
				</p>

				<div className='mb-8 flex flex-wrap gap-2'>
					{project.tags?.map((tag: string) => (
						<span
							key={tag}
							className='border border-white/5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-zinc-500'>
							{tag}
						</span>
					))}
				</div>

				<div className='flex gap-4'>
					<a
						href={project.link}
						target='_blank'
						rel='noopener noreferrer'
						className='border-b border-accent pb-1 text-xs font-black uppercase tracking-widest text-white transition-all hover:border-white hover:text-accent'>
						Launch Terminal
					</a>
					{project.caseStudy && (
						<a
							href={project.caseStudy}
							className='text-xs font-black uppercase tracking-widest text-zinc-500 transition-all hover:text-accent'>
							Read Intel
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

const FeaturedCaseStudy = () => {
	return (
		<section id='featured' className='py-32 px-6 max-w-7xl mx-auto'>
			<div className='flex items-center gap-4 mb-16'>
				<span className='w-12 h-[1px] bg-accent'></span>
				<span className='text-[14px] font-bold text-whitesmoke uppercase tracking-[0.4em]'>
					MCSDD<span className='text-accent'>{"//"}</span>Case Study
				</span>
			</div>

			<div className='grid lg:grid-cols-2 gap-16 items-center'>
				<div className='relative group'>
					<div className='absolute -inset-4 bg-accent/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
					<div className='relative aspect-video bg-zinc-900 border border-white/10 overflow-hidden'>
						<video
							src='/DTE-E-Portfolio/assets/MCSDD-PCSP.mp4'
							poster='/DTE-E-Portfolio/assets/pcsp1.png'
							autoPlay
							muted
							loop
							playsInline
							className='w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent'></div>
					</div>
				</div>

				<div>
					<span className='text-[10px] font-mono text-whitesmoke-500 mb-4 block uppercase tracking-widest'>
						Case Study // 2026
					</span>
					<h2 className='text-5xl md:text-6xl font-black text-white tracking-tighter mb-8 uppercase leading-none'>
						PCSP <br />
						Assistant <span className='text-accent'>Pro.</span>
					</h2>
					<p className='text-zinc-400 text-lg leading-relaxed mb-10 font-medium'>
						An audit-ready clinical drafting engine engineered for MCSDD. This
						high-fidelity solution features comprehensive{" "}
						<span className='text-white'>HCBS compliance logic</span>,
						automated Due Process documentation, and zero-knowledge PHI
						security protocols.
					</p>

					<div className='flex flex-wrap gap-3 mb-12'>
						{["UI/UX", "Vanilla JS", "HIPAA-Safe", "Healthcare"].map(
							(tag) => (
								<span
									key={tag}
									className='text-[10px] font-bold text-whitesmoke-500 border border-white/10 px-3 py-1 uppercase tracking-widest'>
									{tag}
								</span>
							),
						)}
					</div>

					<div className='flex flex-col sm:flex-row gap-6'>
						<a
							href='https://dte-84.github.io/case-study-pcsp/'
							target='_blank'
							rel='noopener noreferrer'
							className='px-8 py-4 bg-accent text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white transition-all hover:scale-105'>
							Launch Application
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-4 w-4 ml-2'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
								/>
							</svg>
						</a>
						<a
							href='/case-study-pcsp'
							target='_blank'
							rel='noopener noreferrer'
							className='px-8 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-accent hover:text-black hover:border-accent transition-all'>
							Read Research
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-4 w-4 ml-2'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

const Work = () => {
	const projects = [                {
                        id: "NestLegacy",
                        title: "NestLegacy - Wealth Transfer Engine",
                        category: "Enterprise Fintech",
                        year: "2026",
                        description:
                                "Digital trust layer for the $84 trillion wealth transfer. AI-driven lead intelligence bridging inheritors to fiduciary experts through behavioral financial modeling.",
                        tags: ["React 19", "Behavioral Finance", "Lead Intelligence", "Nova AI"],
                        image: "/DTE-E-Portfolio/assets/novaui.png",
						video: "/DTE-E-Portfolio/assets/NestLegacy.mp4",
                        link: "https://dte-84.github.io/NestLegacy/",
                },
		{
			id: "Pulse",
			title: "Pulse - Behavioral Intelligence Platform",
			category: "Behavioral Fintech",
			year: "2026",
			description:
				"High-fidelity financial dashboard utilizing behavioral psychology to detect spending rhythms and emotional triggers. Engineered with a FastAPI asynchronous backend and Nova AI integration.",
			tags: [
				"React 19",
				"FastAPI",
				"MongoDB",
				"Behavioral AI",
			],
			image: "/DTE-E-Portfolio/assets/novaui.png",
			video: "/DTE-E-Portfolio/assets/Pulse.mp4",
			link: "https://dte-solutions.icu/pulse-breakdown.html",
		},
		{
			id: "Fluff",
			title: "Fluff - IoT Telemetry Engine",
			category: "Performance Analytics",
			year: "2026",
			description:
				"Multi-source telemetry suite orchestrating real-time GPS coordinates and historical player databases. Features an audible AI assistant for PGA-grade performance analysis.",
			tags: [
				"React 19",
				"Geospatial",
				"IoT Sync",
				"Biometrics",
			],
			image: "/DTE-E-Portfolio/assets/fluff/FLUFF-GPS.png",
			video: "/DTE-E-Portfolio/assets/Fluff.mp4",
			link: "https://dte-84.github.io/Fluff/",
		},
		{
			id: "SIKNIGHT",
			title: "SiKnight Game Hub",
			category: "Interactive Media",
			year: "2026",
			description:
				"High-engagement gaming portal featuring an interactive engine, real-time leaderboard, and virtual currency.",
			tags: ["React", "Interactive", "Game Design"],
			image: "/DTE-E-Portfolio/assets/siknighthome.png",
			video: "/DTE-E-Portfolio/assets/siknight.mp4",
			link: "https://dte-84.github.io/SiKnight/",
		},
		{
			id: "KEANO",
			title: "Keano Wallis Modeling",
			category: "Editorial Design",
			year: "2026",
			description:
				"Immersive visual architecture for a high-end creative portfolio, focusing on fluid navigation.",
			tags: ["Next.js", "Motion", "Tailwind"],
			image: "/DTE-E-Portfolio/assets/kwportfront.png",
			video: "/DTE-E-Portfolio/assets/KWModel.mp4",
			link: "https://kw-portfolio-kappa.vercel.app/",
		},
		{
			id: "TONYS",
			title: "Landscaping Logic",
			category: "Commercial UI",
			year: "2026",
			description:
				"Service-oriented architecture featuring a custom interactive engine for visual data comparison.",
			tags: ["Vanilla JS", "UI/UX", "GSAP"],
			image: "/DTE-E-Portfolio/assets/tonybna.png",
			video: "/DTE-E-Portfolio/assets/Tonysllc.mp4",
			link: "https://tonyslandscapingllc.com",
		},
		{
			id: "REACT_ESTORE",
			title: "State Logic Store",
			category: "Digital Commerce",
			year: "2025",
			description:
				"Technical demonstration of advanced state management and asynchronous data orchestration.",
			tags: ["React", "Hooks", "API"],
			image: "/DTE-E-Portfolio/assets/library.png",
			video: "/DTE-E-Portfolio/assets/estore.mp4",
			link: "https://dte-84.github.io/E-Commerce-Books/",
		},
		{
			id: "CARSALES",
			title: "Inventory Discovery",
			category: "Automotive SaaS",
			year: "2025",
			description:
				"Automotive marketplace interface optimized for complex search heuristics and high-speed filtering.",
			tags: ["React", "REST API", "UX Design"],
			image: "/DTE-E-Portfolio/assets/santishowroom.png",
			video: "/DTE-E-Portfolio/assets/CarSales.mp4",
			link: "https://dte-84.github.io/CarSalesInv/",
		},
		{
			id: "CRYPTOLIVE",
			title: "CryptoLive Engine",
			category: "Fintech",
			year: "2026",
			description:
				"High-performance websocket implementation for real-time market data visualization.",
			tags: ["React", "Socket.io", "Chart.js"],
			image: "/DTE-E-Portfolio/assets/cryptolive (2).png",
			link: "https://cryptolive-5jmo.onrender.com/",
		},
	];

	return (
		<section id='work' className='py-32 px-6 max-w-7xl mx-auto'>
			<div className='flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8'>
				<div>
					<h2 className='text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase'>
						Archive.
					</h2>
					<p className='text-zinc-400 max-w-md font-medium'>
						A selection of additional high-fidelity solutions focusing on
						performance and UX.
					</p>
				</div>
				<div className='h-[1px] flex-grow bg-accent hidden md:block mb-8 mx-12'></div>
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{projects.map((p) => (
					<ProjectCard key={p.id} project={p} />
				))}
			</div>
		</section>
	);
};

const About = () => {
	return (
		<section id='about' className='py-32 px-6 max-w-7xl mx-auto'>
			<div className='flex items-center gap-6 mb-16'>
				<h2 className='text-2xl md:text-3xl font-black text-white tracking-widest uppercase'>
					Identity
				</h2>
				<div className='h-[1px] flex-grow bg-accent'></div>
			</div>

			<div className='grid lg:grid-cols-3 gap-12 lg:gap-20'>
				<div className='lg:col-span-2'>
					<RevealText text='Specializing in the intersection of technical precision and operational logic, DTE Solutions builds high-fidelity interfaces that serve as intuitive bridges between complex data systems and the human users who navigate them.' />
					<RevealText text="My background in operations management provides a unique 'business-first' lens. I view software not as isolated code, but as a critical component of a larger ecosystem where communication protocols and collaborative engineering are paramount." />
					<RevealText text="Transitioning from leadership to frontend development has refined my focus on clarity, impact, and systemic efficiency. I don't just build components; I engineer workflows that streamline performance and drive measurable results." />
				</div>

				<div className='space-y-10'>
					<h4 className='text-lg font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4'>
						Philosophy
					</h4>
					<ul className='space-y-8 mt-8'>
						<li className="relative pl-8 text-zinc-400 leading-relaxed font-medium before:content-['>>'] before:absolute before:left-0 before:text-accent before:font-black before:text-xs before:top-1">
							<span className='text-white font-bold block mb-1'>
								User-Centric Design:
							</span>
							Empathizing with the user to ensure interfaces are as intuitive
							as they are functional.
						</li>
						<li className="relative pl-8 text-zinc-400 leading-relaxed font-medium before:content-['>>'] before:absolute before:left-0 before:text-accent before:font-black before:text-xs before:top-1">
							<span className='text-white font-bold block mb-1'>
								Collaborative Excellence:
							</span>
							Clear communication and documentation are as vital as the
							codebase itself.
						</li>
						<li className="relative pl-8 text-zinc-400 leading-relaxed font-medium before:content-['>>'] before:absolute before:left-0 before:text-accent before:font-black before:text-xs before:top-1">
							<span className='text-white font-bold block mb-1'>
								Results-Driven:
							</span>
							Building tools that streamline operations and enhance user
							engagement.
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

const ToolsOfTheTrade = () => {
	return (
		<section
			id='tools'
			className='py-24 border-y border-white/5 bg-zinc-950/50'>
			<div className='max-w-[1400px] mx-auto px-4'>
				<div className='flex flex-col items-center gap-12 w-full'>
					<div className='flex items-center justify-center gap-4 md:gap-8 py-4'>
						<div className='h-[1px] w-8 md:w-12 bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.2)]'></div>
						<h4 className='text-[12px] md:text-[14px] font-bold text-white/80 uppercase tracking-[4px] md:tracking-[6px] whitespace-nowrap'>
							Tools of the Trade
						</h4>
						<div className='h-[1px] w-8 md:w-12 bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.2)]'></div>
					</div>

					<div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center w-full'>
						<div className='flex flex-col items-center gap-4'>
							<span className='text-[10px] font-mono uppercase tracking-[3px] text-white/40'>
								Systems & Core
							</span>
							<div className='flex flex-wrap justify-center gap-3 md:gap-4 max-w-[350px]'>
								{[
									"React",
									"TypeScript",
									"Python",
									"Java",
									"C#",
									"Node.js",
								].map((tech) => (
									<div
										key={tech}
										className='flex items-center justify-center w-[100px] h-[38px] bg-white/5 border border-white/20 text-white/80 text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white hover:backdrop-blur-md transition-all duration-300 cursor-default'>
										{tech}
									</div>
								))}
							</div>
						</div>

						<div className='w-12 h-[1px] bg-white/10 md:w-[1px] md:h-12'></div>

						<div className='flex flex-col items-center gap-4'>
							<span className='text-[10px] font-mono uppercase tracking-[3px] text-white/40'>
								Cloud & Database
							</span>
							<div className='flex flex-wrap justify-center gap-3 md:gap-4 max-w-[350px]'>
								{["AWS", "Azure", "Docker", "SQL", "Git", ".NET"].map(
									(tech) => (
										<div
											key={tech}
											className='flex items-center justify-center w-[100px] h-[38px] bg-accent/5 border border-accent/20 text-accent text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 hover:border-accent hover:backdrop-blur-md transition-all duration-300 cursor-default'>
											{tech}
										</div>
									),
								)}
							</div>
						</div>

						<div className='w-12 h-[1px] bg-white/10 md:w-[1px] md:h-12'></div>

						<div className='flex flex-col items-center gap-4'>
							<span className='text-[10px] font-mono uppercase tracking-[3px] text-white/40'>
								UI/UX & Method
							</span>
							<div className='flex flex-wrap justify-center gap-3 md:gap-4 max-w-[350px]'>
								{["Tailwind", "GSAP", "Figma", "OOD", "SDLC", "Agile"].map(
									(tech) => (
										<div
											key={tech}
											className='flex items-center justify-center w-[100px] h-[38px] bg-sky-500/5 border border-sky-500/20 text-sky-400 text-[9px] font-black uppercase tracking-widest hover:bg-white/10 hover:border-sky-400 hover:backdrop-blur-md transition-all duration-300 cursor-default'>
											{tech}
										</div>
									),
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const Footer = ({ onContactClick }: { onContactClick: () => void }) => {
	return (
		<footer
			id='contact'
			className='py-32 px-6 border-t border-white/5 bg-zinc-950'>
			<div className='max-w-7xl mx-auto text-center'>
				<h2 className='text-5xl md:text-8xl font-black text-white tracking-tighter mb-12 uppercase animate-fade-in'>
					Let&apos;s talk.
				</h2>
				<button
					onClick={onContactClick}
					className='text-2xl md:text-4xl font-bold text-accent hover:text-white transition-colors tracking-tight cursor-pointer bg-transparent border-none outline-none mb-8'>
					dte.solutions.llc@gmail.com
				</button>
				<div className='flex justify-center gap-8 mt-16'>
					<a
						href='https://github.com/dte-84'
						target='_blank'
						className='text-white/50 hover:text-white transition-colors'>
						<Icon icon='mdi:github' width='32' height='32' />
					</a>
					<a
						href='https://linkedin.com/in/dte84'
						target='_blank'
						className='text-white/50 hover:text-white transition-colors'>
						<Icon icon='mdi:linkedin' width='32' height='32' />
					</a>
				</div>
				<p className='mt-24 text-[10px] font-mono text-zinc-600 uppercase tracking-widest'>
					&copy; 2026 DTE Solutions // Built with Next.js & Tailwind 4
				</p>
			</div>
		</footer>
	);
};

export default function Home() {
	const [isContactOpen, setIsContactOpen] = useState(false);

	return (
		<main className='bg-black min-h-screen text-white selection:bg-accent selection:text-black antialiased font-(family-name:--font-space-grotesk)'>
			<BgAnimation />
			<Navbar onContactClick={() => setIsContactOpen(true)} />
			<Hero />
			<ToolsOfTheTrade />
			<FeaturedCaseStudy />
			<Work />
			<About />
			<Footer onContactClick={() => setIsContactOpen(true)} />

			<ContactModal 
				isOpen={isContactOpen} 
				onClose={() => setIsContactOpen(false)} 
			/>

			<style jsx global>{`
				h1,
				h2,
				h3,
				h4,
				.font-orbitron {
					font-family: var(--font-orbitron), sans-serif !important;
				}
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fade-in {
					animation: fade-in 1s ease-out forwards;
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

				.nav-link {
					position: relative;
				}
				.nav-link::after {
					content: "";
					position: absolute;
					width: 100%;
					transform: scaleX(0);
					height: 2px;
					bottom: -4px;
					left: 0;
					background-color: var(--accent);
					transform-origin: bottom left;
					transition: transform 0.3s ease-out;
				}
				.nav-link:hover::after {
					transform: scaleX(1);
				}
			`}</style>
		</main>
	);
}


