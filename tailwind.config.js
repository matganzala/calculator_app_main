module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
      },
      fontFamily: {
        leaguespartan: ['League Spartan', 'sans-serif'],

      },
      animation: {
        fadeIn: "fadeIn 0.5s ease", // 0.5s é a duração da animação, você pode ajustá-la
        spin: "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
