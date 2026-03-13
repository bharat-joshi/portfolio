"use client";

import { useEffect, useRef } from "react";

export default function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let drops: number[] = [];
    const fontSize = 16;
    let columns = 0;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const newColumns = Math.ceil(canvas.width / fontSize);
      if (newColumns !== columns) {
        columns = newColumns;
        // Start characters at random negative y positions to stagger them
        drops = Array(columns).fill(0).map(() => Math.random() * -50);
      }
    };

    initCanvas();
    window.addEventListener("resize", initCanvas);

    const draw = () => {
      // Use semi-transparent dark background for the trail effect
      // This matches the --background of the site #09090b
      ctx.fillStyle = "rgba(9, 9, 11, 0.1)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Generate binary 0 or 1
        const text = Math.random() > 0.5 ? "1" : "0";
        
        // Add random intensity to characters to make it look premium
        const opacity = Math.random() > 0.9 ? 0.9 : 0.3;
        // Apply primary color with calculated opacity
        ctx.fillStyle = `rgba(99, 102, 241, ${opacity})`;

        const dropY = drops[i] * fontSize;
        ctx.fillText(text, i * fontSize, dropY);

        // Reset back to top with slight randomness
        if (dropY > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 120);

    return () => {
      window.removeEventListener("resize", initCanvas);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-[1] pointer-events-none opacity-30"
      aria-hidden="true"
    />
  );
}
