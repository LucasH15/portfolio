module.exports = {
    siteMetadata: {
        title: `Lucas Hubert`,
        description: ``,
        author: `Lucas Hubert`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Lucas Hubert`,
                short_name: `lh`,
                lang: `fr`,
                start_url: `/`,
                background_color: `#356ADB`,
                theme_color: `#356ADB`,
                display: `standalone`,
                icon: `src/images/icon.png`
            }
        },
        {
            resolve: `gatsby-plugin-react-intl`,
            options: {
                path: `${__dirname}/src/intl`,
                languages: [`fr`],
                defaultLanguage: `fr`,
                redirect: true,
                redirectDefaultLanguageToRoot: false
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Patua One`, `Source Sans Pro`],
                display: 'swap'
            }
        }
    ]
}
