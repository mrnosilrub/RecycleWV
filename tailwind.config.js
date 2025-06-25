module.exports = {
  content: ['./index.html', './employment.html'],
   safelist: [
    'scroll-mt-16',   // 4-rem scroll margin that matches your nav height
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ffffff',
          100: '#4CAF50',
          500: '#2C663D',
          600: '#235732',
          700: '#1C4728'
        }
      }
    }
  },
}
