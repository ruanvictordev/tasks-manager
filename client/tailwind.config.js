/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primaryColor: '#3AB0FF',
          secondaryColor: '#1E90FF',
          tertiayColor: '#1C6DD0',
          whiteColor: '#FCFCFC'
        }
      }
    }
  },
  plugins: [],
}

