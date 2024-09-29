/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f0f2f5", // Light background color
        secondary: "#6C63FF", // Vibrant purple for accents/buttons
        tertiary: "#222222", // Dark color for text or background
        slate: {
          10: "#f1f3f4", // Soft grayish-white for subtle backgrounds
        },
        green: {
          50: "#30AF5B", // Bright green for success states or buttons
          90: "#292C27", // Dark green for backgrounds or deeper accents
        },
        gray: {
          10: "#EEEEEE", // Light gray for borders and backgrounds
          20: "#A2A2A2", // Medium gray for secondary text or icons
          30: "#7B7B7B", // Darker gray for emphasis or tertiary text
          50: "#585858", // Gray for text or border accents
          90: "#141414", // Very dark gray, nearly black for deep backgrounds
        },
      },
      screens: {
        xs: "360px", // For small mobile screens
        "3xl": "1680px", // Larger screens or desktop monitors
        "4xl": "2200px", // Extra-large screens for high-resolution displays
      },
      maxWidth: {
        "10xl": "1700px", // Large container width for wide designs
      },
      borderRadius: {
        "5xl": "40px", // Rounded corners for large UI elements like cards
      },
    },
  },
  plugins: [],
};
