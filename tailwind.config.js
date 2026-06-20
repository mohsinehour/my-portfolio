/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0088FF',
        primary: '#1D2939',
        secondary: '#667085',
        background: '#F9FAFB',
      },
      backgroundImage: {
        'gradient-brand': "linear-gradient(135deg, #0088FF 0%, #1D2939 100%)",
      },
      fontFamily: {
        sans: [
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
