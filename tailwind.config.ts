import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Habilita el soporte para tema oscuro usando la clase "dark"
  theme: {
    extend: {
      fontSize: {
        h1: ['2.25em', { lineHeight: '1.2' }], // Escala 2.5x
        h2: ['2em', { lineHeight: '1.3' }],   // Escala 2x
        h3: ['1.75em', { lineHeight: '1.35' }], // Escala 1.75x
        h4: ['1.5em', { lineHeight: '1.4' }],   // Escala 1.5x
        h5: ['1.25em', { lineHeight: '1.5' }],  // Escala 1.25x
        p: ['1em', { lineHeight: '1.6' }],      // Base (1x)
        span: ['0.875em', { lineHeight: '1.4' }], // Escala 0.875x
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Fuente principal
      },
      colors: {
        primary: "#0072f6", // Color principal
        secondary: "77C9DB",
        text: "#666666", // Color del texto
        background: "#ebeffb", // Fondo de la página
        body: "#212224",
      },
    },
  },
  plugins: [],
} satisfies Config;
