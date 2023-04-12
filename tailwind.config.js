/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        mobile: '500px',
      },
      backgroundImage: {
        'home-pattern': "url('/assets/herobg.png')",
      },
      cursor: {
        'cards-stack':
          "url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, auto",
      },
      shadow: {
        'cards-stack':
          '0 12.5px 40px -10px rgba(58, 50, 73, 0.511), 0 10px 10px -10px rgba(50, 50, 73, 0.3);',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
