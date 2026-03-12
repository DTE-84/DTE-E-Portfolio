"use client";

import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
	const name = "Drew T Ernst";
	const words = name.split(" ");

	return (
		<section
			id='home'
			className='hero min-h-screen flex items-center justify-center text-center pt-[120px] md:pt-[100px] bg-transparent'>
			<div className='container-main hero-content'>
				<h1 className='font-orbitron font-black uppercase leading-none mb-4 text-[clamp(2.2rem,10vw,6rem)] tracking-[clamp(4px,2vw,8px)] relative inline-block z-10 w-full flicker-animation'>
					{words.map((word, wordIndex) => (
						<span
							key={wordIndex}
							className='inline-block whitespace-nowrap mr-[0.3em] last:mr-0'>
							{word.split("").map((char, charIndex) => {
								const globalIndex = name.indexOf(word) + charIndex;
								return (
									<span
										key={charIndex}
										className='hero-letter inline-block animate-[hero-wave-breathe_4s_ease-in-out_infinite] relative'
										style={{ 
											animationDelay: `${globalIndex * 0.1}s`,
											color: '#fff',
											textShadow: '0 0 20px rgba(var(--theme-accent-rgb), 0.8), 0 0 40px rgba(var(--theme-accent-rgb), 0.5), 0 0 60px rgba(var(--theme-accent-rgb), 0.3)'
										}}>
										{char}
									</span>
								);
							})}
						</span>
					))}
				</h1>
				<p
					className='typewriter text-lg md:text-xl font-mono uppercase tracking-[0.3em]'
					style={{ color: "var(--theme-accent)" }}>
					<br />
					Data Analyst | Software Engineer{" "}
					<span
						className='text-offset'
						style={{
							color: "var(--theme-offset)",
							textShadow: "0 0 10px rgba(var(--theme-offset-rgb), 0.3)",
						}}></span>
					<br />
					Engineering Performance through Data Integrity
				</p>

				<div className='mt-20 flex flex-col items-center gap-12 w-full'>
					<div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8'>
						<a
							href='#projects'
							className='tech-tab view-works-uplink group relative flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border-accent/30 text-accent font-orbitron text-[13px] tracking-[3px] transition-all duration-300 hover:bg-white/10 hover:border-accent hover:shadow-[0_0_25px_rgba(var(--theme-accent-rgb),0.2)]'
							style={{ width: "180px", height: "52px" }}>
							My Work
						</a>
					</div>
				</div>

				<div className='mt-24 w-full'>
					<div className='flex items-center justify-center gap-4 md:gap-8 py-4'>
						<div className='h-[1px] w-8 md:w-12 bg-accent shadow-[0_0_10px_#00ffcc]'></div>
						<h4 className='text-[12px] md:text-[14px] font-bold text-accent uppercase tracking-[4px] md:tracking-[6px] whitespace-nowrap'>
							Tools of the Trade
						</h4>
						<div className='h-[1px] w-8 md:w-12 bg-accent shadow-[0_0_10px_#00ffcc]'></div>
					</div>

					<div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center w-full mt-12'>
						{/* SYSTEMS & CORE - WHITE */}
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
						
						{/* CLOUD & DATABASE - KINETIC GREEN */}
						<div className='flex flex-col items-center gap-4'>
							<span className='text-[10px] font-mono uppercase tracking-[3px] text-white/40'>Cloud & Database</span>
							<div className='flex flex-wrap justify-center gap-3 md:gap-4 max-w-[350px]'>
								{["AWS", "MongoDB", "Docker", "SQL", "Git", ".NET"].map((tech) => (
									<div key={tech} className='flex items-center justify-center w-[100px] h-[38px] bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 hover:border-emerald-400 hover:backdrop-blur-md transition-all duration-300 cursor-default font-space'>
										{tech}
									</div>
								))}
							</div>
						</div>
						<div className='w-12 h-[1px] bg-white/10 md:w-[1px] md:h-12'></div>
						
						{/* UI/UX & METHOD - ELECTRIC BLUE */}
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

export default Hero;
