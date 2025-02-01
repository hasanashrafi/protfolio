module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#3498db',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}