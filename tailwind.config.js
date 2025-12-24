export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-very-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}
