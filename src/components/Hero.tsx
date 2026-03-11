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
				<h1 className='font-bold uppercase leading-none mb-4 text-[clamp(2.2rem,10vw,6rem)] tracking-[clamp(4px,2vw,8px)] relative inline-block z-10 w-full flicker-animation bg-gradient-to-r from-white via-accent to-white/80 bg-clip-text text-transparent'>
					{words.map((word, wordIndex) => (
						<span
							key={wordIndex}
							className='inline-block whitespace-nowrap mr-[0.3em] last:mr-0'>
							{word.split("").map((char, charIndex) => {
								const globalIndex = name.indexOf(word) + charIndex;
								return (
									<span
										key={charIndex}
										className='hero-letter inline-block animate-[hero-wave-breathe_4s_ease-in-out_infinite] blur-[0.5px]'
										style={{ animationDelay: `${globalIndex * 0.1}s` }}>
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
						<br>					
					Engineering Performance through Data Integrity
					</br>
				</p>

				<div className='mt-20 flex flex-col items-center gap-12 w-full'>
					<div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8'>
						<a
							href='#projects'
							className='tech-tab view-works-uplink group relative flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border-accent/30 text-accent font-orbitron text-[13px] tracking-[3px] transition-all duration-300 hover:bg-white/10 hover:border-accent hover:shadow-[0_0_25px_rgba(var(--theme-accent-rgb),0.2)]'
							style={{ width: "180px", height: "52px" }}>
							My Work
						</a>
						<Link
							href='/case-study-pcsp'
							className='tech-tab group relative flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border-white/10 text-white/70 font-orbitron text-[13px] tracking-[3px] transition-all duration-300 hover:bg-white/10 hover:border-accent hover:text-accent hover:shadow-[0_0_25px_rgba(var(--theme-accent-rgb),0.2)]'
							style={{ width: "220px", height: "52px" }}>
							PCSP Case Study
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
