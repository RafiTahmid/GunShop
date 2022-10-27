/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4ece90",

          secondary: "#220f8e",

          accent: "#33abc6",

          neutral: "#3A293D",

          "base-100": "#2F2C3F",

          info: "#1337EC",

          success: "#135D49",

          warning: "#9A7D09",

          error: "#EE3F4A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
