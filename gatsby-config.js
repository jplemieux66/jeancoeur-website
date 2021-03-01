require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Ma Zone - Baggies et JeanCoeur",
    description: "Le Foyer présente Ma Zone - Baggies et JeanCoeur",
    url: "https://foyerfoyer.com",
    image: "/images/mazone_cover.jpg",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-background-image",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "jeancoeur",
        protocol: "https",
        hostname: "www.jeancoeur.com",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "214369033720037",
      },
    },
  ],
}
