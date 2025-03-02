/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'heroImg': "url('/src/images/heroSec_cover.png')",
      },
    },
  },
  plugins: [],
}