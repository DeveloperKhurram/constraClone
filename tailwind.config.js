/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayLight: "#EBEBEB",
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
  plugins: [],
};
