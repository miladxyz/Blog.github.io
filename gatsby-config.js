module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Home`,
    author: `Milad Bahramzadeh`,
    description: `I decided to share everything I know.`,
    siteUrl: `https://milad.xyz`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/miladxyz`,
      },
      {
        name: `github`,
        url: `https://github.com/miladxyz`,
      },
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/miladbahramzadeh/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
