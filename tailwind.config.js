/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/latihanfisik/**/*.{js,ts,jsx,tsx}",
    "./src/pages/latihanfisik/*.jsx",
    "./src/pages/makanansehat/**/*.jsx",
    "./src/pages/makanansehat/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        300: "0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)",
        500: "0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["cupcake"],
  },
};
