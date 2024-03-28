import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      main: [
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "black-hole-rotating-stars": {
          "0%": { transform: "translateZ(0) translate(-50%, -50%) rotate(0)" },
          "100%": {
            transform: "translateZ(0) translate(-50%,-50%) rotate(-360deg)",
          },
        },
        "black-hole-twinkling-stars": {
          "0%": {
            transform: "translateZ(0) translate(0) scale(1)",
            background: "rgba(255,255,255,0)",
          },
          "10%": { background: "rgb(255,255,255)" },
          "100%": {
            transform: "translateZ(0) translate(-50%,-50%) rotate(-360deg)",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "falling-star": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "80%": { opacity: "1" },
          "100%": {
            transform: "translateY(100%) rotate(360deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "black-hole-rotating-stars":
          "black-hole-rotating-stars 70s linear infinite",
        aurora: "aurora 60s linear infinite",
        "falling-star": "falling-star 50s linear infinite",
      },
      // backgroundImage: {
      //   "radial-gradient":
      //     "radial-gradient(circle at center, white 0%, #222 10%, black 60%)",
      // },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
