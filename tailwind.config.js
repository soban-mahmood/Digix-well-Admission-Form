/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "90px", max: "768px" },
      lg: { min:"769" , max:'1024' },
    },
  },

  plugins: [],
};
