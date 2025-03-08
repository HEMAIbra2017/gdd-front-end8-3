import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      colors: {
        primary: "#009971",
        black1: "#1E1E1E",
        black2: "#383838",
        black3: "var(--text-black)",
        red1: "#A72323",
        borderRed: "var(--border-red)",
        red3: "#D32E2E",
        lightRed: "var(--light-red)",
        lightBlue: "var(--light-blue)",
        borderBlue: "#455DD9",
        borderGreen: "#55CC73",
        gray1: "#8B8B8B",
        gray2: "#767676",
        gray3: "#455C6D",
        gray4: "#CACACA",
        gray5: "#717171",
        gray6: "#555555",
        blue1: "var(--blue1-color)",
        green1: "var(--green1-color)",
        green2: "var(--green2-color)",
        darkGreen: "var(--dark-green)",
        lightGreen: "var(--light-green)",
        hoverGreen: "var(--hover-green)",
        lightGray: "var(--light-gray)",
      },
      fontFamily: {
        primary: ["var(--font-primary)"],
      },
      backgroundImage: {
        hero: "url('/images/hero.jpg')",
        hero_mobile: "url('/images/hero-mobile.jpg')",
        arrow: "url('/icons/arrow.svg')",
        arrow_hover: "url('/icons/arrow-hover.svg')",
        auth: "url('/images/auth.jpg')",
      },
      animation: {
				fade: 'fadeIn .3s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
			},
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
