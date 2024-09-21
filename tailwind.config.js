/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      minmobile: "190px",

      mobile: "320px",

      // => @media (min-width: 640px) { ... }

      tablte: "768px",

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
      xl: "1550px",
    },
  },
  plugins: [require("tw-elements/plugin.cjs"), require("daisyui")],
};
