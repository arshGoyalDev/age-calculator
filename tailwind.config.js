/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: {
          purple: "hsl(259, 100%, 65%)",
          lightRed: "hsl(0, 100%, 67%)",
        },
        neutral: {
          offWhite: "hsl(0, 0%, 94%)",
          lightGrey: "hsl(0, 0%, 86%)",
          smokeyGray: "hsl(0, 1%, 44%)",
          offBlack: "hsl(0, 0%, 8%)",
        },
      },
      borderRadius: {
        "4xl": "6.5rem",
        "5xl": "12rem",
      },
      fontSize: {
        "4xl": "3.5rem",
        "5xl": "5rem",
      },
      letterSpacing: {
        "xl": "0.8rem"
      }
    },
  },
  plugins: [],
};
