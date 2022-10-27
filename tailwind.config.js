/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e66bff",

          secondary: "#ecf9a7",

          accent: "#359e01",

          neutral: "#2C313A",

          "base-100": "#EAF0F6",

          info: "#8FC4EF",

          success: "#36CE94",

          warning: "#F8D86D",

          error: "#F07A6A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
