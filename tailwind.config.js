/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
      extend: {
        colors: {
          purple: {
            700: "--color-purple-700",
            800: "--color-purple-800",
          },
        },
      },
    },
    plugins: [],
  };
  