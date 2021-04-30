require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    url: "https://foyerfoyer.com",
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-QE15MLNM60"],
      },
    },
  ],
}
