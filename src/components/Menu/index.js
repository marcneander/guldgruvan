import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Menu from './Menu';

const transformContentfulData = menuItems => {
    const menuItemsObj = menuItems.reduce((acc, val) => {
        acc[val.node.id] = val.node;

        return acc;
    }, {});

    const getMenuItemDataById = id => {
        const item = menuItemsObj[id];

        const data = {
            to: item.url.url,
            title: item.title,
            id
        };

        if (item.menuitem !== null) {
            data.subItems = [];

            item.menuitem.forEach(i => {
                data.subItems.push(getMenuItemDataById(i.id));
            });
        }

        return data;
    };

    return Object.keys(menuItemsObj).reduce((acc, id) => {
        const item = menuItemsObj[id];
        if (item.contentfulparent !== null) {
            return acc;
        }

        const menuItem = getMenuItemDataById(id);

        acc.push(menuItem);

        return acc;
    }, []);
};

export default props => (
    <StaticQuery
        query={graphql`
            query {
                allContentfulMenuItem(
                    sort: { fields: sort }
                    filter: { menu: { elemMatch: { position: { eq: "header" } } } }
                ) {
                    edges {
                        node {
                            id
                            url {
                                url
                            }
                            title
                            menuitem {
                                id
                            }
                            contentfulparent {
                                id
                            }
                        }
                    }
                }
            }
        `}
        render={data => <Menu menuItems={transformContentfulData(data.allContentfulMenuItem.edges)} {...props} />}
    />
);
