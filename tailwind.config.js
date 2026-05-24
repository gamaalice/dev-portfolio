module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"], 
      },
      backgroundImage: {
        'gradient-ambient': 'radial-gradient(circle at 30% 20%, #E7DBEF 0%, transparent 50%)',
        'gradient-dynamic': 'radial-gradient(circle at 50% 90%, #6E348210 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
