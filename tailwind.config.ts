import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#18150e',
        'background': '#faf8f3',
        'primary': '#c5a449',
        'secondary': '#e6ce8b',
        'accent': '#ebc55b',
       },
    },
  },
  plugins: [],
}
export default config
