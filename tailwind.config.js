/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: "#39ff14",
        electricBlue: "#00ffff",
        magenta: "#ff00ff",
        cyberPurple: "#8000ff"
      },
      fontFamily: {
        mono: ["'Fira Code'", "monospace"]
      }
    }
  },
  plugins: []
};
