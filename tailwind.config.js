/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        Red: "#C80024",
        black: "#212529",
        grey: "#496057",
        blueDark: "#0f2256",
      },
    },
  },
  plugins: [],
};
