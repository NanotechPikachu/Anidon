/** {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // Enables dark mode based on media settings
  theme: {
    extend: {
      keyframes: {
        gloss: {
          'to': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        gloss: 'gloss 3s linear infinite',
      },
    },
  },
  plugins: [],
};

