/** @type {import('tailwindcss').Config} */

import { black, green, red, transparent, white } from 'tailwindcss/colors'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white,
      black,
      red,
      green,
      transparent,
      bgHeader: '#EBEBEB',
      basic: '#1A1A1A',
      buttonGroup: '#AFAFAF4D',
      buttonHover: '#AFEFCE',
      ourServicesBtn: '#C3C3C3',
      cursor: '#1A1A1ACC',
      cursorHover: '#1A1A1A99',
    },
    extend: {
      screens: {
        lg: '1134px',
        '1024': '1025px',
        '2xl': '1923px',
      },

      fontFamily: {
        sans: 'Be Vietnam Pro',
      },

      keyframes: {
        descent: {
          '0%': { opacity: '0', transform: 'translate(0, -50%)' },
          '100%': { opacity: '1', transform: 'translate(0%)' },
        },
        lifting: {
          '0%': { opacity: '0', transform: 'translate(0, 50%)' },
          '100%': { opacity: '1', transform: 'translate(0%)' },
        },
        emergence: {
          '0%': { opacity: '0', scale: '0.7' },
          '100%': { opacity: '1', scale: '1' },
        },
      },

      animation: {
        descent: 'descent 300ms ease-in-out',
        lifting: 'lifting 500ms ease-in-out',
        emergence: 'emergence 200ms ease',
      },
    },
  },
}
