module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
