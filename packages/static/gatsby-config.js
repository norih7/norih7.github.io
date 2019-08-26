module.exports = {
    siteMetadata: {
        title: "coconotsu",
        description: "WebEnginner Portfolio & Note"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-typescript",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui"
            }
        },
        "gatsby-plugin-offline",
        "gatsby-plugin-flow",
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/pages/`
            }
        }
    ]
};
