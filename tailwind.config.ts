import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          brown: "rgb(92, 64, 51)",      // #5C4033
          cream: "rgb(253, 251, 247)",   // #FDFBF7 (Base Light)
          gold: "#C5A059",
          olive: "#73785C",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "serif"],
        script: ["var(--font-pinyon)", "cursive"],
        sans: ["var(--font-lato)", "sans-serif"],
      },
      backgroundImage: {
        'paper-texture': "url('/images/vintage/paper-texture.png')",
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;