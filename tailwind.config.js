module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'krona': ['"Raleway"', 'sans-serif'],
      },
      colors: {
          headings:'#277603',
          'custom-gray': 'rgb(107, 114, 128)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
  ,
}
