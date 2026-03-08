/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        background: "#0b3d2e", // fundo principal do site (verde mesa de truco)

        card: "#14532d", // cards / containers / áreas da interface

        title: "#f8fafc", // títulos principais (alto contraste)

        text: "#d1fae5", // texto normal / descrições

        accent: "#e63946", // destaque / botões / ações importantes (vermelho das cartas)

        accentSecondary: "#f4a261", // destaque secundário / hover / detalhes

        border: "#1f7a63", // bordas / divisores / linhas

      },

      fontFamily: {
        title: ["Poppins", "sans-serif"], // títulos e elementos importantes
        text: ["Roboto", "sans-serif"], // texto padrão da interface
      }

    },
  },
  plugins: [],
}