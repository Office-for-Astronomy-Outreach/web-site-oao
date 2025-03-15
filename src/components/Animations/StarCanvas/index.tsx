import { useEffect, useRef } from "react";

interface StarCanvasProps {
  numStars: number;
  starColors: string[];
  starSize?: number;
}

const StarCanvas: React.FC<StarCanvasProps> = ({
  numStars,
  starColors,
  starSize = 0.6,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: { x: number; y: number; size: number; opacity: number }[] = [];
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Crear las estrellas iniciales
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        size: Math.random() * 0.1 + starSize,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    const animateStars = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      stars.forEach((star) => {
        star.opacity += Math.random() * 0.03 - 0.01;
        if (star.opacity < 0.5) star.opacity = 0.5;
        if (star.opacity > 1) star.opacity = 1;

        ctx.globalAlpha = star.opacity;
        ctx.fillStyle =
          starColors[Math.floor(Math.random() * starColors.length)];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animateStars);
    };

    animateStars();

    return () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    };
  }, [numStars, starColors]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
    ></canvas>
  );
};

export default StarCanvas;
