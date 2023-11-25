
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        'sm': '4px',
        'md':'8px' ,
        'full' : '100%'
      }

    },
   // color 

   colors: {
    'blue': '#1fb6ff',
    'purple': '#9400FF',
    'pink': '#FF3FA4',
    'orange': '#FFB000',
    'green': '#016A70',
    'green-light':'#9AD0C2' ,
    'yellow': '#F8FF95',
    'gray-dark': '#352F44',
    'gray': '#5C5470',
    'gray-light' :'#d3dce6',
    'white'  : '#fff',
  },
  // font family 
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
    script :['Dancing Script', 'cursive'],
    josefin :['Josefin Sans', 'sans-serif'] ,
    roboto : ['Roboto', 'sans-serif'] ,
  },
  // 





  },
  plugins: [],
}
/**
 font-family: 'Dancing Script', cursive;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Roboto', sans-serif;
 * 
 * 
 */