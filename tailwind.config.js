const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  prefix: "",
  mode: "jit",
  content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
  purge: {
    content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
