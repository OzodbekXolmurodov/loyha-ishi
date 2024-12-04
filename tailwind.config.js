/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
    },
    colors: {
      ...colors,
      colorsMain: "#C61F1F",
      colorText: "#FFFFFF",
      bGcolor: "#111111",
    },
    container: {
      center: true,

      padding: "1rem",

      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    darkMode: "class",
  },
  plugins: [],
};
