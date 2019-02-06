require('dotenv').config();
const contentfulRenderOptions = require('./src/utils/contentfulRenderOptions');

module.exports = {
    siteMetadata: {
        itemsPerPage: 50
    },
    plugins: [
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-styled-components',
            options: {
                displayName: false
            }
        },
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve('./src/components/Layout')
            }
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: '3p3df9x67gfp',
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        {
            resolve: '@contentful/gatsby-transformer-contentful-richtext',
            options: contentfulRenderOptions
        },
        'gatsby-plugin-offline'
    ]
};
