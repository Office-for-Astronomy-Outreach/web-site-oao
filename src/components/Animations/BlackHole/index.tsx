/**
 * Inspired by Michal's work (https://codepen.io/Mertl/pen/eoRmNY).
 *
 * License:
 * This code is provided under a permissive license. Permission is granted, free of charge,
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this
 * software, provided that proper credit is given to the original author. No warranties are
 * provided, and use of this software is at your own risk.
 *
 * Modifications:
 * - Adapted the code for use with React (BlackHole.tsx) to work as a functional React component.
 * - Added a CSS gradient background to simulate an accretion disk for aesthetic enhancement.
 * - Added a style 'shadowBlur' to simulate the event horizon.
 * - Adjusted the canvas dimensions to dynamically fit the container rather than the entire window,
 *   making it more flexible and responsive for embedding in various layouts.
 *
 * Author of modifications: Montserrat Delgado A.
 */

import { useEffect, useRef } from "react";

const BlackHole = () => {
  // Refs for the canvas layers and the container div
  const backRef = useRef<HTMLCanvasElement>(null); // Background canvas
  const middleRef = useRef<HTMLCanvasElement>(null); // Middle canvas (event horizon)
  const frontRef = useRef<HTMLCanvasElement>(null); // Foreground canvas
  const containerRef = useRef<HTMLDivElement>(null); // Container for the canvas elements

  useEffect(() => {
    // Initialize a canvas context
    const initCanvas = (ref: HTMLCanvasElement | null) => {
      if (!ref) return { ctx: null, canv: null };
      const canvas = ref;
      const ctx = canvas.getContext("2d");
      return { ctx, canv: canvas };
    };

    // Get the contexts for each canvas
    const b = initCanvas(backRef.current).ctx; // Background context
    const m = initCanvas(middleRef.current).ctx; // Middle context
    const f = initCanvas(frontRef.current).ctx; // Foreground context

    const bac = backRef.current;
    const mid = middleRef.current;
    const fro = frontRef.current;

    if (!bac || !mid || !fro || !b || !m || !f) return;

    // Get container dimensions
    const container = containerRef.current;
    if (!container) return;

    let w = container.clientWidth * 1.5; // Canvas width
    let h = container.clientHeight * 1.5; // Canvas height

    // Set canvas dimensions
    bac.width = w;
    mid.width = w;
    fro.width = w;
    bac.height = h;
    mid.height = h;
    fro.height = h;

    /**
     * Particle class represents a particle orbiting around the black hole.
     * It includes properties for position, size, color, and movement.
     */
    class Particle {
      ox: number; // Origin X position
      oy: number; // Origin Y position
      br: number; // Base radius of the orbit
      re: number; // Random extra radius to vary particle positions
      col: string; // Color of the particle
      a: number; // Current angle of the particle
      size: number; // Size of the particle
      q: number; // Ellipticity of the orbit
      h2p: number; // Offset to simulate 3D perspective
      x: number; // Current X position
      y: number; // Current Y position
      tail: { x: number; y: number; a: number }[]; // Array for the tail effect
      tl: number; // Tail length

      constructor(x: number, y: number, r: number) {
        this.ox = x;
        this.oy = y;
        this.br = r;
        this.re = Math.random() * r; // Random radius offset
        this.col = `rgba(255,${Math.floor(100 + Math.random() * 50)},80,0.5)`; // Orange-ish color
        this.a = Math.random() * 2 * Math.PI; // Random initial angle
        this.size = Math.random() * 4; // Random particle size
        this.q = 1 / 3 + Math.random() * (1 / 2 - 1 / 3); // Ellipticity
        this.h2p = 20; // Perspective offset
        this.x =
          this.ox +
          (this.br + this.re + this.size + this.h2p) * Math.cos(this.a);
        this.y =
          this.oy +
          (this.br + this.re + this.size + this.h2p) *
            this.q *
            Math.sin(this.a);
        this.tail = [{ x: this.x, y: this.y, a: this.a }];
        this.tl = Math.floor(Math.random() * 5 + 5); // Random tail length
      }

      // Update particle position and angle
      move(x: number, y: number) {
        this.ox = x;
        this.oy = y;
        this.x =
          this.ox +
          (this.br + this.re + this.size + this.h2p) * Math.cos(this.a);
        this.y =
          this.oy +
          (this.br + this.re + this.size + this.h2p) *
            this.q *
            Math.sin(this.a);
        this.tail.push({ x: this.x, y: this.y, a: this.a });

        if (this.tail.length > this.tl) {
          this.tail.splice(0, 1); // Limit tail length
        }

        // Adjust the speed of rotation here
        this.a += (this.br - this.re) / 3000; // Reduce divisor to increase speed
      }

      // Render the particle and its tail
      show() {
        for (let i = 0; i < this.tail.length; i++) {
          const tailPart = this.tail[i];
          if (
            Math.floor((tailPart.a + Math.random() * 0.2 - 0.1) / Math.PI) %
              2 !==
            0
          ) {
            b?.beginPath();
            b?.arc(tailPart.x, tailPart.y, this.size, 0, 2 * Math.PI);
            b!.fillStyle = this.col;
            b?.fill();
          } else {
            f?.beginPath();
            f?.arc(tailPart.x, tailPart.y, this.size, 0, 2 * Math.PI);
            f!.fillStyle = this.col;
            f?.fill();
          }
        }
      }
    }

    // Create and initialize particles
    const particles: Particle[] = [];
    const numParticles = 600; // Number of particles

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(w / 2, h / 2, 100)); // Initial position and orbit radius
    }

    // Draw all particles and the black hole's event horizon
    const draw = () => {
      b.globalCompositeOperation = "lighter"; // Blending mode for particles
      f.globalCompositeOperation = "lighter";

      for (let i = 0; i < numParticles; i++) {
        particles[i].move(w / 2, h / 2);
        particles[i].show();
      }

      // Draw the event horizon
      m.beginPath();
      m.arc(w / 2, h / 2, 100 + 9, 0, 2 * Math.PI);
      m.fillStyle = "black";
      m.shadowBlur = 20;
      m.shadowColor = "#ff6600"; // Glow color
      m.fill();
    };

    // Animation loop
    const loop = () => {
      b.clearRect(0, 0, w, h); // Clear background
      m.clearRect(0, 0, w, h); // Clear middle layer
      f.clearRect(0, 0, w, h); // Clear foreground
      draw();
      requestAnimationFrame(loop);
    };

    // Handle window resize
    const handleResize = () => {
      w = container.clientWidth * 1.5;
      h = container.clientHeight * 1.5;
      bac.width = w;
      mid.width = w;
      fro.width = w;
      bac.height = h;
      mid.height = h;
      fro.height = h;
    };

    window.addEventListener("resize", handleResize);
    loop();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="black-hole-container absolute" ref={containerRef}>
      <div className="relative w-full h-full">
        <canvas
          className="absolute z-[3] h-full w-full"
          id="back"
          ref={backRef}
        ></canvas>
        <canvas
          className="absolute z-[3] h-full w-full"
          id="middle"
          ref={middleRef}
        ></canvas>
        <canvas
          className="absolute z-[3] h-full w-full"
          id="front"
          ref={frontRef}
        ></canvas>
        <div className="accretion-disk sm:w-[80%] sm:h-[34%] lg:w-[100%] lg:h-[45%] xl:w-[80%] xl:h-[35%] h-[150px] w-[280px]"></div>
        <style jsx>{`
          canvas {
            top: 0;
            left: 0;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BlackHole;
