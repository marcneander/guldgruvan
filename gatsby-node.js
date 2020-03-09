const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const pageTemplate = path.resolve(`./src/templates/page.js`);

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
        throw new Error('Could not grab all pages from graphql server');
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
};
