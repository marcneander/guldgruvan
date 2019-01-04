const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const pageTemplate = path.resolve(`./src/templates/page.js`);
    const blogIndexTemplate = path.resolve(`./src/templates/blog/index.js`);
    const blogArticleTemplate = path.resolve(`./src/templates/blog/article.js`);

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

    const blog = new Promise(async (resolve, reject) => {
        const result = await graphql(
            `
                {
                    allContentfulBlogPost {
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

        const blogPosts = result.data.allContentfulBlogPost.edges;
        const { itemsPerPage } = result.data.site.siteMetadata;

        /* Blog indexpage */
        createPage({
            path: '/blogg',
            component: blogIndexTemplate,
            context: {
                skip: 0,
                limit: itemsPerPage
            }
        });

        if (blogPosts.length > itemsPerPage) {
            for (
                let i = 1;
                i < Math.floor(blogPosts.length / itemsPerPage) + (blogPosts.length % itemsPerPage);
                i += 1
            ) {
                createPage({
                    path: `/blogg/sida/${i + 1}`,
                    component: blogIndexTemplate,
                    context: {
                        skip: i * itemsPerPage,
                        limit: itemsPerPage
                    }
                });
            }
        }

        /* Blog article page */
        blogPosts.forEach(page => {
            createPage({
                path: `/blogg/${page.node.slug}`,
                component: blogArticleTemplate,
                context: {
                    id: page.node.id
                }
            });
        });

        resolve();
    });

    return Promise.all([pages, blog]);
};
