import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import Button from '../Button';

import styles from './Sidebar.module.scss';

const Sidebar = ({ data }) => {
    const menuItems = useMemo(() => {
        if (data.menuData.menuitem) {
            return data.menuData.menuitem;
        }

        if (data.menuData.contentfulparent) {
            return data.menuData.contentfulparent.menuitem;
        }

        return [];
    }, [data.menuData.contentfulparent, data.menuData.menuitem]);

    const menuClassname = classnames(styles.sidebarWidget, styles.subMenu);

    return (
        <div className={styles.sidebar}>
            {menuItems.length > 0 && (
                <div className={menuClassname}>
                    <h5>{data.title}</h5>
                    <ul>
                        {menuItems.map(menuItem => (
                            <li key={menuItem.id}>
                                <Link
                                    to={menuItem.url.url}
                                    activeClassName={styles.subMenuItemActive}
                                    className={styles.subMenuItem}
                                >
                                    {menuItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className={styles.sidebarWidget}>
                <h5>Välkomna på besök</h5>
                <p>
                    Vid frågor och funderingar välkomna att kontakta oss på Guldgruvan.
                </p>
                <Button as={Link} to="/kontakt">
                    Kontakta oss
                </Button>
            </div>
        </div>
    );
};

const menuitemPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.shape({
            url: PropTypes.string.isRequired
        }),
        id: PropTypes.string.isRequired
    })
);

Sidebar.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        menuData: PropTypes.shape({
            menuitem: menuitemPropTypes,
            contentfulparent: PropTypes.shape({
                menuitem: menuitemPropTypes
            })
        }).isRequired
    }).isRequired
};

export default Sidebar;
