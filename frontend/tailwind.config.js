/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#dbeafe',
          500: '#3b82f6',
        },
        red: {
          500: '#ef4444',
        },
      },
    },
  },
  plugins: [],
}
