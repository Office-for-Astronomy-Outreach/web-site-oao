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
        h1: ["clamp(1.8rem, 4vw, 2.25em)", { lineHeight: "1.2" }], // Fluido: 1.8rem (mín) a 2.25em (máx)
        h2: ["clamp(1.6rem, 3.5vw, 2em)", { lineHeight: "1.3" }],
        h3: ["clamp(1.4rem, 3vw, 1.75em)", { lineHeight: "1.35" }],
        h4: ["clamp(1.2rem, 2.5vw, 1.5em)", { lineHeight: "1.4" }],
        h5: ["clamp(1rem, 2vw, 1.25em)", { lineHeight: "1.5" }],
        p: ["clamp(0.875rem, 1.5vw, 1em)", { lineHeight: "1.6" }], // Base responsiva
        span: ["clamp(0.75rem, 1vw, 0.875em)", { lineHeight: "1.4" }],
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Fuente principal
      },
      colors: {
        primary: {
          light: "#3384d9",
          main: "#0066d0",
          dark: "#004791",
          contrastText: "#fff",
        },
        dark: {
          light: "#4d4e4f",
          main: "#212224",
          dark: "#171719",
          contrastText: "#fff",
        },
        secondary: "77C9DB",
        text: "#666666", // Color del texto
        body: "#212224",
        background: "#ebeffb", // Fondo de la página
      },
    },
  },
  plugins: [],
} satisfies Config;
