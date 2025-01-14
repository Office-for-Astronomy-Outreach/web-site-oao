import Button from "@/components/Button";
import { useEffect, useRef } from "react";

const NotFound = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: { x: number; y: number; size: number; opacity: number }[] = [];

    // Configuración inicial
    const numStars = 350; // Cantidad de estrellas
    const starColors = ["#ffffff", "#e0e7ff", "#99b9eb"];
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Crear las estrellas iniciales
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        size: Math.random() * 0.1 + 0.6, // Tamaños entre 1 y 3
        opacity: Math.random() * 0.5 + 0.5, // Opacidad entre 0.5 y 1
      });
    }

    // Animar estrellas (parpadeo)
    const animateStars = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      stars.forEach((star) => {
        star.opacity += Math.random() * 0.03 - 0.01; // Variar opacidad
        if (star.opacity < 0.5) star.opacity = 0.5;
        if (star.opacity > 1) star.opacity = 1;

        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = starColors[Math.floor(Math.random() * starColors.length)];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animateStars);
    };

    animateStars();

    // Limpieza del canvas
    return () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    };
  }, []);

  return (
    <div className="h-100 min-h-[100vh] relative" style={{ overflow: "hidden", background: "linear-gradient(90deg, #000 82%, #010818e3 90%, #000 100%)"}}>
      {/* Fondo de estrellas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0"></canvas>

      {/* Punto azul y descripción */}
      <div
  style={{
    position: "absolute",
    top: "50%",
    right: "10%",
    transform: "translateY(-180%)",
    textAlign: "right",
    color: "#ffffff",
    zIndex: 2,
  }}
>
  {/* Punto azul */}
  <div
    className="w-[5px] h-[5px] rounded-[50%] bg-primary-light absolute right-0"
    style={{
      marginBottom: "10px",
      boxShadow: "0 0 10px #ffff",
    }}
  ></div>


    {/* Flecha SVG */}
    <svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
      style={{
        position: "absolute",
        top: "35%",
        right: "15px", // Ajusta para alinear
        transform: "translateY(-50%)",
      }}
    >
      {/* Línea curva */}
      <path
        d="M5 55 C50 10, 90 10, 115 5"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
      />
      {/* Punta de la flecha */}
      <polygon
        points="110,0 120,5 110,10"
        fill="#ffffff"
      />
    </svg>


  {/* Contenedor del texto y flecha */}
  <div className="relative max-w-[200px] mt-16 flex items-center justify-end">
    {/* Texto */}
    <span className="text-white text-xs relative">
      But weIt&aposre sure what youIt&aposre looking for is here somewhere.
    </span>
  </div>
  
</div>


      {/* Título de la página */}
      <div className="h-[100vh] w-full absolute z-10 flex flex-col justify-end gap-6 p-16 text-white">
        <h1 className="md:text-9xl text-5xl font-bold">404</h1>
        
        <div>
            <p className="md:text-5xl text-2xl font-bold mt-4">
                Page Not Found
            </p>
            <p className="md:text-3xl text-md font-bold mt-4">
                Sorry we couldIt&aposn find the page youIt&aposre <br/>lookin for
            </p>
        </div>
        <div>
            <Button label={"Back to home"} variant="outline" color="light" url="/"/>
        </div>
        <div className="flex mt-6 sm:w-1/2">
            <p className="text-xs">
                Did you know? This is a reference to a photograph showing Earth from about 6 billion kilometers away as a It&aposPale Blue DotIt&apos captured by Voyager 1.
            </p>
        </div>
      </div>
    </div>
  );
};

NotFound.is404 = true;

export default NotFound;
