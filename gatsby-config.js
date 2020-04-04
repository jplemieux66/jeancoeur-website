require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "JeanCoeur",
    description:
      "JeanCoeur is a montreal-based music producer specializing in Hip-Hop, Pop and Rnb instrumentals",
    url: "https://jeancoeur.com",
    image: "/images/forest_1.jpg",
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
  ],
}
