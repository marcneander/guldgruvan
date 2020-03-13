const path = require('path');
require('dotenv').config();

module.exports = {
    siteMetadata: {},
    plugins: [
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                includePaths: [`${__dirname}/src`]
            }
        },
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
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: ['Rubik:400,500,700']
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
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-160610662-1',
                head: false,
                anonymize: true,
                respectDNT: true
            }
        },
        'gatsby-plugin-offline'
    ]
};
