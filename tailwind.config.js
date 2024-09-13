/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#D90000',
      secundary: '#0D1214',
      terciary: '#EDF6F9',
      zinc: {
        "50": '#fafafa',
        "100": '#f4f4f5',
        "200": '#e4e4e7',
        "300": '#d4d4d8',
        "400": '#a1a1aa',
        "500": '#71717a',
        "600": '#52525b',
        "700": '#3f3f46',
        "800": '#27272a',
        "900": '#18181b',
        "950": "#09090b"
      }
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {}
    }
  },
  plugins: [require("tailwindcss-animate")],
}

