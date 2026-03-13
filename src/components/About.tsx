"use client";

import React, { useEffect, useRef, useState } from "react";

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
			className={`about-reveal ${isVisible ? "visible" : ""}`}>
			{words.map((word, i) => {
				const index = isReverse ? words.length - 1 - i : i;

				return (
					<React.Fragment key={i}>
						<span
							className='reveal-word inline-block opacity-0 blur-[8px] translate-y-[8px] transition-all duration-[0.8s] ease-[cubic-bezier(0.23,1,0.32,1)] font-medium'
							style={{
								transitionDelay: `${index * 35}ms`,
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

const About: React.FC = () => {
	return (
		<section id='about' className='py-[100px]'>
			<div className='container-main'>
				<div className='flex items-center gap-6 mb-16'>
					<h2 className='text-2xl md:text-3xl font-bold text-white tracking-widest uppercase'>
						<span style={{ color: "var(--theme-accent)", opacity: 0.8 }}>
							01 //
						</span>{" "}
						Identity
					</h2>
					<div className='h-[1px] flex-grow bg-[var(--theme-accent)]/40'></div>
				</div>

				<div className='grid lg:grid-cols-3 gap-12 lg:gap-20'>
					<div className='lg:col-span-2'>
						<RevealText text='Specializing in the intersection of advanced data orchestration and technical precision, DTE Solutions builds sophisticated applications and programs designed to solve complex world problems. I engineer high-fidelity interfaces that serve as intuitive bridges between complex data systems and the human users who navigate them.' />
						<br />
						<RevealText text="My background in operations management provides a unique 'business-first' lens. I view data not as a static resource, but as a critical component of a larger problem-solving ecosystem where communication protocols and collaborative engineering are paramount." />
						<br />
						<RevealText text="Transitioning from leadership to frontend development has refined my focus on clarity, impact, and systemic efficiency. I don't just build components; I engineer workflows that streamline performance and drive measurable results for global challenges." />
					</div>

					<div className='space-y-10'>
						<h4 className='text-lg font-bold text-white uppercase tracking-widest border-b border-[var(--theme-accent)]/60 pb-4'>
							Philosophy
						</h4>
						<ul className='terminal-list list-none p-0 mt-[30px]'>
							<li className="relative pl-[25px] mb-[18px] text-[clamp(0.85rem,1.8vw,1.1rem)] text-[#d7e3fc]/75 leading-relaxed font-semibold before:content-['>>'] before:absolute before:left-0 before:text-accent before:font-orbitron before:text-[14px] before:top-[4px] before:animate-[list-pulse_1.5s_infinite]">
								<span className='bold'>User-Centric Design:</span> Empathizing
								with the user to ensure interfaces are as intuitive as they are
								functional.
							</li>
							<li className="relative pl-[25px] mb-[18px] text-[clamp(0.85rem,1.8vw,1.1rem)] text-[#d7e3fc]/75 leading-relaxed font-semibold before:content-['>>'] before:absolute before:left-0 before:text-accent before:font-orbitron before:text-[14px] before:top-[4px] before:animate-[list-pulse_1.5s_infinite]">
								<span className='bold'>Collaborative Excellence:</span> Clear
								communication and documentation are as vital as the codebase
								itself.
							</li>
							<li className="relative pl-[25px] mb-[18px] text-[clamp(0.85rem,1.8vw,1.1rem)] text-[#d7e3fc]/75 leading-relaxed font-semibold before:content-['>>'] before:absolute before:left-0 before:text-accent before:font-orbitron before:text-[14px] before:top-[4px] before:animate-[list-pulse_1.5s_infinite]">
								<span className='bold'>Results-Driven:</span> Building tools
								that streamline operations and enhance user engagement.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
