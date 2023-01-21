/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        cyan: {
          300: 'hsl(179, 47%, 52%)',
          500: 'hsl(179, 62%, 43%)',
        },
        yellow: {
          300: 'hsl(71, 73%, 54%)',
        },
        gray: {
          300: 'hsl(204, 43%, 93%)',
          500: 'hsl(218, 22%, 67%)',
        },
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
      },
      fontSize: {
        sm: '0.875rem',
        base: 'var(--fs-400)',
        xl: 'var(--fs-500)',
        '2xl': 'var(--fs-600)',
      },
      boxShadow: {
        DEFAULT: '0 0 1rem rgb(0 0 0 / 25%);',
      },
    },
  },
  plugins: [],
}
