/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footimg': "url('../src/assets/images/footer-img.png')",
      },
    },
  },
  plugins: [],
}