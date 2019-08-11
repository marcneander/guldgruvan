const path = require('path');
require('dotenv').config();

module.exports = {
    siteMetadata: {
        itemsPerPage: 20
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, 'src', 'images')
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-prefetch-google-fonts',
            options: {
                fonts: [
                    {
                        family: 'Rubik',
                        variants: ['400', '500', '700']
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                includePaths: [path.resolve(__dirname, 'node_modules')]
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
        'gatsby-plugin-offline'
    ]
};
