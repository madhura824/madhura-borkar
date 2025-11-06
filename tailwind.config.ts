/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
const config: Config = {
  important: true,

  content: [
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js,ts,tsx}'

    
  ],
  theme: {
  	screens: {
  		sm: '375px',
  		md: '768px',
  		lg: '1200px'
  	},
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1rem',
  			md: '2rem'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: 'var(--font-sans)',
  			serif: 'var(--font-serif)'
  		},
  		keyframes: {
  			'space-effect1': {
  				'0%': {
  					transform: 'translate3d(0, 0, 0)'
  				},
  				'25%': {
  					transform: 'translate3d(0, -15px, 0)'
  				},
  				'50%': {
  					transform: 'translate3d(0, 0, 0)'
  				},
  				'75%': {
  					opacity: '1',
  					transform: 'translate3d(0, 15px, 0)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate3d(0, 0, 0)'
  				}
  			},
  			'space-effect2': {
  				'0%': {
  					transform: 'translate3d(0, 0, 0)'
  				},
  				'25%': {
  					transform: 'translate3d(0, 40px, 0)'
  				},
  				'50%': {
  					transform: 'translate3d(0, 0, 0)'
  				},
  				'75%': {
  					opacity: '1',
  					transform: 'translate3d(0, -40px, 0)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate3d(0, 0, 0)'
  				}
  			},
  			'space-effect3': {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			'pop-out': {
  				'0%': {
  					transform: 'translate3d(0, 250px, 0)'
  				},
  				'100%': {
  					transform: 'translate3d(0, 0, 0)'
  				}
  			},
  			'line-border-rotate': {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			}
  		},
  		animation: {
  			'space-effect1': 'space-effect1 5s linear infinite',
  			'space-effect2': 'space-effect2 8s linear infinite',
  			'space-effect3': 'space-effect3 8s linear infinite',
  			'pop-out': 'pop-out 2s ease 1 both',
  			'line-border-rotate': 'line-border-rotate 50s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  darkMode: ["class", "class"],
  plugins: [nextui(), require("tailwindcss-animate")]
 
};

export default config;
