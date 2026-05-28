/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EEF5',
          100: '#CCDCEB',
          200: '#99BAD7',
          300: '#6697C3',
          400: '#3375AF',
          500: '#003366', // Primary Royal Blue
          600: '#002E5C',
          700: '#002852',
          800: '#002347',
          900: '#001F3D',
        },
        accent: {
          50: '#FCE9E9',
          100: '#F9D3D3',
          200: '#F3A7A7',
          300: '#ED7B7B',
          400: '#E75555',
          500: '#D32F2F', // Accent Bright Red
          600: '#BE2A2A',
          700: '#A82525',
          800: '#932020',
          900: '#7E1B1B',
        },
        highlight: {
          50: '#FEF8E3',
          100: '#FEF1C7',
          200: '#FDE38F',
          300: '#FCD557',
          400: '#FBC82F',
          500: '#FBC02D', // Highlight Gold
          600: '#E2AD28',
          700: '#C99A24',
          800: '#B0871F',
          900: '#97741B',
        },
        silver: {
          50: '#F5F7F8',
          100: '#EBEEF0',
          200: '#D7DDE1',
          300: '#C3CCD2',
          400: '#B0BEC5', // Silver/Gray
          500: '#9CABB4',
          600: '#8899A5',
          700: '#748795',
          800: '#637582',
          900: '#51616C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};