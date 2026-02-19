// import config from "./tailwind.config";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         gold: {
//           DEFAULT: "#C8A14A",
//           light: "#D4AF37",
//           dark: "#A8822E",
//         },
//         cream: "#F5F1E8",
//         dark: {
//           DEFAULT: "#111827",
//           lighter: "#1C1C1C",
//           card: "#1a1f2e",
//         },
//       },
//       fontFamily: {
//         serif: ["'Cormorant Garamond'", "Georgia", "serif"],
//         sans: ["'Jost'", "system-ui", "sans-serif"],
//       },
//       backgroundImage: {
//         "gold-gradient": "linear-gradient(135deg, #C8A14A 0%, #D4AF37 50%, #A8822E 100%)",
//       },
//       animation: {
//         "fade-up": "fadeUp 0.8s ease forwards",
//         "fade-in": "fadeIn 1s ease forwards",
//         "pulse-gold": "pulseGold 2s infinite",
//       },
//       keyframes: {
//         fadeUp: {
//           "0%": { opacity: "0", transform: "translateY(30px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         pulseGold: {
//           "0%, 100%": { boxShadow: "0 0 0 0 rgba(200, 161, 74, 0.4)" },
//           "50%": { boxShadow: "0 0 0 10px rgba(200, 161, 74, 0)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
 theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C8A14A",
          light: "#D4AF37",
          dark: "#A8822E",
        },
        cream: "#F5F1E8",
        dark: {
          DEFAULT: "#111827",
          lighter: "#1C1C1C",
          card: "#1a1f2e",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Jost'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C8A14A 0%, #D4AF37 50%, #A8822E 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "pulse-gold": "pulseGold 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(200, 161, 74, 0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(200, 161, 74, 0)" },
        },
      },
    },
  },
  plugins: [ ],
};
