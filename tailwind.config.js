// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px', 
        'xs': '370px',
      },
    },
  },
  plugins: [],
}

