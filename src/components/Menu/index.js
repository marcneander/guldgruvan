import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const List = styled.ul`
    margin: 0;
    padding: 0 0 0 16px;
`;

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

        if (item.menu_item !== null) {
            data.subItems = [];

            item.menu_item.forEach(i => {
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

const MenuItem = React.memo(props => (
    <li>
        <Link to={props.to}>{props.title}</Link>
        {props.subItems && <Menu menuItems={props.subItems} />}
    </li>
));

const Menu = React.memo(props => (
    <List>
        {props.menuItems.map(menuItem => (
            <MenuItem {...menuItem} key={menuItem.id} />
        ))}
    </List>
));

export default props => (
    <StaticQuery
        query={graphql`
            query {
                allContentfulMenuItem(
                    sort: { fields: sortingWeight }
                    filter: { menu: { elemMatch: { position: { eq: "header" } } } }
                ) {
                    edges {
                        node {
                            id
                            url {
                                url
                            }
                            title
                            menu_item {
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
