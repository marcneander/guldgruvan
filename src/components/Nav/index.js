import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NavLink from '../NavLink';
import styles from './Nav.module.scss';
import { transformContentfulData } from '../../utils';

const Nav = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulMenuItem(
                sort: { fields: sort }
                filter: { url: { url: { nin: "/" } }, menu: { elemMatch: { menuId: { eq: "main-menu" } } } }
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
    `);

    const menuItems = transformContentfulData(data.allContentfulMenuItem.edges);

    return (
        <div className={styles.wrap}>
            {menuItems.map(item => (
                <NavLink key={`topnav-${item.id}`} to={item.to} title={item.title}>
                    {item.title}
                </NavLink>
            ))}
        </div>
    );
};

export default Nav;
