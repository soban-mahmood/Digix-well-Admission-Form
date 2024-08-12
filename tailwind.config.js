/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "90px", max: "768px" },
      md: { min: "769px", max: "1024px" },
      lg: { min: "1025px" },
    },
  },

  plugins: [],
};
