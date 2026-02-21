/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 深色主题配色
        background: '#0a0a0a',
        foreground: '#ffffff',
      },
    },
  },
  plugins: [],
}
