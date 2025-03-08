const { Container } = require('lucide-react');

/** @type {import('tailwindcss').Config} */
module.export = {
  darkMode: ["class"],
  content: [
    './pages/**/*{js,jsx}',
    '/components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,ts,jsx}'
    ],
  prefix: "",
  theme: {
    Container: {
      center: true,
      padding: "15px",
    screens: {
       
      },
    },
    extend: {
      keyframes: {
        "accordian-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height" },
        }
      }
    }
  },
  plugins: [],
};
