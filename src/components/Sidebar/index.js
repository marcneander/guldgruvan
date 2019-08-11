import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link } from 'gatsby';

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

    return (
        <Col md={4}>
            <div className="sidebar text-light">
                {menuItems.length > 0 && (
                    <div className="sidebar-box submenu p-3">
                        <h5>Meny</h5>
                        <ul className="list-unstyled mb-0">
                            {menuItems.map(menuItem => (
                                <li key={menuItem.id}>
                                    <Link to={menuItem.url.url} activeClassName="active" className="sidebar-menu-item">
                                        - {menuItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {data.blogPosts.length > 0 && (
                    <div className="sidebar-box latest-posts p-3">
                        <h5>Senaste blogginläggen</h5>
                        <ul className="list-unstyled mb-0">
                            {data.blogPosts.map(post => (
                                <li key={post.node.id}>
                                    <Link
                                        to={`/blogg/${post.node.slug}`}
                                        activeClassName="active"
                                        className="sidebar-menu-item"
                                    >
                                        - {post.node.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="sidebar-box submenu p-3">
                    <h5>Välkommen att ansöka</h5>
                    <p>
                        Ska din guldklimp börja på förskola i höst eller kanske nästa år? Eller känns det inte riktigt
                        bra med den förskola ni har idag?
                    </p>
                    <Link to="/kontakt" className="btn btn-block btn-light">
                        Kontakta oss
                    </Link>
                </div>
            </div>
        </Col>
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
        blogPosts: PropTypes.arrayOf(
            PropTypes.shape({
                node: PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    slug: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired
                }).isRequired
            })
        ),
        menuData: PropTypes.shape({
            menuitem: menuitemPropTypes,
            contentfulparent: PropTypes.shape({
                menuitem: menuitemPropTypes
            })
        }).isRequired
    }).isRequired
};

export default Sidebar;
