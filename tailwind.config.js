const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['*.html', '_site/*.html','_site/**/*.html', '_pages/**/*.md', '_posts/**/*.md', '_layouts/**/*.html', '_includes/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#ffbb09', 
          blue: '#0c2f39',
        },
        secondary: {
          yellow: '#ffc93c', 
          blue: '#155263',
        },
        tertiary: '#ffd76f',
        tertiaryfade: '#ffd76f30',

        danger: colors.red,
        gray: '#155263'
      },
      fontFamily: {
        sans: ['Solid', 'Work Sans','Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
