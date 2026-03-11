"use client";

import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  alpha: number;
};

const BgAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentTheme = useRef<"yellow" | "default">("default");
  const animationFrameId = useRef<number | undefined>(undefined);

  // This effect runs only once to set up the theme observer
  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => {
      const attr = root.getAttribute("data-theme");
      currentTheme.current = attr === "yellow" ? "yellow" : "default";
    };
    updateTheme(); // Initial check
    
    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  const createParticles = (count: number, width: number, height: number): Particle[] => {
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.5,
        speedX: (Math.random() * 2 - 1) * 0.3,
        speedY: (Math.random() * 2 - 1) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }
    return particles;
  };
  
  // This effect runs only once to set up the canvas and animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      particles = createParticles(150, canvas.width, canvas.height);
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isYellow = currentTheme.current === "yellow";
      const color = isYellow ? "253, 224, 71" : "34, 197, 94";

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        else if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        else if (p.y < 0) p.y = canvas.height;

        const edgeFactor = 1 - Math.abs(p.x - canvas.width / 2) / (canvas.width / 2);
        const fadeAlpha = p.alpha * edgeFactor;

        ctx.fillStyle = `rgba(${color}, ${fadeAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if(animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div
        className="absolute inset-0 bg-[url('/assets/proxima.jpg')] bg-cover bg-center opacity-5 mix-blend-luminosity grayscale contrast-125 brightness-75"
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] bg-accent opacity-15 animate-float"
        style={{ top: "-10%", left: "-10%" }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] bg-accent opacity-15 animate-float [animation-delay:-4s]"
        style={{ bottom: "-10%", right: "-5%" }}
      />
    </div>
  );
};

export default BgAnimation;

