import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NavLink from '../NavLink';
import styles from './OffcanvasNav.module.scss';
import { useOffcanvas } from '../OffcanvasProvider';
import { transformContentfulData } from '../../utils';

const OffcanvasNav = () => {
    const { hideOffcanvas } = useOffcanvas();

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
                <div className={styles.navWrap} key={`offcanvas-${item.id}`}>
                    <NavLink to={item.to} title={item.title} onClick={hideOffcanvas} className={styles.navLink}>
                        {item.title}
                    </NavLink>
                    {item.subItems &&
                        item.subItems.map(subItem => (
                            <NavLink
                                to={subItem.to}
                                key={`offcanvas-${subItem.id}`}
                                title={subItem.title}
                                onClick={hideOffcanvas}
                                className="skip-active-border"
                            >
                                {subItem.title}
                            </NavLink>
                        ))}
                </div>
            ))}
        </div>
    );
};

export default OffcanvasNav;
