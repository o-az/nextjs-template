/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-sf)', 'system-ui', 'sans-serif'],
        default: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss/plugin')(({ addVariant }) => {
      addVariant('radix-side-top', '&[data-side="top"]')
      addVariant('radix-side-bottom', '&[data-side="bottom"]')
    }),
  ],
}
