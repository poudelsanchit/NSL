/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      's': '320px', //small mobile
      'm': '375px', //small mobile
      'l': '425px', //large mobile
      'sm': '640px', //small Tablet
      'md': '768px	', // tablet
      '2md': '894px',
      'lg': '1024px', //laptop
      'xl': '1280px	', //large laptop
      '2xl': '1536px	', //large screens
    },
    
    extend: {
    
      colors:
      {
        'primary': '#0e121b',
        'text-primary':'#ffffff',
        'switch-bg':'#171c26',
        'green':'#008000',
        'dark' :'#101010',
        'light':'#ffffff',
        'secondary':'#777777',
        'border':'#323333',
       'placeholder': '#777777' ,
       'lines':'#323333',
       'pulse':'#201f1f'
        
  
      },
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Roboto: ['Roboto Mono', 'monospace'],
      Chakra: ['Chakra Petch', 'sans-serif'],
    },
  },
  plugins: [],
}

