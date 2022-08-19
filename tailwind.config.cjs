module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      sm2: "1196px",
      md: "960px",
      md2: "1485px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      height: {
        22: "5.3rem",
      },
      colors: {
        hueso: "#FAFAF2",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
