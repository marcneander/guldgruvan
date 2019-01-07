require('dotenv').config();

module.exports = {
    siteMetadata: {
        itemsPerPage: 50
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-styled-components',
            options: {
                displayName: false
            }
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve('./src/components/Layout')
            }
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: '5v2uz5sd19wl',
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-offline'
    ]
};
