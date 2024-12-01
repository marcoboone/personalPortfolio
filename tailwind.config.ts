import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'atomwhite': '#f2f4f5', // Whiteish 
        'atomgreya': '#abb2bf', // Grey
        'atomgreyb': '#636d83', // Grey
        'atomblack': '#282c34', // blackish
        'atomred': '#e06c75', // red  
        'atomyellow': '#e5c07b', // yellow
        'atomgreen': '#98c379', // green
        'atomteal': '#56b6c2', // purple
        'atomblue': '#61afef', // blue
        'atompurple': '#c678dd', // purple
        'atompink': '#e06c75', // pink
        'atomorange': '#d19a66', // orange
        'atomcyan': '#56b6c2', // cyan
        'atomviolet': '#c678dd', // violet
        'atomindigo': '#61afef', // indigo
        'atomlime': '#98c379', // lime
        'atomamber': '#e5c07b' // amber
       },
       animation: {
        'spin-slow': 'spin 3s linear infinite', // Customize the duration here
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
export default config
