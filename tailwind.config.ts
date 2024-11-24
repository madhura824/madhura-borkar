import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      colors: {
        "cloud-gray": "#708090",
      },
      keyframes: {
        "space-effect1": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "25%": {
            transform: "translate3d(0, -15px, 0)",
          },
          "50%": {
            transform: "translate3d(0, 0, 0)",
          },
          "75%": {
            opacity: "1",
            transform: "translate3d(0, 15px, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "space-effect2": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "25%": {
            transform: "translate3d(0, 40px, 0)",
          },
          "50%": {
            transform: "translate3d(0, 0, 0)",
          },
          "75%": {
            opacity: "1",
            transform: "translate3d(0, -40px, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "space-effect3": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },

        "pop-out":{
          "0%" : {
              transform: "translate3d(0, 250px, 0)"
          }
          ,
          "100%":{
                  transform: "translate3d(0, 0, 0)"
          }
        },
       "line-border-rotate":{
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
       }
      },
      animation: {
        "space-effect1": "space-effect1 5s linear infinite",
        "space-effect2": "space-effect2 8s linear infinite",
        "space-effect3": "space-effect3 8s linear infinite",
        'pop-out': 'pop-out 2s ease 1 both',  // 1 play, in reverse (backward)
        "line-border-rotate": "line-border-rotate 50s linear infinite"

      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
 
};

export default config;
