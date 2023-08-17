/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      raleway: ['var(--font-raleway)'],
      open_sans: ['var(--font-open-sans)'],
    },
    extend: {
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: ' hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
      },

      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('/logo-dark-mode.svg')",
        'logo-light-mode': "url('/logo-light-mode.svg')",
        'curvy-light-mode': "url('/bg-curvy-light-mode.svg')",
        'curvy-dark-mode': "url('/bg-curvy-dark-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}
