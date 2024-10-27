const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayLight: "#EBEBEB",
        yellowDark: "#ffb600",
        grayDark: "#23282D",
      },
      screens: {
        mobileS: "320px",
        mobileL: "425px",
        tablet: "768px",
        laptop: "992px",
        laptopM: "1200",
        laptopL: "1440",
      },
    },
  },
  plugins: [
    
  ],
});
