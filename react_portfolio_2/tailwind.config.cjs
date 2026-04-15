/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#4ADE80", // Green accent color for contrast
        bg_light_primary: "#0F172A", // Dark Slate
        gray: "#94A3B8", // Slate 400
        text_light: "#F8FAFC", // Slate 50
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #1E293B 0.48%, #0F172A 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
};
