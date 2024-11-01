/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1134px",
        1024: "1025px",
        "2xl": "1923px",
      },

      keyframes: {
        descent: {
          "0%": { opacity: "0", transform: "translate(0, -50%)" },
          "100%": { opacity: "1", transform: "translate(0%)" },
        },
        lifting: {
          "0%": { opacity: "0", transform: "translate(0, 50%)" },
          "100%": { opacity: "1", transform: "translate(0%)" },
        },
        emergence: {
          "0%": { opacity: "0", scale: "0.7" },
          "100%": { opacity: "1", scale: "1" },
        },
      },

      animation: {
        descent: "descent 300ms ease-in-out",
        lifting: "lifting 500ms ease-in-out",
        emergence: "emergence 200ms ease",
      },
    },
  },
};
