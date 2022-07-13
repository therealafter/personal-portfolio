const hue = "207";
const sat = "90%";
const lig = "61%";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "321px",
      },
    },
    colors: {
      "first-color": `hsla(${hue}, ${sat}, ${lig}, 1)`,
      "first-color-satured": `hsla(${hue}, ${sat}, ${lig}, .2)`,
      "first-color-alt": `hsl(${hue}, ${sat}, 57%)`,
      "title-color": `hsl(${hue}, 12%, 15%)`,
      "text-color": `hsl(${hue}, 12%, 45%)`,
      "text-color-light": `hsl(${hue}, 8%, 75%)`,
      "text-color-lighten": `hsl(${hue}, 8%, 92%)`,
      "body-color": `hsl(${hue}, 100%, 99%)`,
      "container-color": "#fff",
      "dark-title-color": `hsl(${hue}, 12%, 95%)`,
      "dark-text-color": `hsl(${hue}, 12%, 75%)`,
      "dark-body-color": `hsl(${hue}, 40%, 8%)`,
      "dark-container-color": `hsl(${hue}, 24%, 12%)`,
      white: "#fff",
      black: "#000",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [],
};
