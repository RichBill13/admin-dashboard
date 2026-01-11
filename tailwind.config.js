/** @type {import('tailwindcss').Config}  */ 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //voici les couleurs de notre dashboard
        admin: {
          sidebar: "#1e3a8a", //bleu fonce
          bg: "#f3f4f6", //gris claire pour le fond
          primary: "#3b82f6", //bleu pour les boutons et liens
          accent: "#60a5fa"
        }
      }
    },
  },
  plugins: [],
}

