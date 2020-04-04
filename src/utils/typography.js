import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Montserrat", "sans-serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["300", "400", "500", "600", "700"],
    },
    {
      name: "Poppins",
      styles: ["300", "400", "500", "600", "700"],
    },
    {
      name: "Orbitron",
      styles: ["300", "400", "500", "600", "700"],
    },
  ],
})

typography.injectStyles()

export default typography
