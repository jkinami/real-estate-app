/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/src/assets/background.png')",
        'logo': "url('/src/assets/logo.png')"
       }
    },
  },
  plugins: [],
}
