const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const pageTemplate = path.resolve(`./src/templates/page.js`);
    const postListTemplate = path.resolve(`./src/templates/blog/list.js`);
    const postDetailTemplate = path.resolve(`./src/templates/blog/detail.js`);

    const pages = new Promise(async (resolve, reject) => {
        const result = await graphql(
            `
                {
                    allContentfulPage {
                        edges {
                            node {
                                id
                                url {
                                    url
                                }
                            }
                        }
                    }
                }
            `
        );

        if (result.errors) {
            reject(result.errors);
        }

        result.data.allContentfulPage.edges.forEach(page => {
            createPage({
                path: page.node.url.url,
                component: pageTemplate,
                context: {
                    id: page.node.id
                }
            });
        });

        resolve();
    });

    const posts = new Promise(async (resolve, reject) => {
        const result = await graphql(
            `
                {
                    allContentfulPost {
                        edges {
                            node {
                                slug
                                id
                            }
                        }
                    }

                    site {
                        siteMetadata {
                            itemsPerPage
                        }
                    }
                }
            `
        );

        if (result.errors) {
            reject(result.errors);
        }

        const postsResulsts = result.data.allContentfulPost.edges;
        const { itemsPerPage } = result.data.site.siteMetadata;

        /* post listpage */
        createPage({
            path: '/blogg',
            component: postListTemplate,
            context: {
                skip: 0,
                limit: itemsPerPage
            }
        });

        if (postsResulsts.length > itemsPerPage) {
            for (let i = 0; i < Math.ceil(postsResulsts.length / itemsPerPage); i += 1) {
                createPage({
                    path: `/blogg/sida/${i + 1}`,
                    component: postListTemplate,
                    context: {
                        skip: i * itemsPerPage,
                        limit: itemsPerPage
                    }
                });
            }
        }

        /* post detail page */
        postsResulsts.forEach(page => {
            createPage({
                path: `/blogg/${page.node.slug}`,
                component: postDetailTemplate,
                context: {
                    id: page.node.id
                }
            });
        });

        resolve();
    });

    return Promise.all([pages, posts]);
};
