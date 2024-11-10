import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        navy: "#000080", // Navy color for header, footer, and buttons
        aqua: "#00FFFF", // Aqua color for form background
        yellow: "#FFFF00", // Yellow color for focused input fields
        black: "#000", // General black background
        white: "#FFF", // White text color
        "gradient-start": "#09f1b8", // Start of gradient for text
        "gradient-middle": "#00a2ff", // Middle of gradient
        "gradient-end": "#ff00d2", // End of gradient
        "background-dark": "#000119", // Dark background color
      },
      fontSize: {
        'h1': '2rem', // Main title font size
        'marquee': '1.5rem', // Marquee text font size
        'title': '2rem', // About Me title size
        'text': '1.5rem', // About Me main text size
        'text1': '1rem', // About Me secondary text size
      },
      animation: {
        marquee: 'marquee 10s linear infinite', // Marquee animation duration
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.35) 0px 5px 15px", // Shadow for cards
      },
      borderRadius: {
        'lg': '15px', // Rounded corners for cards
        'sm': '4px', // Rounded corners for form elements
      },
    },
  },
  plugins: [],
};

export default config;
