import { useEffect, useRef } from "react";

const ParticleMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configuración del canvas
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = (width * 9) /16);

    // Detectar resoluciones pequeñas
    const isSmallScreen = width < 768; // Considerar "pequeño" para pantallas menores a 768px

    // Definir el espaciado dinámico entre partículas basado en el tamaño del canvas
    const baseResolution = 1920; // Resolución de referencia (pantallas grandes)
    const particleSpacing = Math.max(6, Math.floor(6 * (width / baseResolution))); // Ajustar proporcionalmente

    // Cargar la imagen
    const image = new Image();
    image.src = `${path}/images/nocs.png`;

    image.onload = () => {
      // Dibujar la imagen en el canvas
      ctx.drawImage(image, 0, 0, width, height);

      // Extraer los datos de los píxeles
      const imageData = ctx.getImageData(0, 0, width, height);
      const { data } = imageData;

      // Crear un array de partículas basado en los píxeles visibles
      const particles: {
        x: number;
        y: number;
        alpha: number;
        baseX: number;
        baseY: number;
        size: number;
        speed: number;
        offsetX: number;
        offsetY: number;
        fadeIn: boolean;
        isStatic: boolean; // Nueva propiedad para decidir si la partícula es estática
        fadeDelay: number; // Retraso para hacer que algunas partículas aparezcan antes
      }[] = [];

      // Parámetro de dispersión
      const dispersionFactor = isSmallScreen ? 1 : 0.8; // 100% de probabilidad de que un píxel se convierta en partícula en pantallas pequeñas

      for (let y = 0; y < height; y += particleSpacing) {
        for (let x = 0; x < width; x += particleSpacing) {
          const index = (y * width + x) * 4; // Índice en el array de píxeles
          const a = data[index + 10]; // Alpha (transparencia)

          // Filtrar píxeles visibles y agregar dispersión
          if (a > 0 && Math.random() < dispersionFactor) {
            particles.push({
              x,
              y,
              baseX: x,
              baseY: y,
              alpha: isSmallScreen ? Math.random() * 0.6 + 0.1 : Math.random() * 0.9 + 0.1, // Opacidad aleatoria entre 0.1 y 1
              size: isSmallScreen ? Math.random() * 1 + .8 : Math.random() * 2 + 1, // Tamaño aleatorio
              speed: Math.random() * (isSmallScreen ? 0.6: 0.8) + 1, // Velocidad ajustada para pantallas pequeñas
              offsetX: Math.random() * (isSmallScreen ? 4 : 6) - 2, // Menor movimiento horizontal en pantallas pequeñas
              offsetY: Math.random() * (isSmallScreen ? 4 : 6) - 2, // Menor movimiento vertical en pantallas pequeñas
              fadeIn: true, // Control de aparición/desaparición
              isStatic: isSmallScreen  ? Math.random() < 0.4 : Math.random() < 0.2, // 20% de las partículas serán estáticas
              fadeDelay: Math.random() * 2, // Retraso aleatorio para algunas partículas
            });
          }
        }
      }

      // Dibujar y animar las partículas
      const drawParticles = () => {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((particle) => {
          if (!particle.isStatic) {
            // Movimiento flotante
            particle.x = particle.baseX + Math.sin(performance.now() * particle.speed * 0.002) * particle.offsetX;
            particle.y = particle.baseY + Math.cos(performance.now() * particle.speed * 0.002) * particle.offsetY;
          } else {
            // Las partículas estáticas no se mueven
            particle.x = particle.baseX;
            particle.y = particle.baseY;
          }

          // Aparecer/desaparecer
          if (particle.fadeIn) {
            // Solo empieza a desvanecerse después de su retraso
            if (performance.now() > particle.fadeDelay * 1000) {
              particle.alpha += 0.003; // Aparecer lentamente
              if (particle.alpha >= 1) particle.fadeIn = true; // Comienza a desaparecer
            }
          } else {
            particle.alpha -= 0.003; // Desaparecer lentamente
            if (particle.alpha <= 0) {
              particle.alpha = 0;
              particle.fadeIn = true; // Reiniciar ciclo
            }
          }

          // Dibujar la partícula como un círculo
          ctx.fillStyle = `rgba(255, 246, 77, ${particle.alpha})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });
      };

      const animate = () => {
        drawParticles();
        requestAnimationFrame(animate);
      };

      animate();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full"/>;
};

export default ParticleMap;
